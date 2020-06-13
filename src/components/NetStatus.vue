<template>
  <div>
  </div>
</template>

<script>
import Vue from 'vue'
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
  methods:{
    connCheck(){
      if(this.isOnline){
        console.log("You are now online.")
      } else {
        console.log("You are now offline.")
      }
    },
    
    setListener(){
      console.log("currentEpisode: ", this.currentEpisode)
      if(this.currentListener.listener_id === 0){
        axios
        .post('api/listener/create.php', {
          listener_id: this.currentListener.listener_id,
          listener_name: this.currentListener.listener_name
         })
        .then(response=> {
          this.currentListener = response.data
          console.log("valid new listener response received: ", this.currentListener)
          this.updateListener()
        })
        .catch(function(error) {
            console.log("Axios Error: ",error)
        })
      }
    },

    updateListener(){
      // update existing user id
      let d = new Date(Date.now())
      d = d.toISOString().slice(0, 19).replace('T', ' ')
      axios
      .post('api/listener/update.php', {
        listener_id: this.currentListener.listener_id,
        listener_name: this.currentListener.listener_name,
        date_last_logon: d
      })
      .then(response=> {
        this.currentListener = response.data
        console.log("update listener info: ", this.currentListener)
        this.setEpisode()
      })
      .catch(function(error) {
          console.log("Axios Error: ",error)
      })
    },

    setEpisode(){
      if(this.currentEpisode[0].episode_id === 0){
        axios
        .post('api/episode/create.php', {
          episode_id: this.currentEpisode[0].episode_id,
          listener_id: this.currentEpisode[0].listener_id,
          episode_title: this.currentEpisode[0].episode_title,
          episode_time_update: this.currentEpisode[0].episode_time_update
         })
        .then(response=> {
          this.currentEpisode[0] = response.data
          this.currentEpisode[0].listener_id = this.currentListener.listener_id
          console.log("valid new episode response received: ", this.currentEpisode[0])
          this.updateEpisode()
        })
        .catch(function(error) {
            console.log("Axios Error: ",error)
        })
      }
    },

    updateEpisode(){
      // update existing user id
      let d = new Date(Date.now())
      d = d.toISOString().slice(0, 24).replace('T', ' ')
      axios
      .post('api/episode/update.php', {
        episode_id: this.currentEpisode[0].episode_id,
        listener_id: this.currentEpisode[0].listener_id,
        episode_title: this.currentEpisode[0].episode_title,
        episode_time_update: this.currentEpisode[0].episode_time_update,
        episode_date_stopped: d
      })
      .then(response=> {
        this.currentEpisode[0] = response.data
        console.log("update episode info: ", response.data)
      })
      .catch(function(error) {
          console.log("Axios Error: ",error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>