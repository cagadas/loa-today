<template>
  <vue-plyr>
    <audio>
      <source src="https://www.loatoday.net/podlove/file/3494/s/download/c/select-show/2020/loa1225-working-with-the-law-11-truth-principles-for-successful-living-by-raymond-holliwell-part-5.mp3" type="audio/mp3"/>
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
  name: 'Player'
}
</script>
