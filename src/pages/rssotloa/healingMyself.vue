<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Healing Myself</h5>
    <h6 class="h6">By Jean Yang</h6>

    <p>Since I became a young woman, I dealt with severe menstrual cramps and heavy bleeding 
      during my periods. I dreaded that time of the month. Things got so bad for me that I 
      finally went to the doctors. They found a large growth the size of an orange on my left 
      ovary that needed to be removed. I had my surgery, and the doctor had to remove my left 
      ovary as well as the growth, which turned out to be benign endometrioma. The diagnosis 
      was endometriosis.</p>

    <p>After recovery from surgery, I remember still having to deal with very painful cramps 
      every month, as well as heavy bleeding that sapped my energy and stamina. It was so bad 
      that one day on my 70 minute morning walk, I could not make it back home. I had to lie 
      down on a concrete bench because I did not have enough strength to move my body. I 
      rested for a good bit of time before I could gather enough strength to slowly get back 
      home.</p>

    <p>I became desperate and sought help on the web. I found a lady named Carolyn Levett 
      and got her book, <em>Reclaim Your Life – Your Guide to Aid Healing of Endometriosis.</em> 
      Along with dietary and lifestyle changes, Ms. Levett suggested Reiki as helpful for 
      those suffering from endometriosis. Reiki piqued my interest, even though I had never 
      heard of it before.</p>

    <p>I found a Reiki instructor named Karen Harrison from Kansas City, who came into the 
      Dallas area a few times a year to teach. I quickly signed up for her class, which 
      started not long afterward.</p>
      
    <p>Meanwhile, the changes in diet Ms. Levett suggested in her book and on her website, 
      <a class="a" @click="myLink('https://www.endo-resolved.com/')">www.endo-resolved.com,</a>
      helped me quite a bit with pain management. A Reiki news magazine mentioned Louise 
      Hay, whom I had not heard of before. I bought her book, <em>You Can Heal Your Life,</em>
      and watched her movie of the same title. I enjoyed the movie, but none of the authors 
      and teachers interviewed stood out to me.</p>

    <p>About a month later, I watched the movie again with my friend, Elizabeth. She pointed 
      out to me her favorite speaker interviewed at the end of the movie, which turned out 
      to be Abraham, a collective consciousness received by Esther Hicks.</p>

    <p>I went back to watch that particular interview again after my friend left and took 
      note of the book mentioned in the interview, <em>Ask and It Is Given.</em> After I 
      purchased and read the book, I cannot tell you all the changes that it made in my 
      life! I have read many of their other books, watched their DVDs, attended workshops, 
      and traveled the world on several Abraham cruises. Coincidentally, those Abraham 
      cruises helped me realize one of my fondest dreams, which is to travel and see this 
      beautiful world of ours. As an artist, I must say those experiences in themselves 
      are priceless!</p>

    <p>A beautiful young man I met on an Abraham cruise in the Mediterranean showed me a 
      book he’d been reading that fascinated him. It was <em>Seth Speaks: The Eternal 
        Validity of the Soul,</em> by Jane Roberts. I later overheard an older gentleman 
        mention the same book. Then on my plane ride home from the cruise, a lady sitting 
        to my left next to the window was reading a novel, and I was inspired to look 
        over at what she was reading. Lo and behold the name Seth popped out from the left 
        page of the book she was reading, as if a spot light was shining on it! Obviously, 
        the Universe was trying to get my attention. Of course I took the hint and 
        purchased and read the book. It absolutely blew my mind.</p>

      <p>Everything was delicious on my journey of discovery: the people I met, the clarity 
        I received, ever improving health, all of the synchronicity that guided me to even 
        more fun and stuff that I have asked for through the living of life. Needless to say, 
        I am so much happier than I have ever been, so much so that others who have known 
        me have remarked upon my transformation.</p>

      <p>One transformation that is clearly visible to those around me is that my skin that 
        use to give me trouble has cleared up, and friends and family often tell me how 
        much happier and better I look these days. Louise Hay’s book, <em>You Can Heal Your 
        Life,</em> gave the probable cause of acne as, “Not accepting the self. Dislike of 
        the self.” It made sense to me.</p>

      <p>As for the endometriosis, I prayed for and received an early menopause at the age 
        of 48. I had some trepidation about menopausal symptoms, but they were really mild 
        and easy to deal with compared with the pain I had to deal with on a monthly basis. 
        And since then, I just keep feeling better and better.</p>

      <p>I so appreciate the joy and clarity I have discovered and am passionate about 
        sharing it with others who are ready for this information.  This is such an 
        exciting time to be alive on Earth. It really is the time of awakening as more 
        and more of us are ready to remember who we really are and the power we hold in 
        our own hands.</p>

    <hr class="hr" />

    <img class="img" src="images/JeanYang.jpg" alt="" style="margin-bottom: 60px;">

    <p class="signature">Jean Yang is an intuitive adviser, a licensed massage therapist, 
      a Reiki master, and an artist.</p>
    <p class="signature">Jean can assist you in pinpointing those thought patterns or 
      beliefs that are hindering you from success, health, and happiness.</p>
    <p class="signature">Website: <a class="a" @click="myLink('https://www.jeanyangwellbeing.com/')">jeanyangwellbeing.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '21'}">Back To Top</q-btn></p>
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