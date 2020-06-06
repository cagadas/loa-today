<template>
  <div>
    <vue-plyr ref="plyr">
      <audio preload="none" ref="audio">
        <source :src="mp3" type="audio/mp3" ref="source"/>
      </audio>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: [
    'mp3'
  ],
  data(){
    return{
    }
  },
  computed: {
    player() {
      return this.$refs.plyr.player 
    }
  },
  methods:{
    pause(){
      this.player.pause()
    }
  },
  mounted:function(){
    this.player.on('playing', () => this.$emit('playing')),
    this.player.on('pause', () => this.$emit('paused'))
  }
}
</script>
<style lang="stylus">
  .plyr--audio .plyr__controls {
    background-color: rgb(0,64,0)!important;
    margin-bottom: 16px;
  }
</style>