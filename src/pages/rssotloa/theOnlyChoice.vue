<template>
  <q-page class="flex-center">
    <h5 class="h5 bottom0">The Only Choice</h5>
    <h6 class="h6">by Louise Thiessen</h6>

    <p>After graduating from high school, I attended a local community college for 
      two years. My older sister was finishing up her college education at Boston 
      University. Having two kids in four year institutions at the same time just 
      wasn’t in my father’s budget, although I still marvel at how he managed to 
      pay for our educations without loans or scholarships.</p>

    <p>I went to Washington, D.C. to visit two friends, one at Georgetown University, 
      the other at American University. Georgetown is a very large school with a 
      sprawling campus. I didn’t know how many students were in attendance, but I 
      knew by its shear size it wasn’t for me. I liked small classes with professors 
      who know you.</p>

    <p>American University was squashed onto a small plot of land in the northwest 
      corner of D.C. The campus is so small that when they designed the new library 
      they had to put most of it underground. The small size of the campus and the 
      fact that most of the classes were only 30 students and lectures were about 
      100 students appealed to me. I felt like I could maneuver around this campus 
      and not get lost. I could make friends here and not feel anonymous.</p>

    <p>After that visit, I decided this was where I wanted to transfer to. I wasn’t 
      willing to look at any other schools much to my parent’s chagrin. I was confident 
      I would get in. I didn’t have the grades or SAT scores needed to get accepted. 
      I just felt that this was the only school for me. I could see myself walking to 
      classes, living in the dorms, and feeling I belonged here.</p>

    <p>I completed the required paperwork and sent it off. The interminable waiting 
      began. It helped that I had a second semester of my second year to finish, so 
      that took my mind off the waiting. It came as no surprise when they accepted me.</p>

    <hr />

    <img class="img" src="images/LouiseThiessen.jpg" alt="">

    <p class="signature">Louise Thiessen is a former psychotherapist and currently owns 
      a local gardening services and maintenance business, 
      <a @click="myLink('https://gardensbylouise.com/')">Gardens By Louise</a>. She is 
      also an occasional co-host of LOA Today. She lives with her husband, Walt, and 
      two black cats, Harmony and Joy, in Simsbury, CT</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle a" :to="{ path: 'toc', hash: '39'}">Back To Top</q-btn></p>
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