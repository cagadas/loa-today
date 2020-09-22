<template>
  <div>
    <q-media-player
      dense
      ref="myPlayer"
      type="audio"
      :source="mp3"
      dense
      show-spinner
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
      this.$emit('nowPaused')
      console.log("player pause")
    },
    play(){
      this.$emit('nowPlaying')
      console.log("player play: ", this.mp3)
    },
    stalled(){
      console.log("player stalled")
    },
    timeupdate(curTime){
      this.$emit('timeupdate', curTime)
    }
  }
}
</script>