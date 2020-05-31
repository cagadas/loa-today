<template>
  <div>
    <Media
      preload="none"
      :kind="'audio'"
      :controls="true"
      :src="mp3"
      @audioprocess="audioprocess"
      @canplay="canplay"
      @canplaythrough="canplaythrough"
      @durationchange="durationchange"
      @emptied="emptied"
      @ended="ended"
      @loadeddata="loadeddata"
      @loadedmetadata="loadedmetadata"
      @pause="pause"
      @play="play"
      @playing="playing"
      @ratechange="ratechange"
      @seeked="seeked"
      @seeking="seeking"
      @stalled="stalled"
      @suspend="suspend"
      @timeupdate="timeupdate"
      @volumechange="volumechange"
      @waiting="waiting"
    >
    </Media>
    <button @click="stopPlayer">Stop</button>
  </div>
</template>

<script>
import Media from '@dongido/vue-viaudio'

export default {
  name: 'app',
  props: ['mp3','id'],
  components: {
    Media
  },
  methods: {
    audioprocess(){
      console.log("audioprocess: ",this.id)
    },
    canplay(){
      console.log("canplay: ",this.id)
    },
    canplaythrough(){
      console.log("canplaythrough: ",this.id)
    },
    durationchange(){
      console.log("durationchange: ",this.id)
    },
    emptied(){
      console.log("emptied: ",this.id)
    },
    ended(){
      console.log("ended: ",this.id)
    },
    loadeddata(){
      console.log("loadeddata: ",this.id)
    },
    loadedmetadata(){
      console.log("loadedmetadata: ",this.id)
    },
    pause(){
      console.log("pause: ",this.id)
    },
    play(){
      console.log("play: ",this.id)
    },
    playing(){
      console.log("playing: ",this.id)
    },
    ratechange(){
      console.log("ratechange: ",this.id)
    },
    seeked(){
      console.log("seeked: ",this.id)
    },
    seeking(){
      console.log("seeking: ",this.id)
    },
    stalled(){
      console.log("stalled: ",this.id)
    },
    suspend(){
      console.log("suspend: ",this.id)
    },
    timeupdate(){
      console.log("timeupdate: ",this.id)
    },
    volumechange(){
      console.log("volumechange: ",this.id)
    },
    waiting(){
      console.log("waiting: ",this.id)
    },
    stopPlayer(){
      this.pause = true
      console.log('stopPlayer clicked')
    }
  }
}
</script>
<style lang="stylus">
  audio {
    display: block;
    background-color: rgb(0,64,0);
    margin-bottom: 16px;
  }
</style>