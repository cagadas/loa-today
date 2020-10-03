<template>
  <q-page class="flex-center">
    <div class="video-responsive">
      <q-video
        :ratio="16/9"
        src="https://player.vimeo.com/video/441809202"
      />
    </div>
  </q-page>
</template>
<script>
import { openURL } from 'quasar'
export default {
}
</script>
<style lang="stylus" scoped>
  h1, h2, h3, h4, h5, h6, .callouts {
    color: rgb(160,160,255)
  }
  .video-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
  .video-responsive iframe{
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
  }
</style>