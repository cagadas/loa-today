<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  /*
  mounted(){
    if(this.$q.platform.is.electron){
      require('electron').ipcRenderer.on('show-terms', () => {
        this.$router.push('/terms')
      })
    }
  }
  */
}
</script>

<style>
video::-webkit-media-controls {
  display: none;
}
</style>
