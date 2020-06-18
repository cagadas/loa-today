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
     this.currentEpisode[index].listener_id = this.getListener.listener_id
      this.currentEpisode[index].password = this.getListener.password
      axios
      .post('api/episode/create.php', {
        listener_id: this.currentEpisode[index].listener_id,
        password: this.currentEpisode[index].password,
        episode_title: this.currentEpisode[index].episode_title,
        episode_time_update: this.currentEpisode[index].episode_time_update
        })
      .then(response=> {
        this.currentEpisode[index].episode_id = response.data.episode_id
        this.currentEpisode[index].listener_id = response.data.listener_id
        this.currentEpisode[index].episode_date_started = response.data.episode_date_started
        this.currentEpisode[index].episode_title = response.data.episode_title
        this.currentEpisode[index].ip_address = response.data.ip_address
        this.setEpisode(this.currentEpisode)
        console.log("this.currentEpisode in createEpisode: ", this.currentEpisode)
      })
      .catch(function(error) {
          console.log("createEpisode Axios Error: ", error)
      })
    },

    createListener(item, index){
      axios
      .post('api/listener/create.php', {
        listener_id: this.currentEpisode[index].listener_id,
        password: this.currentEpisode[index].password,
        listener_name: this.currentListener.listener_name
        })
      .then(response=> {
        this.currentListener.listener_id = response.data.listener_id
        this.currentListener.listener_name = response.data.listener_name
        this.currentListener.date_last_logon = response.data.date_last_logon
        this.currentListener.password = response.data.password
        console.log("this.currentListener in createListener: ", this.currentListener)
        this.setListener(this.currentListener)
        this.$q.localStorage.set("listener_id", this.currentListener.listener_id)
        this.$q.localStorage.set("password", this.currentListener.password)
      })
      .catch(function(error) {
          console.log("createListener Axios Error: ", error)
      })
      this.createEpisode(item, index)
    },

    updateEpisode(item, index){
      this.currentEpisode[index].listener_id = this.getListener.listener_id
      this.currentEpisode[index].password = this.getListener.password
      // update existing user id
      let d = new Date(Date.now())
      //d = d.toISOString().slice(0, 19).replace('T', ' ') -- hang on to this!
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      if(this.getEpisode.episode_time_update < this.currentEpisode[index].episode_time_update){
        this.setEpisode(this.currentEpisode[index].episode_time_update)
      }
      axios
      .post('api/episode/update.php', {
        listener_id: this.currentEpisode[index].listener_id,
        password: this.currentEpisode[index].password,
        episode_id: this.currentEpisode[index].episode_id,
        episode_title: this.currentEpisode[index].episode_title,
        episode_time_update: this.currentEpisode[index].episode_time_update,
        episode_date_stopped: d
      })
      .then(response=> {
        console.log("response.data in updateEpisode: ", response.data )
        this.currentEpisode[index].episode_date_stopped = response.data.episode_date_stopped
        console.log("this.currentEpisode in updateEpisode: ", this.currentEpisode)
        this.setEpisode(this.currentEpisode)
      })
      .catch(function(error) {
        console.log("updateEpisode Axios Error: ", error)
      })
    },

    updateListener(item, index){
      this.currentListener.listener_id = this.getListener.listener_id
      this.currentListener.password = this.getListener.password
      // update existing user id
      let d = new Date(Date.now())
      //d = d.toISOString().slice(0, 19).replace('T', ' ') -- hang on to this!
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      console.log("d: ", d)
      axios
      .post('api/listener/update.php', {
        listener_id: this.currentListener.listener_id,
        password: this.currentListener.password,
        date_last_logon: d
      })
      .then(response=> {
        this.currentListener.listener_id = response.data.listener_id
        this.currentListener.listener_name = response.data.listener_name
        this.currentListener.date_last_logon = response.data.date_last_logon
        // console.log("this.currentListener in updateListener: ", this.currentListener)
        this.setListener(this.currentListener)
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