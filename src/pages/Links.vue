<template>
  <q-page class="flex-center">
    <h4 class="center" style="position: relative;">Links To Web Pages And Apps</h4>
    <div style="margin: 0 auto;width: 280px;position: relative;">
      <div style="position: relative;">
        <a href="#" @click="myLink('https://www.amazon.com/Your-Daily-Dose-Happy-Attraction-ebook/dp/B07D6DR3RV/ref=sr_1_2?dchild=1&amp;keywords=your+daily+dose+of+happy&amp;qid=1593257176&amp;s=books&amp;sr=1-2&_encoding=UTF8&tag=professiona07-20&linkCode=ur2&linkId=dce69a0475f1892958336cc259c941c2&camp=1789&creative=9325')">
          <img class="image" src="images/your-daily-dose-of-happy.jpg" alt="Your Daily Dose Of Happy: Real Life Success Stories Of The Law Of Attraction">
        </a>
      </div>
      <a href="#" @click="myLink('https://www.youtube.com/c/loatodaypodcastvideos/live')"><img class="image" src="images/Youtube-live-streaming.png" alt="YouTube Livestream"></a>
      <a href="#" @click="myLink('https://www.loatoday.net')"><img class="image" src="images/favicon-128x128.png" alt="LOA Today Website"></a>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  methods:{
    myLink(myURL){
      openURL(myURL)
    }
  }
}
</script>

<style scoped>
</style>