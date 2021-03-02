<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">No More Snow</h5>
    <h6 class="h6">by Walt Thiessen</h6>

    <p>In March 2018 as I began editing the story submissions for this book, 
      a series of snowstorms blanketed the Northeastern portion of the United 
      States. By the end of the month, my wife's gardening services business 
      was preparing to open for the season. This would be a problem with snow 
      on the ground. Finances were tight, so we needed to get going as soon as 
      possible.</p>

    <p>With a fourth nor'easter scheduled to hit the area on March 21, 2018, 
      I decided it was time to take action. As I detailed in other stories in 
      this book, I have quite a bit of experience influencing the weather. It 
      was time to put my influence to use once again.</p>

    <p>The weekend before the storm, weather forecasts projected anywhere up to 
      14 inches of snow. The day before the storm, the forecast had resolved down 
      to the range of 10 to 14 inches.</p>

    <p>I decided we would have zero inches. How do you do that when the weather 
      forecasters have better information than you do? I do what I always do in 
      such situations: I focus on my ideal weather situation.</p>

    <p>I began to imagine a beautiful sunny day with blue skies and little puffy 
      white clouds. Temperatures would be around 70°F, with only a slight breeze 
      to gently caress the skin. This is my favorite, go-to vision to imagine 
      whenever I want to influence the weather. I do not claim the ability to 
      control the weather, only to influence it. But I do know that if I want 
      to influence the weather, I can do it provided that I become really focused 
      and excited about my ideal weather vision.</p>

    <p>A belief is a thought that you think over and over again, as Abraham-Hicks 
      teaches. I take that definition to heart by continuing to focus on my 
      beautiful imagined weather scene continuously for as long as I am able to 
      maintain my focus. Hold my focus for a minute, and some level of 
      manifestation will happen. Keep focusing for minutes at a time, and the 
      manifestation will become closer and closer to my ideal.</p>

    <p>While I have never succeeded at completely manifesting the ideal weather 
      conditions on the day of a scheduled storm of some kind, I have often wondered 
      if I could manage it by focusing on my idealized scene for, say, 24 hours 
      straight. That would take a lot of concentration. It might be an interesting 
      test to try someday.</p>

    <p>For this moment, I merely settled for focusing on my idealized scene for 
      perhaps 10 to 15 minutes. I kept focusing until I really believed deep down 
      that I was going to see a major shift in the weather pattern. I went to sleep 
      that night believing that at the very least we would end up having no snow.</p>

    <p>The next morning, I awoke to find no new snow on the ground. The weather 
      forecasters were not convinced. They assured us that the snow would start 
      falling by 8 AM. I smiled quietly to myself and disagreed, sticking to my 
      original intention. By 11 AM, there was still no new snow on the ground. 
      Forecasters were now saying that the snowfall would start at around 1:30 PM.</p>

    <p>Of course, 1:30 PM came and went with no new snow falling on the ground. 
      My smile started to get really big by this point. At 3 PM, as I prepared 
      to do my daily afternoon podcast with Wendy Dillard, I took one quick glance 
      at the latest weather report and learned that a new and unexpected high 
      pressure system had surprisingly formed above northern Connecticut, and this 
      was inhibiting the projected snowfall.</p>

    <p>I laughingly told Wendy about this at the beginning of our podcast, 
      sticking to my original intention that we would have no snow, although 
      I did modify it to say that we might possibly get a dusting of it in 
      the morning.</p>

    <p>That night, I went to bed with still no new snow on the ground. The next 
      morning I woke up and found a dusting of snow on the windshields of the 
      cars. That's it. The 10 to 14 inch projection had reduced to a dusting. I 
      take full credit.</p>

    <p>New Jersey and downstate New York got blanketed with snow. Most of 
      Connecticut got little to none, despite the fact that we were the next 
      stop on the storm’s projected path.</p>

    <p>This is not a power that I hold exclusively. Everyone can do this. You 
      just have to learn to focus, believe, and let it go.</p>
    
    <p>Then stand back and watch as the weather system produces a new result that
      makes you marvel at the power of the human mind.</p>
      
    <hr />

    <img class="img" src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '49'}">Back To Top</q-btn></p>
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