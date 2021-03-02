<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">I’ll Have an Owl, Please</h5>
    <h6 class="h6">by Cindie Chavez</h6>

    <p>If you could ask for anything and have it show up in the next 48 hours what 
      would you ask for?</p>

    <p>I asked for an owl.</p>

    <p>I know, that sounds a bit weird looking back on it, but I think owls are really 
      cool, and I guess I was having a hard time believing I could manifest world peace 
      or a new Mercedes in 48 hours.</p>

    <p>It all started when a friend of mine popped into an online group we both frequent 
      and asked if anyone had ever read the books E<sup>2</sup> and E<sup>3</sup> by Pam 
      Grout. These two books are a collection of Law of Attraction experiments: easy to 
      follow exercises to put the Law of Attraction to use and to the test!</p>

    <p>I read E<sup>2</sup> a few years before, but had never even heard of E<sup>3</sup>, 
    so I ordered the new book, went to my bookshelf, and grabbed E<sup>2</sup> to give it 
    a quick re-read. As I opened it I saw a bookmark on a particular experiment.</p>

    <p>This experiment was very, very simple. It basically consisted of two parts:</p>

    <ol>
      <li>Ask the Universe for something.</li>
      <li>Receive it within 48 hours. </li>
    </ol>

    <p>Hmmm, well that sounded easy enough. And that’s one of my mottos: “Easy Peasy”. So I 
      decided to dive right in with my request to the Universe:</p>

    <p>I'll have an owl, please.</p>
    
    <p>Like all of the experiments in these books, this one had a lab sheet with a space to 
      record date and time. I recorded January 14, 2015, 10:15am Central Standard Time.</p>

    <p>This was certainly not the first time that I asked the Universe for something or the 
      first time that I decided to “deliberately create” an outcome using the Law of Attraction.</p>

    <p>However, it felt a little scary doing it “in public”. Even though I’d been teaching the 
      Law of Attraction for over a decade, I didn’t usually declare in a public way what I was 
      going to consciously create. After all, it was easier to share the whole story 
      <em>after</em> I got the result. This was probably my biggest fear: what if nothing 
      showed up?</p>

    <p>I dealt with this fear right away by recognizing that if nothing showed up I’d just let 
      everyone know that nothing showed up (or that I missed seeing it somehow!). After all, 
      it’s just an experiment, right?</p>

    <p>So it was settled. I asked for an owl.</p>

    <p>I wasn't sure how the owl would show up. I figured that someone would send me a greeting 
      card with an owl on it – or maybe the postage stamp on the electric bill would have a 
      picture of an owl – or some product I needed would arrive with an owl on the label 
      &ndash; or that I'd get an email with an owl in the banner – or I’d see a child at the 
      grocery story wearing an owl plushie – or something like that.</p>

    <p>I didn't know how the owl would show up, but I felt absolutely certain that it would.</p>

    <p>Each time I worried that maybe nothing would show up, I had an equally strong feeling 
      that an owl was definitely going to show up.</p>

    <p>However, I did not expect what happened just 26 hours later.</p>

    <p>I sat in my office sitting at my desk, which faces a window. While working on a writing
      project and lost in thought, I heard a loud rustling sound and looked up to see a huge 
      owl, with a wingspan of more than four feet, fluttering close enough to my window that 
      his wings brushed against it. This beautiful owl seemed to fly up from the ground, 
      skimming my window all the way up to the roof.</p>

    <p>Now, that might not seem like a miracle to you if you live in the country. However, 
      I live in the city on a busy thoroughfare. Occasionally I see a cardinal or a blue jay 
      from my window, but the only owl I've ever seen in person was at a renaissance fair 
      until this owl appeared at my window. It was real, and it was spectacular.</p>

    <p>My heart beat fast, and I almost burst into tears when I realized that my owl had 
      arrived in such a wondrous demonstration. Every “vision” that I had imagined for the 
      possible manifestation of my owl was so much smaller than what actually happened.</p>

    <p>Never in a million years had I expected a real, live, gorgeous, fluttering owl to appear 
      at my window!</p>

    <p>If you could send the Universe a request for something to appear in your life in the next 
      48 hours, what would it be?</p>
    
    <hr />

    <img class="img" src="images/CindieChavez.jpg" alt="">

    <p class="signature">Cindie Chavez, the “Love & Magic Coach,” is the creator of MOONLIGHT: 
      A Course in Manifesting Love, and is a best selling author, Certified Life and 
      Relationship coach, and Energy Leadership Master Practitioner. She co-hosts on LOA 
      Today.</p>
    <p class="signature">Website: <a @click="myLink('https://www.cindiechavez.com/')">cindiechavez.com</a></p>

    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '43'}">Back To Top</q-btn></p>
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