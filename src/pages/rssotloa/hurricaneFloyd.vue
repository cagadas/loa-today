<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Hurricane Floyd</h5>
    <h6 class="h6">by Walt Thiessen</h6>

    <p>Louise and I married September 26, 1999. I asked her to marry me the previous 
      Valentine's Day. We rushed the wedding date because her father's health was poor, 
      and we were not sure how long he would be around. (He died three months after 
      the wedding.) So you can imagine how busy we were that year preparing for the 
      wedding.</p>

    <p>By the time September rolled around, we had just about everything worked out. 
      We knew where we would marry and had a venue for the reception. Louise bought 
      her dress. Invitations were sent and RSVPs received. With just two weeks to go, 
      we both desperately needed a vacation.</p>

    <p>My parents had retired to Smith Mountain Lake near Roanoke, Virginia in the 
      mid-1980s. That was my go-to place when I needed to get away, and it was the 
      first place we thought of for a quick vacation.</p>

    <p>That same week the news was full of stories about Hurricane Floyd forming in 
      the Caribbean. As we planned our Virginia escape, the weather people projected 
      that Floyd's eye had an 80% or greater likelihood of plowing right through Smith 
      Mountain Lake at the exact time we planned to be there.</p>

    <p>We needed this vacation badly, and something inside me refused to give in to 
      the weather. I knew nothing about the Law of Attraction at this point in my 
      life. All I knew is that we needed this week of vacation to happen right now.</p>

    <p>So from a very determined emotional place, I shouted to the Universe, “Get 
      that hurricane out of here! We need sunny skies and warm temperatures for our 
      week on the water.”</p>

    <p>As we prepared to drive to Virginia, Louise expressed her concern that Floyd 
      was going to get in our way. I have no idea why, but for some reason I felt 
      confident in assuring her that we would get our wonderful vacation in all its 
      glory.</p>

    <p>As soon as we reached Virginia, we heard news that Floyd had hung up in its 
      path over the Atlantic. Hoping our luck would hold, we arrived in Huddleston, 
      Virginia at my parents' house.</p>

    <p>The weather was exactly as we had hoped it would be, and we wondered how 
      long Floyd would stay away.</p>

    <p>The folks on the Weather Channel were not optimistic. They were already in 
      the process of warning people who lived in low-lying areas about potential 
      flooding.</p>

    <p>We rented some jet skis with the intention of getting in as much water sports 
      activity as we could.</p>

    <p>According to Wikipedia, "Floyd triggered the fourth largest evacuation in US 
      history (behind Hurricane Irma, Hurricane Gustav, and Hurricane Rita) when 
      2.6 million coastal residents of five states were ordered from their homes 
      as it approached."</p>

    <p>By Thursday of that week, Floyd settled over the coast of North Carolina as 
      it drenched shoreline communities in that vicinity.</p>

    <p>Weather forecasters expressed their astonishment that it wasn't moving anywhere. 
      All of their computer models had shown that the most likely path was right through 
      inland Virginia, yet there it sat.</p>

    <p>By Friday, we felt much more relaxed and refreshed from all of our fun on the 
      water and visiting family. We felt like we had dodged a storm, and I suppose 
      that had literally been true.</p>

    <p>But what really surprised us was when we started on our trip back north to 
      Connecticut for the wedding.</p>

    <p>To our astonishment, Hurricane Floyd followed us up the coast. The storm very 
      politely waited for us to get home before it reached Connecticut as a tropical 
      storm, drenching New England.</p>

    <p>Wasn't that a considerate thing for it to do?</p>

    <p>Nine years later, I learned about the Law of Attraction, and when I told Louise
      about it, one of the first thing she said was, "Maybe that's how you kept the 
      hurricane at bay when we got married."</p>

    <p>I had not thought about it, but you know what? I think she was right.</p>
    
    <hr />

    <img class="img" src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '45'}">Back To Top</q-btn></p>
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