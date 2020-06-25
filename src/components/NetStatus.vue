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
      this.currentEpisode[index].episode_number = item[index].episodeNumber
      this.currentEpisode[index].episode_time_start = item[index].episode_time_start

      const data = {
        listener_id: this.currentEpisode[index].listener_id,
        password: this.currentEpisode[index].password,
        episode_title: this.currentEpisode[index].episode_title,
        episode_number: this.currentEpisode[index].episode_number,
        episode_time_update: this.currentEpisode[index].episode_time_update,
        episode_time_start: this.currentEpisode[index].episode_time_start
      }
      this.axiosSend(data)
      this.currentEpisode[index].episode_id = data.episode_id
      this.currentEpisode[index].listener_id = data.listener_id
      this.currentEpisode[index].episode_date_started = data.episode_date_started
      this.currentEpisode[index].episode_title = data.episode_title
      this.currentEpisode[index].episode_number = data.episode_number
      this.currentEpisode[index].ip_address = data.ip_address
      this.setEpisode(this.currentEpisode)

    },

    updateEpisode(item, index){
      this.currentEpisode[index].listener_id = this.getListener.listener_id
      this.currentEpisode[index].password = this.getListener.password
      let d = new Date(Date.now())
      //d = d.toISOString().slice(0, 19).replace('T', ' ') -- hang on to this!
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      if(this.getEpisode.episode_time_update < this.currentEpisode[index].episode_time_update){
        this.setEpisode(this.currentEpisode[index].episode_time_update)
      }
      const data = {
        listener_id: this.currentEpisode[index].listener_id,
        password: this.currentEpisode[index].password,
        episode_id: this.currentEpisode[index].episode_id,
        episode_number: this.currentEpisode[index].episode_number,
        episode_title: this.currentEpisode[index].episode_title,
        episode_time_update: this.currentEpisode[index].episode_time_update,
        episode_date_stopped: d
      }
      this.axiosSend(data)
      this.currentEpisode[index].episode_date_stopped = data.episode_date_stopped
      this.setEpisode(this.currentEpisode)
    },

    updateListener(item, index){
      this.currentListener.listener_id = this.getListener.listener_id
      this.currentListener.password = this.getListener.password
     let d = new Date(Date.now())
      //d = d.toISOString().slice(0, 19).replace('T', ' ') -- hang on to this!
      d = this.timeZoneShift(d)
      d = d.replace('T', ' ')
      const data = {
        listener_id: this.currentListener.listener_id,
        listener_name: this.currentListener.listener_name,
        password: this.currentListener.password,
        date_last_logon: d
      }
      this.axiosSend(data)
      this.currentListener.listener_id = data.listener_id
      this.currentListener.listener_name = data.listener_name
      this.currentListener.date_last_logon = data.date_last_logon
      this.setListener(this.currentListener)
      
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