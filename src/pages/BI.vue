<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.showImage">
      <h5>Beyond Intention - Audio Course</h5>
      <p>{{ this.showDescription }}</p>
      <p>Theme music courtesy of <a href="#" @click="myLink('https://www.purple-planet.com/')">Purple Planet Music</a>.</p>
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
        <p></span> {{ item.description }}</p>
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
import { openURL } from 'quasar'
export default {
  data() {
    return {
      feed: this.$feedBi,
      showDescription: this.$showDescriptionBi,
      showImage: this.$showImageBi,
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
    myLink(myURL){
      openURL(myURL)
    },

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
  .flex-center {
    background-color: rgb(0,0,32);
  }
  h1, h2, h3, h4, h5, h6 {
    color: aqua;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
    color: lightblue;
    font-size: 16px;
  }
  ul {
    color: lightblue;
    font-size: 16px;
  }
  a {
    color: orange;
    text-text-decoration: underline;
  }
  hr {
    border-color: purple;
    border-width : 0.5px;
  }
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