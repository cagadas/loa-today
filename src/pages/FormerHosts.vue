<template>
  <q-page class="flex-center">
    <h4 style="text-align: center; margin-bottom: 20px;">LOA Today Former Co&#8209;Hosts</h4>
    <q-img src="images/Joel.jpg" alt="Joel Elston" class="myImage"></q-img>
    <p>Joel ELston - <span class="bluetext">Joel was a guest on the 12th episode Walt recorded in 2012. He 
      was also a co-host from 2015 thru 2019, with an 8 month 
      break in the middle of 2017. His personal journey has been a remarkable story that started 
      in a gambling issue mixed with embezzlement and jail but which evolved into becoming a
      psychotherapist first and then a life coach who has helped hundreds of people to turn their
      lives around. At last count, he is also credited with finding forever homes for 43 boys
      who otherwise would have grown up to become permanent casualties of the foster care system.
      Click here to <a href="#joel" @click="myLink('https://www.joelelston.com/')">contact</a> him.
    </span>
    </p>
    <q-img id="uohna" src="images/Uohna-square.jpg" alt="Uohna June Thiessen" class="myImage"></q-img>
    <p>Uohna June Thiessen - <span class="bluetext">Uohna is Walt's sister-in-law. She was on the
      show from mid-2013 to mi-2014. She also did a short return engagement in 2020. Uohna has her
      PhD in Statistics and brought a scientific viewpoint to the show. You can contact her 
      on <a href="#uohna" @click="myLink('https://www.facebook.com/uohnajune')">Facebook</a></span></p>
    <q-img id="david-bartky" src="images/DavidBartky.jpg" alt="David Bartky" class="myImage"></q-img>
    <p>David Bartky - <span class="bluetext">David was a co-host in 2018. He is a life coach who did
      the Sunday night show with Walt during that time. You can contact him 
      at <a href="#david-bartky" @click="myLink('https://www.lifecoachdavid.com/')">lifecoachdavid.com</a></span></p>
    <q-img id="tom" src="images/TomWells.jpg" alt="Tom Wells" class="myImage"></q-img>
    <p>Tom Wells - <span class="bluetext">Tom was a co-host from December 2017 to April 2019. 
      He is a retired life coach and spiritual seeker who contributed to over 100 episodes on LOA Today.
      You can contact him 
      on <a href="#tom" @click="myLink('https://www.facebook.com/tom.wells.18659')">Facebook</a></span></p>
    <q-img id="wendy" src="images/WendyDillard.jpg" alt="Wendy Dillard" class="myImage"></q-img>
    <p>Wendy Dillard - <span class="bluetext">Wendy was a co-host from December 2017 to October 2018. 
      She is a professional life coach, spiritual mentor, and a hypnotherapist, and she recorded nearly 200 episodes with Walt. You can contact her 
      at <a href="#wendy" @click="myLink('https://wendydillard.com')">wendydillard.com</a></span></p>
    <q-img id="anne-marie" src="images/Anne-Marie.jpg" alt="Anne-Marie McEwen" class="myImage"></q-img>
    <p>Anne-Marie McEwen - <span class="bluetext">Anne-Marie was a co-host in 2018. She and her
      husband, Mike, did shows with Walt on Sunday evenings. She is the director of The Buttonwood
      Tree Performing Arts Center in Middletown, Connecticut. You can contact her 
      on <a href="#anne-marie" @click="myLink('https://buttonwood.org/')">buttonwood.org</a></span></p>
    <q-img id="patty" src="images/PattyFramo.jpg" alt="Patty Framo" class="myImage"></q-img>
    <p>Patty Framo - <span class="bluetext">Patty is a life coach who works in palliative care.
      She was a co-host in the second half of 2018. You can contact her 
      on <a href="#patty" @click="myLink('https://www.facebook.com/pframo')">Facebook</a></span></p>
    <q-img id="carlos" src="images/Carlos.jpg" alt="Carlos Balasquide" class="myImage"></q-img>
    <p>Carlos Balasquide - <span class="bluetext">Carlos was a co-host briefly in late 2018. He then left
      to pursue an acting and comedic career. That didn't work out, but he came back for a visit in 2020 to tell
      us his remarkable story about how things did turn out for him far better than he had previous
      hoped they would! You can contact him 
      on <a href="#carlos" @click="myLink('https://www.facebook.com/carlos.balasquide')">Facebook</a></span></p>
    <q-img id="mark" src="images/MarkEvans.jpg" alt="Mark Evans" class="myImage"></q-img>
    <p>Mark Evans - <span class="bluetext">Mark is a standup comedian who was briefly on the show
      in October and November 2018. You can contact him 
      on <a href="#mark" @click="myLink('https://www.facebook.com/mark.evans.5496')">Facebook</a></span></p>
    <q-img id="bill" src="images/BillGee.jpg" alt="William Gee" class="myImage"></q-img>
    <p>William Gee - <span class="bluetext">Bill was a co-host from December 2018 to September
      2019. He was also a co-host on a previous podcast Walt used to do called the freedom
      News Hour. He specializes in providing Spiritual Response Therapy services. You can contact him 
      at <a href="#bill" @click="myLink('https://www.ninagee.com/')">ninagee.com</a></span></p>
    <q-img id="astrid" src="images/Astrid.jpg" alt="Astrid Kauffmann" class="myImage"></q-img>
    <p>Astrid Kauffmann - <span class="bluetext">Astrid is Louis' sister-in-law, and she joined
      us on the show as a master practitioner of Jyu Jitsu. She appeared on the show primarily in 2019
      with one early appearance in 2018. You can contact her 
      on <a href="#astrid" @click="myLink('https://www.facebook.com/astridkauffmann')">Facebook</a></span></p>
    <p>Dark Dry Drew - <span class="bluetext">Drew is a former college student show spent a few
      months on the show learning about LOA in late 2018 and early 2019.</span></p>
    <q-img id="shelly" src="images/Shelly.jpg" alt="Shelly Epperly" class="myImage"></q-img>
    <p>Shelly Epperly - <span class="bluetext">Shelly was a co-host on the show from January to April
      of 2019. She is an eBay junkie and informal coach to her friends. You can contact Shelly 
      on <a href="#shelly" @click="myLink('https://www.facebook.com/shelly.epperly')">Facebook</a></span></p>
    <q-img id="steve" src="images/SteveRowell.jpg" alt="Steve Rowell" class="myImage"></q-img>
    <p>Steve Rowell - <span class="bluetext">Steve was a co-host on the show from January to April
      of 2019. He is a professional life coach. However, Steve is currently not
      available online.</span></p>
    <q-img id="kelly" src="images/kelly-pretty.jpg" alt="Kelly Pretty" class="myImage"></q-img>
    <p>Kelly Pretty - <span class="bluetext">Kelly was briefly a co-host on the show in February
      and March of 2019. She is a professional life coach. You can contact Kelly 
      on <a href="#kelly" @click="myLink('https://www.facebook.com/kelly.pretty.3')">Facebook</a></span></p>
    <q-img id="david" src="images/David_Strickel.jpg" alt="David Strickel" class="myImage"></q-img>
    <p>David Strickel - <span class="bluetext">David co-hosted here on the show from July through
      December of 2020. Having David on the show was like having our
      very own version of Abraham-Hicks, only more down-to-earth. David shares eternal wisdom 
      from a group of non-physical entities—a conscious energy—that he calls The Stream. He has
      had this ability as long as he can recall, and it has guided him through some very rough 
      times to a life of freedom and joy. David can also be reached on his
      <a href="#david" @click="myLink('https://www.facebook.com/strickel')">Facebook</a> page or in 
      his <a href="#david" @click="myLink('https://www.facebook.com/groups/378945439249736/')">TYA
      Global Awakening</a> group on Facebook.</span>  <a href="#david" @click="myLink('https://thestreamofdavid.mykajabi.com/registration-page')">Click here for FREE access to The Stream Of David's master class.</a></p>
    <q-img id="linda" src="images/Linda.jpg" alt="Linda Armstrong" class="myImage"></q-img>
    <p>Linda Armstrong - <span class="bluetext">is an energy coach, certified Theta Healer, GATE 
      Method Facilitator, and Master Law of Attraction Transformation Coach. Her mission is to help
      thousands of people to awaken to their true power to heal their lives and live from Love! 
      Linda joins Walt and Rita on Fridays at 4 PM New York time. You can contact Linda at
      <a href="#linda" @click="myLink('https://www.lovemylife.coach/company-contact-info/')">lovemylife.coach</a></span></p>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { Plugins, AppState } from '@capacitor/core';

export default {
  name: 'Former Hosts',
  mounted(){

  },
  methods: {
    myLink(myURL){
      openURL(myURL)
    }
  }
}
</script>
<style lang="stylus" scoped>
  p {
    margin-top: 6px;
    margin-bottom: 30px;
  }
  a {
    color: white;
  }
  .bluetext{
    color: aqua;
  }
  
</style>