<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.showImage">
      <h4>LOA Today</h4>
      <p>{{ this.showDescription }}</p>
    </div>
    <div style="clear: both;"></div>
    <div style="margin-top: 18px;">
      <hr>
    </div>
    <div class="padDiv">
      <div v-for="item in feed" :key="item.element">
        <h5 ref="playMe" @click="startPlay(item.element)" class="pointer" >{{ item.title }}</h5>
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
    <net-status>

    </net-status>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      feed: this.$feed,
      showDescription: this.$showDescription,
      showImage: this.$showImage,
      episodeId: this.$episodeId,
      oldElement: 0,
      newElement: 0,
      elapsedTime: 0,
      player: {
        player_id: 0,
        player_name: 'Listener'
      },
      episode: [
        {
          player_id: 0,
          episode_id: 0,
          episode_title: '',
          episode_time_update: 0,
          episode_date_started: Date.now(),
          episode_date_completed: Date.now()
        }
      ]
    }
  },
  components: {
    'player' : require('components/Player.vue').default,
    'net-status' : require('components/NetStatus.vue').default
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
        this.oldElement = this.newElement
      }
    },
    startPlay(id){
      this.$refs.pauseMe[id].play()
    },
    timeupdate(value){
      this.elapsedTime = value
    }
  }
}
</script>

<style lang="stylus" scoped>
h5.pointer {
  cursor: pointer;
}
</style>