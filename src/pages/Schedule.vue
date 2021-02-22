<template>
  <div style="text-align: center;">
    <h4>Our Podcast Recording Schedule</h4>
    <h5>All show times are in the Eastern Time zone (New York)</h5>
    <p>&nbsp;</p>
    <p><strong>Monday,</strong> 4pm - 5pm (with Louis de Souza, Ami Blackford, &amp; Walt Thiessen)</p>
    <p><strong>Tuesday,</strong> 4pm - 5pm (with Dean McMurray  &amp; Walt Thiessen)</p>
    <p><strong>Wednesday,</strong> 4pm - 5pm (with Monique Scott &amp; Walt Thiessen)</p>
    <p><strong>Thursday,</strong> 4pm - 5pm (with Alyx King, Dan Mangena, &amp; Walt Thiessen)</p>
    <p><strong>Friday,</strong> 4pm - 5pm (with Linda Armstrong &amp; Walt Thiessen)</p>
    <p>&nbsp;</p>
    <p class="center"><a href="#" @click="myLink('https://www.youtube.com/c/loatodaypodcastvideos/live')">Click here to connect to the Livestream</a></p>
    <p>&nbsp;</p>
    <p>Theme Music Copyright: <a href="https://www.123rf.com/profile_plastic3music">plastic3music / 123RF Stock Photo</a></p>
  </div>
</template>

<script>
export default {
  methods:{
    myLink(myURL){
      openURL(myURL)
    }
  }
}
</script>