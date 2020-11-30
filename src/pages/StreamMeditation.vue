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

import { Plugins } from '@capacitor/core';

const { App, BackgroundTask } = Plugins;

App.addListener('appStateChange', (state) => {

  if (!state.isActive) {
    // The app has become inactive. We should check if we have some work left to do, and, if so,
    // execute a background task that will allow us to finish that work before the OS
    // suspends or terminates our app:

    let taskId = BackgroundTask.beforeExit(async () => {
      // In this function We might finish an upload, let a network request
      // finish, persist some data, or perform some other task

      BackgroundTask.finish({
        taskId
      });
    });
  }
})
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