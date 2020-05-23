<template>
  <q-page class="flex-center">
    <player/>
    <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit"/>
  </q-page>
</template>

<script>
import VueRssFeed from "vue-rss-feed"
export default {
  data(){
    return{
      feedUrl: "https://cors-anywhere.herokuapp.com/https://www.loatoday.net/feed/mp3",
      name: "",
      limit: 50    }
  },
  components: {
    'player' : require('components/Player.vue').default,
    VueRssFeed
  }
}
</script>