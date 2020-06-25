<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.showImage">
      <h5>LOA Today</h5>
      <p>{{ this.showDescription }}</p>
    </div>
    <div style="clear: both;"></div>
    <div style="margin-top: 18px;">
      <hr>
    </div>
    <div class="padDiv">
      <div v-for="item in feed" :key="item.element">
        <h6
          @click="startPlay(item.element)"
          class="pointer"
          >{{  item.title }}</h6>
        <p><span style="color: white;">{{ item.date }} &ndash; </span> {{ item.description }} <span style="color: green;">Show #{{ item.episodeNumber }}</span></p>
        <player
          :mp3="item.mp3"
          ref="pauseMe"
          @timeupdate="currentTime($event, item.element)"
          @playing="playing(item, item.element)"
          @paused="paused(item, item.element)"
        ></player>
        <net-status ref="netStatus" :listener="listener" :episode="episode" />
        <hr>
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      feed: this.$feed,
      showDescription: this.$showDescription,
      showImage: this.$showImage,
      oldElement: -1,
      newElement: 0,
      elapsedTime: 0,
      state: '',
      timeupdate: 0,
      listener: {
        listener_id: 0,
        listener_name: 'Listener',
        date_last_logon: ''
      },
      episode: [
        {}
      ],
      value: 0
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
  methods:{
    ...mapActions('modulePlayer', ['setEpisode','setListener']),

    axiosSend(data){
      axios
      .post('api/episode/create.php', {
        data
        })
      .then(response=> {
        return response
      })
      .catch(function(error) {
          console.log("createEpisode Axios Error: ", error)
      })
    },
    
    createListener(){
      const data = {
        listener_name: "Listener"
      }
      this.axiosSend(data)
      this.listener.listener_id = data.listener_id
      this.listener.listener_name = data.listener_name
      this.listener.date_last_logon = data.date_last_logon
      this.listener.password = data.password
      this.setListener(this.listener)
      this.$q.localStorage.set("listener_id", this.listener.listener_id)
      this.$q.localStorage.set("password", this.listener.password)
    },
    currentTime(value, index){
      // tracks time played in seconds while playing
      this.timeupdate = value
    },
    playing(item, index){
      this.episode[index] = item
      let d = new Date(Date.now())
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      this.episode[index].episode_date_started = d
      this.episode[index].description = item.description
      this.episode[index].element = item.element
      this.episode[index].episode_title = item.title
      this.episode[index].episode_number = item.number
      this.episode[item.element].episode_time_start = this.timeupdate
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
      this.episode[item.element].episode_time_update = this.timeupdate  // this line causes vuex error
      this.setEpisode(this.episode)
      this.$refs.netStatus[item.element].updateEpisode(this.episode, item.element)
      if(item.element != this.oldElement){
        this.oldElement = this.newElement
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
</style>