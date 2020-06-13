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
        <h6
          ref="playMe"
          @click="startPlay(item.element)"
          class="pointer"
          >{{
          item.title
          }}</h6>
        <p><span style="color: white;">{{ item.date }} &ndash; </span> {{ item.description }}</p>
        <player
          :mp3="item.mp3"
          ref="pauseMe"
          @playing="playing(item.element)"
          @paused="paused(item.element)"
          @timeupdate="timeupdate"
        ></player>
        <hr>
      </div>
    </div>
    <net-status ref="netStatus" :listener="listener" :episode="episode" />
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
      listener: {
        listener_id: 0,
        listener_name: 'Listener',
        date_last_logon: ''
      },
      episode: [
        {
          episode_id: 0,
          listener_id: 0,
          episode_title: '',
          episode_time_update: 0,
          episode_date_started: '',
          episode_date_stopped: ''
        }
      ]
    }
  },
  components: {
    'player' : require('components/Player.vue').default,
    'net-status' : require('components/NetStatus.vue').default
  },
  methods: {
    playing(element){
      this.$refs.netStatus.setListener()
      if(element != this.oldElement){
        // pause old player
        this.newElement = element
        this.$refs.pauseMe[this.oldElement].pause()
      }
    },
    paused(element){
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
h5.pointer:hover {
  color: aqua;
}
h5.pointer:active {
  color: aqua;
  text-decoration: underline;
}
</style>