<template>
  <q-page class="flex-center">
    <h5 class="h5">A New Healing Center</h5>
    <h6 class="h6">by Clarissa Barraza</h6>

    <p>In April of 2017, I felt a strong need to relocate my office space somewhere I could 
      grow my business even more.</p>

    <p>I easily visualized a gorgeous courtyard entrance with a glassy pool in the center 
      surrounded by lush green palm trees, tropical plants, and plush seating for clients 
      to relax before and after their appointments. Beyond the courtyard, I imagined rooms 
      occupied by a variety of other healers and practitioners services.</p>

    <p>Two nights later, I searched using keywords such as healing centers and spas. To my 
      amazement, I found an announcement of the grand opening of a spa very close to my 
      residence. I got excited when I saw the photograph of the storefront. It showed a 
      beautiful Southwestern stucco building with tall, sunlit, beveled glass windows and 
      doors, elegant Spanish tile, and archways. I knew I had to go view this place!</p>

    <p>As luck would still have it, the location was only ten minutes from my home. After 
      work the following day, I visited the address around dusk. I remembered seeing this 
      building in passing over the years but had never been curious enough to look beyond 
      the driveway.</p>

    <p>I saw a "For Lease" sign at the front of the property. I parked my car and walked 
      around, surveying the environment and even peeping through the windows.</p>

    <p>It was difficult to see inside because the glass was tinted and slightly distorted 
      from the beveling. A maintenance truck with lawn equipment was parked outside, but 
      I didn't see anyone else as I wandered about.</p>

    <p>The driveway was landscaped with manicured sage bushes with long purple blossoms, 
      along with yellow-flowered cacti and agave succulents. It resembled a desert oasis.</p>

    <p>There was a palpable sense of magic in the air. The area was lit with a pinkish, 
      golden yellow and hints of purple.</p>

    <p>A fountain stood at the center of the courtyard, accompanied by more greenery and 
      framed with brick archways all around. Wooden beams rose overhead, and plenty of 
      leisurely seating was spaced throughout the courtyard.</p>

    <p>Surrounding this open area were ten individual office spaces, each with a lovely 
      arched door and windows with etched, beveled glass. Tile entryways enhanced the 
      already picturesque environment. I was astonished. It was just as I envisioned it!</p>

    <p>After a bit, an older gentleman exited one of the vacant offices, so I introduced 
      myself and told him of my interest in leasing a space. He graciously offered to 
      show me all the spaces for lease.</p>

    <p>As we walked, he explained that the doors, windows, and tile were imported from Mexico. 
      He even provided a blueprint of the offices.</p>

    <p>They all seemed so lovely, but they turned out to be too big for me to lease on my own.</p>

    <p>Nevertheless, I called the property manager immediately and left my contact information.</p>

    <p>Afterwards, I took photos of the exterior in the evening light. I couldn’t wait to show 
      them to my friends and family!</p>

    <p>If I could gather enough interest, I figured we could share and create our own healing 
      center. But while everyone loved the property, no one was interested in sharing the space.</p>

    <p>I had met Wendy in April 2016 on an Abraham-Hicks land cruise in Cancun. We talked for 
      about three minutes on an elevator. We were both from the Dallas area and quickly 
      exchanged business cards.</p>
    
    <p>Wendy and I did not initially maintain contact after our original meeting, but in November 
      2016 we reconnected at an Abraham-Hicks seminar in Dallas.</p>

    <p>This time we kept in touch, and over the next few months, Wendy kept mentioning that 
      I should meet her friend, Keisha, with whom she said I would have a lot in common. 
      The following April, right around the time that I found my dream office space, Wendy 
      organized a brunch with me and Keisha.</p>

    <p>A few weeks later, I showed the pictures of the office to Keisha.</p>

    <p>She replied “I know this place! I am going to be co-hosting a workshop 
      there in a few months!”</p>

    <p>Instantly, chills ran up and down my body.</p>

    <p>Keisha then offered to introduce me to Christine, who occupied the dream space that 
      would be used for the workshop. Christine and I spoke on the phone, and I liked her 
      immediately. We set up an appointment to meet at the office later that week.</p>

    <p>When I walked in, the office space felt like returning home to a warm hug. The energy 
      was unmistakably healing, and the wonderful atmosphere was decorated so comfortably, 
      complete with healers practicing their modalities and a blissful meditation room.</p>

    <p>I was completely enamored!</p>

    <p>Christine showed me two spaces that were available, and I nearly cried when I saw it. 
      My office.</p>

    <p>It was a spacious room twice the size of anything I had ever had with a stunning window 
      that overlooked the courtyard.</p>

    <p>The environment was perfect for healing work. I knew this was mine. I felt as if it had 
      been waiting for me to show up.</p>

    <p>Needless to say, I moved in immediately.</p>

    <img class="img" src="images/office.jpg" style="max-width: 500px;margin-bottom: 0;" />
    <p class="signature" style="text-align: center;">This is the view from my office.</p>

    <hr class="hr" />

    <img class="img" src="images/ClarissaBarraza.jpg" />

    <p class="signature">Clarissa J.Barraza LMT<br />
    Email: <a href="mailto:cjbarrazalmt@gmail.com">cjbarrazalmt@gmail.com</a><br />
    Facebook: <a class="a" @click="myLink('https://www.facebook.com/ClarissaJBarraza')">@ClarissaJBarraza</a><br />
    For 25 years in the Dallas area I have practiced LOA in my sessions, allowing Source 
    to guide me to do what's best for my clients.</p>
    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '7'}">Back To Top</q-btn></p>
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