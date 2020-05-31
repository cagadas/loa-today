<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.image">
      <h5>LOA Today</h5>
      <p>{{ this.description }}</p>
    </div>
    <div style="clear: both;"></div>
    <div style="margin-top: 18px;">
      <hr>
    </div>
    <div class="padDiv">
      <div v-for="item in feed" :key="item.id">
        <h6>{{ item.title }}</h6>
        <p>{{ item.description }}</p>
        <player
          :mp3="item.mp3"
          :id="item.id"
          @playingId="playingId"
        >
        </player>
        <hr>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      feed: this.$feed,
      title: this.$title,
      description: this.$description,
      image: this.$image,
      playingId: 0,
      oldPlayingId: 0
    }
  },
  components: {
    'player' : require('components/Player.vue').default
  },
  watch: {
    playingId: function(){
      
    }
  }
}
</script>

<style lang="stylus">
  body {
    background-color: rgb(0,32,0);
    padding: 20px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: yellow;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
    color: lime;
  }
  hr {
    border-color: white;
    border-width : 0.5px;
  }
  .padDiv {
    padding: 0;
  }
</style>