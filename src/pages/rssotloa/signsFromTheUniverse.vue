<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Signs from the Universe</h5>
    <h6 class="h6">by Susan Shearer Young</h6>

    <p>I lived in Washington, D.C. in a beautiful neighborhood near the National Cathedral. 
      I loved everything about it. Our house was a 100-year-old Victorian with a large front 
      porch. I had installed a porch swing with pillows and comfortable wicker chairs. I 
      loved to sit on the porch and wave hello to neighbors and people passing by.</p>

    <p>People constantly yelled up to me, “I love your house. You look so comfortable.”</p>

    <p>And I was. The huge draw of this particular neighborhood was several excellent schools, 
      all within walking distance. My three children attended three of the schools, and it 
      felt magical to have them walk to school after years of commuting in heavy traffic into 
      the city.</p>

    <p>Our house was a haven for their friends as well, and there were constantly kids in our 
      house, plopping down and talking about what was going on at school, who said what, who 
      did this. It was so nice to be connected and tuned into the lives of my kids and their 
      friends.</p>

    <p>It was very hard to get a house in this neighborhood, precisely because of all of the 
      good aspects this highly desirable neighborhood featured. Houses rarely came on the 
      market, and when they did they were snatched up, sometimes in just one day. It took us 
      nearly two years to get our perfect home, and there were multiple bids.</p>

    <p>My very close friend also had kids who attended those schools, and she still drove the 
      very stressful commute into Washington daily, back and forth for school events and sports 
      practices. It was exhausting. It meant getting up earlier, getting home later, and it was 
      much harder for her kids to socialize with their friends, which required navigating D.C. 
      traffic during rush hour. My friend really, really wanted to move into D.C. Her top 
      choice was our neighborhood.</p>

    <p>I sat in my home office one day, working on a book about the Law of Attraction, which I 
      ultimately published. I was in the zone, focusing upon great ideas, writing, thinking, 
      and just absolutely enjoying what I was doing.</p>

    <p>Strangely, I felt the impulse to go to our basement and straighten out a bookcase. We 
      had moved into the house nearly a year earlier, and it popped into my head that I had 
      never really organized any of the things in that bookcase. It felt a bit strange, as it 
      wasn’t a top priority. It was in the basement after all!</p>

    <p>The basement was mostly a kid hangout, and I had plenty of other things to do. Yet, 
      when I reflect back, it was like I was being moved, nudged to go to that bookcase and 
      put things in order.</p>

    <p>As I began to stack up the books and some files, I noticed on top the closing file from 
      the purchase of our home. I have no idea how it ended up in that bookcase, because I had 
      a filing cabinet. For some reason I felt the nudge to look in the file. On the top of 
      the papers was a check in the amount of $2,500, made out to my husband and I. It was a 
      refund of excess funds from our escrow account. It had never been cashed, and I was 
      happily shocked to find it.</p>

    <p>It occurred to me that because the check was rather dated, I should call the real estate 
      agent who wrote the check and let her know that I would be depositing it. She was a very 
      successful and connected agent who had helped us to get our home in that desirable 
      neighborhood. She could sometimes get people houses when there was stiff competition, 
      and she had done exactly that for us.</p>

    <p>So I phoned her about the un-cashed check. As we chatted briefly, she mentioned that 
      there was a home near ours that was likely to come on the market that weekend. She was 
      going to make a presentation to try to get the listing. I was thrilled when I heard the 
      news, as I knew of the house, and it was beautiful and only ONE BLOCK FROM MY HOUSE! My 
      friend would love it; it was perfect for her family.</p>

    <p>Despite being excited, I knew that having that information was no guarantee that my 
      friend could get that house. It would be competitive. There were lots of moving parts. 
      I told the agent about my friend and arranged for them to talk. As I’m sure you’re 
      imagining now, our agent represented my friend and her husband in the stiff competition, 
      and they got the house.</p>

    <p>Not only did I appreciate the manifestation and my ability to sit on my front porch 
      and drink a glass of wine with my dear friend with no need for prescheduling, but I 
      really appreciated learning how sometimes our best manifestations come with just a 
      series of gentle nudges that light up the path of least resistance.  Very ordinary 
      nudges can lead to extraordinary results.</p>

    <hr class="hr" />

    <img class="img" src="images/SusanYoung.jpg" alt="">

    <p class="signature">Susan Shearer Young is an award-winning Law of Attraction coach 
      who helps her clients live the abundant lives they desire. She is also the author 
      of <em>How to Allow, chosen as Best of Books on Law of Attraction</em> in 2012 and 
      nominated in 2015.</p>
    <p class="signature">Website: <a class="a" @click="myLink('https://howtoallow.net/')">howtoallow.net</a></p>
    
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '12'}">Back To Top</q-btn></p>
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