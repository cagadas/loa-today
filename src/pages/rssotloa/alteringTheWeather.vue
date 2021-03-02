<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Altering the Weather</h5>
    <h6 class="h6">by Louise Thiessen</h6>

    <p>During our week of “staycation” one January we had plans to go to Old 
      Town Alexandria, Virginia to visit a metaphysical bookshop, have lunch, 
      and window shop.</p>

    <p>For those of you who have never been there, Old Town Alexandra is paved 
      with cobble stones, the streets are named after British royalty, and many 
      of the streets contain small townhouses that have a definite lean to them 
      where the ground has settled throughout the centuries.</p>

    <p>The previous day’s weather had not been conducive to outdoor activities, 
      so on the Friday before we were to go, I projected that Saturday would be 
      sunny, warm, and mid 50’s (remember, this was January), and no clouds.</p>

    <p>We awoke to cold, gray, overcast skies, and I began to wonder what 
      happened to my lovely day.</p>

    <p>We decided to go anyway, and as we drove my husband reminded me to envision 
      what I did want, not to focus on what was currently happening.</p>

    <p>As you drive the D.C. beltway to Alexandria, the view of the skyline is 
      pretty well unobstructed by hills and tall buildings, so you can see quite a 
      distance ahead. All I saw were gray, cloud-filled skies, but I kept picturing 
      the sunny, warm day I had projected.</p>

    <p>As we approached the exit for Old Town Alexandria, I watched as the clouds 
      began to part and a sliver of sun began to shine down solely and only over 
      our destination.</p>

    <p>Could this really be happening? Only in the area where we were headed? Not 
      to the north, not to the south, not to the east or west?</p>

    <p>It remained sunny and warm long enough for us to walk around, shop, and even 
      eat lunch outside in January. Even in temperate Virginia, this is uncommon.</p>

    <p>We got to eat ice cream and sit down by the Potomac River for awhile. My 
      husband and I love good, homemade ice cream, and I had no more than fleeting 
      thoughts about finding some in Old Town Alexandria in January. We saw people 
      walking by us and asked someone where they had gotten their delicious-looking 
      cones. They pointed us in the right direction. The ice cream proved scrumptious, 
      and I was thrilled that they had my favorite winter flavor, maple walnut.</p>

    <p>What a lovely, restful, fun day we had as the clouds remained parted over our area!</p>

    <p>Just as we finished our treats and talked about heading back to the car to 
      drive home, the clouds began to gather. We had done all we set out to do, so 
      we headed back to the car for the ride home.</p>

    <p>As we drove out of town, the clouds closed in and covered the previous area of 
      sunshine, and we marveled at the power we were coming to believe was ours to tap 
      into anytime we wanted.</p>

    <p>The Law of Attraction is real, available, and powerful. I now know that by staying 
      in a positive, happy attitude, many wonderful experiences, people, objects, and 
      things will come into my life.</p>

    <hr />

    <img class="img" src="images/LouiseThiessen.jpg" alt="">

    <p class="signature">Louise Thiessen is a former psychotherapist and currently owns 
      a local gardening services and maintenance business, 
      <a @click="myLink('https://gardensbylouise.com/')">Gardens By Louise</a>. She is 
      also an occasional co-host of LOA Today. She lives with her husband, Walt, and 
      two black cats, Harmony and Joy, in Simsbury, CT</p>

    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '47'}">Back To Top</q-btn></p>
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