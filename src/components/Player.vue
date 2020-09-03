<template>
  <div>
    <q-media-player
      ref="myPlayer"
      type="audio"
      :source="mp3"
      background-color="green-14"
      color="green-3"
      @playing="play"
      @paused="pause"
      @error="error"
      @stalled="stalled"
      @timeupdate="timeupdate"
    />
  </div>
</template>

<script>
export default {
  props: {
      mp3 : String
    },
  
  data(){
    return{
    }
  },
  methods: {
    error(MediaError){
      console.log("player error: ", MediaError)
    },
    pause(){
      // used by "playing" method to pause episode that was already playing
      // after user starts playing a new episode
      // this.player.pause()
      this.$emit('nowPaused')
      console.log("player pause")
    },
    play(){
      // used by clicking episode title in Index.vue
      // this.player.play( )
      this.$emit('nowPlaying')
      console.log("player play")
    },
    stalled(){
      console.log("player stalled")
    },
    timeupdate(curTime){
      this.$emit('timeupdate', curTime)
      //console.log("player timeupdate:", curTime)
    }
  },
  mounted(){
    // this.player.on('playing', () => this.$emit('playing')),
    // this.player.on('pause', () => this.$emit('paused')),
    // this.player.on('timeupdate', () => this.$emit('timeupdate', this.player.currentTime))
  }
}
</script>