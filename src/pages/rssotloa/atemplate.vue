<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Home Sweet Home</h5>
    <h6 class="h6">by Wendy Dillard</h6>

    <p>Story</p>
    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '44'}">Back To Top</q-btn></p>
  </q-page>
</template>
<script>
import { openURL } from 'quasar'
import 'src/css/rsstoloa.css'
export default {
  methods:{
    myLink(myURL){
      openURL(myURL)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>