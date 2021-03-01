<template>
  <q-page class="flex-center">
    <h5>Table of Contents</h5>
    <p id="i" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'introduction'}">Introduction</q-btn><br />by Walt Thiessen</p>
    <p id="1" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'home-sweet-home'}">Home Sweet Home</q-btn><br />by Wendy Dillard</p>
    <p id="2" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'the-lot'}">The Lot</q-btn><br />by Barbara Pinti</p>
    <p id="3" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'manifesting-an-apartment-on-central-park-west'}">Manifesting an Apartment on Central Park West</q-btn><br />by David Scott Bartky</p>
    <p id="4" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'our-dream-house-in-northern-california'}">Our Dream House in Northern California</q-btn><br />by Janet Warnecke</p>
    <p id="5" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'divorced-broke-and-homeless'}">Divorced Broke and Homeless</q-btn><br />by Mike McEwen</p>
    <p id="6" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'wouldnt-it-be-cool-to-live-here'}">Wouldn’t It Be Cool To Live Here?</q-btn><br />by Stacey Aarssen</p>
    <p id="7" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'arizona-dreaming'}">Arizona Dreaming</q-btn><br />by Barbara Pinti</p>
    <p id="8" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'a-new-healing-center'}">A New Healing Center</q-btn><br />by Clarissa Barraza</p>
    <p id="9" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'trapped'}">Trapped</q-btn><br />by Esther Bailey-Bass</p>
    <p id="10" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'our-dream-home'}">Our Dream Home</q-btn><br />by Linda Armstrong</p>
    <p id="11" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'treasures-from-tikashi'}">Treasures From Tikashi</q-btn><br />by Renate Donnovan</p>
    <p id="12" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'beginning-again'}">Beginning Again</q-btn><br />by Sherry Trentini</p>
    <p id="13" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'signs-from-the-universe'}">Signs from the Universe</q-btn><br />by Susan Shearer Young</p>
    <p id="14" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'the-seller-who-was-the-buyers-ally'}">The Seller Who Was The Buyer’s Ally</q-btn><br />by David Scott Bartky</p>
    <p id="15" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'a-financial-surprise'}">A Financial Surprise</q-btn><br />by Barbara Pinti</p>
    <p id="16" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'sailing'}">Sailing</q-btn><br />by Cambria Berge</p>
    <p id="17" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'its-no-accident'}">It’s No Accident</q-btn><br />by Cathy Brown</p>
    <p id="18" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'making-changes'}">Making Changes</q-btn><br />by Galina Shadrova</p>
    <p id="19" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'london-calling'}">London Calling</q-btn><br />by Geanina Roman</p>
    <p id="20" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'getting-published'}">Getting Published</q-btn><br />by Paulette Sherman</p>
    <p id="21" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'the-poker-tournament'}">The Poker Tournament</q-btn><br />by Walt Thiessen</p>
    <p id="22" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'healing-myself'}">Healing Myself</q-btn><br />By Jean Yang</p>
    <p id="23" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'boot-camp'}">Boot Camp</q-btn><br />by Misti Jackson-Derringer</p>
    <p id="24" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'nizhoni'}">Nizhoni</q-btn><br />by Ellen Bakker</p>
    <p id="25" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'coping-with-arthritis'}">Coping with Arthritis</q-btn><br />by Tarryn Tomlinson</p>
    <p id="26" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'all-is-well'}">All is Well</q-btn><br />by Susan Murray</p>
    <p id="27" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'the-boyfriend'}">The Boyfriend</q-btn><br />By Ana Hernando</p>
    <p id="28" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'fire-alarms-to-wedding-bells'}">Fire Alarms To Wedding Bells</q-btn><br />By Anik Clemens</p>
    <p id="29" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'welcoming-a-new-child'}">Welcoming a New Child</q-btn><br />By Dez Stephens</p>
    <p id="30" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'man-of-my-dreams'}">Man of My Dreams</q-btn><br />by Hannah Golightly</p>
    <p id="31" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'markus'}">Markus</q-btn><br />by Joel Elston</p>
    <p id="32" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'being-found'}">Being Found</q-btn><br />by Walt Thiessen</p>
    <p id="33" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'friends-delivered-to-me-by-the-law-of-attraction'}">Friends Delivered to Me By The Law of Attraction</q-btn><br />by Wendy Dillard</p>
    <p id="34" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'overcoming-five-devastating-losses'}">Overcoming Five Devastating Losses</q-btn><br />by Debra Oakland</p>
    <p id="35" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'the-bath-that-keeps-on-gifting'}">The Bath That Keeps On Gifting</q-btn><br />by Keisha Clark</p>
    <p id="36" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'the-third-degree'}">The Third Degree</q-btn><br />by Linda Armstrong</p>
    <p id="37" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'hide-and-seek'}">Hide and Seek</q-btn><br />by Louise Thiessen</p>
    <p id="38" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'out-of-the-darkness'}">Out Of The Darkness</q-btn><br />By Michael Craig</p>
    <p id="39" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'anybody-but-me'}">Anybody But Me</q-btn><br />by Ruby Gangadharan</p>
    <p id="40" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'the-only-choice'}">The Only Choice</q-btn><br />by Louise Thiessen</p>
    <p id="41" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'my-boat-was-taking-on-water'}">My Boat Was Taking On Water</q-btn><br />by Tom Wells</p>
    <p id="42" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'vienna-station'}">Vienna Station</q-btn><br />by Walt Thiessen</p>
    <p id="43" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'a-steinway-piano'}">A Steinway Piano</q-btn><br />by Anne-Marie Cannata McEwen</p>
    <p id="44" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'ill-have-an-owl-please'}">I’ll Have an Owl Please</q-btn><br />by Cindie Chavez</p>
    <p id="45" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa2', hash: 'fins-up'}">Fins Up</q-btn><br />by Leslie Shew</p>
    <p id="46" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'hurricane-floyd'}">Hurricane Floyd</q-btn><br />by Walt Thiessen</p>
    <p id="47" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'altering-the-weather'}">Altering the Weather</q-btn><br />by Louise Thiessen</p>
    <p id="48" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'the-microburst'}">The Microburst</q-btn><br />by Walt Thiessen</p>
    <p id="49" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'blue-skies-please'}">Blue Skies, Please</q-btn><br />by Walt Thiessen</p>
    <p id="50" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'no-more-snow'}">No More Snow</q-btn><br />by Walt Thiessen</p>
    <p id="51" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'the-journey-achievement-writing-contests'}">The Junior Achievement Writing Contests</q-btn><br />by Barbara Pinti</p>
    <p id="52" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'the-peoples-choice-awards'}">The People’s Choice Awards</q-btn><br />by Patricia Framo</p>
    <p id="53" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'did-i-see-you-in-a-commercial'}">Did I See You In A Commercial?</q-btn><br />By Rhonda Burns</p>
    <p id="54" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'accident-i-think-not'}">Accident, I think not!</q-btn><br />By Wendy Dillard</p>
    <p id="55" class="signature"><q-btn class="myStyle" :to="{ path: 'rssotloa3', hash: 'homes-cats-and-cars'}">Homes, Cats, and Cars</q-btn><br />by Louise and Walt Thiessen</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '44'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="hurricane-floyd"/>
    <p>&nbsp;</p>
    <h5>Hurricane Floyd</h5>
    <h6>by Walt Thiessen</h6>

    <p>Louise and I married September 26, 1999. I asked her to marry me the previous 
      Valentine's Day. We rushed the wedding date because her father's health was poor, 
      and we were not sure how long he would be around. (He died three months after 
      the wedding.) So you can imagine how busy we were that year preparing for the 
      wedding.</p>

    <p>By the time September rolled around, we had just about everything worked out. 
      We knew where we would marry and had a venue for the reception. Louise bought 
      her dress. Invitations were sent and RSVPs received. With just two weeks to go, 
      we both desperately needed a vacation.</p>

    <p>My parents had retired to Smith Mountain Lake near Roanoke, Virginia in the 
      mid-1980s. That was my go-to place when I needed to get away, and it was the 
      first place we thought of for a quick vacation.</p>

    <p>That same week the news was full of stories about Hurricane Floyd forming in 
      the Caribbean. As we planned our Virginia escape, the weather people projected 
      that Floyd's eye had an 80% or greater likelihood of plowing right through Smith 
      Mountain Lake at the exact time we planned to be there.</p>

    <p>We needed this vacation badly, and something inside me refused to give in to 
      the weather. I knew nothing about the Law of Attraction at this point in my 
      life. All I knew is that we needed this week of vacation to happen right now.</p>

    <p>So from a very determined emotional place, I shouted to the Universe, “Get 
      that hurricane out of here! We need sunny skies and warm temperatures for our 
      week on the water.”</p>

    <p>As we prepared to drive to Virginia, Louise expressed her concern that Floyd 
      was going to get in our way. I have no idea why, but for some reason I felt 
      confident in assuring her that we would get our wonderful vacation in all its 
      glory.</p>

    <p>As soon as we reached Virginia, we heard news that Floyd had hung up in its 
      path over the Atlantic. Hoping our luck would hold, we arrived in Huddleston, 
      Virginia at my parents' house.</p>

    <p>The weather was exactly as we had hoped it would be, and we wondered how 
      long Floyd would stay away.</p>

    <p>The folks on the Weather Channel were not optimistic. They were already in 
      the process of warning people who lived in low-lying areas about potential 
      flooding.</p>

    <p>We rented some jet skis with the intention of getting in as much water sports 
      activity as we could.</p>

    <p>According to Wikipedia, "Floyd triggered the fourth largest evacuation in US 
      history (behind Hurricane Irma, Hurricane Gustav, and Hurricane Rita) when 
      2.6 million coastal residents of five states were ordered from their homes 
      as it approached."</p>

    <p>By Thursday of that week, Floyd settled over the coast of North Carolina as 
      it drenched shoreline communities in that vicinity.</p>

    <p>Weather forecasters expressed their astonishment that it wasn't moving anywhere. 
      All of their computer models had shown that the most likely path was right through 
      inland Virginia, yet there it sat.</p>

    <p>By Friday, we felt much more relaxed and refreshed from all of our fun on the 
      water and visiting family. We felt like we had dodged a storm, and I suppose 
      that had literally been true.</p>

    <p>But what really surprised us was when we started on our trip back north to 
      Connecticut for the wedding.</p>

    <p>To our astonishment, Hurricane Floyd followed us up the coast. The storm very 
      politely waited for us to get home before it reached Connecticut as a tropical 
      storm, drenching New England.</p>

    <p>Wasn't that a considerate thing for it to do?</p>

    <p>Nine years later, I learned about the Law of Attraction, and when I told Louise
      about it, one of the first thing she said was, "Maybe that's how you kept the 
      hurricane at bay when we got married."</p>

    <p>I had not thought about it, but you know what? I think she was right.</p>
    
    <hr />

    <img src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '45'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="altering-the-weather"/>
    <p>&nbsp;</p>
    <h5>Altering the Weather</h5>
    <h6>by Louise Thiessen</h6>

    <p>During our week of “staycation” one January we had plans to go to Old 
      Town Alexandria, Virginia to visit a metaphysical bookshop, have lunch, 
      and window shop.</p>

    <p>For those of you who have never been there, Old Town Alexandra is paved 
      with cobble stones, the streets are named after British royalty, and many 
      of the streets contain small townhouses that have a definite lean to them 
      where the ground has settled throughout the centuries.</p>

    <p>The previous day’s weather had not been conducive to outdoor activities, 
      so on the Friday before we were to go, I projected that Saturday would be 
      sunny, warm, and mid 50’s (remember, this was January), and no clouds.</p>

    <p>We awoke to cold, gray, overcast skies, and I began to wonder what 
      happened to my lovely day.</p>

    <p>We decided to go anyway, and as we drove my husband reminded me to envision 
      what I did want, not to focus on what was currently happening.</p>

    <p>As you drive the D.C. beltway to Alexandria, the view of the skyline is 
      pretty well unobstructed by hills and tall buildings, so you can see quite a 
      distance ahead. All I saw were gray, cloud-filled skies, but I kept picturing 
      the sunny, warm day I had projected.</p>

    <p>As we approached the exit for Old Town Alexandria, I watched as the clouds 
      began to part and a sliver of sun began to shine down solely and only over 
      our destination.</p>

    <p>Could this really be happening? Only in the area where we were headed? Not 
      to the north, not to the south, not to the east or west?</p>

    <p>It remained sunny and warm long enough for us to walk around, shop, and even 
      eat lunch outside in January. Even in temperate Virginia, this is uncommon.</p>

    <p>We got to eat ice cream and sit down by the Potomac River for awhile. My 
      husband and I love good, homemade ice cream, and I had no more than fleeting 
      thoughts about finding some in Old Town Alexandria in January. We saw people 
      walking by us and asked someone where they had gotten their delicious-looking 
      cones. They pointed us in the right direction. The ice cream proved scrumptious, 
      and I was thrilled that they had my favorite winter flavor, maple walnut.</p>

    <p>What a lovely, restful, fun day we had as the clouds remained parted over our area!</p>

    <p>Just as we finished our treats and talked about heading back to the car to 
      drive home, the clouds began to gather. We had done all we set out to do, so 
      we headed back to the car for the ride home.</p>

    <p>As we drove out of town, the clouds closed in and covered the previous area of 
      sunshine, and we marveled at the power we were coming to believe was ours to tap 
      into anytime we wanted.</p>

    <p>The Law of Attraction is real, available, and powerful. I now know that by staying 
      in a positive, happy attitude, many wonderful experiences, people, objects, and 
      things will come into my life.</p>

    <hr />

    <img src="images/LouiseThiessen.jpg" alt="">

    <p class="signature">Louise Thiessen is a former psychotherapist and currently owns 
      a local gardening services and maintenance business, 
      <a @click="myLink('https://gardensbylouise.com/')">Gardens By Louise</a>. She is 
      also an occasional co-host of LOA Today. She lives with her husband, Walt, and 
      two black cats, Harmony and Joy, in Simsbury, CT</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '46'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="the-microburst"/>
    <p>&nbsp;</p>
    <h5>The Microburst</h5>
    <h6>by Walt Thiessen</h6>

    <p>I don't remember exactly which year it was, but it was one of the last couple 
      years we will lived in Virginia. That would make it 2012 or 2013.</p>

    <p>I was working in my office in one of the spare bedrooms of our house just 
      outside of Warrenton, Virginia. Rumors of possible tornado activity had surfaced, 
      and I periodically double-checked the online weather forecasts to make sure 
      nothing was developing in our area.</p>

    <p>By late afternoon, a number of small storms, often known as microbursts, began 
      to form in our area. A microburst is a sudden, powerful, localized air current, 
      especially a downdraft. It can be destructive like a tornado, but it doesn’t 
      cover as large of an area.</p>

    <p>When I checked the radar map and ran the tracking animation to watch the progress 
      of the storms, I realized that one of the worst ones was headed right toward our 
      house.</p>

    <p>Zooming in, I discovered that our house would be smack dab in the center of the 
      projected path of that storm. The National Weather Service issued a tornado watch 
      for our area.</p>

    <p>According to the radar map, we had maybe 5 to 10 minutes before the storm would 
      rush through our area.</p>

    <p>Louise was working on something in the living room, and I called out to her that 
      we needed to, “do our weather thing again.”</p>

    <p>We both began to visualize our favorite ideal weather patterns in our minds.</p>

    <p>My favorite weather pattern is one where there are blue skies with a gorgeous sun, 
      little puffy white clouds, and temperatures in the upper 60s to lower 70s.</p>

    <p>I spent a few minutes on that image, making it as clear in my mind as I could, 
      while believing mightily that it would come to pass. I also made sure that I got 
      really excited about the prospect of the weather changing to my desired alternative .</p>

    <p>This was just the second occasion that I could ever remember since we had learned 
      about the Law of Attraction trying to influence a storm intentionally, and it was 
      the first time that the storm was really dangerous, just minutes away.</p>

    <p>Our Old Town Alexandria day trip Louise told you about didn’t have a microburst 
      &ndash; just a cloudy and rainy day. So I was really curious to find out what would 
      happen this time.</p>

    <p>After I finished my visualization and let it go to the Universe, I walked outside 
      to see what was going on.</p>

    <p>We lived in a house on a one-acre plot in a rural setting, surrounded by trees in 
      all directions. Everywhere I looked, I could see trees bending fiercely in the wind 
      as far off as I could see.</p>

    <p>The only exceptions were the trees within our property line. Those branches barely 
      moved, swaying gently if at all. I half smiled at that, thinking it was noteworthy.</p>

    <p>I called Louise to come out and take a look herself.</p>

    <p>As we watched the sky above us, it started to clear. I don't mean the whole sky. 
      I mean only the part of the sky directly above our house changed. The rest of the 
      sky remained gray and threatening.</p>

    <p>It was like the heavens had carved out a hole in the storm right where we stood. 
      This was getting really weird!</p>

    <p>I must have stood out there for up to 10 minutes watching the storm as it bypassed 
      us on all sides. When nothing else seemed to happen other than the blowing of the 
      trees, I finally lost interest and walked back inside the house.</p>

    <p>The next day, Louise and I got in the car to drive into town to run some errands. 
      We decided to check out the neighborhood to see if there had been any damage from 
      the storm.</p>

    <p>Within about a half mile of our house in all directions, there was no damage at 
      all. But beyond that radius, no matter which direction we drove, we saw trees, 
      large branches, and even a telephone pole down.</p>

    <p>The extent of the damage was astonishing!</p>

    <p>We later learned that our part of the county had been hit hard by this microburst. 
      Only the island of our little neighborhood was spared any damage at all.</p>

    <p>If I needed any confirmation that we have the ability to influence the weather, 
      I got it that day.</p>

    <hr />

    <img src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '47'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="blue-skies-please"/>
    <p>&nbsp;</p>
    <h5>Blue Skies, Please</h5>
    <h6>by Walt Thiessen</h6>

    <p>I like to walk every day if I can during warm weather. There is a 
      rails-to-trails path near our home in Simsbury, Connecticut that 
      gives me as many miles of outdoor paths to walk as anyone could desire. 
      It was one of my favorite reasons for us moving back to Connecticut 
      from Virginia a couple of years before.</p>

    <p>Most often, I walk a portion of the path that is two miles down and 
      two miles back, giving me a total walk of four miles.</p>

    <p>One day as I left the house, I looked up and saw gray skies in all 
      directions. You could see that there was even a threat of rain. That
      particular day, I needed blue skies and sun. I mean I really needed 
      it! I needed the piece of mind that good weather brings. I craved 
      feeling delighted in a way that only a beautiful day can make me 
      feel. Since I have a history of successfully influencing the weather, 
      I decided to give it another try today.</p>

    <p>So as I walked along, I half-closed my eyes and imagined that we had 
      blue skies, a nice, bright sun, and warm temperatures, but not too hot. 
      I kept thinking to myself, “All I have to do is keep focusing on what I 
      want the weather to be like, and these gray skies will go away.”</p>

    <p>Like most folks, I am quite capable of harboring doubts when it comes 
      to manifesting things via the Law of Attraction, but that day I stubbornly 
      focused determinedly on the idea that on this occasion, I would be able 
      to produce my ideal result.</p>

    <p>I stayed happily focused for the first two miles of the walk, keeping my 
      eyes closed half the time so that my attention would not be diverted or 
      discouraged by what reality showed me.</p>

    <p>I just kept imagining that beautiful, sunny blue sky scene in my head, 
      getting myself more and more excited about it by the minute.</p>

    <p>In my mind’s eye, I kept filling in more details. I  imagined the fragrance 
      of beautiful summer flowers. I smelled the scents of the trees. I imagined 
      the warm, comforting, gentle breeze that would accompany such a scene. I 
      imagined animals happily frolicking on such a beautiful day. I could practically 
      taste the sweet flavor of fresh, clean, sunlit air on my tongue. I heard nature 
      sounds thrilling to the beautiful summer’s day my mind was inventing. I could 
      practically touch the nearby trees in my imagination, feeling their course, 
      warm bark.</p>

    <p>When I reached the turnaround place at the two-mile mark, I opened my eyes 
      fully and looked up to the sky. Darn! Gray skies all around. A bit dejectedly, 
      I felt completely deflated. All of that mental work for nothing? I felt so 
      let down.</p>

    <p>I turned 180° to head back home.</p>

    <p>I glanced up in astonishment to see blue sky as far as the eye could see. I 
      looked straight up. The dividing line between the gray sky and the blue sky 
      was precisely, directly above my head. Apparently, the weather had been clearing 
      behind me as I walked, and I did not even know it!</p>

    <p>This weather-influencing stuff is really crazy!</p>
    
    <hr />

    <img src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '48'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="no-more-snow"/>
    <p>&nbsp;</p>
    <h5>No More Snow</h5>
    <h6>by Walt Thiessen</h6>

    <p>In March 2018 as I began editing the story submissions for this book, 
      a series of snowstorms blanketed the Northeastern portion of the United 
      States. By the end of the month, my wife's gardening services business 
      was preparing to open for the season. This would be a problem with snow 
      on the ground. Finances were tight, so we needed to get going as soon as 
      possible.</p>

    <p>With a fourth nor'easter scheduled to hit the area on March 21, 2018, 
      I decided it was time to take action. As I detailed in other stories in 
      this book, I have quite a bit of experience influencing the weather. It 
      was time to put my influence to use once again.</p>

    <p>The weekend before the storm, weather forecasts projected anywhere up to 
      14 inches of snow. The day before the storm, the forecast had resolved down 
      to the range of 10 to 14 inches.</p>

    <p>I decided we would have zero inches. How do you do that when the weather 
      forecasters have better information than you do? I do what I always do in 
      such situations: I focus on my ideal weather situation.</p>

    <p>I began to imagine a beautiful sunny day with blue skies and little puffy 
      white clouds. Temperatures would be around 70°F, with only a slight breeze 
      to gently caress the skin. This is my favorite, go-to vision to imagine 
      whenever I want to influence the weather. I do not claim the ability to 
      control the weather, only to influence it. But I do know that if I want 
      to influence the weather, I can do it provided that I become really focused 
      and excited about my ideal weather vision.</p>

    <p>A belief is a thought that you think over and over again, as Abraham-Hicks 
      teaches. I take that definition to heart by continuing to focus on my 
      beautiful imagined weather scene continuously for as long as I am able to 
      maintain my focus. Hold my focus for a minute, and some level of 
      manifestation will happen. Keep focusing for minutes at a time, and the 
      manifestation will become closer and closer to my ideal.</p>

    <p>While I have never succeeded at completely manifesting the ideal weather 
      conditions on the day of a scheduled storm of some kind, I have often wondered 
      if I could manage it by focusing on my idealized scene for, say, 24 hours 
      straight. That would take a lot of concentration. It might be an interesting 
      test to try someday.</p>

    <p>For this moment, I merely settled for focusing on my idealized scene for 
      perhaps 10 to 15 minutes. I kept focusing until I really believed deep down 
      that I was going to see a major shift in the weather pattern. I went to sleep 
      that night believing that at the very least we would end up having no snow.</p>

    <p>The next morning, I awoke to find no new snow on the ground. The weather 
      forecasters were not convinced. They assured us that the snow would start 
      falling by 8 AM. I smiled quietly to myself and disagreed, sticking to my 
      original intention. By 11 AM, there was still no new snow on the ground. 
      Forecasters were now saying that the snowfall would start at around 1:30 PM.</p>

    <p>Of course, 1:30 PM came and went with no new snow falling on the ground. 
      My smile started to get really big by this point. At 3 PM, as I prepared 
      to do my daily afternoon podcast with Wendy Dillard, I took one quick glance 
      at the latest weather report and learned that a new and unexpected high 
      pressure system had surprisingly formed above northern Connecticut, and this 
      was inhibiting the projected snowfall.</p>

    <p>I laughingly told Wendy about this at the beginning of our podcast, 
      sticking to my original intention that we would have no snow, although 
      I did modify it to say that we might possibly get a dusting of it in 
      the morning.</p>

    <p>That night, I went to bed with still no new snow on the ground. The next 
      morning I woke up and found a dusting of snow on the windshields of the 
      cars. That's it. The 10 to 14 inch projection had reduced to a dusting. I 
      take full credit.</p>

    <p>New Jersey and downstate New York got blanketed with snow. Most of 
      Connecticut got little to none, despite the fact that we were the next 
      stop on the storm’s projected path.</p>

    <p>This is not a power that I hold exclusively. Everyone can do this. You 
      just have to learn to focus, believe, and let it go.</p>
    
    <p>Then stand back and watch as the weather system produces a new result that
      makes you marvel at the power of the human mind.</p>
      
    <hr />

    <img src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '49'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="the-journey-achievement-writing-contests"/>
    <p>&nbsp;</p>
    <h5>The Junior Achievement Writing Contests</h5>
    <h6>by Barbara Pinti</h6>

    <p>At the age of 15, when I knew nothing about the Law of Attraction, 
      I had an experience that made me wonder what exactly was going on.</p>

    <p>As a sophomore in high school, among my other activities, I joined 
      Junior Achievement.  There were approximately 10 J.A. companies in 
      my school, and each company had about 10-12 students in it.</p>

    <p>My company made a simple three-candle candelabra.  Our job was to 
      organize the company with a president, vice president, secretary, and 
      treasurer to manufacture and sell our product at a profit.</p>

    <p> Toward the end of that school year, it was announced that there 
      would be an essay contest about what Junior Achievement meant to us.  
      They told us that there would be one girl winner and one boy winner of 
      the contest and that all J.A. members could participate.  They would 
      fly winners to the Eastern Region Junior Achievement Conference in 
      Atlantic City.  Wow! I had never flown before, a really exciting prospect 
      for a young girl who had not traveled.</p>

    <p>My boyfriend was also a member of a Junior Achievement company.  I 
      began to picture each of us winning and going together to Atlantic City.  
      Everyone was in a tizzy about this opportunity.  Some weren’t interested 
      in writing an essay, but many of my friends were.  There was a lot of 
      competition, so I knew that I had to do my best.</p>

    <p>I started writing some notes in my journal about different things I would 
      say about my experience as a Junior Achiever and all the things it meant to 
      me. I became more and more excited about the prospect of winning the contest 
      with my boyfriend.</p>

    <p>I began daydreaming. I started visualizing what the conference would be like 
      and what the hotel would be like, not easy to do since I had never stayed in 
      a hotel or seen a conference before!  We would stay on the boardwalk in 
      Atlantic City, and that seemed incredibly exciting to me.  Going to the ocean 
      was not something I had ever done before because I lived in a city in the 
      center of a state with no seaside access.</p>

    <p>At night before I went to sleep, I imagined walking along the boardwalk with 
      my boyfriend and seeing the beautiful ocean close by.  During classes I found 
      myself thinking about the contest instead of paying attention to the teacher.   
      I went to the library and took out a book about Atlantic City.  It was a 
      well-known city and had so many interesting places to visit.  I literally 
      became an expert on the city.  Of course this was back in the late 1950s, 
      so things have changed since then.</p>

    <p>I felt strongly this dream was going to come true.  I confided in my best 
      friend that I truly believed I would win the contest and that my boyfriend 
      would as well.  She listened as she always did, but I’m not sure what she really 
      thought about what probably seemed like a pipe dream.</p>

    <p>I continued writing notes in my journal and shortly began to write a rough 
      draft of the essay.  My paper looked a mess with the many cross outs and changes 
      I kept making to the wording.</p>

    <p>After reworking it for another week, I felt it was ready to hand in to our 
      adviser.  Before handing it in, I put my hand on it and said a little prayer 
      about this paper being the winning entry.</p>

    <p>The next two weeks were the most difficult. The winners would not be announced 
      until our Friday assembly.  That gave me a lot of time to daydream and visualize 
      my boyfriend and I both winning that contest, flying on an airplane, and landing 
      in Atlantic City among all the other Junior Achievers.  My visualizations were 
      probably just as exciting as the real thing.</p>

    <p>The morning of the assembly arrived.  I wore my best skirt and sweater in 
      anticipation of being called up to the front of the auditorium and being announced 
      as the winner.  I was very nervous thinking about this.  It truly never occurred 
      to me that it would not happen the way I imagined it.</p>

    <p>As the principal spoke, my foot tapped in expectation.  He gave a talk about 
      Junior Achievement, about all its benefits, and how proud he was of all of our 
      accomplishments in learning about business.  Meanwhile everyone in the audience 
      waited impatiently for the results of the contest.</p>

    <p>The next thing I knew, I walked up to the front of the auditorium amidst much 
      clapping.  Even though I expected to win, it was still a shock when it happened.  
      I was exhilarated!  When I reached the front of the room I saw my boyfriend 
      coming up the aisle to receive his congratulations on being picked as the other 
      winner.  Oh wow, was this really happening?</p>

    <p>Yes, it was! From the moment I heard about the contest, I <em>knew</em> I would 
    be chosen as the representative from my town.  I soon realized that my strong desire 
    to win and my daydreaming about it might have been what made it all come true.</p>

    <p>I stored these thoughts in my mind and used them in later years when I wanted 
      something badly.  I thought of them as a kind of magic way to get what I wanted.  
      It wasn’t until I learned about The Law of Attraction that I fully understood it.</p>
      
    <hr />

    <img src="images/BarbaraPinti.jpg" style="margin-bottom: 30px;" />

    <p class="signature">Barbara A. Pinti, MA, MA, ABD, LMFT, LPC is a psychotherapist in private practice in 
      West Hartford, Connecticut.  She has taught the Law of Attraction in many groups, 
      workshops, and her private practice.</p>
    <p class="signature">Email: <a href="mailto:barbarapinti@comcast.net">barbarapinti@comcast.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '50'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="the-peoples-choice-awards"/>
    <p>&nbsp;</p>
    <h5>The People’s Choice Awards </h5>
    <h6>by Patricia Framo</h6>

    <p>Not many of us can say we were on <em>The People’s Choice Awards.</em> I didn’t 
      think I would ever be one of them either.</p>

    <p>In January 2011, I was in the middle of a divorce after 25 years of marriage. 
      At first glance one might think it was not the best time to be manifesting cool 
      things into my life, but it actually turned out to be the perfect time.</p>

    <p>The divorce was amicable, and I wished my ex-husband well, I felt so relieved 
      to be free from an unhappy marriage. Not to say there weren’t ups and downs, but 
      overall, I was flying high, open to new experiences, and looking forward to an 
      adventurous life that I could create on my own. I was in a new relationship with 
      a really nice guy and I was … well … happy.</p>

    <p>As a life transition coach for women going through divorce, empty-nesters, etc., 
      I voraciously soaked up as much as I could, as fast as I could, about the Law 
      of Attraction and how to use it in my life and work purposefully.  I employed 
      the concepts in my individual and group coaching and had recently manifested 
      spontaneously meeting Esther and Jerry Hicks (Abraham-Hicks) in a restaurant in 
      Del Mar, CA (that’s a whole other story!).</p>

    <p>So, for the most part, I was in the vortex (in a good place, connected with my 
      “higher Patty”) and feeling hopeful about my future. I put on my big-girl panties, 
      joined my first Meetup group, and started connecting more with other like-minded 
      people.</p>

    <p>One day, I got an email from someone I had only met once, asking if anyone was 
      interested in being on the red carpet at the upcoming People’s Choice Awards.  
      I replied with the requested information and included my friend Teresa as a guest, 
      thinking, <em>What the heck, I may as well go for it!</em></p>

    <p>The following week, I got an email announcing that we were accepted, with 
      instructions to follow. Well, that in itself got me pretty excited. I had no 
      clue how all of this worked, but it sounded like a fun adventure to me!</p>

    <p>We were told to wear a nice party outfit, dress as if we were going onto the 
      show, and show up very early in the morning in Los Angeles the morning of the 
      event. On the drive up from San Diego, Teresa and I stopped at a Mexican 
      restaurant in L.A., and made the bathroom our dressing room.  I can still 
      remember what that dingy bathroom looked like and what a contrast it was from 
      the glitz of the show. We got into our fancy outfits, helped each other with 
      makeup, and because it was chilly and we wanted to be comfy, threw on sweatshirts 
      and flip flops.</p>

    <p>When we got back into the car, we talked about the day ahead and got really 
      excited.</p>

    <p>I distinctly remember asserting, “Teresa, we are going to get onto the best part 
      of the red carpet. We’ll be chosen to go into the show. We will sit down in the 
      front of the theatre, surrounded by stars!”</p>

    <p>We were almost giddy in our excitement, and I felt a buzz run through my body.</p>

    <p>When we drove into the multi-level parking structure, it was very confusing and 
      chaotic with cars and people milling around and no clear direction.  We never 
      found our group, so we ended up just parking and getting in line with the first 
      group we saw.</p>

    <p>Such a wide array of people! A long process followed, and it soon became clear 
      that this was more of a casting call than anything else. The powers-that-be queued 
      us all up in various lines, stood back, evaluated and re-evaluated their choices, 
      made changes, moved people from one line to another, etc.</p>

    <p>While in the parking garage, they placed us in a line with people dressed in jeans, 
      flip flops, some looking as if they had just rolled out of bed.</p>

    <p>Teresa and I looked at each other and said, “No way are we staying in this line; 
      we need to get into the cool line so we can get into the show!”</p>

    <p>We tore off our sweatshirts, ditched our flip flops, donned our heels, and within 
      minutes, we were re-assigned to a line of women and men dressed to the nines. 
      We stayed positive and relaxed throughout, feeling the anticipation of what was 
      to come.</p>

    <p>Eventually Teresa and I ended up in the chosen line that they told us would be on 
      the best part of the red carpet, the area sponsored by CVS Pharmacy.</p>

    <p>After a long, chilly walk to the theatre along the sidewalks of South Figueroa Street, 
      our group arrived at the Staples Center. And true to their word, they sat us in the 
      best area of the outdoor red carpet, right across from where all the stars stopped 
      to be photographed.</p>

    <p>While we sat crammed side by side in bleachers, those in charge were constantly 
      moving people around to other less desirable areas of the red carpet, adding new 
      people, etc. … kind of like pawns in a chess game.  This selection process went on 
      for many hours throughout the day.</p>

    <p>There was a group of well-dressed executive-looking men and women who stood at 
      the bottom of the bleachers on the red carpet, looking at each person, whispering 
      to each other and then moving us around some more.  God forbid anyone got up to 
      use the restroom, or they’d be out, never to return! No jackets, no water, no food, 
      no bathroom runs!</p>

    <p>Eventually a couple of celebrities from E! Entertainment arrived, fashion gurus 
      Bobbie Thomas and Robert Verdi.  They explained to our group that three of us would 
      win the opportunity to go into the show with a friend, as well as valuable gift 
      cards and a bag of pricey cosmetics from CVS, and they would film the winners. 
      They practiced over and over with pretend winners, moving from place to place 
      throughout the bleachers.  All the while, the executives below observed, whispered, 
      pointed and nodded their heads, as if selecting secret agents for the CIA.</p>

    <p>At one point, Bobbie sat next to me on the bleachers, and we chatted a bit. She 
      seemed really sweet.  I kept smiling throughout the afternoon, as Teresa and I were 
      moved about within our red carpet section, no longer seated next to one another.  
      No worries! We were having fun, and it was so cool watching celebrities walking down 
      the red carpet, smiling for the paparazzi.</p>

    <p>Then it was time to announce the winners. I was feeling so calm and happy, and it 
      almost seemed natural when they pointed to me as one of the winners.  Crazy but 
      true!!</p>

    <p>Bobbie and Robert sped up the bleachers to me, gave me instructions on what to do, 
      what would happen, etc. They filmed the clip over and over, as noisy helicopters 
      hovered overhead, in an attempt to get uninterrupted video.  By the fourth time, 
      my face was aching from smiling so hard, but we finally got what they wanted.</p>

    <p>Bobby and Robert announced who I was, what I had won, and that I would be going 
      into the show.  I had no idea where that tape would be shown, but figured it would 
      be on their website or something down the line.</p>

    <p>Bobby told me that she suggested choosing me after sitting next to me earlier and 
      chatting with me. I thanked her profusely, and off we went, into the show!</p>

    <p>Teresa and I were hustled down the bleachers, with many well wishes from our red 
      carpet companions.  The woman with the headset leading us into the theatre told us 
      the show was about to start, so we needed to hurry.  We begged to stop at the 
      restroom and I never peed so fast in my life.  She briefed us on what would happen 
      next: we would enter the theatre, be seated in a group of pretend friends, and they 
      would film us all cheering as if we all had won $250 gift cards to CVS Pharmacy. 
      I actually have no idea if anyone else won this, but Teresa and I did, along with 
      an amazing bag of cosmetics, so we were happy!</p>

    <p>She rushed us through the doors and what a sight ... this huge, packed theatre 
      filled with elegant-looking people and floor-to-ceiling TV screens as the backdrop 
      of the stage.  Sparkles everywhere and search lights scanned the theatre making 
      designs across the ceiling and walls.</p>

    <p>She walked us down, down, down the aisle until we were seated in the third row, 
      maybe 20 feet from the stage.  Totally surreal! Queen Latifah was hosting, and 
      there she was, right in front of us, along with the winners, including Jennifer 
      Aniston and Neil Patrick Harris.</p>

    <p>It was a little overwhelming, and I was trying to just soak it all in, when a 
      few people said to me, “Look!  There you are on TV!”  And there I was, up on those 
      big TV screens, as they played the clip of me winning.  A camera swung around and 
      was in my face, and we waved our gift cards and cheered like crazy.  Later on, I 
      got a string of text messages from friends all over the country asking if I was 
      really on The People’s Choice Awards.  What an amazing manifestation!</p>

    <p>Some may say it’s a lucky coincidence, but I have no doubt what allowed that 
      manifestation into my experience is that I was aligned with my inner being, in 
      a positive emotional state, without resistance, and believed it could happen.  
      I asked source to make it happen, and I allowed it in.</p>

    <p>Since then, I have learned so much more about how to purposefully create my own 
      life experience.  I went from believing this process may be true, to knowing it 
      is absolutely true.  I’ve seen it over and over again in my own life and in 
      others’, including my friends, family and clients.</p>

    <p>Daily meditation, listening to Abraham-Hicks audios, being present and appreciative 
      of whatever I can, and focusing on positive aspects are the most effective ways I 
      know to allow what I want into my life.</p>

    <p>Is that the coolest thing, or what?</p>
    
    <hr />

    <img src="images/PattyFramo.jpg" alt="">

    <p class="signature">Patty Framo is a licensed clinical social worker and 
      trained life coach who has over 10 years of experience counseling and coaching 
      people regarding life’s challenges, transitions, & losses.</p>
    <p class="signature">Email: <a href="mailto:Pattyframo@gmail.com">Pattyframo@gmail.com </a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '51'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="did-i-see-you-in-a-commercial"/>
    <p>&nbsp;</p>
    <h5>Did I See You In A Commercial?</h5>
    <h6>By Rhonda Burns</h6>

    <p>Even though the previous 18 months were chock full of bold new adventures, 
      radical life choices, out-of-my-comfort-zone experiences, beautiful new 
      friendships, and so much more, I recognized myself in a familiar space one 
      afternoon in 2012 as I reflected on what I really wanted my life to be like. 
      I was feeling pretty down and wondering if I’d made a mistake moving back to 
      the area I’d left just three years before, as I was feeling quite “stuck” and 
      stagnant in my life. In the three years I’d been away, I’d stretched myself, 
      healed, loved, forgiven, supported, celebrated, took big risks, moved states 
      three times, and grown more in that time span that I even knew was possible.</p>

    <p>I had this gnawing sense within me that maybe my dreams and my desires were 
      just too big. Maybe what I wanted was just too much ego talking, or for the 
      “wrong” reasons. It was like trying to push away one of those large inflatable 
      plastic clowns that are weighted at the bottom. Every time I would push the 
      thought or the dream away, it would just come bouncing right back up at me! 
      BOINGGGG!</p>

    <p>I finally decided to actually use some of the tools I knew to use. I pulled 
      out my journal and started to write down the things I wanted as I talked to 
      the Universe.</p>

    <p>“I don’t know how this is going to look, or how it’s going to show up, and it 
      doesn’t have to mean anything at all, but I REALLLLLLY want to show up in the 
      world in a much greater way. I’d like to be visible and make an enjoyable 
      contribution to the world. I know I have so much joy, laughter, humor and 
      kindness to offer the world; so Universe, please, what will it take for me to 
      be more visible and to be seen?”</p>

    <p>I wrote down some lines of gratitude and appreciation, then was able to close 
      the journal and get myself off the couch and out into my day with a smile back 
      on my face.</p>

    <p>Some of the things I jotted down included, “I love knowing that the Universe 
      is a friendly place – it gives me great comfort. I appreciate knowing that all 
      my needs are always met, even when I sometimes allow myself to stress when it’s 
      not required. I love having the freedom to have deeply, soul-fulfilling desires 
      that I know I can manifest. I’m grateful to know my own power and possibility 
      now.”</p>

    <p>A few months later, I received an email passed along by a friend from a 
      financial services company looking to interview people about their experiences 
      with financial services advisers. In exchange for 30 minutes of our time, there 
      was $300 cash for those they picked.</p>

    <p>I saw that email and thought to myself, “Hey, I have flexibility in my schedule, 
      and sure, I’d love $300 for 30 minutes of my time. What would it take? How much 
      fun can I have with this whole thing, no matter what happens or how it goes?”</p>

    <p>As I strolled through the produce aisle at the grocery store between the grapes 
      and the lettuce, I called the number in the email. The woman who answered and I 
      exchanged pleasantries, and she asked me if she could ask me a few preliminary 
      questions while we were on the phone. I agreed, and as I was picking out plums 
      and checking the ripeness of the avocados, I answered her questions with ease.</p>

    <p>Within just a few minutes of the Q&A, she asked me if I was available two days 
      from then to come into an area hotel and answer questions on camera for her client. 
      She said I’d be in a four-person panel, and they would do it on camera, so that 
      the client could see each individual’s responses to the subject of money and finances. 
      She also said that the client might need more information after that first round, 
      so I needed to be able to come in for a second session at a later date if they 
      determined more was necessary. I told her that wouldn’t be an issue and thought 
      to myself, “I think I just made $300 and maybe even $600 for an hour’s worth of 
      my time!” CHA-CHING!</p>

    <p>The day of the event, I woke up and started running through some fun questions 
      I loved to ask myself to keep me out of my head and away from, “figuring things 
      out”.</p>

    <p><em>I wonder how much fun I could have with this? I wonder how many new people 
      I can connect with and make smile? I wonder how much more of me I can show up as 
      today with no expectation of how that has to be. I wonder what magic is awaiting 
      me today. </em></p>

    <p>It’s like priming the pump with goodness and curiosity – a fantastic elixir.</p>

    <p>I arrived at the hotel on time, checked in with the registration staff, and was 
      asked to wait my turn. When I was called, they placed me in a panel with three men.
      Immediately, I thought to myself, <em>Oooh, I’m really going to be a ham with this. 
      I feel like being totally nonchalant and like I don’t have a care in the world.</em></p>

    <p>That was in stark contrast to the guys I was seated next to. They were quite stiff, 
      matter-of-fact, and seemed to keep trying to show how impressive they were with their 
      knowledge and their understanding of financial services. It really did feel a little 
      like a competition of “mine is bigger and better than yours.”</p>

    <p>I laughed on the inside, as I could feel just how ridiculous this felt to me. I 
      just wanted to have fun, so I did!</p>

    <p>I answered questions to the best of my ability, but I didn’t try to impress or prove 
      anything. I was the only one laughing during my portion of the Q&amp;A, and I was having 
      a grand time with the folks running the video camera and the computer.</p>

    <p><em>Hey,</em> I thought to myself, <em>I’m thrilled that I’m getting to be me, 
      to be happy, and I’m making $300 – in CASH – yeah, keep it coming, Universe!</em></p>

    <p>As we wrapped up our time together, I collected my envelope of cash and said goodbye 
      to the staff. They said that if I was going to be called back, it would be after the 
      holidays, so to just keep an eye on my email. I told them that would be great, and 
      off I went with even more bounce in my step!</p>

    <p>Just a couple of weeks later, upon return from a holiday trip with family, I got 
      another email from the coordinator I’d spoken with originally. She said that the 
      client did in fact want to meet with me again, only this time, I’d need to come 
      to downtown Dallas to a high rise office to meet with an actual financial adviser. 
      The plan was for the adviser to talk with me for 30 minutes and I’d walk away with 
      $300 cash again. I responded and told her I’d love to. We set the date and the time.</p>

    <p>Just a few days after our email exchange, the day arrived for me to head to the 
      downtown office to meet with the financial adviser. I met the registration staff 
      member down in the lobby that I’d seen at my last meeting, and she escorted me 
      up to the 38th floor of this beautiful office building that bustled with busy 
      corporate executives and office workers from the various companies in the building. 
      I walked into a chic lobby with a company nameplate across the wall, shook hands 
      with a well-groomed, neatly coiffed man typical of that of what you’d imagine when 
      you think of a financial planner: navy blue suit, crisp white shirt, beautiful 
      silk tie, and a short but stylish haircut.</p>

    <p>We shook hands and smiled at one another as he escorted me to a long, mahogany 
      meeting table in a well-lit conference room. We sat near one another, and after 
      the initial greetings and ice-breaking, he began to ask me general questions about 
      financial planning and my experience with various companies and nuances of the 
      experience.</p>

    <p>I was relaxed and at ease and was really being quite cheeky and irreverent having 
      so much fun with it, considering the topic was a bit “dry”. I had him laughing with 
      me at some points and after about 20 minutes of this exchange, he asked me if I 
      would be willing to invest my money with him.</p>

    <p>A bit shocked, I immediately responded with expletives that weren’t quite as mild 
      and polite as the “HECK NO!” here on the page. I told him that he seemed very 
      knowledgeable and professional, but I didn’t have enough information to make a 
      decision like that.</p>

    <p>He then proceeded to say, as he clicked a button on a remote aimed at a big screen 
      television at the end of the table hanging on the wall, waiting for the image to 
      illuminate the screen, “Well, that’s good, because I’m not actually a financial 
      planner. I’m actually, a DJ.”</p>

    <p>I then saw an image of him in long, blond dreadlocks, in a cut-off t-shirt, tattoos, 
      rings, and a nose piercing leaned over a turn-table record player, smiling. On the 
      right side of the split TV screen was his current form and fashion as he appeared 
      to me during our meeting.</p>

    <p>I immediately burst out, “No waaaay!”; laughing; dropping F-bomb after F-bomb, 
      asking him what in the world was going on and was this some type of joke? I was 
      so amused and so confused, but it was really the most hysterical experience, and 
      I loved being part of it.</p>

    <p>He then proceeded to wave to the wall sconces directly across the table from 
      where we were sitting and told me that they were actually filming a commercial 
      and they wanted real-world reactions to the content. I think you could have fueled 
      a city with the wattage coming out of my smile in that moment!</p>

    <p>Just about the time I was composing myself from laughing so hard, the side door 
      opened up and a producer walked in to meet me. She was thrilled with my reaction, 
      and as she escorted me through the door into unfinished office space behind the 
      conference room that was filled with production equipment and people, I received 
      a round of massive applause and high fives for my reaction. I was elated!</p>

    <p>The producer then filled me in on what was actually going on and that yes, I had 
      just been secretly filmed for a potential part in an upcoming national commercial 
      that their client was going to run for financial planning services. She said that 
      the client would be picking who they wanted to use in the commercial, but would I 
      be willing to fill out a SAG (Screen Actors Guild) card, as she felt sure that I 
      was a strong contender.</p>

    <p>I laughed and filled out the card in a heartbeat. In that moment, I looked up at 
      the ceiling, tossed my head back and just roared with laughter as I whispered to 
      the Universe:</p>

    <p>Oh my goodness, I could have NEVER seen this coming, nor have planned for it. 
      Thank you, Universe; this is the BEST surprise I’ve yet to receive. No matter 
      what happens from here, I know I showed up, and you delivered by matching what 
      I was choosing and being. Message received – got it! Now keep it coming!</p>

    <p>I collected my cash from the producer, and as I drifted out of that downtown 
      tower, I could have flown home on a cloud. I was so pumped with energy, enthusiasm 
      and sheer gratitude. I had so much fun relaying the story to friends and family, 
      and no matter whether I was cast in the commercial or not, I was so satisfied and 
      felt such joy and elation at that experience that I was completely content that 
      I got to experience it and be part of it. People could not believe the sheer 
      “luck” I had, or that I might be part of something longer term.</p>

    <p>Several months passed. I sat on my couch at home watching a favorite program one 
      night when I felt my cell phone vibrate on the cushion beside me.</p>

    <p>As I picked it up to see who texted, I laughed out loud as I read the following 
      from a local friend of mine, <em>Did I just see you in a commercial?!</em></p>

    <p>I chuckled and smiled as I texted back to him, <em>Well, it depends. What are you 
      watching, and what was the commercial about?</em></p>

    <p>To which he replied, <em>It was on a cooking show network, and it was for 
      financial planning.</em></p>

    <p>In that moment, I literally shrieked out loud to myself as I clapped my hands 
      together loudly, followed by a fist-pump or 10! I managed to calm down enough to 
      respond to my friend that yes, that was in fact me, and then I flipped to the 
      channel to wait and see if I could find the commercial.</p>

    <p>Sure enough, within minutes, there I was on the screen. It was surreal and fun 
      at the same time. I was still in shock that it manifested the way it did.</p>

    <p>I muttered under my breath, <em>Well, Universe, it never shows up the way I 
      think it will, does it? Thanks for rocking my world!</em></p>

    <p>Within a week, I began receiving checks from the talent company, and they 
      continued for over three years. How’s that for “ask and receive”? Simply by 
      choosing to ask, committing to taking inspired action, showing up, being me &ndash;
      no matter the circumstance or audience &ndash; I was richly rewarded beyond my 
      wildest dreams.</p>

    <p>I still get tickled when I think back to all the emails, calls and texts I 
      received from all over the country from friends and former colleagues, as well 
      as strangers I would meet who asked me, “Did I see you in a commercial?!”</p>

    <p>Even during one of the baseball World Series games, the commercial ran. How’s 
      that for “being seen” and being visible? Well, played, Universe … well played!</p>
      
    <hr />

    <img src="images/RhondaBurns.jpg" alt="">

    <p class="signature">Rhonda Burns is an Intuitive Freedom Coach &amp; Pleasure 
      Advocate who helps soul-hungry men &amp; women powerfully and pleasurably create 
      conscious harmony with their lives and bodies.</p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '52'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="accident-i-think-not"/>
    <p>&nbsp;</p>
    <h5>Accident, I think not!</h5>
    <h6>By Wendy Dillard</h6>

    <p>We were driving home while engaged in casual conversation when all of a sudden ... 
      Bang &ndash; Boom &ndash; Crunch! Our lovely morning drive came to an abrupt end 
      as we’d just been rear-ended. I hit my head on the side of the car really hard, 
      causing me to go into a state of shock. What happened next was pretty fuzzy in 
      my memory, but I do recall there was an ambulance and several squad cars at the 
      scene of the accident within no time at all.</p>

    <p>I only got a glimpse of the young guy that hit us. Based on the skid marks on 
      the pavement, our best guess was that he was texting while driving and didn’t notice 
      when we came to a stop while waiting to make a left turn on a narrow two-lane road.</p>

    <p>I didn’t know about the Law of Attraction at that time, but I had a strong belief 
      that we contribute to what shows up in our life. At the time, we couldn’t think of 
      anything that we’d been thinking that might have led to this car accident. But we 
      recognized that we might receive greater understanding down the road, and we felt 
      quite fortunate that our injuries were minor and that we had insurance to cover our 
      many trips to the chiropractor.</p>

    <p>Our insurance company considered our car <em>totaled,</em> which was a huge bummer 
      because I’d just received this car as a gift from my mother-in-law about six months 
      before.</p>

    <p>We’d been through quite a fascinating history where cars were concerned. Less 
      than two years before, I drove my limping Ford Taurus to the dealership (after 
      hours) where I parked it, assuming it’s condition was well beyond our financial 
      ability to repair it. I left the key with a note explaining its troubles while 
      sobbing as I mourned the loss of my much-loved car.</p>

    <p>The next morning, the mechanic confirmed our suspicions … the engine was a goner, 
      and the repair would cost about $6,000. We’d have to walk away from my Taurus.</p>

    <p>For a while we shared his car, but that was not a long-term solution.</p>

    <p>We decided to ask my husband’s parents if we could borrow one of their cars for 
      a short time. They had two cars, but my father-in-law rarely drove anymore in favor 
      of my mother-in-law chauffeuring him around. They said “yes,” and I temporarily had 
      wheels again.</p>

    <p>A short time later, they decided to “gift” the car to us. We were both overwhelmingly 
      grateful and relieved, because we still didn’t have the financial means to replace my 
      car.</p>

    <p>For the first time I got a taste of not having car payments, as both the car given 
      to us and my husband’s car were paid off. I felt this wonderful sensation fill me with 
      a knowingness I was tracking toward the financial freedom I desired.</p>

    <p>Sometime later, my mother-in-law had her eye on another new car for herself, which 
      we thought was crazy because she’d purchased a brand new Taurus (off the showroom 
      floor) just a short time before. So, we assumed she’d pass her Taurus to her husband. 
      Then, in a shocking conversation with her, she announced that they didn’t see the 
      need for two cars anymore. And what she wanted to propose was for her to “gift” her 
      Taurus to us, and in return we’d “gift” the car I’d been driving to her brother. </p>

    <p><em>Hello!!!</em> Of course we accepted the deal, who wouldn’t? </p>

    <p>Within the next couple of days, cars were exchanged, and I was driving her gorgeous 
      Taurus!</p>

    <p>What no one knew was that the day she showed us her new Taurus two years before, 
      I claimed that car for myself by silently saying in my mind, “That’s my car!” I 
      didn’t tell anyone about this, not even my husband. </p>

    <p>You see, I loved Tauruses. I’d already had three Tauruses, each of which I 
      thoroughly enjoyed, but there was something special about the one that she had. 
      It had lots of extras that my Tauruses didn’t. </p>

    <p>And the thing that really got my motor running was the sleek tail fin on the trunk 
      which I thought looked really classy. Her Taurus gave me a feeling of extravagance 
      that excited me. </p>

    <p>So, when I say I wanted her car, <em>I really did.</em> But, I never thought it 
      would happen. And yet, here I was in her Ford Taurus where my heart leaped for joy 
      as I was completely blown away at this magical moment. </p>

    <p>I love free stuff, don’t you? </p>

    <p>Now, with my fourth Taurus rear-ended and declared totaled, we received a check 
      from the insurance company for $5,600. This was much less than we’d expected 
      considering the car wasn’t that old. </p>

    <p>In the spirit of moving forward, my husband asked, 
      “What kind of car do you want now?” </p>

    <p>I gave it a moment as I pondered the answer. </p>

    <p>“A Jaguar,” I said. </p>

    <p>My husband replied, “Really, you want a Jaguar? I’ve never heard you <em>ever</em> 
      talk about Jaguars. Where did that idea come from?” </p>

    <p>“I don’t know,” I said, “but that’s what I want, a Jaguar.” </p>

    <p>He said, “You know you’re not going to find a Jaguar for $5,600.” </p>

    <p>I blurted out, “Watch me!” </p>

    <p>I’d never looked for a Jaguar before, so I had no idea what they cost. I had
      no idea what they even looked like. Even I was shocked to hear myself say I 
      wanted one, but I knew I did. It just felt right to me.</p>

    <p>So, I began searching for Jaguars. </p>

    <p>I got quite the education. Jaguars really are expensive. Even pre-owned ones 
      are expensive … definitely more than $5,600.</p>

    <p>I wasn’t willing to settle for anything less than a car that made me smile 
      every time I drove it. Also, I became aware of the growing importance that I 
      desired to buy this car with ALL cash, because I never wanted car payments ever 
      again ... and I meant it!</p>

    <p>After finding some possibilities online, we headed out to see them. While on 
      the car lots, we also looked at other cars just in case I might find myself 
      interested in something other than a Jaguar. My husband and I walked in different 
      directions to cover more territory, then called to each other when we found 
      something good. We looked at a lot of cars over the course of one weekend, but 
      nothing really hit the spot for me. </p>

    <p>While heading back home, I recall my husband telling me that every time he 
      called me over to look at a Lexus, BMW or Mercedes, he noticed that my attention 
      was fixated on a Jaguar, and he had a hard time pulling me away to look at the 
      cars he’d found. This interested me because I was unaware of this and wondered 
      what it was about Jaguars that captured my attention so fully. Honestly, I didn’t 
      even know what any luxury car looked like by body style. I was generally drawn to 
      a car for its color or shape. </p>

    <p>The car lot experiences helped me to understand that <em>what I really wanted 
      in my next car was the feeling of luxury.</em> Jaguars represented a huge step up 
      from the previous cars I’d had because I thought of Jaguars as wonderfully exotic. </p>

    <p>In the past, I’d had what I’d perceived as <em>average cars,</em> and I had a 
      powerful readiness to drive something that gave me a feeling of <em>first-class 
      lifestyle and wealth.</em> This wasn’t because I wanted to impress anyone; it 
      was completely for my own personal satisfaction. I wanted to experience feelings 
      that “wealthy people” experienced ... and I thought that having a luxury car would 
      do that for me.</p>

    <p>My husband recognized that I was doggedly determined to get a Jaguar and to pay 
      for it with ALL cash, but he didn’t see how it would be possible to find one for 
      only $5,600 as the prices of the Jaguars we saw were significantly higher than the 
      money we had. </p>

    <p>Again and again, I said to him, “Just watch me!”</p>

    <p>I knew where I was willing to be flexible and where I wasn’t. And I really didn’t 
      want to budge on the idea of having a car payment. I knew <em>something</em> must 
      be was out there that I could buy with <em>ALL cash.</em> I imagined a story that 
      there would be a beautifully kept Jaguar that had been owned by an older couple who 
      barely drove it. They kept it in a garage and traded it in when it was just out of 
      warranty so it still had low mileage. The more I told myself this story, the more 
      I believed a car like this existed, and it was just waiting for me to find it.</p>

    <p>While searching online, I found a Jaguar with only 63,000 miles. It was six years 
      old and cost $9,950. I wondered if the list price was accurate because it was so 
      much lower than others I’d seen for this model year. The color was called <em>quartz</em> 
      (which was a beautiful shade of gray). I thought being called <em>quartz</em> sounded 
      snazzy! I know the price was higher than the insurance money I had, but I was drawn to 
      this car. </p>

    <p>So, we went to see it. It was more beautiful than I’d ever imaged. There wasn’t one 
      blemish on it. It looked brand-new (just like I’d been imaging in my mind). It drove 
      like a dream and had awesome power under the hood. Test driving this Jaguar stirred 
      up a delightful feeling of wealth within me, and I loved it.</p>

    <p>I’d fallen in love with this Jaguar and wanted it really bad, but what about the 
      price? </p>

    <p>We sat in the lobby trying to figure out where the rest of the money might come 
      from. My back was to the door while other customers walked in, when abruptly my 
      husband said, “That man is asking about YOUR car, so if you want it, you’d better 
      tell them now.” </p>

    <p>So, with barely a hesitation, I jumped up and headed over to the salesman behind 
      the counter. I told him I definitely wanted to buy that quartz-colored Jaguar, but 
      that I didn’t have all the money right now. He said they could hold it for me for 
      10 days with a $2,000 non-refundable deposit. I said I could give him the $2,000 
      now, but I needed 14 days to get the rest. He said they could only hold it for 10 
      days. I asked again with a pleading tone of voice, but he didn’t budge.</p>

    <p>I asked if I could talk to his manager, and he kindly directed me to the manager’s 
      office. I told the manager how much I wanted that Jaguar, but I needed 14 days 
      before I had the full amount. He repeated the same story about the 10-day holding 
      limit. Then with a determination that filled my whole being (as well as the tone 
      in my voice), I explained how I only had $5,600 from the insurance company. And in 
      order to gather the rest of the money, I would use all the money in my saving 
      account plus I’d use next my paycheck, which wouldn’t come for 14 days. </p>

    <p>I went on to say that by giving him a check for $2,000, I was guaranteeing him 
      that I would return in exactly 14 days with the balance. After all, I couldn’t 
      afford to lose that $2,000 in my financial state. Thus, a $2000 deposit was my 
      way of saying <em>this deal was as good as done!</em></p>

    <p>My impassioned plea did the trick as I watched his expression soften toward me. 
      He extended the holding period to 14 days! </p>

    <p>I was ecstatic.</p>

    <p>I did have to do some creative juggling with the bills that I had intended 
      to pay with my next paycheck, but it was worth it to buy my Jaguar with <em>ALL 
      cash</em> so I could keep with my plan to not have car payments.</p>

    <p>Two weeks later, I returned with the rest of the money to pick up <em>my</em> 
      Jaguar. It was an electrifying moment! Not only was I going to own and drive a 
      Jaguar, but I also got to experience paying for a car with <em>ALL cash</em> … 
      something I presumed only wealthy people did!</p>

    <p>Each day, I’d look out of my second story window admiring my Jaguar as it was 
      majestically parked on my driveway. Neighbors walked over to chat with me about 
      my new car. It was their unanimous opinion that I’d benefited from a big 
      promotion allowing me to buy it. They thought it was brand new and had no idea 
      it was six years old. </p>

    <p>Each neighbor spoke with a tone of voice filled with awe, but also slightly 
      sarcastic … as if to say they were jealous of me. This was evidence to me that 
      my Jaguar had a perceived value that was far beyond the dollars I actually paid. </p>

    <p>As a matter of fact, the neighbor who seemed the most jealous had just spent 
      $65,000 on his new SUV that had all the bells and whistles. I chose not to tell 
      him how much I actually paid for my sophisticated-looking Jaguar, letting him 
      believe whatever he wanted.</p>

    <p>Recognizing the power of perceived value, I decided to increase the fun by 
      getting personalized plates. My license plate is IAMHPY. While fueling up my 
      Jaguar, strangers often get my attention by giving me two thumbs up while wearing 
      big smiles as they point toward my license plate. I love it … not only does my Jag 
      give me incredible pleasure, but it does it for others too!</p>

    <p>Here’s a fun addendum to my story... I had been encouraging my husband for the 
      past couple of years to buy a new car, but he didn’t feel we should spend the money 
      while his car still ran. Then one very cold, wintry day, my husband got in his car 
      to leave for work at 4:30 AM. His car didn’t have a working blower, so that meant 
      there was nothing to de-fog his very frosted windows, let alone provide heat to him. 
      He headed off to work by sticking his head out the window to see where he was going. </p>

    <p>Thank goodness he only worked three miles from the house, and at that hour no one 
      else was on the road. However, this situation was a huge turning point for him.</p>

    <p>When he arrived home from work, he told me about the conditions he endured that 
      morning. He told me that while letting his car engine warm up, he looked over at 
      my Jaguar knowing it had a working heater, a working de-fogger, as well as seat 
      warmers. And there he was in his pitifully falling apart car. </p>

    <p>That was the very moment that caused him to realize that if his wife could have 
      a Jaguar, then he deserved to have a wonderful car too. I was thrilled my Jag 
      provided the inspiration to up-level his thinking.</p>

    <p>Around this time, the medical portion of our insurance claim was settled, and 
      we received a check for $10,000. With that, we were ready to shop for my husband’s 
      next car. I did for him what I did for myself. He wanted a Jaguar too, but he 
      wanted the sporty version, whereas I had the sedan. He told me the exact model 
      he wanted and said it had to be the British Green one. And once again, he didn’t 
      believe it would be possible to find this specific Jaguar with only $10,000. To 
      which I said once again, “Watch me!” </p>

    <p>The same story unfolded … I found the exact model he wanted in British Green. 
      The cost was $12,500 for which we managed to find the extra cash needed within 
      our personal resources. Once again, no car payments!!</p>

    <p>Can you image the shock on our neighbors’ faces when they saw a second Jaguar 
      on our driveway? Yes, we now had His & Hers Jaguars. We became the talk of the 
      town, and no one was the wiser that between our two Jags, we paid less than you 
      would have paid for <em>one average car!</em></p>

    <p>Owning and driving my Jaguar did exactly what I hoped it would do. Every time 
      I sit in my car or even look at it parked on the driveway, I swell with 
      <em>feelings of wealth and abundance.</em> Owning this Jaguar has propelled 
      my abundance quotient in a big way. Now I live in the <em>knowing</em> that I 
      can truly have anything my heart desires.</p>
      
    <hr />

    <img src="images/WendyDillard.jpg" />

    <p class="signature">Wendy Dillard is a Masterful Law of Attraction Teacher &amp; Coach. Her expertise is in 
      nowing how to apply the Law of Attraction to any situation. What other people call 
      miracles and coincidences, Wendy considers normal and the way life is intended to be. 
      Website: <a @click="myLink('https://www.wendydillard.com')">www.wendydillard.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '53'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="homes-cats-and-cars"/>
    <p>&nbsp;</p>
    <h5>Homes, Cats, and Cars</h5>
    <h6>by Louise and Walt Thiessen</h6>

    <h6 class="left">WALT</h6>
    
    <p>Louise and I celebrated our 13th wedding anniversary in September 2012 
      by doing the first-ever podcast of LOA Today. We had a grand total of zero listeners.</p>

    <p>Less than a month later, my brother, Mark, and future sister-in-law, Uohna, did 
      the second podcast with us. Both podcasts had technical difficulties, and our 
      listenership hadn’t increased at all. </p>

    <p>Again, zero listeners.</p>

    <p>By this point, I was the only one of the four who really wanted to do the podcasts 
      on a consistent basis. Why? Because the podcasts were part of my own efforts to 
      improve my mindset, they felt good to do, and I enjoyed the whole process, despite 
      not having any listeners.</p>

    <p>Well, I did have a few listeners after awhile. Not enough to shake a stick at, b
      ut hey! It’s better than zero listeners, right?</p>

    <p>About five years before this, in November 2008, I was despairing the world’s 
      financial state of affairs (as well as our own) following the onset of the financial 
      crisis. I knew that my own business was completely at risk. Since 2003 I had been 
      self-employed full-time building websites for small businesses and non-profit 
      organizations, and most of my customers were very small non-profits. I knew enough 
      about economics to know that my non-profit customers were very likely to shrink in 
      number dramatically as the consequences of the financial crisis emerged over the 
      next couple years. I had no clear idea what to do about it.</p>

    <p>Louise had her gardening business, but since I’d had the foresight to know that 
      the financial crisis was not only coming (I’d predicted it about a year before it 
      happened), I knew that it would likely have devastating consequences for her business 
      too. So she decided to sell it. After all, when money gets tight, gardening services 
      become an unjustifiable luxury that people stop paying for.</p>

    <p>So she found another gardener to sell her business to, getting a small sum of cash 
      in return. While it wouldn’t last, it would at least give us a bit of help.</p>

    <p>More importantly, however, she sat me down one day and said to me something like, 
      “Are you aware of just how negative you’ve become?”</p>

    <p>No, I wasn’t aware of it. In fact, I protested that I thought I was a pretty 
      positive person, all things considered. But as we talked, it became more and 
      more clear that I had far more negative thoughts going through my head in those 
      days than I’d previously admitted. In fact, the closer I looked at my behavior, 
      the less I liked what I saw.</p>

    <p>So by November 2008, I was not only in despair, but I was thrashing around for 
      any possible solution I could find.</p>

    <p>The year before I had watched this movie/phenomenon known as <em>The Secret,</em> and 
      while I was a disbeliever in anything metaphysical, I was willing to give it a try. 
      Heck, I was willing to give almost anything a try.</p>

    <p>I ordered a copy of the movie and watched it. When I did, two things happened. 
      On the one hand, something deep inside resonated with the contents of the movie. 
      On the other hand, my subconscious mind screamed at me, “Are you crazy? That’s 
      a bunch of hooey!”</p>

    <p>The battle raged in my mind for a few years afterward as I awkwardly tried, sometimes 
      succeeded, and often failed to be a deliberate creator in my own life. Somewhat to my 
      surprise, I refused to let go of this Law of Attraction notion despite the 
      disappointments and failures. My attitude had improved marginally, but not enough 
      that most people would have noticed the change. Consequently I still had more bad 
      things happening to me with my business and with life in general than good ones.</p>

    <p>By April 2012, became a bit of an obsession with me. One day when Mark and Uohna 
      came to visit, I decided to risk bringing up this controversial topic among the 
      four of us. After much discussion, I proposed the idea of doing something together, 
      something like a podcast, on the subject of the Law of Attraction. There were sniffs 
      of interest from everyone, but it didn’t go any further at this point.</p>

    <p>It wasn’t until the following September that I took the bull by the horns and decided 
      to go for it. After the first two podcasts, I started reaching out to anyone I could 
      find on Twitter interested in the Law of Attraction, and I ended up setting up 
      interviews to do on my podcast, some of which Louise was able to participate in. 
      They were good interviews, and they continued to whet my appetite for more. </p>

    <p>But soon my wave of interviewees diminished to a trickle, and I was finding it hard 
      to keep up. By the following summer, I took an extended break from the podcasts, even 
      though LOA was still a major interest of mine. </p>

    <p>Then a series of events began to occur before I got it going again, events that 
      would change our lives substantially forever.</p>

    <p>&nbsp;</p>
    
    <h6 class="left">LOUISE</h6>

    <p>It was the summer of 2013 in Northern Virginia, and I was well aware of the Law of 
      Attraction and how thinking about something could draw it to you.</p>

    <p>I was going to need a new vehicle in the not-too-distant future. I had been driving 
      a 2001 Ford Ranger pickup for a number of years because I needed the cargo room to 
      haul supplies and materials to the job site for my garden design and maintenance 
      company.</p>

    <p>When the economy took a nose dive, I sold the company. I kept the pickup, but the 
      truck’s lack of comfort for the driver and the lack of cab space for groceries and 
      other personal purchases had me considering driving something else.</p>

    <p>I still wanted cargo room for all my finds at garage and tag sales. I would buy 
      low and take the items to local consignment shops to sell for a small profit. By 
      no means did this hobby provide significant income. It was just fun. </p>

    <p>An SUV seemed like a good fit, but what make and model? Since I didn’t need to 
      be concerned with <strong><em>how</em></strong> I was going to make this happen 
      (since trying to figure out “how” it’s going to happen is a no-no where deliberate 
      creation is concerned), I decided to aim high. Lexus being a Toyota product, and 
      me being a previous Camry owner three times over, meant I wanted to explore a Lexus 
      to make sure it really fit my needs. </p>

    <p>The fact that we didn’t have the money for it didn’t enter into the picture.</p>

    <p>So off to the Lexus dealer my husband and I went to act as if we could purchase 
      something in the near future. In Law of Attraction lore, this is sometimes referred 
      to as “deliberate creation.” Another word for it is “play.” We needed to visualize 
      and believe that we could buy such a vehicle even if we didn’t have the funds at 
      the moment. </p>

    <p>We alerted the salesman of our intentions, and he seemed okay with us asking 
      questions and trying the car on for size. I liked the amenities and comfort, but 
      the headroom wasn’t right for my tall husband. It was a better vehicle than a 
      sedan, but maybe not for hauling pieces of furniture, since the back seat didn’t 
      fold down.</p>

    <p>So we went back to our day-to-day lives, and since money was tight, I didn’t 
      seriously consider buying a new vehicle until one fateful day ...</p>

    <p>&nbsp;</p>

    <h6 class="left">WALT</h6>

    <p>That summer was eventful for a couple of reasons. Not only were we imagining 
      and dreaming about new cars (my car was on its last legs, too), but we also 
      acquired new, furry additions to our family. </p>

    <p>One day in July, the people who lived across the street from us got evicted, 
      although we didn’t know it at the time. About a month later, Louise found a 
      nearly all-black cat lurking in the front yard. She tried to lure the cat 
      inside, but the cat ran away. </p>

    <p>The next day, the same cat appeared. She lured it to the house because it 
      looked hungry. The only thing even close to cat food that we had was some 
      leftover swordfish from the previous evening. Oh well ... the poor cat would 
      have to settle for a swordfish dinner!</p>

    <p>We had both grown up with cats, and we had often talked about how it would 
      be great to have two cats in our lives: his &amp; hers cats, so to speak. Louise 
      saw this cat’s appearance as an answer to our prayers.</p>

    <p>She lured the cat inside and tried keeping it inside, but despite enjoying 
      some attention from us, the cat clearly wanted out. So she let it out.</p>

    <p>The next day, there was no sign of the cat. We wondered what happened to her, 
      particularly because she seemed malnourished. A day later, when the cat still 
      didn’t appear, we went looking for her. We’d seen her lurking across the street, 
      so we walked over there.</p>

    <p>As I looked around, I heard a very high-pitched mew under the car in their 
      driveway, and out popped a small black cat that looked remarkably like our 
      swordfish-loving visitor, except there was clearly something wrong with her 
      front paw. <em>My God,</em> I thought … <em>it looks broken!</em> It bent at 
      an unnatural angle, and the cat hobbled on it awkwardly, not to mention that 
      she looked even more malnourished than before. <em>Was that even possible?</em></p>

    <p>Louise called out, “Is that her?”</p>

    <p>I stared at the cat for a moment, perplexed and perturbed.</p>

    <p>“I don’t know,” I replied. “She looks like she’s been hurt.”</p>

    <p>I picked the cat up, and she struggled a bit to get away, but very feebly. 
      If you said this cat weighed four pounds, I’d have laughed at you. She was so 
      thin and malnourished, I would have said two pounds, even though she was clearly 
      fully grown.</p>

    <p>I couldn’t see specifically what was wrong with her paw, but my emotions had 
      gotten the better of me, and I was determined to get this cat some food and, 
      if necessary, some medical attention.</p>

    <p>So I walked back to our house carrying this small, furry bundle. Around the same 
      time as we got her some food, another black cat … clearly the first one who visited 
      us the day before … made her appearance. So there were two of them!</p>

    <p>I was still feeling upset about this second cat’s apparent injury, and I told 
      Louise I wanted to go over and confront the owner about it. She convinced me to 
      wait until after lunch, which we did.</p>

    <p>We took the second cat inside to feed both her and the first cat. This second cat, 
      whom we later named Harmony, had a very peculiar habit. Apparently, she’d gotten 
      the short end of the food stick for so long that she’d developed the habit of 
      growling as she chewed her food, with a suspicious look at anyone … human or 
      animal … lurking nearby. I’d never heard a sound like that: <em>rwar, rwar, rwar</em> 
      as she ate her precious meal, growling a new growl with every chew.</p>

    <p>We learned that the people across the street had just moved in, and they 
      told us that they’d found the cats there when they’d arrived. That’s also how 
      we learned that the previous occupants had been evicted. We then learned that 
      there were actually four cats, not two, and to complicate matters the new 
      family had four dogs of their own. Four dogs plus four abandoned cats did not 
      add up to a happy family in their book.</p>

    <p>Just as we talked, a third, very large light gray cat came strolling around 
      the corner of the house like he owned the place. The woman we spoke with said 
      there was also a fourth one around somewhere. She was hoping to find a way to 
      keep the cats, but apparently her husband was against it.</p>

    <p>To complicate matters even more, we were renting our home, and our lease said 
      clearly, “No pets.”</p>

    <p>It didn’t look good for the cats. </p>

    <p>I looked at Louise and knew instantly that she wanted to keep all of them. 
      I liked the idea of cats too, but three of them? Maybe four? And what would 
      our landlord say when he found out?</p>

    <p>She convinced me to play it by ear. Three cats came to our home that night. 
      We ended up naming them Joy, Harmony, and Yoda, which also represented the 
      order in which we found them (or they found us, depending upon your viewpoint).</p>

    <p>It turned out that Yoda, the gray cat with the Yoda-like eyes and ears, 
      regularly displayed an uncomfortable interest in Joy, the first black cat. 
      He’d chase her all over the house, and Joy didn’t like it! We inferred that 
      this meant they needed a trip to the vet to get fixed, and despite money being 
      tight, we found that the local animal shelter did this kind of work relatively 
      inexpensively. So we arranged appointments for all three.</p>

    <p>We acquired some pet carriers, and on the appointed day we took them to the shelter 
      and dropped them off. An hour later back at home, we received a phone call. We could 
      come pick them up.</p>

    <p>“Really? That was quick,” was my reaction.</p>

    <p>“Oh, we didn’t have to do anything with them,” the female voice at the other end of 
      the line told me. “They’ve already been neutered.”</p>

    <p>She explained that they previously had been fixed as part of an international 
      program designed to address the worldwide overpopulation of cats by capturing, 
      neutering, and releasing stray and feral cats. Some cats also get adopted this 
      way, and that’s what had happened with these cats.</p>

    <p>Why the evicted family who acquired them didn’t take them back to the shelter 
      but left them instead to fend for themselves … well, we never did get the answer 
      to that question.</p>

    <p>The way they knew the cats had already been neutered through that program was 
      that the cats’ ears had been “tipped,” the international sign for cats that had 
      been captured, neutered, and released.</p>

    <p>I’d just thought they had some kind of weird genetic mutation that made their 
      ears like that.</p>

    <p>“Oh, and Joy is actually a boy.”</p>

    <p>Well, that was certainly a surprise!</p>

    <p>We ended up having to keep them in separated areas of the house now that we knew 
      that Yoda’s interest in Joy was in driving away a rival rather than in something 
      more intimate. We definitely did not want cat fights inside the house! So Yoda 
      got the half-finished basement, and the two black cats lived upstairs with us.</p>

    <p>This was also the beginning of what we called, “The Kitty Cat Shuffle,” because 
      we had to find ways to give Yoda attention upstairs in order to keep everything 
      fair for all. So we played this little game where the two black cats would get 
      let outside for a bit, Yoda would come upstairs to spend time with us, then 
      we’d get him back downstairs, and the two black cats would come back inside while 
      Yoda went outside … and so on.</p>

    <p>Soon afterward, Louise sat me down to tell me that she wasn’t happy in Virginia. 
      Could we move back to Connecticut where we’d previously lived? </p>

    <p>Our home in Virginia sat in the middle of nowhere, about 50 miles from Washington, 
      D.C. just beyond the Manassas battlefields. It took an hour just to go … well, 
      almost anywhere. Grocery shopping was usually an all-day Saturday event.</p>

    <p>By contrast, Connecticut is a much smaller state where everything is much closer 
      together. Simsbury, the town we’d last lived in together, was full of all kinds of 
      interesting amenities, including a rails-to-trails bike and foot path, various 
      annual events like craft fairs and flea markets, the permanent site for the Hartford 
      Symphony Orchestra’s summer concert series, an annual fly-in at the local airport, 
      and other local activities, not to mention the Big E, a huge New England version 
      of a county fair that took place about a half hour from our home, plus the fact that 
      we lived within driving distance of Boston, New York, the shoreline, Cape Cod, and 
      a host of other interesting places to go and things to do.</p>

    <p>Louise wanted to move back to Simsbury. Because she had moved to Virginia 11 years 
      earlier with me without hesitation because I needed to help my parents with their 
      move from Smith Mountain Lake into a senior center in Lynchburg, there was no way 
      I was going to decline her request.</p>

    <p>The only problem, as usual, was money. 2008’s financial crash hadn’t been kind to us. 
      We didn’t have much money. Moving would wipe out what little retirement savings we had 
      left. Not for the first time in my life, I was terrified about how to make the money 
      work at retirement age … let alone how to make ends meet in the coming year.</p>

    <p>But like Louise, I had been studying the Law of Attraction, trying and often failing 
      to work it to our benefit. We needed to move back to Connecticut. She needed a job 
      (I was still self-employed, but my annual income was dwindling). We needed new cars. 
      We now had cats in the family, and we had no idea how to make any of it work.</p>

    <p>Toward the end of October, the weather man said we should expect a particularly cold 
      spell of weather with temperatures in the low twenties. Brrr!</p>

    <p>It was after 4 PM, and I was working in the second bedroom that served as my office.</p>

    <p>“WALT! There’s another one!” I heard Louise call from the back door.</p>

    <p>Coming out, sure enough I saw a fourth cat. This one was a mixture of browns and 
      grays. We’d caught an occasional glimpse of her in the yard during the past few 
      months, but now she was at our back door crying for help. Leaving her outside was 
      out of the question given the impending freeze that night, but where could we put 
      her?</p>

    <p>Time once again for The Kitty Cat Shuffle! We ended up giving her half the basement, 
      with the other half going to Yoda and a closed door between them. Louise resolved not 
      to name her in case we couldn’t keep her, so we just called her Lady.</p>

    <p>One day, as Louise was tending separately to Yoda and Lady, she accidentally left 
      the door open between the finished and unfinished sections of the basement. To her 
      alarm, she saw Yoda casually walk directly to where Lady sat … and Lady didn’t move!</p>

    <p>Yoda gave Lady a little sniff, then moved on to graze in Lady’s food dish.</p>

    <p>Hmm! Apparently these two not only knew each other, but they got along well, too!</p>

    <p>Shortly after that, we found the two of them perched on a table near the basement 
      slider door, admiring the view outside. Yoda was sprawled out like a <em>pasha,</em> 
      and Lady lay with her head using his butt as a pillow.</p>

    <p>Yes, they did indeed know each other! The Kitty Cat Shuffle now simplified somewhat. 
      However, the problems between the Blacks and the Grays, as we called the two pairs of 
      cats, hadn’t disappeared. </p>

    <p>One day, Louise called me from the basement to come quickly. I ran to the basement 
      stairs and ran halfway down to the landing before turning to start down the other 
      flight of stairs. </p>

    <p>There, at the foot of the stairs, I saw Louise standing with a worried look on her 
      face.  The two male cats, Yoda and Joy, were clearing spoiling for a fight right there 
      in front of her. They crouched facing each other, their noses about a six inches apart, 
      with their ears back and their eyes in a squint, both ready to pounce with claws 
      flying. I knew that in a moment I was about to see an all-out cat fight.</p>

    <p>Well, that wasn’t an acceptable situation. One or both of them could get seriously 
      hurt (not to mention the two of us if either of us tried to intervene). This would 
      mean some expensive medical bills, whether from a vet or from a medical doctor.</p>

    <p>So I did the only thing I could think to do in the moment. I started running 
      downstairs as loudly and quickly as I could. With my first step toward them, 
      the two cats raced off in opposite directions.</p>

    <p>Crisis averted.</p>

    <p>There were other, similar confrontations to handle between the two male cats, one 
      of which involved using a tennis racket as a temporary shield to block one of them 
      (without any harm to either of them), but fortunately none of those situations ever 
      came to bloodshed.</p>

    <p>Meanwhile, the problem of how to pull off a move back to Connecticut combined with 
      the twin problem of needing new cars had become much more acute. As always, money 
      was the biggest issue, and we didn’t know what to do about it.</p>

    <p>So we did the only thing we could think of to do. We put it out to the Universe 
      that we needed help now! Then we drove to Connecticut to house hunt and look for 
      a job for Louise in the first week of November.</p>

    <p>Staying with an old friend in Connecticut cut down on our expenses, but we still 
      had to shave pennies. We had heard that an apartment was available in the complex 
      where we used to live in Simsbury 11 years before, but when we got there the person 
      who was supposed to meet us never showed up. The apartment got rented … to someone 
      else. Our other attempts to find work and housing also fell through. This was 
      heartbreaking because Simsbury is not a cheap place to live. Those apartments were 
      the lowest priced rents in the area, but they were also nearly the most we could 
      afford.</p>

    <p>Discouraged and with bruised egos, after finding nothing else available in our 
      budget, we tucked our tails between our legs, climbed back into my aging Camry, and 
      headed back to Virginia, having no idea what to do next.</p>

    <p>Knowing that if a move came up we’d have to find homes for the cats, I began a 
      campaign to find someone to adopt one or two of them. I posted pictures everywhere 
      I could find a place to post them, offering them to a good home, no charge.</p>

    <p>We hoped that Christmas might bring us good news, but Christmas came and went 
      without further developments with all these problems. The only good news that month 
      is that I got the urge to start doing podcasts again, arranging an interview with 
      one of my previous interviewees. That interview slowly got the podcast train inching 
      along again out of the station.</p>

    <p>By January, we decided that we really had nothing to lose. After all, the money was 
      almost gone, so what the heck! We kept our chins up, hoping and daring to believe 
      that somehow a miracle would happen to save us.</p>

    <p>We drove back up to Connecticut again, this time for a pre-arranged job interview 
      for Louise, and we finally got some good news. Louise got the job! Now we just 
      needed a home, preferably one where we could keep cats.</p>

    <p>Arriving again in Simsbury, we again checked out the apartment complex where we used 
      to live, but there were no units available. I asked the woman in the office if she 
      knew about any that might be coming available soon, but she couldn’t help us. </p>

    <p>Well, we’d come all this way, so I was determined to try something … anything … 
      to find a place to live that we could afford. After all, we couldn’t afford to keep 
      making fruitless trips. The fact that Louise had gotten employment cheered us up and 
      buoyed our spirits. Somehow, a home we could afford would appear … we hoped.</p>

    <p>I didn’t even dare to think what to do about cars or cats.</p>

    <p>I managed to find a local Realtor who specialized in helping renters. We met him, 
      and he turned out to be this older gentleman who had basically been selling real 
      estate since the town was founded, or so it seemed. Actually, the town is nearly 
      350 years old, but I wasn’t going to quibble about it.</p>

    <p>This Realtor said he’d sold the guy who built our old apartment the land to build 
      them on some 50 years previously. He tried to find something we could afford (which 
      was almost nothing) in their lists of available homes, but with no luck. Then he 
      made an interesting comment. He said that our ex-landlord also had other properties 
      around town and identified one on the other side of town, called Canal Place. Had 
      we tried there?</p>

    <p>Louise and I looked at each other. Canal Place? Never heard of it!</p>

    <p>The next morning, we called the landlord’s office again, and talked to the same 
      woman I’d spoken with yesterday. Did they have anything available at Canal Place? 
      “Yes,” she said. “There are two.”</p>

    <p>I thought, <em>Why didn’t she tell me that yesterday when I called about the other 
      apartments? Oh well, never mind.</em></p>

    <p>We arranged to see one of the apartments with the head maintenance guy later that 
      day. As we drove down the main road toward our turn, we passed a car repair garage 
      owned by the same mechanic we used who owned the garage on the other side of town 
      where we used to live, and I got a strange, prickly feeling running down my neck.</p>

    <p>When we made the turn and drove into the complex, what we saw created a bit of a 
      shock for us. The architecture was identical to the architecture of our old 
      apartment complex from 11 years prior. I guess it wasn’t a total surprise, since 
      it was the same landlord, but we thought the similarity bode well for us. Louise 
      commented that unless is was a really terrible apartment, she’d be okay with 
      living here.</p>

    <p>Upon walking into the apartment, it was like walking through Alice’s looking glass. 
      The apartment was a perfect mirror image of our old apartment 11 years before. Every 
      room was in the same place as before, but reversed as if you were looking at the 
      whole place through a mirror. </p>

    <p>Most miraculous of all, the rent was identical to what we had paid 11 years before 
      (and $250 less per month than what we paid in Virginia).</p>

    <p>We took it.</p>

    <p>That left three problems.</p>

    <p>First, we had to move, and we had to do it fast. Louise’s new employer wanted her 
      to start at once, and we managed to get them to agree to start two weeks later … but 
      no more. This meant we had two weeks to complete a move from Virginia to Connecticut 
      starting from scratch.</p>

    <p>Second, we had two very, very old cars. Louise needed to replace her 12-year-old 
      Ford pickup truck, and I absolutely HAD to replace my 15-year-old Camry with its 
      237,000 miles on it, because it might not survive the 500+ mile trip north again. 
      Where would the money come from? I had no idea. Plus, Louise wasn’t up to driving 
      a car north by herself.</p>

    <p>Third, we now had four cats. Fortunately, the lease of our new apartment allowed 
      us to have cats! Unfortunately, we were only allowed to have two.</p>

    <p>That meant we had to do the unthinkable. We had to pick two cats to keep while 
      trying to find homes for the other two, all while packing at break neck pace for 
      a move in two weeks while Louise continued to work her old job (which we couldn’t 
      afford to let her give up until the last minute.) </p>

    <p>We had just two weeks to get it all done. <em>Two weeks!</em></p>

    <p>We needed new cars, and we couldn’t afford them.</p>

    <p>We couldn’t drive up in the pickup because you can’t put two cats in pet carriers 
      in the back of a pickup truck in freezing January temperatures, not if you want them 
      to survive the trip. </p>

    <p>My old Camry probably wasn’t up to another trip.</p>

    <p>Plus we had a whole bunch of stuff that wouldn’t go in the moving van, so we needed 
      to bring it with us on moving day.</p>

    <p>And this move would wipe out the last of our retirement savings.</p>

    <p>ARRRRRGGGGH!</p>

    <p>&nbsp;</p>

    <h6 class="left">LOUISE</h6>

    <p>So, my husband and I were moving back to New England after being in Virginia 
      for 11 years. He sold his car the day before we moved on the advice of his 
      mechanic, who felt his 1998 Toyota Camry with 237,000 miles would not make 
      the trip north.</p>

    <p>When we contacted the moving company, they assured us that they could transport 
      my truck on a hitch behind the moving van. Fantastic! We had two cats and a myriad 
      of stuff we needed to bring with us, but not in the moving van. Add the two of us 
      to the mix of things we just couldn’t fit in the moving van in the dead of January.</p>

    <p>We arranged to rent an SUV, and Walt would drive. I was good for only about three 
      hours of actual driving time before my back would start to ache. This fact is very 
      important to what happened nex</p>

    <p>&nbsp;</p>

    <h6 class="left">WALT</h6>

    <p>Here’s how the sale of my old Camry went. I placed an ad on Craigs List to see if 
      I could get a buyer for it. I figured if I could get $500 for it, I’d be happy. I 
      advertised it for $800.</p>

    <p>Then I called around for moving companies and found one that would work with our 
      ever-shrinking budget. It would take every last penny we had, but they’d move us 
      lock, stock, and barrel.</p>

    <p>Best of all, I had an inspiration. Could they tow our pickup truck behind the moving 
      van? That way, we could rent an SUV for the trip to carry the cats and sundries. </p>

    <p>Yes, they could!</p>

    <p>Woo hoo! It was starting to come together.</p>

    <p>The afternoon before the move, I got a caller interested in buying the Camry while 
      I was out running an errand in it. Could we meet in an hour? <em>Sure!</em></p>

    <p>The buyer drove up dragging a car trailer behind him. I gave him the keys to the 
      car so he could check it out, then ducked inside to use the bathroom. When I came 
      out, he inquired, “Did you know that it was out of oil?”</p>

    <p><em>WHAT???</em></p>

    <p>I’d just driven it without any issues for about 40 miles just an hour before. 
      How could it not have any oil in it? But sure enough, when I checked the dip stick, 
      it was bone dry. It’s a wonder the oil deficit combined with engine heat didn’t 
      crack the engine block entirely.</p>

    <p>“I can’t give you $800 in light of this, but would you let it go for $500?” 
      my buyer asked me.</p>

    <p>I couldn’t believe my luck. $500 was exactly what I was hoping to get for it, 
      and now I was getting it for a car that clearly had a major oil leak.</p>

    <p>“Yeah, okay,” I said as nonchalantly as I could. He gave me five one-hundred 
      dollar bills, I signed over the title, we pushed the car onto his trailer, and 
      he drove off dragging it behind him.</p>

    <p>We had packed and prepared as best we could, but by moving day the next morning 
      we were barely three-fourths packed. The movers showed up early and started loading 
      stuff and boxes faster than I could dump stuff into them and throw a piece of tape 
      over the top. Louise was working like a mad woman trying to pack up the kitchen.</p>

    <p>Midway through the madness, the boss asked me for a pow-wow. I said sure.</p>

    <p>“I’m afraid there’s been a misunderstanding. I know the lady in our office said we 
      can tow your pickup truck, but the law doesn’t allow us to do that,” he informed me. 
      “I could get an expensive ticket for doing it.”</p>

    <p><em>Oh no! What could we do now?</em> I can do a lot when I have to, but I can’t 
      drive both a rented SUV and a pickup truck at the same time, and Louise can’t drive 
      more than three hours without her back screaming at her.</p>

    <p>Still, I had managed to sell a 15-year-old car with 237,000 miles on it and a major 
      oil leak the night before for $500, so anything was possible.</p>

    <p>One of his crew members approached us. “If you want to sell the pickup, I’d like 
      to buy it,” he said.</p>

    <p>Louise and I tried very hard to not let our jaws hit the ground.</p>

    <p>Our plan had been to tow the pickup to Connecticut, use it as a vehicle until we 
      could figure out a more permanent solution to our car problems, then sell it, maybe 
      even get some value in trade for it. I hoped to get maybe $1,000 for it.</p>

    <p>But now that we couldn’t tow it ...</p>

    <p>“Sure,” I said. “What do you have in mind?”</p>

    <p>“I’ll give you $1,500 for it,” he said.</p>

    <p>Louise and I couldn’t believe our luck. The employee didn’t have the cash with him, 
      so he asked the moving company boss for a loan against his salary. The boss looked 
      at the truck and said, “Well, I don’t think it’s worth that much. It’s probably 
      worth about $1,200.” So the boss cut $1,200 off the moving bill in exchange for 
      the pickup.</p>

    <p><em>Not bad for a $1,000 pickup truck.</em></p>

    <p>Maybe this move was going to work out after all.</p>

    <p>Sadly, the one thing that wasn’t working was figuring out the solution to the 
      problem of the cats. After much angst and agony, we agreed to keep Joy and Harmony 
      while finding homes for the other two. Unfortunately, despite the fact that I had 
      engaged in a feverish campaign to find someone to adopt them over a two month period, 
      we found no takers. Winter is not exactly the ideal time to try to find someone to 
      adopt a cat.</p>

    <p>So with a heavy heart Louise volunteered to take them to the animal shelter in the 
      hopes that someone would adopt them. This was a bit frightening because the shelter 
      was not a no-kill shelter. If after a period of time they couldn’t find a home for 
      the cats, the cats would have to be euthanized.</p>

    <p>This did nothing to improve our joint state-of-mind.</p>

    <p>The only good thing was that we still had to deal with the move, so that’s what 
      kept us going … that plus the firm belief (well, about as firm as gelatin anyway) 
      that the Law of Attraction would deliver the goods for us when we needed them.</p>

    <p>By late afternoon, the mover’s boss came to me again to say that the van was packed 
      solid and there were still a few items that they couldn’t fit into the van. They 
      couldn’t squeeze a teaspoon in anywhere … it was that jam packed from floor to 
      ceiling. The back of the truck looked like someone had taken our stuff and run 
      it through a compactor, it was so densely packed.</p>

    <p>I improvised a late dump run to literally dump the few less-desired pieces that 
      were left over before the dump closed. We made it with five minutes to spare, and 
      the moving van headed north to Connecticut.</p>

    <p>Once the moving van took off, we returned to the house to do some last minute 
      cleaning while it got dark outside (and inside too … we didn’t have any lamps in 
      the empty house any more except for the overhead fluorescent kitchen light and 
      lights in the two bathrooms). Then we packed the cats and the stuff we were hauling 
      ourselves into the rental SUV and hit the road for an eight hour drive … starting at 
      8 PM.</p>

    <p>It was a long drive, but it went well. The cats did surprisingly well, except for 
      the last hour when Harmony kept crying that she needed out. We figured that she 
      needed to pee, but everything was packed away, including the litter box. Well, 
      we somehow made it to our new home at 4 AM, set up the litter box for the cats, 
      threw an air mattress on the floor, and went to sleep.</p>

    <p>45 minutes later, the moving van boss called my cell phone to tell me that they’d 
      arrived. Could we let them in so they could unload our stuff?</p>

    <p>The rest of that day is a blur, but we got moved in, boxes everywhere. 
      That night, as we ate our well-deserved evening meal away from the mess, 
      Louise and I discussed the fact that we didn’t own a car. The only car we 
      had was a rental, and we couldn’t afford to keep paying $39 plus tax per 
      day for it.</p>

    <p>So the next morning I went online and did some searching, trying to find cars 
      we could afford. It was a tall order, because we had no money for a down payment 
      and couldn’t afford much in the way of car payments. We didn’t like it, but maybe 
      we might have to settle for one old used car that we’d share. How we’d make that 
      work day-to-day we had no idea.</p>

    <p>Add in the fact that I stand 6’8” tall and that there are very few vehicles 
      that can accommodate my height, and you can understand that the list of possible 
      vehicle options gets very small quickly.</p>

    <p>My online search proved fruitless.</p>

    <p>A Toyota had saved our lives in an accident many years before, so we felt loyal 
      to the brand. We ended up at a Toyota dealership near the Massachusetts border, 
      and they convinced us to consider leasing instead of buying a used car in order 
      to get a slightly lower monthly payment. At this point, I was willing to try 
      anything, but I still didn’t see how we could afford two cars … and we really 
      needed two cars! They tentatively got us to put $100 toward a lease, with the 
      understanding that we could cancel if we found something better.</p>

    <p>The next morning, we were getting desperate. We headed to another dealership near 
      our new home to make one last attempt. There was a snowstorm coming, but we figured, 
      <em>what the heck,</em> as we asked the snowstorm to hold off for a bit.</p>

    <p>We walked into the dealership and met Jose, who would be our salesman. It was 
      also a Toyota dealership. We told them our sad financial story and asked them 
      if they could do anything to help us.</p>

    <p>One of their V.Ps’s, another man also named Jose, got involved and said he was 
      going to make sure we had two cars no matter what it took.</p>

    <p>They ended up putting me in the same car that the other dealership had (a Camry), 
      and I liked it, but I told them sadly that I didn’t see how we could swing it. Even 
      at the lease price, we couldn’t afford a second car ... and we really needed that 
      second car. </p>

    <p>They kept crunching numbers, lowering the price. I thanked them for their efforts, 
      but we just couldn’t afford it.</p>

    <p>Finally, Jose the V.P. said, “Okay, here’s what we’re going to to. We’re going to 
      give you a lease on the Camry at our cost.” That amounted to about a 40% savings on 
      the lease price. I loved the idea, but what about a car for Louise? We’d been looking 
      at a late model Corolla for her. The payment on it worked, but she hated the one we’d 
      been looking at, and there were no other used cars on the lot.</p>

    <p>By this time, it was about 3 PM. We’d been there over six hours, and Louise had a 
      headache. So did I, if I was honest about it. We agreed she would take the rental 
      car to go home to the boxes and a well-deserved nap, while I’d sign up to lease the 
      Camry. The next morning, we’d return the rental and then try to figure out something 
      about a car for her.</p>

    <p>She left, and about two minutes later, Jose the V.P. asked, “Where’s Louise?</p>

    <p>I told him.</p>

    <p>He replied, “Call her back.”</p>

    <p>“Why?”</p>

    <p>“Because we’re going to lease her a brand new Corolla, also at dealer cost, for the same, 
      low monthly payments we were going to sell her for the used car.”</p>

    <p>In shock, I called Louise to come back and went to pick her up. The bottom line is 
      that we drove home in the snowstorm that finally showed up later that day with two 
      brand new cars, the first time in either of our lives that we had owned a new car.</p>

    <p>And we did it with no money in our pockets and at incredibly, impossibly discounted 
      prices.</p>

    <p>So life was good, right? I mean, with some huge help from the Universe, we’d pulled 
      off the impossible. We had moved to Connecticut, got two brand new cars, Louise had a 
      new job, we brought two cats with us, and all was well.</p>

    <p>Well, almost. </p>

    <p>First, within a week, Louise hated her job so much that she quit. It was in day care, 
      and she was able to land another job with another day care right away. Improvement was 
      good. </p>

    <p>But within about a month, Louise started to experience pain in her legs and feet. 
      It got so bad that she could barely walk, let alone do her job. Clearly, something 
      had to change fast.</p>

    <p>On top of that, there were still two cats in the animal shelter in Virginia, and 
      it was <strong><em>not</em></strong> a no-kill shelter. The shelter has a website 
      that enabled me to track their progress, and I was happy to report to Louise by 
      March that Lady had been adopted out of the shelter. But Yoda was still there, 
      and while there were cats that had been there far longer, Louise felt really 
      upset about it.</p>

    <p>So she started reaching out to people she knew in Virginia, people she’d worked 
      with, etc. Would any of them have any interest in adopting a beautiful light gray 
      cat named Yoda? One of them pointed her to a former co-worker who rescued animals. 
      Might Mony be interested? It turned out that … Yes! Mony loved Yoda and adopted him 
      on the spot.</p>

    <p>Drinks of relief all around.</p>

    <p>Today, Joy is our ambassador to our apartment neighborhood, introducing himself 
      to every passing neighbor willing to stop and pet him.</p>

    <p>Harmony, the one with the bum paw whom I estimated weighed about two pounds, 
      improved considerably over time to the point that we realized that her paw 
      problem is probably due to a birth defect. She still hobbles, but she gets 
      around just fine, and she’s definitely not hungry any more. She probably weighs 
      10-12 lbs now and could even stand to be on a bit of a diet. She may be a little 
      chunky, but we love her anyway.</p>

    <p>And Yoda and Lady are living happily ever after with their new families.</p>

    <p>Now we only had to deal with the fact that Louise was in pain every day and hated 
      her job. Plus, while we had somehow miraculously manifested a new home and two brand 
      new cars with almost no money, plus had two new members to the family … well, let’s 
      just say that the money problems were still around. What to do?</p>

    <p>A visit to a podiatrist led to adding off-the-shelf insoles to her shoes at a far 
      lower cost than we expected, which helped clear up the pain. However, she didn’t 
      want to stay in day care any more. Maybe she should start up the gardening business 
      again? So she did, but this time she’d do it by hiring help to do the work.</p>

    <p>The first year was a good one, although it didn’t generate a lot of income. It did, 
      however, see Mark and Uohna become my co-hosts of the LOA Today podcast starting in 
      August, a team that held together for another year with Uohna and I doing most of 
      the podcasts together while Mark sat in occasionally.</p>

    <p>The second year, Louise doubled her business size. Uohna and Mark quit doing the 
      podcasts, so I contacted Joel Elston, who had been one of my first year interviewees, 
      to ask him if he’d like the spot. He accepted quickly. That was great news!</p>

    <p>The third year, Gardens By Louise doubled its business again, although my own business 
      continued to decline.</p>

    <p>Last year, her gardening business became our main source of income while my own 
      business practically fell apart, just in time to turn in her Corolla at the end 
      of the lease period and buy a used Toyota Sienna that she could use as a cargo 
      van, one that had all the bells and whistles and was in fantastic condition for 
      a used vehicle. I turned in my lease as well for another brand new Camry.</p>

    <p>In April, Joel found himself in a new work situation and with a new foster son 
      in his life, and he didn’t have enough hours in the day. So he regretfully 
      withdrew as my co-host on the weekly podcast of LOA Today.</p>

    <p>A month later, I found David Scott Bartky, and he became my new co-host.</p>

    <p>Louise’s business got so busy that it threatened her health last summer, both 
      mentally and physically. So I stepped in to help in a big way.</p>

    <p>Meanwhile, something amazing started to happen with the LOA Today podcast. While 
      I now had listeners, I was lucky if I had 25-50 total “plays” in a month. </p>

    <p>But when David and I began to do a series of episodes on the topic of the book, 
      <em>Ask And It Is Given,</em> by Jerry and Esther Hicks (with Abraham), our 
      listenership started to rise. </p>

    <p>During that same time, I made a big push to urge listeners to subscribe to the 
      podcast so that they could get a permanent feed of shows to their smart phones … 
      and it worked!</p>

    <p>By September, the growth path in LOA Today’s listenership numbers was skyrocketing 
      at an amazing rate.</p>

    <p>By November, they’d reached some serious levels. We were getting more “plays” in a 
      month than we’d gotten in all of the previous years combined!</p>

    <p>Louise and I talked about it, and she could see how much doing the podcasts meant 
      to me. I’d been working hard all of this time to improve my attitude, and the weekly 
      podcast had really helped me in that regard. </p>

    <p>I wanted to do the podcast daily instead of weekly, since I now could hardly wait 
      for Sundays (the day David and I did our recordings) to arrive each week. Since we 
      were in the gardening off-season, she said to go ahead and see where the podcast 
      would take me.</p>

    <p>So I reached out to seven more LOA coaches I found online, and three of them: 
      Wendy Dillard, Cindie Chavez, and Tom Wells, came on board exactly one day after 
      I put out my feelers. WOW! Now that’s what I call responsiveness. Thanks, Universe!</p>

    <p>Wendy and Cindie soon told me about experiences they’d had contributing to 
      multi-author books that had sold well, which gave me the inspiration to create 
      the book you now hold in your hands.</p>

    <p>This year, we’re fully expecting to break records again with Louise’s business, 
      finally shooting us solidly into the black. The gardening season is already under 
      way, she has seven employees, and April 2018 turned out to be a record April for 
      the business.</p>

    <p>I now spend time six days per week doing the LOA Today podcasts while helping 
      Louise manage the growth of her exploding gardening business. </p>

    <p>Add in my role in putting together and editing this book, and you can see that 
      life has gotten better and better.</p>

    <p>Today, I smile every day. My own mental attitude has improved immensely. Everyone 
      close to me has noticed it in a big way, and each step of the way where my attitude 
      improved, what followed was yet another advance in a series of steps like what you 
      just read.</p>

    <p>We’re now hunting for a house of our own to buy, instead of our small apartment, 
      and of course we’re using the Law of Attraction to make it happen. We’re currently 
      looking at houses that are way, way, way out of our price range, picking and 
      choosing what we like and what we don’t like, piecing together our ideal house 
      while dreaming really, really big. We even found one, right next door to some kids 
      Louise took care of when we first arrived. It meets all of our needs. We just need 
      to figure out the money.</p>

    <p>Want to bet that we won’t find a way to get it? Here’s a hint: it’s a sucker’s bet!</p>
    
    <hr />

    <img src="images/WaltandLouise.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt and Louise Thiessen are the founders of the 
      <a @click="myLink('https://www.loatoday.net/')">LOA Today</a> podcast. </p>
    <p class="signature">They live with their two black cats, Harmony and Joy, in Simsbury, Connecticut USA.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: 'top'}">Back To Top</q-btn></p>
  </q-page>
</template>
<script>
import { openURL } from 'quasar'
export default {
  methods:{
    myLink(myURL){
      openURL(myURL)
    }
  }
}
</script>
<style lang="stylus" scoped>
  h1, h2, h3, h4, h5, h6 {
    color: yellow
  }
  h5, h6 {
    text-align: center;
  }
  h5 {
    margin-bottom: 0;
  }
  h6 {
    font-size: 12pt;
    margin-bottom: 20px;
  }
  p {
    color: lemon;
  }
  li {
    color: lime;
  }
  a {
    color: aqua;
  }
  hr {
    border-color: rgb(128,128,255);
  }
  img {
    max-width: 150px;
    float: left;
    margin-right: 20px;
    margin-bottom: 50px;

  }
  .left {
    text-align: left;
  }
  .myStyle {
    text-transform: capitalize;
    font-size: 18px;
    margin-left: -18px;
    margin-bottom: -10px;
    text-decoration: underline;
    font-family: Arial;
  }
  .signature, .centerNoIndent {
    text-indent: 0;
  }
</style>