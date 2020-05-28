<template>
  <vue-plyr>
    <audio>
      <source :src="mp3" type="audio/mp4"/>
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
  emit: ['ended']
})
export default {
  name: 'Player',
  props: ['mp3']
}
</script>
<style lang="stylus">
  .plyr--audio .plyr__controls {
    background-color: rgb(0,64,0)!important;
    margin-bottom: 16px;
  }
</style>