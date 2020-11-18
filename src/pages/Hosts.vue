<template>
  <q-page class="flex-center">
    <h4 style="text-align: center; margin-bottom: 20px;">LOA Today Co&#8209;Hosts</h4>
    <q-img src="images/Walt.jpg" alt="Walt Thiessen" class="myImage"></q-img>
    <p>Walt Thiessen - <span class="bluetext">Walt founded LOA Today with his wife, Louise, on
      September 26, 2012 ... their wedding anniversary. His intention for the show is to
      help listeners achieve and maintain their highest vibration levels by giving them their daily
      dose of happy! Walt appears five days a week, Monday thru Friday at 4 PM New York time. 
      Click here to <a href="./index.html#/contact">contact</a> him.
    </span>
    </p>
    <q-img id="cindie" src="images/Cindie.jpg" alt="Cindie Chavez" class="myImage"></q-img>
    <p>Cindie Chavez - <span class="bluetext">In addition to being a fabulous life coach who specializes in 
      relationships, Cindie is one of the kindest and most lighthearted people you will ever 
      listen to. She cohosts with Walt on Wednesdays at 4 PM New York time. You can contact her 
      at <a href="#cindie" @click="myLink('https://www.cindiechavez.com/contact-cindie/')">cindiechavez.com</a></span></p>
    <q-img id="linda" src="images/Linda.jpg" alt="Linda Armstrong" class="myImage"></q-img>
    <p>Linda Armstrong - <span class="bluetext">is an energy coach, certified Theta Healer, GATE 
      Method Facilitator, and Master Law of Attraction Transformation Coach. Her mission is to help
      thousands of people to awaken to their true power to heal their lives and live from Love! 
      Linda joins Walt and Rita on Fridays at 4 PM New York time. You can contact Linda at
      <a href="#linda" @click="myLink('https://www.lovemylife.coach/company-contact-info/')">lovemylife.coach</a></span></p>
    <q-img id="louis" src="images/Louis.jpg" alt="Louis de Souza" class="myImage"></q-img>
    <p>Louis de Souza - <span class="bluetext">Louis is an adept follower of the teachings of
      Abraham-Hicks and brings a calm, unique perspective to the show. During his younger years 
      he suffered from a variety of ailments, illnesses, and chronic conditions, all of which he 
      healed using his knowledge of the Law of Attraction. Louis joins Ami and Walt on Mondays 
      at 4 PM New York time. You can reach out to Louis on 
      <a href="#louis" @click="myLink('https://www.facebook.com/Louisdesouza')">Facebook</a>.</span></p>
    <q-img id="alyx" src="images/Alyx-wide.jpg" alt="Alyx King" class="myImage"></q-img>
    <p>Alyx King - <span class="bluetext">Alyx originally joined the show because of her comedic 
      background, but she also brings her "unicorn sparkle" to every episode. She is the lead writer 
      of our fictional podcast series, <em>The Grass Is Greener,</em> and she plans to wed her fianc&eacute;, Kenny, 
      whom she met on Facebook using the Law of Attraction. She joins Dan and Walt on Tuesdays and 
      Thursdays at 4 PM New York time. You can reach out to Alyx on 
      <a href="#alyx" @click="myLink('https://www.facebook.com/alyx2549')">Facebook</a>.</span></p>
    <q-img id="dan" src="images/Dan.jpg" alt="Dan Mangena" class="myImage"></q-img>
    <p>Dan Mangena - <span class="bluetext">Dan is the author of the book, <em>Stepping Beyond 
      Intention</em> and CEO at Dreamer HQ. He runs a number of groups and master 
      classes on Facebook and is an absolute expert at teaching people how to successfully 
      manifest what they want most in life. Dan does the Tuesday and Thursday shows with Alyx and 
      Walt at 4 PM New York time. You can reach Dan on 
      <a href="#dan" @click="myLink('https://www.facebook.com/dreamwithdan')">Facebook</a> or at
      his <a href="#dan" @click="myLink('https://dreamwithdan.com/contact/')">Dream With Dan</a> 
      website. Also, check out his 
      <a href="#dan" @click="myLink('https://www.facebook.com/groups/dreamwithdan/')">Dream With 
      Dan</a> group on Facebook</span></p>
    <q-img id="rita" src="images/Rita.jpg" alt="Rita Gigante" class="myImage"></q-img>
    <p>Rita Gigante - <span class="bluetext">The author of <em>The Godfather's Daughter: An Unlikely 
      Story of Love, Healing, and Redemption,</em> Rita's father was the notorious NYC crime boss, 
      Vincent "the Chin" Gigante, head of all five New York crime families. But today she is a 
      psychic healer and life coach who brings a uniquely "New York" viewpoint to the topics we 
      discuss on the show. Rita joins Linda and Walt on Fridays at 4 PM New York time. You can find 
      Rita on <a href="#rita" @click="myLink('https://www.facebook.com/rita.gigante.16')">Facebook</a>.</span></p>
    <q-img id="david" src="images/David_Strickel.jpg" alt="David Strickel" class="myImage"></q-img>
    <p>David Strickel - <span class="bluetext">The Stream of David is here, and it's like having our
      very own version of Abraham-Hicks, only more down-to-earth. David shares eternal wisdom 
      from a group of non-physical entities—a conscious energy—that he calls The Stream. He has
      had this ability as long as he can recall, and it has guided him through some very rough 
      times to a life of freedom and joy. He shares The Stream now with LOA Today listeners, 
      during these challenging times for those who are ready, those who are aligned (or wish to be)
      with higher vibrational living. Discover a life of joy, clarity and abundance. Enjoy this 
      special time and live the life you came here to experience. Ask your questions of The Stream
      Tuesdays here on LOA Today. David can also be reached on his
      <a href="#david" @click="myLink('https://www.facebook.com/strickel')">Facebook</a> page or in 
      his <a href="#david" @click="myLink('https://www.facebook.com/groups/378945439249736/')">TYA
      Global Awakening</a> group on Facebook.</span> <a href="#david" @click="myLink('https://thestreamofdavid.mykajabi.com/registration-page')">Click here for FREE access to The Stream Of David's master class.</a></p>
    <q-img id="ami" src="images/Ami-wide.jpg" alt="Ami Blackford" class="myImage"></q-img>
    <p>Ami Blackford - <span class="bluetext">Ami brings a breath of fresh air and high energy to
      Monday's show with Louis de Souza. She lives in Atlanta, Georgia and is a self-proclaimed 
      word nerd. She's always on the hunt for a great story to escape into.  She is so passionate 
      about the Law of Attraction and how important this skill is to learn and practice, especially 
      these days. Ami can also be reached via 
      <a href="#ami" @click="myLink('https://ami-blackford.com/contact')">her website</a>.</span></p>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { Plugins, AppState } from '@capacitor/core';

const { App } = Plugins;

App.addListener('appStateChange', (state) => {
  // state.isActive contains the active state
  console.log('App state changed. Is active?', state.isActive);
});

var ret = App.canOpenUrl({ url: 'com.getcapacitor.myapp' });
console.log('Can open url: ', ret.value);

ret = App.openUrl({ url: 'com.getcapacitor.myapp://page?id=ionicframework' });
console.log('Open url response: ', ret);

ret = App.getLaunchUrl();
if(ret && ret.url) {
  console.log('App opened with URL: ' + ret.url);
}
console.log('Launch url: ', ret);

App.addListener('appUrlOpen', (data) => {
  console.log('App opened with URL: ' +  data.url);
});

App.addListener('appRestoredResult', (data) => {
  console.log('Restored state:', data);
});
export default {
  name: 'Hosts',
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