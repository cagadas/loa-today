<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.showImage">
      <h5>LOA Today</h5>
      <p>{{ this.showDescription }}</p>
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
          ref="pauseMe"        
          @playing="playingFired(item.id)"
          @paused="pausedFired(item.id)"
        ></player>
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
      showDescription: this.$showDescription,
      showImage: this.$showImage,
      oldId: 0,
      newId: 0
    }
  },
  components: {
    'player' : require('components/Player.vue').default
  },
  computed:{
  },
  methods: {
    playingFired(id){
      if(id != this.oldId){
        this.newId = id
        this.$refs.pauseMe[this.oldId].pause()
      }
    },
    pausedFired(id){
      if(id === this.oldId){
        this.oldId = this.newId
      }
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
    border-color: darkred;
    border-width : 0.5px;
  }
  .padDiv {
    padding: 0;
  }
</style>