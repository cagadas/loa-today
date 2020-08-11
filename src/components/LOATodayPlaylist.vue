<template>
  <div>
    <div style="margin: 0 auto; width: 150px;">
      <q-btn
        class="glossy full-width"
        rounded
        color="secondary"
        label="Update List"
        @click="updateList"
      />
    </div>
    <div v-for="item in feed" :key="item.element">
      <div
        v-if="item.element === 0" 
        class="full-width" 
        style="height: 12px;">
      </div>
      <h6
        @click="startPlay(item.element)"
        class="pointer"
        >{{  item.title }}</h6>
      <p><span style="color: aqua;">{{ item.date }} &ndash; </span> <span v-html="item.description" v-linkified /> &nbsp; <span style="color: green;">Show #{{ item.episodeNumber }}</span></p>
      <player
        :mp3="item.mp3"
        ref="pauseMe"
        @timeupdate="secondsOnPlayer($event, item.element)"
        @playing="playing(item, item.element)"
        @paused="paused(item, item.element)"
      ></player>
      <net-status ref="netStatus" :listener="listener" :episode="episode" />
      <hr>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import { crono } from 'vue-crono'
import convert from 'xml-js'
import linkify from 'vue-linkify'
Vue.directive('linkified', linkify)
export default {
  props: {
      playlist : String
    },

  mixins: [crono],

  data() {
    return {
      feed: undefined,
      callKey: 0,
      showDescription: '',
      showImage: '',
      oldElement: -1,
      newElement: 0,
      elapsedTime: 0,
      state: '',
      listener: {
        listener_id: 0,
        listener_name: 'Listener',
        date_last_logon: ''
      },
      episode: [
        {}
      ],
      value: 0,
      playerIsPlaying: 0,
      newXml: ''
    }
  },

  components: {
    'player' : require('components/Player.vue').default,
    'net-status' : require('components/NetStatus.vue').default
  },

  computed: {
    ...mapGetters('modulePlayer', ['getEpisode','getListener'])
  },

  created(){
    if(this.$q.localStorage.has("listener_id")){
      this.listener.listener_id = this.$q.localStorage.getItem("listener_id")
      this.listener.password = this.$q.localStorage.getItem("password")
      this.setListener(this.listener)
    }
    if(!this.$q.localStorage.has("listener_id")){
      this.createListener()
    }
  },

  cron:{
    time: 60000, // 1 minute
    method: 'updateList'
  },

  mounted(){
    this.getFeed()
  },

  methods:{
    ...mapActions('modulePlayer', ['setEpisode','setListener']),

    createListener(){
      axios
      .post('api/listener/create.php', {
        listener_name: "Listener"
        })
      .then(response=> {
        this.listener.listener_id = response.data.listener_id
        this.listener.listener_name = response.data.listener_name
        this.listener.date_last_logon = response.data.date_last_logon
        this.listener.password = response.data.password
        this.setListener(this.listener)
        this.$q.localStorage.set("listener_id", this.listener.listener_id)
        this.$q.localStorage.set("password", this.listener.password)
      })
      .catch(function(error) {
          console.log("createListener Axios Error: ", error)
      })
    },

    getFeed(){
      axios.get('https://www.loatoday.net/feed/mp3')
          .then((response) => {
            Vue.prototype.$xml = convert.xml2json(response.data, { compact: false, spaces: 1 })
            //console.log("this.newXml: ", this.newXml)
          })
          .catch(function (error) {
            console.log("axios error in xmlJs.js: ",error)
          })
        let xml = JSON.parse(Vue.prototype.$xml)
        let length = xml.elements[0].elements[0].elements.length
        let title = 'string'
        let description = 'string'
        let mp3 = 'string'
        let feedHere = []
        let date = ''
        let episodeId = 0
        let episodeNumber = 0
        let count = 5
        for (let i = 21; i < Math.min(length,25+21); i++) {
          title = xml.elements[0].elements[0].elements[i].elements[0].elements[0].text
          episodeId = xml.elements[0].elements[0].elements[i].elements[1].elements[0].text
          if (episodeId.substring(32, 33) === '-') {
            count--
          }
          episodeId = episodeId.substring(28, count + 28)
          count++
          episodeNumber = xml.elements[0].elements[0].elements[i].elements[11].elements[0].text
          description = xml.elements[0].elements[0].elements[i].elements[4].elements[0].cdata
          mp3 = xml.elements[0].elements[0].elements[i].elements[6].attributes.url
          date = Date.parse(xml.elements[0].elements[0].elements[i].elements[2].elements[0].text)
          date = new Date(date).toDateString()
          feedHere.push({
            element: (i - 21),
            episodeNumber: episodeNumber,
            title: title,
            description: description,
            mp3: mp3,
            date: date
          })
        }
        this.showImage = xml.elements[0].elements[0].elements[4].elements[0].elements[0].text
        // Vue.prototype.$showTitle = xml.elements[0].elements[0].elements[4].elements[1].elements[0].text
        // Vue.prototype.$showUrl = xml.elements[0].elements[0].elements[4].elements[2].elements[0].text
        this.showDescription = xml.elements[0].elements[0].elements[2].elements[0].text
        this.feed = feedHere
    },

    playing(item, index){
      this.playerIsPlaying ++
      this.$emit('nowPlaying', this.playerIsPlaying)
      this.episode[index] = item
      this.episode[index].playing = true
      let d = new Date(Date.now())
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      this.episode[index].episode_date_started = d
      this.episode[index].description = item.description
      this.episode[index].element = item.element
      this.episode[index].episode_title = item.title
      this.episode[index].episode_number = item.number
      // console.log("playing: ", this.episode[index].episode_time_start)
      this.episode[index].mp3 = item.mp3
      this.episode[index].date = item.date
      this.setEpisode(this.episode)
      this.$refs.netStatus[index].updateListener(this.episode, index)
      if(item.element != this.oldElement){
        // pause old player
        this.newElement = item.element
        if(this.oldElement != -1){
          this.$refs.pauseMe[this.oldElement].pause()
        }
        this.oldElement = this.newElement
      }
    },

    paused(item, index){
      this.playerIsPlaying --
      this.$emit('nowPlaying', this.playerIsPlaying)
      this.episode[index].playing = false
      // console.log("paused: ", this.episode[index].episode_time_update)
      this.setEpisode(this.episode)
      this.$refs.netStatus[item.element].updateEpisode(this.episode, item.element)
      if(item.element != this.oldElement){
        this.oldElement = this.newElement
      }
    },

    secondsOnPlayer(value, index){
      if(this.episode[index].playing === true){
        this.episode[index].episode_time_start = value
        this.episode[index].episode_time_update = value
      }
      if(this.episode[index].playing === false){
        this.episode[index].episode_time_update = value
      }
    },

    startPlay(id){
      this.$refs.pauseMe[id].play()
    },

    timeZoneShift(date){
      const offsetMs = date.getTimezoneOffset() * 60 * 1000;
      const msLocal =  date.getTime() - offsetMs;
      const dateLocal = new Date(msLocal);
      const iso = dateLocal.toISOString();
      const isoLocal = iso.slice(0, 19);
      return isoLocal;
    },

    updateList(){
      if(this.playerIsPlaying === 0){
        this.callKey += 1
        //this.$forceUpdate()
        console.log("updatedList")
        this.getFeed()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.pointer {
  cursor: pointer;
}
.pointer:hover {
  color: aqua;
}
.pointer:active {
  color: aqua;
  text-decoration: underline;
}
p {
  text-indent: 0;
}
</style>