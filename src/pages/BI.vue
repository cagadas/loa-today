<template>
  <q-page class="flex-center">
    <div class="padDiv">
      <img style="width: 100px; float: left; margin-right: 20px;" :src="this.showImage">
      <h5>Beyond Intention - Audio Course</h5>
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
          >{{  item.title }}</h6>
        <p><span style="color: white;">{{ item.date }} &ndash; </span> {{ item.description }} <span style="color: green;">Show #{{ item.episodeNumber }}</span></p>
        <player
          :m4a="item.m4a"
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
      feed: this.$feedBi,
      showDescription: this.$showDescriptionBi,
      showImage: this.$showImageBi,
      episode: [
        {}
      ]
    }
  },
  components: {
    'player' : require('components/Player.vue').default
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