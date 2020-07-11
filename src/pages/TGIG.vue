<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.showImage">
      <h5>The Grass Is Greener - Audio Play</h5>
      <p>{{ this.showDescription }}</p>
    </div>
    <div style="clear: both;"></div>
    <div style="margin-top: 18px;">
      <hr>
    </div>
    <div class="padDiv">
      <div v-for="item in feed" :key="item.element">
        <h6
          class="pointer"
          @click="startPlay(item.element)"
          >{{  item.title }}</h6>
        <p><span style="color: white;">{{ item.date }} &ndash; </span> {{ item.description }} <span style="color: green;">Show #{{ item.episodeNumber }}</span></p>
        <player
          :mp3="item.m4a"
          ref="pauseMe"
          @playing="playing(item, item.element)"
          @paused="paused(item, item.element)"
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
      feed: this.$feedTgig,
      showDescription: this.$showDescriptionTgig,
      showImage: this.$showImageTgig,
      episode: [
        {}
      ],
      newElement: 0,
      oldElement: -1
    }
  },
  components: {
    'player' : require('components/Player.vue').default
  },
  
  methods: {
    playing(item, index){
      if(item.element != this.oldElement){
        // pause old player
        this.newElement = item.element
        if(this.oldElement != -1){
          this.$refs.pauseMe[this.oldElement].pause()
        }
        this.oldElement = this.newElement
      }
    },

    paused(item, index){
      if(item.element != this.oldElement){
        this.oldElement = this.newElement
      }
    },

    startPlay(id){
      this.$refs.pauseMe[id].play()
    }
  }
}
</script>

<style lang="stylus" scoped>
.pointer {
  cursor: pointer;
}
.pointer:hover {
  color: aqua;
}
.pointer:active {
  color: aqua;
  text-decoration: underline;
}
</style>