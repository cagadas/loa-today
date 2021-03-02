<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">Wouldn’t It Be Cool To Live Here?</h5>
    <h6 class="h6">by Stacey Aarssen</h6>

    <p>In 2003, I had spent the last fifteen years working with my parents in a retail 
      clothing store that had grown exponentially over the years. It wasn’t the easiest 
      of tasks to work with parents who didn’t always see my ideas as good ones, although 
      with persistence they would eventually listen. It was a constant battle to be heard, 
      and at the age of 38, I needed a change.</p>

    <p>I did most of the buying for the store. I ran the 4,500 square foot retail space 
      when my parents took the months of January to April off to go to Florida every winter. 
      How would my dad run this place without me? I didn’t want to hurt my dad, and I didn’t 
      know what else to do. I felt smothered, and I couldn’t see a way out. Purchasing the 
      store from my parents was not an option. I couldn’t get the funding and prayed for a 
      way out of this box.</p>

    <p>A few months later, my husband and I took an exciting trip to Elora for a week of 
      camping with our three beautiful daughters.</p>

    <p>Elora Gorge is a lovely Ontario town with a historic feeling, lovely little shops, 
      and outdoor cafes. Sitting in the outdoor café, we admired the wonderful old buildings 
      while having an amazing conversation.</p>

    <p>I said with a chuckle, “Wouldn’t it be cool to live here?”</p>

    <p>Elora was three hours from our home, and John and I both worked in family businesses. 
      He worked with his dad, and I worked with mine. Wishing to live in this historical 
      little town didn’t really make practical sense.</p>

    <p>Five months later in November, our business celebrated its anniversary. Sadly, there 
      wasn’t much to celebrate. Sales had been declining for months in a clear downward trend.</p>

    <p>Normally November is a celebration of great sales figures. We always had a big sale to 
      kick us off to an amazing holiday sales season.</p>

    <p>This year was different. The sales were not coming in.</p>

    <p>It created a lot of stress for Dad. He was in his 60’s and really didn’t want to see 
      his retirement lose steam.</p>

    <p>But after some contemplation and research, he decided to run a huge retirement closing 
      sale.</p>

    <p>The sale began that December. The same week we announced the closing of our family 
      business after 28 years, John’s dad’s business announced they were selling his business 
      to a foreign company. Given the uncertainty that comes with new ownership, John and I 
      wondered about his future.</p>

    <p>December turned out to be an extremely busy month in sales for my family’s business. 
      It was the end of an era for our store. Many of our long-time customers were sad to 
      see us close, and at times we wondered if it was the right thing to do.</p>

    <p>But I realized my prayers were being answered. I had prayed for a way out of the 
      business without hurting my dad. I didn’t really know what to do with the result.</p>

    <p>A call came one day from an old friend asking if John was interested in interviewing 
      with a firm located north of Guelph, Ontario. After some contemplation and with an 
      open mind, John decided to go for the interview.</p>

    <p>The first interview was four long hours, which got him a second interview. After the 
      third interview, John got offered the job.</p>

    <p>Decisions had to be made. Our vision of our life was changing in so many ways.</p>

    <p>We currently lived in a small town where everyone knew each other with lots of family 
      close by. Now, we were moving to a new area. It was exciting and scary, all in the 
      same breath.</p>

    <p>The following weekend, we decided to head north to check out the housing market. When 
      we got to the Fergus area, we discovered how unexpectedly close it was located to Elora.</p>
    
    <p>We called a real estate agent to view a few homes in the area, only to find that there 
      were not many homes matching our wish list.</p>

    <p>One of our most important wants was for the girls all to have their own rooms on the 
      same floor. Most of the homes available had the fourth bedroom in the basement, which we 
      didn’t want.</p>

    <p>The first house we went through was in Elora, a four-bedroom home with all the bedrooms 
      located on the same floor. It was a little bigger than we planned, but it had potential. 
      The view from this house sitting on a hill was spectacular.</p>

    <p>After viewing a few other homes that were okay but didn’t have the energy I was 
      looking for, we all decided the first house we went through in Elora was the one we 
      wanted to buy.</p>

    <p>The amazing part: this house was empty, and it had been on the market for a while. 
      The offer was accepted, and we were the proud new owners of a home in Elora. It was 
      a dream come true.</p>

    <p>Now the planning began to get our home in Wallaceburg on the market. We worked 
      like crazy to make needed repairs to it within a few weeks.</p>

    <p>A close friend of mine mentioned their neighbours’ parents had been looking for a 
      home for the past six months and couldn’t find one.</p>

    <p>We decided to get in contact with them to see if they wanted to see ours. It was 
      exactly what they had been looking for.</p>

    <p>We couldn’t believe it! Our house sold in one day without needing to engage a real 
      estate broker.</p>

    <p>If someone would have said to me six months earlier, “Be careful what you wish for, 
      because dreams do come true,” I would never had believed them.</p>

    <hr class="hr" />

    <img class="img" src="images/StaceyAarssen.jpg" />

    <p class="signature">Stacey Aarssen<br />
    Personal Branding Specialist<br />
    Helping individuals &amp; business owners who want to be financially better. Be Better!<br />
    Phone: <a href="tel:+015193413691">519-341-3691</a> Ext 102<br />
    Toll-Free: <a href="tel:+018444747284">844-474-7284</a><br />
    Cell: <a href="tel:+015193626644">519-362-6644</a><br />
    Website: <a class="a" @click="myLink('http://www.path2wealth.ca')">www.path2wealth.ca</a></p>
    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '5'}">Back To Top</q-btn></p>
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