<template>
  <q-page class="flex-center">
    <div style="padding: 0 10px;">
      <div v-for="item in feed" :key="item.id">
        <h6>{{ item.title }}</h6>
        <p>{{ item.description }}</p>
        <player :mp3="item.mp3"></player>
        <hr>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      feed: this.$feed
    }
  },
  components: {
    'player' : require('components/Player.vue').default
  }
}
</script>

<style lang="stylus">
  body {
    background-color: rgb(0,32,0);
    padding: 20px;
  }
  h6 {
    margin: 0;
    color: yellow;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
    color: lime;
  }
  hr {
    border-color: purple;
    border-width : 0.5px;
  }
</style>