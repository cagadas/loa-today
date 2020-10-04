<template>
  <div>
    <vue-plyr ref="plyr">
      <audio preload="none" ref="audio">
        <source :src="mp3" type="audio/mp3" ref="source"/>
      </audio>
    </vue-plyr>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core';

const { App, BackgroundTask } = Plugins;

App.addListener('appStateChange', (state) => {

  if (!state.isActive) {
    // The app has become inactive. We should check if we have some work left to do, and, if so,
    // execute a background task that will allow us to finish that work before the OS
    // suspends or terminates our app:

    let taskId = BackgroundTask.beforeExit(async () => {
      // In this function We might finish an upload, let a network request
      // finish, persist some data, or perform some other task

      // Example of long task
      
      var start = new Date().getTime();
      for (var i = 0; i < 1e18; i++) {
        // 5 minutes = 300 seconds
        if ((new Date().getTime() - start) > 300000){
          break;
        }
      }
      
      // Must call in order to end our task otherwise
      // we risk our app being terminated, and possibly
      // being labeled as impacting battery life
      BackgroundTask.finish({
        taskId
      });
    });
  }
})
export default {
  name: 'Player',
  props: {
      mp3 : String
    },
  
  data(){
    return{
    }
  },
  computed: {
    player() {
      return this.$refs.plyr.player 
    }
  },
  methods: {
    pause(){
      // used by "playing" method to pause episode that was already playing
      // after user starts playing a new episode
      this.player.pause()
    },
    play(){
      // used by clicking episode title in Index.vue
      this.player.play( )
    }
  },
  mounted(){
    this.player.on('playing', () => this.$emit('playing')),
    this.player.on('pause', () => this.$emit('paused')),
    this.player.on('timeupdate', () => this.$emit('timeupdate', this.player.currentTime))
  }
}
</script>
<style lang="stylus">
  .plyr--audio .plyr__controls {
    background-color: rgb(96,180,96)!important;
    margin-bottom: 16px;
  }
</style>