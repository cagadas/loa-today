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
      <div v-for="item in feed" :key="item.element">
        <h6>{{ item.title }}</h6>
        <p><span style="color: white;">{{ item.date }} &ndash; </span> {{ item.description }}</p>
        <player
          :mp3="item.mp3"
          ref="pauseMe"        
          @playing="playingFired(item.element)"
          @paused="pausedFired(item.element)"
          @timeupdate="timeupdate"
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
      oldElement: 0,
      newElement: 0,
      elapsedTime: 0,
      user: {
        id: 0,
        name: 'Visitor'
      },
      episode: [
        {
          userId: 0,
          userName: 'Visitor',
          episodeId: 0,
          timeupdate: 0,
          date: Date.now()
        }
      ]
    }
  },
  components: {
    'player' : require('components/Player.vue').default
  },
  computed:{
  },
  methods: {
    playingFired(element){
      if(element != this.oldElement){
        this.newElement = element
        this.$refs.pauseMe[this.oldElement].pause()
      }
    },
    pausedFired(element){
      if(element === this.oldElement){
        // this id is not the same as audio id
        // get the right audio id
        // this.elapsedTime goes here too
        // push user id, audio id and elapsed time into object
        // save data to localstorage
        // check if online
        // if online, send data to server
        this.oldElement = this.newElement
      }
    },
    timeupdate(value){
      this.elapsedTime = value
    }
  }
}
</script>

