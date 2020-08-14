<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.showImage">
      <h5>LOA Today</h5>
      <p style="text-indent: 0;">{{ this.showDescription }}</p>
      <playlist 
        @nowPlaying="isPlayerPlaying($event)"
      />
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
      showDescription: this.$showDescription,
      showImage: this.$showImage,
      listener: {
        listener_id: 0,
        listener_name: 'Listener',
        date_last_logon: ''
      },
      value: 0,
      isNowPlaying: undefined
    }
  },
  
  components: {
    'playlist' : require('components/LOATodayPlaylist.vue').default
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

    isPlayerPlaying(value) {
      if(value===0){
        this.isNowPlaying = false
      } else {
        this.isNowPlaying = true
      }
      // console.log("this.isNowPlaying: ", this.isNowPlaying)
    }
  }
}
</script>

<style lang="stylus" scoped>
.counter {
  color: pink;
}
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