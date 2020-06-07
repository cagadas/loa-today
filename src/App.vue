<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VuePlyr from 'vue-plyr'

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  options: {
    controls: [
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'settings'
    ]
  },
  emit: ['ended']
})
export default {
  name: 'App'
}
</script>
