<template>
  <q-page class="flex-center">
    <player/>
  </q-page>
</template>

<script>
import VueRssFeed from "vue-rss-feed"
export default {
  data(){
    return{}
  },
  components: {
    'player' : require('components/Player.vue').default
  }
}
</script>