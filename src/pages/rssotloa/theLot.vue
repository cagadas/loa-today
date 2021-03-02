<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">The Lot</h5>
    <h6 class="h6">by Barbara Pinti</h6>

      <p>In 1978 our family of six was too big for our house.</p>

    <p>We had loved living on the last road cut into the side of a mountain.  During nice 
      weather our family had hiked through the woods up that mountain to see the white-tailed 
      deer.  With three of our kids walking and one in a pack on our backs, we loved to 
      explore the area.</p>

    <p>One day we had found a huge sprawling rock formation and decided to have our picnic 
      lunch there.  It became “our” rock and a favorite place to rest and eat after hiking.</p>

    <p>But our house was too small, and our family was growing. It was time to move.</p>

    <p>We searched for our new “family home” where we would raise our children to adulthood.  
      We took several trips through town looking for that perfect house.  Finding nothing after 
      several months, we thought about building one ourselves so we could have all the things we 
      wanted in our ideal house.</p>

    <p>A builder in a nearby town put up some larger homes, and we went to look at them.  He 
      had a few different house plans, and there were some lots available.  We started getting 
      excited about it, chose a lot, and selected a plan.</p>

    <p>The house took forever to build. We visited the site daily to check on progress.</p>

    <p>One day, we were very upset to find that the builder had switched the floor plan to be 
      the opposite of what we had planned.  It was very disappointing, but there didn’t seem 
      to be anything possible to be done about it as the foundation was already poured.</p>

    <p>We accepted the disappointment.  About a week later we found another problem.  The 
      fireplace was done, and it was amateurish, awful, completely unacceptable.   I remember 
      at the time we said it looked like a kindergartner had built it.</p>

    <p>A decision had to be made.  I no longer wanted the house.  It had become a disaster 
      project instead of a joyous one.  After consulting our lawyer, we found we were able 
      to get out of the commitment.</p>

    <p>So after all this time, we found ourselves right back again at step one.  We began 
      to search again for that house that would make my heart flutter.</p>

    <p>We learned that lots were being forged out of the road further up our mountain.  
      We took a ride up the mountain to see what was going on up there.</p>

    <p>Nothing had been built yet, but all of the lots were marked off. We checked them out. 
      As we perused the lots,  one lot seemed very familiar.  It included a large rock with 
      some of the same parts that I had remembered from our picnics.  However much dirt 
      covered parts of the rock, so it took a while for us to realize that it was indeed “our” 
      rock.</p>

    <p>That was it!  We wanted that lot!  We started getting excited about the possibility 
      of building on that site where our footprints had tread while our joys and laughter 
      had rung out.</p>

    <p>Finding the builder’s number on a sign nearby, we went right home and called him up.  
      Our disappointment was profound when he told us that all of the lots had been sold.  
      I was crushed at first, but I remembered other times during my life when I thought all 
      was lost.</p>

    <p>I began imagining the house that we would build on that property and all the fun that 
      the children would have playing in the woods.  I even planned out just where I would 
      locate my garden.  I walked the land and scoped it all out as though it were mine.</p>

    <p>I confided to several friends how much I wanted that building lot and continued to hope 
      beyond hope that it could be ours. Every night before sleep, I would imagine all of us 
      snug in the house that we had built on that property.  I pictured us playing outside 
      around the rock while laughing and enjoying ourselves completely.  I felt as though I 
      had claimed that property as our own, not only then, but years earlier as well.</p>

    <p>A few weeks later, a miracle happened.  I spoke to a friend who had been bowling that 
      morning with the woman who owned “our” lot.  The woman confided that her husband had 
      just been offered a new and better job in another state.   They needed to sell the lot 
      as quickly as possible.</p>

    <p>Events moved very fast now.  We bought the lot from them in a quick, private sale.  
      I worked feverishly designing our new home.  We found a builder.</p>

    <p>One of the first things we asked him to do was to remove the dirt from the rock so 
      that it looked exactly like it did in the days when we picnicked on it.</p>

    <hr class="hr" />

    <img class="img" src="images/BarbaraPinti.jpg" style="margin-bottom: 0;" />

    <p class="signature">Barbara A. Pinti, MA, MA, ABD, LMFT, LPC is a psychotherapist in private practice in 
Wen      workshops, and her private practice.</p>
    <p class="signature">Email: <a href="mailto:barbarapinti@comcast.net">barbarapinti@comcast.net</a></p>
  
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '1'}">Back To Top</q-btn></p>
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