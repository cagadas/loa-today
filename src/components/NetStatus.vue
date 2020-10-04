<template>
  <div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import VueOffline from 'vue-offline'
Vue.use(VueOffline)
import axios from 'axios'
export default {
  name: 'NetStatus',
  props: [
    'listener',
    'episode'
  ],
  data(){
    return{
      currentListener: this.listener,
      currentEpisode: this.episode
    }
  },
  computed: {
    ...mapGetters('modulePlayer', ['getEpisode','getListener'])
  },
  
  methods:{
    ...mapActions('modulePlayer', ['setEpisode','setListener']),
    connCheck(){
      if(this.isOnline){
        console.log("You are now online.")
      } else {
        console.log("You are now offline.")
      }
    },
    
    createEpisode(item, index){
      this.connCheck
      this.currentEpisode = item[index]
      this.currentEpisode.episode_time_start = item[index].episode_time_start
      axios
      .post('api/episode/create.php', {
        listener_id: this.$q.localStorage.getItem("listener_id"),
        password: this.$q.localStorage.getItem("password"),
        episode_title: this.currentEpisode.episode_title,
        episode_number: this.currentEpisode.episodeNumber,
        episode_time_update: this.currentEpisode.episode_time_update,
        episode_time_start: this.currentEpisode.episode_time_start
        })
      .then(response=> {
        this.currentEpisode.episode_id = response.data.episode_id
        this.currentEpisode.listener_id = response.data.listener_id
        this.currentEpisode.episode_date_started = response.data.episode_date_started
        this.currentEpisode.episode_title = response.data.episode_title
        this.currentEpisode.episodeNumber = response.data.episode_number
        this.currentEpisode.ip_address = response.data.ip_address
        this.setEpisode(this.currentEpisode)
      })
      .catch(function(error) {
          console.log("createEpisode Axios Error: ", error)
      })
    },
    
    updateEpisode(item, index){
      // update existing user id
      let d = new Date(Date.now())
      //d = d.toISOString().slice(0, 19).replace('T', ' ') -- hang on to this!
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      if(this.getEpisode.episode_time_update < this.currentEpisode.episode_time_update){
        this.setEpisode(this.currentEpisode.episode_time_update)
      }
      console.log("this.currentEpisode in updateEpisode in NetStatus: ", this.currentEpisode)
      axios
      .post('api/episode/update.php', {
        listener_id: this.$q.localStorage.getItem("listener_id"),
        password: this.$q.localStorage.getItem("password"),
        episode_id: this.currentEpisode.episode_id,
        episode_number: this.currentEpisode.episodeNumber,
        episode_title: this.currentEpisode.episode_title,
        episode_time_start: this.currentEpisode.episode_time_start,
        episode_time_update: this.currentEpisode.episode_time_update,
        episode_date_stopped: d
      })
      .then(response=> {
        this.currentEpisode.episode_date_stopped = response.data.episode_date_stopped
        this.setEpisode(this.currentEpisode)
      })
      .catch(function(error) {
        console.log("updateEpisode Axios Error: ", error)
      })
    },

    updateListener(item, index){
      // update existing user id
      let d = new Date(Date.now())
      //d = d.toISOString().slice(0, 19).replace('T', ' ') -- hang on to this!
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      axios
      .post('api/listener/update.php', {
        listener_id: this.$q.localStorage.getItem("listener_id"),
        listener_name: this.currentListener.listener_name,
        password: this.$q.localStorage.getItem("password"),
        date_last_logon: d
      })
      .then(response=> {
        this.currentListener.listener_id = response.data.listener_id
        this.currentListener.listener_name = response.data.listener_name
        this.currentListener.date_last_logon = response.data.date_last_logon
        this.setListener(this.currentListener)
        console.log("response.data in updateListener in NetStatus: ", response.data)
      })
      .catch(function(error) {
          console.log("updateListener Axios Error: ", error)
      })
      this.createEpisode(item, index)
    },
    
    timeZoneShift(date){
      const offsetMs = date.getTimezoneOffset() * 60 * 1000
      const msLocal =  date.getTime() - offsetMs
      const dateLocal = new Date(msLocal)
      const iso = dateLocal.toISOString()
      const isoLocal = iso.slice(0, 19)
      return isoLocal
    }
  }
}     
</script>

<style lang="scss" scoped>
</style>