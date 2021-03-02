<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Hide and Seek</h5>
    <h6 class="h6">by Louise Thiessen</h6>

    <p>Around my 10th wedding anniversary, I was working as a lead teacher in an infant 
      room in a day care center in Virginia. Halfway through one particular morning, I 
      sat down to give a baby his bottle. I looked down at my left hand and noticed the 
      center diamond from my engagement ring was missing. My ring is a center-round cut 
      diamond with baguettes on either side running side to side, not up and down as in 
      most settings. I was perplexed but not worried and certainly not panicked. I didn’t 
      remember looking at my ring that morning, so who knew when the stone fell out ... 
      here at work, at home, in the shower?</p>

    <p>I looked around my classroom and even donned gloves to go through all the discarded 
      gloves that had been used so far that day changing diapers. No diamond. I called my 
      husband and asked him to check the bathroom shower drain, while I would look elsewhere 
      in the house when I came home soon for lunch.</p>

    <p>I remained calm and knew that our insurance would cover the loss if need be. I just 
      didn’t feel anxious or panicky.</p>

    <p>A search at lunchtime turned up nothing, so I went back to work leaving the rest of 
      the engagement ring at home. A closer look showed that three of the six prongs that 
      held that center stone were broken. I had no idea how they got that way.</p>

    <p>I walked back into my classroom not phased by the loss. My co-worker who covered my 
      lunch break greeted my with, “How much do you love me?” In her outstretched hand 
      sitting in her palm was my diamond. She found it when she picked up one of the babies 
      from his bouncy seat. There was the gem, which he had been sitting on. It must have 
      come out of the setting just as I lowered the baby into the seat earlier that morning.</p>

    <p>I had not felt confident that we would find it, but I also had not panicked. I did 
      not block it’s recovery with anxiety or negative feelings.</p>

    <hr />

    <img class="img" src="images/LouiseThiessen.jpg" alt="">

    <p class="signature">Louise Thiessen is a former psychotherapist and currently owns 
      a local gardening services and maintenance business, 
      <a @click="myLink('https://gardensbylouise.com/')">Gardens By Louise</a>. She is 
      also an occasional co-host of LOA Today. She lives with her husband, Walt, and 
      two black cats, Harmony and Joy, in Simsbury, CT</p>

    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '36'}">Back To Top</q-btn></p>
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