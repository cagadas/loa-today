<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Vienna Station</h5>
    <h6 class="h6">by Walt Thiessen</h6>

    <p>One of the last years we lived in Virginia, my brother, Mark contacted 
      me to ask if he could bring his girlfriend's family to stay at our house 
      for a few days. They were visiting from Trinidad, and they wanted to see 
      Washington D.C.. Since we lived about 50 miles from D.C., we provided the 
      perfect spot for a visit.</p>

    <p>The visit we had with Uohna's family those few days was very pleasant 
      and featured some cookouts combined with a lot of opportunities to learn 
      about each other's cultures and families. But when the day came to head 
      into D.C., we had a bit of a quandary.</p>

    <p>For those not familiar with the D.C. area, Washington on a weekday is 
      chock-full of automobiles. Finding parking places can be impossible. Even 
      the parking garages fill up. That's what happens when you take a city of 
      two million and add a few hundred thousand government workers to it all at 
      the same time. It literally overflows.</p>

    <p>Want to beat the rush? You have to leave at about 3 AM. That wasn’t an option.</p>

    <p>The ideal way to go into D.C. is via the Metro train system. That way, you 
      don't have to deal with parking. The only difficulty with the Metro is that 
      the parking lots outside of the city at the various Metro stations also fill 
      up completely every day.</p>

    <p>So I used the Internet to do some research to look for some ideas about how 
      we could find a way to get into the city. To complicate matters, there were 
      so many of us that we needed to take two vehicles. That meant we had twice as 
      much of a problem – how to find two parking places in a place where even one 
      available space is a miracle.</p>

    <p>The only useful piece of information I could find was that there are about 
      10-15 parking places reserved right near the station itself for people who pay 
      a very high monthly fee to have access to these highly prized spaces. You could 
      accurately call them the “millionaire spaces”. It is not completely unusual for 
      one or two of those spaces to go unused on any given day. At 10 AM, if there 
      are any of those spaces that have not yet been used, then anyone can use them!</p>
    
    <p>Of course, this means that once again they’re only available on a first-come, 
      first-served situation. There is no way to reserve one of those spots in advance 
      without forking over tens of thousands of dollars.</p>

    <p>Fortunately, Louise, Mark, Uohna, and I were all aware of the Law of Attraction. 
      So we did our best to visualize the Universe holding two of those spots for us, 
      while we planned to be there right at 10 AM.</p>

    <p>On the day of our trip, we got off to a good start, but we ran into some unexpectedly 
      slow traffic on Interstate 66, which is the only main route from our area into the 
      Washington D.C. area. As we waited for the jam to clear, we anxiously looked at the 
      clock. We were going to be late! Someone else would get those spots.</p>

    <p>After conferring between the two cars via cell phone, we decided to try some drastic 
      action. My wife noticed that an exit ramp was just off to our right. If we could 
      somehow get onto that ramp, maybe we could find back roads that would get us to our 
      destination, the Metro station in Vienna, Virginia.</p>

    <p>Since no one else could think of a better plan, I turned on my right turning signal, 
      asking the jam of cars around us to let us over to the right lane. Miraculously, they 
      all moved out of our way! It's hard to convey how unusual that is, because drivers 
      on Interstate 66 usually are not that polite during a traffic jam. But that day, they 
      must have been in a good mood.</p>

    <p>We made it over to the exit ramp with both vehicles in just a minute or two, and 
      as we drove on it we realized that it was one of those exit ramps that actually 
      connects two or three different exits to the highway. It's a sort of byway that 
      ultimately empties back onto the highway if you don't take one of the exits. Hoping 
      against hope, I decided to stay on the byway, and lo and behold as we reached the 
      merge we found that we were ahead of the source of the traffic jam where a fender-bender 
      had occurred!</p>

    <p>Suddenly, we found ourselves flying down the highway hoping we could still get to 
      Vienna Station by 10 AM. When we reached the exit for Vienna Station, we took it as 
      I tried to decide which side of the highway to go for. The station has two parking 
      lots, one on the right-hand side of the highway, and one on the left-hand side of 
      the highway. Since we exited on the right-hand side, I decide to try that parking 
      lot first.</p>

    <p>We drove to the special row of 10-15 reserved parking spots, but they were all taken. 
      So there was only one thing left to do. We crossed the highway over the bridge to try 
      the parking lot on the other side.</p>

    <p>As we drove down the access road past all the rows and rows and rows of parked cars, 
      we saw off to our right the special row of parking places. Only partly astonished, we 
      saw there were exactly two spaces left empty next to each other. Louise asked me to 
      stop so she could get out and walk over to guard the two spaces while we navigated 
      our way through the gate further down the road.</p>

    <p>After I dropped her off, I continue to the gate. Apparently, our hurdles were not 
      completely done. There were two cars sitting at the entrance to the gate, but they 
      were going nowhere. A sign set by the gate said, "Lot Full." The drivers of those 
      cars were trying to figure out what to do.</p>

    <p>Now what? I wasn't sure what I could do with those two cars in our way. So I kind 
      of inched up to see why the two cars were just sitting there. To my astonishment, I 
      saw that there was actually a gap of about 10 feet between the first car and the gate. 
      I waited about 10 seconds more as I got my nerve up, saw that neither of the two cars 
      ahead of us were going anywhere, and with my brother following me in the second car 
      we zipped around them, drove through the gate, and claimed the last two parking spaces.</p>

    <p>All of us expressed astonishment, joy, and amazement at how well the Universe had 
      reserved those two parking spaces for us, the only two parking spaces left in a 
      35,000 space parking lot.</p>

    <p>Thank you, Universe!</p>

    <hr />

    <img class="img" src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '41'}">Back To Top</q-btn></p>
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