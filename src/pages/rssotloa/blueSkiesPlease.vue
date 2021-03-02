<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Blue Skies, Please</h5>
    <h6 class="h6">by Walt Thiessen</h6>

    <p>I like to walk every day if I can during warm weather. There is a 
      rails-to-trails path near our home in Simsbury, Connecticut that 
      gives me as many miles of outdoor paths to walk as anyone could desire. 
      It was one of my favorite reasons for us moving back to Connecticut 
      from Virginia a couple of years before.</p>

    <p>Most often, I walk a portion of the path that is two miles down and 
      two miles back, giving me a total walk of four miles.</p>

    <p>One day as I left the house, I looked up and saw gray skies in all 
      directions. You could see that there was even a threat of rain. That
      particular day, I needed blue skies and sun. I mean I really needed 
      it! I needed the piece of mind that good weather brings. I craved 
      feeling delighted in a way that only a beautiful day can make me 
      feel. Since I have a history of successfully influencing the weather, 
      I decided to give it another try today.</p>

    <p>So as I walked along, I half-closed my eyes and imagined that we had 
      blue skies, a nice, bright sun, and warm temperatures, but not too hot. 
      I kept thinking to myself, “All I have to do is keep focusing on what I 
      want the weather to be like, and these gray skies will go away.”</p>

    <p>Like most folks, I am quite capable of harboring doubts when it comes 
      to manifesting things via the Law of Attraction, but that day I stubbornly 
      focused determinedly on the idea that on this occasion, I would be able 
      to produce my ideal result.</p>

    <p>I stayed happily focused for the first two miles of the walk, keeping my 
      eyes closed half the time so that my attention would not be diverted or 
      discouraged by what reality showed me.</p>

    <p>I just kept imagining that beautiful, sunny blue sky scene in my head, 
      getting myself more and more excited about it by the minute.</p>

    <p>In my mind’s eye, I kept filling in more details. I  imagined the fragrance 
      of beautiful summer flowers. I smelled the scents of the trees. I imagined 
      the warm, comforting, gentle breeze that would accompany such a scene. I 
      imagined animals happily frolicking on such a beautiful day. I could practically 
      taste the sweet flavor of fresh, clean, sunlit air on my tongue. I heard nature 
      sounds thrilling to the beautiful summer’s day my mind was inventing. I could 
      practically touch the nearby trees in my imagination, feeling their course, 
      warm bark.</p>

    <p>When I reached the turnaround place at the two-mile mark, I opened my eyes 
      fully and looked up to the sky. Darn! Gray skies all around. A bit dejectedly, 
      I felt completely deflated. All of that mental work for nothing? I felt so 
      let down.</p>

    <p>I turned 180° to head back home.</p>

    <p>I glanced up in astonishment to see blue sky as far as the eye could see. I 
      looked straight up. The dividing line between the gray sky and the blue sky 
      was precisely, directly above my head. Apparently, the weather had been clearing 
      behind me as I walked, and I did not even know it!</p>

    <p>This weather-influencing stuff is really crazy!</p>
    
    <hr />

    <img class="img" src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '48'}">Back To Top</q-btn></p>
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