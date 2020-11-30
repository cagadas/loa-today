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
import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
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
      this.player.play()
    }

  },
  mounted(){
    this.player.on('playing', () => this.$emit('playing')),
    this.player.on('pause', () => this.$emit('paused')),
    this.player.on('timeupdate', () => this.$emit('timeupdate', this.player.currentTime)),
    this.player.on('ended', () => this.$emit('ended', this.player.ended))
  }

}
</script>
<style lang="stylus">
  .plyr--audio .plyr__controls {
    background-color: rgb(96,180,96)!important;
    margin-bottom: 16px;
  }
</style>