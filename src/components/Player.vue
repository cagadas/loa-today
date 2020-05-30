<template>
  <vue-plyr ref="plyr">
    <audio>
      <source :src="mp3" type="audio/mp3"/>
    </audio>
  </vue-plyr>
</template>

<script>
import Vue from 'vue'
import VuePlyr from 'vue-plyr'

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended','play']
})
export default {
  name: 'Player',
  props: ['mp3'],
  computed: {
    player() {
      return this.$refs.plyr.player
    }
  },
  mounted(){
    //console.log(this.player)
    this.player.on('pause', () => console.log('pause fired'))
    this.player.on('play', () => console.log('play fired'))
    this.player.on('playing', () => console.log('playing fired'))
    this.player.on('ended', () => console.log('ended fired'))
    this.player.on('seeking', () => console.log('seeking fired'))
    this.player.on('progress', () => console.log('progress fired'))
    this.player.on('timeupdate', () => console.log('timeupdate: ',this.player.currenttime))
    this.player.on('volumechange', () => console.log('volumechange fired'))
    this.player.on('seeked', () => console.log('seeked fired'))
    this.player.on('ratechange', () => console.log('ratechange fired'))
    this.player.on('enterfullscreen', () => console.log('enterfullscreen fired'))
    this.player.on('exitfullscreen', () => console.log('exitfullscreen fired'))
    this.player.on('captionsdisabled', () => console.log('captionsdisabled fired'))
    this.player.on('languagechange', () => console.log('languagechange fired'))
    this.player.on('controlshidden', () => console.log('controlshidden fired'))
    this.player.on('controlsshown', () => console.log('controlsshown fired'))
    this.player.on('ready', () => console.log('ready fired'))
  },
  methods: {
    logIt(){
      console.log("done")
    }
  }
}
</script>
<style lang="stylus">
  .plyr--audio .plyr__controls {
    background-color: rgb(0,64,0)!important;
    margin-bottom: 16px;
  }
</style>