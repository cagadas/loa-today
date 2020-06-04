<template>
  <div>
    <vue-plyr ref="plyr">
      <audio preload="none">
        <source :src="mp3" type="audio/mp3" />
      </audio>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    mp3: String,
    id: Number,
    oldPlay: Number
  },
  computed: {
    player() {
      return this.$refs.plyr.player
    }
  },
  data(){
    return{
      play: false
    }
  },
  mounted(){
    this.playIt()
 },
  methods: {
    playIt(){
      this.player.on('play', () => this.$emit('play'))
    }
  }
}
</script>
<style lang="stylus">
  .plyr--audio .plyr__controls {
    background-color: rgb(0,64,0)!important;
    margin-bottom: 16px;
  }
</style>