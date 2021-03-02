<template>
  <q-page class="flex-center">
   <h5 class="h5 bottom0">Manifesting an Apartment on Central Park West</h5>
    <h6 class="h6">by David Scott Bartky</h6>

    <p>Many years ago before I became a professional life coach, I moved from Los Angeles to 
      New York. While in Los Angeles, I learned about the Law of Attraction from Michael 
      Beckwith many years before he appeared in the movie, <em>The Secret</em>.</p>

    <p>When I moved to New York City, I became part of the masses who raced to see any new 
      apartment listing. Since I didn’t have a large budget, most of the apartments I ran to 
      ended up being very disappointing. They were either too small or had some weird quirk 
      about them that for me made them undesirable.</p>

    <p>After many of these cattle call type experiences, I suddenly had an “ah ha” moment. 
      I remembered the Law of Attraction and how powerful it is. I thought to myself, “Why am 
      I looking at these apartments all over New York City when I always dreamed about living 
      on Central Park West?” I thought this despite the fact that my budget didn’t qualify for 
      an apartment on one of the nicest streets in New York City. So in an instant I went from 
      an “I’ll take anything” attitude to an “I know exactly what I want, and that’s all I’m 
      interested in!” attitude. How could my dream of rollerblading from my apartment building 
      into Central Park become a reality?</p>

    <p>I learned from Beckwith that what I focus on is what I attract. I didn’t have to know 
      how it would happen. I just had to get into the vibration of what I wanted and expect it 
      to happen.</p>

    <p>After my wonderful “ah ha” moment, I called my Realtor and told him, “Don’t let me know 
      about anything unless it’s on Central Park West.” Silence on the other end of the phone 
      told me he thought I was crazy. After the silence he said, “Well, that’s a tall order, 
      but I’ll keep my ears open.” I thanked him, and I never looked at another “for rent” ad 
      again. I just trusted that it would happen and went about my business. Within two weeks 
      I received a phone call from that Realtor about a studio apartment coming available in a 
      building on Central Park West. It was $500 more than what I could afford. He asked me if 
      I was interested. I didn’t hesitate: “YES!”</p>

    <p>Why did I agree to go look at an apartment that was $500 more than I could afford? 
      Because I know that anything is possible, so why not look at it? I met him outside the 
      building. The lobby was so nice it took my breath away. The elevator was the nicest one 
      I had ever been in. It had oriental birds painted on the walls. I was ready to move in 
      before I saw the apartment!</p>

    <p>We walked into the apartment. I knew it was perfect for me. The tenant, who wasn’t 
      supposed to be home, was gathering some things. I asked her why she was moving. She told 
      me her mother was ill, and she had to go back home to care for her. She also said I was 
      the first one to see the apartment and that since she was breaking the lease, the owner 
      didn’t want it to sit empty. I got the nerve up to ask her how much she was paying per 
      month. She told me, and it was exactly what I could afford!</p>

    <p>I guess the owner was told she could charge $500 more, so that’s why she raised the 
      price. However, since I knew what the current tenant was paying I told the building 
      manager that I wanted the apartment, and I offered $25 more than what the current tenant 
      was paying. My Realtor told me that that wouldn’t be enough, but it really was all I 
      could afford, so I asked the building manager to propose my offer to the owner.</p>

    <p>The next day I found out that the owner accepted my offer, and I got the apartment. A 
      few weeks later I moved in. Thank you Law of Attraction. I loved living in that apartment!</p>

    <hr class="hr" />

    <img class="img0" src="images/DavidBartky.jpg" />

    <p class="signature">David Scott Bartky<br />
    Life Coach David<br />
    Web Site: <a class="a" @click="myLink('https://www.facebook.com/lifecoachdavid')">lifecoachdavid.com</a><br />
    Facebook: <a class="a" @click="myLink('https://www.lifecoachdavid.com/')">@lifecoachdavid</a></p>    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '2'}">Back To Top</q-btn></p>
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