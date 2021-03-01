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
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '25'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="the-boyfriend"/>
    <p>&nbsp;</p>
    <h5>The Boyfriend</h5>
    <h6>by Ana Hernando</h6>

    <p>I was sitting in my office working. My 16-year-old daughter came in crying.</p>

    <p>“I don’t understand! Why is it that when Johnathan was my boyfriend he never 
      took me out, and now that Sarah is dating him, he is treating her like a queen? 
      She isn’t prettier than me. She isn’t smarter than me. She plays like she’s a 
      ditz. What is it about me? I don’t get it! What’s wrong with me?”</p>

    <p>I desperately wanted to ease my daughter’s pain, but I also knew that this was 
      a chance for me to empower her and show her just how amazing and potent she is.</p>

    <p>I wiped her tears and softly spoke. “Who do these tears belong to? Are you not 
      a child of the most high God? Do you think you are unequipped to create the life 
      you desire? Do you honestly believe that you are not enough?  Are you an infinite 
      being?”</p>

    <p>“Mom!”</p>

    <p>“Well, are you?”</p>

    <p>“Yes, Mom”,  sounding congested while wiping her eyes.</p>

    <p>“And as such, you know that whatever you ask for with gratitude in your heart 
      and knowing, you will receive?”</p>

    <p>“Yes, but, it doesn’t feel that way. I ask, and I ask, and I ask even more. 
      And NOTHING!”</p>

    <p>“Sweet One, when our words ask one thing and our mind and beliefs ask another, 
      there is confusion and we get a mixed-up version of what we asked for.  We must 
      get extremely clear in our asking. It’s kind of like the movie Weird Science. 
      Remember? The two boys created this woman, every specific detail of her. 
      And ****POOF**** she appeared.</p>

    <p>“Go get a piece of paper and a pen.”</p>

    <p>She looked at me perplexed, then went up to her room.  I could hear her moving 
      stuff around; her room was typically disorganized but not dirty.</p>

    <p>“Got it, Mom, but I don’t see how goal-setting is going to *poof* my perfect
      boyfriend to appear.”</p>

    <p>She knew that writing goals is what I coach my clients to do. She stood at the 
      top of the stairs, pen and paper in hand.</p>

    <p>“With each step down the stairs, clear your mind.  Stop thinking. Each time 
      you take a step down towards me,  get into your body and become aware of the 
      feelings you will have when you are in the relationship of your dreams.”</p>

    <p>Rolling her eyes, embarrassed, she took a step down.</p>

    <p>“I know this seems weird, but trust me.”</p>

    <p>Once she reached the bottom step, we sat at the table. I picked up the remote 
      to turn on some music and asked her, “What kind of music does your ideal boyfriend 
      like?”</p>

    <p>She played the music from her Spotify account.</p>

    <p>“On your paper, you are going to write a list of the desired features for your 
      boyfriend. Be very specific.</p>

    <p>“Do not write ‘tall’. Write how tall: ‘minimum height of 5’9”.</p>

    <p>“Do not write ‘smart’. Write ‘scores in the top percent of his class. Is witty 
      and can think on his feet.’</p>

    <p>“Do not write ‘is rich’. Write ‘has a positive relationship with money’.</p>

    <p>“These are examples.  Ask yourself what color are his eyes? What color is his 
      hair? How long/short? What about his nose? Hands? Feet? Build? Teeth? What does 
      he like to do? Hobbies? How often? What are his characteristics? Humorous? Honors 
      his family? Self-confidence? Self-Worth? How does he make you feel?  Where do you 
      go on dates? What are his ambitions?</p>

    <p>“Once you have his picture in your mind and you can feel the energy of him, write 
      your list.  Read over your list in the morning when you get ready for school. Read 
      over your list right before you go to bed.  When you read the list, picture all of 
      it and feel the vibration of the relationship and the person.”</p>

    <p>She wrote out her list. She put it up on her vanity mirror and reviewed it just 
      as I said.</p>

    <p>“Mom, I met this guy named Jake, but he’s a little short.”</p>

    <p>“Go back to your list. Does Jake fit everything on your list? Does he make you 
      feel like the person on your list? You put your order in. If what you asked for 
      comes out wrong, don’t settle. Send it back with a grateful heart, and be patient.”</p>

    <p>A month went by. My daughter came to me again.</p>

    <p>“Mom! I met this boy named Grant. Guess what? He is the boy on my list!!”</p>

    <p>She has been dating Grant for over a year. Now she understands how the Law of 
      Attraction works. Getting very specific, visualizing, writing it down, reviewing 
      it daily ... all of these work together to create neuro-synapses in the brain, 
      electrical impulses, vibrating molecules, radiating through the universe 
      attracting similar vibrations.</p>

    <hr />

    <img src="images/AnaHernando.jpg" alt="">

    <p class="signature">Ana Hernado is a National Board Certified and Licensed 
      Occupational Therapist with more that 20 years experience who works extensively 
      with people who become victims of negative mindsets and beliefs.</p>
    <p class="signature">Phone: <a href="tel:+012147626989">214-762-6989</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '26'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="fire-alarms-to-wedding-bells"/>
    <p>&nbsp;</p>
    <h5>Fire Alarms to Wedding Bells</h5>
    <h6>By Anik Clemens</h6>

    <p>The paper I held in my hand started to crumble in one corner as the flame 
      took hold. I blew out the match and tossed it in the kitchen sink. As the 
      flame grew larger, the words began to disappear from the page, slowly at first 
      and then more quickly. The written attributes of my ideal mate were turning to 
      ash and floating up toward the ceiling. One day, at the right time and place, 
      my ideal partner would arrive, and we would be a family.</p>

    <p>That was my wish, anyway. To release this three page document I had written 
      of all of the characteristics of my ideal partner into the atmosphere, so that 
      the Universe would conspire to one day bring me the man of my dreams.</p>

    <p>But then….</p>

    <p>Eeeeernt! Eeeeeernt! Eeeeernt!</p>

    <p>An alarm … a fire alarm!</p>

    <p>I was pulled out of my reverie and into reality.</p>

    <p>Perfect. Just perfect. I had set off the fire alarm.</p>

    <p>My daughter … she will surely wake up.</p>

    <p>I ran into my daughter’s room, and there was my 
      one-and-a-half-year-old wide awake and sitting up in bed.</p>

    <p>“Mommy!” she started to cry.</p>

    <p>“Don’t worry sweetie. Mommy set off the fire alarm by accident. 
      It’s not a real fire. Come with me.”</p>

    <p>I swung her out of her crib and onto my hip, and we walked out 
      of the apartment and into the hallway to see if the fire alarm 
      was in the whole building.</p>

    <p>Luckily it was just in our apartment. Phew.  I was sure I had 
      woken up a number of neighbors. My brilliant idea to burn my list 
      came at 11 PM when everyone was already sleeping.</p>

    <p>I was a single mother of one daughter, and we lived in an apartment 
      while I looked to purchase a townhouse. We had just moved out of our 
      single-family ranch house where we had lived with her father, my then 
      fiancé, which had not been a good situation. We were just so wrong 
      for each other.</p>

    <p>I was sick and tired of being with the wrong guy, and now I had a 
      daughter to take care of and wanted only the best for us. I knew I 
      deserved the man of my dreams. But how could I meet him?</p>

    <p>I had heard about writing a wish list of attributes that you want 
      in your ideal partner. Now looking back on this fire alarm incident, 
      I have to laugh! It must have been the Universe telling me that my 
      list was all wrong!</p>

    <p>The men that came into my life after writing this first list were 
      not my ideal partner. They had some of the attributes on the list but 
      not all of them. And there were some things that were clearly wrong. 
      One had opposite political views.  One was sweet but not very attractive.
       One was chauvinistic. I dated all kinds of men, but none of them were 
       the right one for me.</p>

    <p>Two years later I wrote another list. This time I narrowed down the 
      attributes to one page. I included only those attributes that I wanted 
      in a partner. I skipped the things I didn’t want</p>

    <p>The next person that came into my life romantically was an old friend 
      who had had a crush on me for the past 10 years.</p>

    <p>A salty seaman he was, with dark wispy hair, sun-kissed skin, strong 
      legs, and a musical talent that sent me to tears. He could play any 
      instrument including the guitar, banjo, ukulele, didgeridoo, bongos, 
      fiddle and flute. He’d woo me with beautiful melodies and put my 
      daughter to sleep at night with lullabies. After six months of Facetime 
      flirting, he decided to come for a visit.</p>

    <p>He bought an old pickup truck, packed up all of his belongings, and 
      drove from Arizona to Florida. Two weeks later, he unloaded all of his 
      things into my garage and moved in. The three of us cooked together, 
      went to the beach, played at the park, paddled out into the ocean, 
      laughed, took long walks, and sang songs. It was a beautiful time 
      together.</p>

    <p>But something was missing.  We had the here and the now, but there was 
      no future.  We didn’t have the same goals or the same aspirations. It 
      was time to say goodbye. And just as quickly as he came, he was gone.</p>

    <p>Why was I not attracting the right person into my life?</p>

    <p>What was I doing wrong?</p>

    <p>Two years later I wrote my third list. And this time I simplified it 
      down to four things. This is how I wanted to FEEL in a partnership. 
      These were not attributes I wanted in my mate, but how I wanted to 
      feel when I was with my mate. I wanted these feelings to last a 
      lifetime.  So, I wrote them down.  I said them out loud. I embodied 
      them.</p>

    <p class="signature">I am LOVED.<br />
    I am SUPPORTED.<br />
    I am CHERISHED.<br />
    I am ADORED.</p>

    <p>That’s it. It was super simple. It became my mantra. I would say it 
      over and over every day. Day and night, I said my mantra, I felt my 
      mantra, I embodied my mantra. Soon enough I was living and breathing
       my mantra.</p>

    <p>I changed the way I treated myself. I supported, loved, cherished and 
      adored myself. And this is how I wanted my ideal partner to treat me.</p>

    <p>I met my perfect match, the man of my dreams, my partner and my best 
      friend after six months of repeating my mantra out loud over and over 
      again every day.</p>

    <p>At this time, my daughter was five years old. One of the things we 
      loved to do together was to go stand-up paddle boarding. It’s something 
      we could do together, while being in nature, getting some sun, exercising, 
      and seeing all the amazing creatures that live in and near the water.</p>

    <p>Also at this time, I was looking for a new business partner with whom to 
      lead retreats. Being a life coach, one of the things I find very rewarding 
      for people is getting back to nature and having a reset time where they can 
      connect more with themselves in a peaceful location. I started leading 
      outdoor retreats in 2014. In 2016, I was looking for a new partner. A mutual 
      friend introduced me to a lovely yoga teacher named Heather.</p>

    <p>“Of course, I’d love to partner with you. I have a whole fleet of paddle 
      boards, and I know just the location we could hold our retreat … Rainbow River. 
      It’s a beautiful spring fed river in northern Florida. It will be perfect 
      for an outdoor adventure. And my twin brother helps out with all the paddle 
      board stuff. We’ll make a great team.”</p>

    <p>I had no idea what to expect when I met her twin, but if he was anything like 
      his sister, I was sure going to like him.</p>

    <p>The first time I met him was at a unique paddle board spot on the Gulf of 
      Mexico called the Stilt Houses. It’s where nine stilt houses were built a 
      mile offshore in the early 1900s as a fishing village. We took a group of 
      paddlers to check them out and explore the island nearby.</p>

    <p>He and I were the first to arrive.</p>

    <p>When I saw him walk towards me, I knew it was “him”.</p>

    <p>The first thing I noticed about him was how tan he was. Glistening from 
      his suntan oil and the sun hitting his chest, he looked very Italian! He 
      wore a gold chain with a crucifix pendant around his neck. He smiled and 
      his crooked tooth in the front stood out to me. He was absolutely gorgeous.</p>

    <p>“Hey there. You must be Heather’s brother,” I said nervously as we 
      approached each other.</p>

    <p>“Yes. I’m Fred.”</p>

    <p>Fred. I would have never guessed his name would be Fred. He didn’t look 
      like a Fred. It didn’t seem to match his looks or personality … an Ian maybe, 
      or an Eric, but not a Fred.</p>

    <p>“Well then, Fred, it’s nice to meet you. I’m Anik. I’m partnering with you 
      and Heather. Shall we go check out a good launch site?”</p>

    <p>“Yes we shall.”</p>

    <p>The rest of the day we were glued to each other. It was like we were on a 
      date but with six other people there.</p>

    <p>We chatted about our lives and got to know each other as we paddled out into 
      the Gulf of Mexico. So many of our interests lined up. Both of our families 
      were tight knit.  We came to find out we had similar values. We both have 
      kids and neither of us wanted any more children. We seemed to want the same 
      things in life.</p>

    <p>Conversation flowed easily. We managed to keep an eye on the other paddlers 
      and help them out when needed, but then we would find each other again and 
      continue the conversation.  We were enraptured.</p>

    <p>The first time he met my daughter was on another paddle. This time we paddled 
      Weeki Wachee Springs, a six-mile river that is home to many manatees in the winter. 
      My daughter absolutely loves this paddle. She sits on my paddle board right in 
      front of me and points out the wildlife.</p>

    <p>“Mommy! Look over there. It’s a manatee!!”</p>

    <p>“Mom did you see that turtle on the log? Look, it’s right there. No, there’s 
      actually two of them. Mom. Looooooook!”</p>

    <p>“I see them sweetie. That’s soooo cool!”</p>

    <p>After our paddle, we had dinner at a great restaurant at the end of the river. 
      Kyra sat next to Fred. I could tell Kyra was sizing him up deciding if she liked 
      him or not. She was teasing him and asking him a lot of questions.</p>

    <p>“Kyra, you keep that up and I just might have to bring out the tickle bug.”</p>

    <p>That did it. Kyra loved being tickled. It wasn’t too long before he had won her over.</p>

    <p>Early on in our relationship, I let Fred know about my mantra. I told him that 
      the most important thing for me in a relationship was to be loved, supported, 
      cherished, and adored. That’s what I was looking for and that’s what I needed 
      in a relationship. Above all else, that’s how I wanted to feel. Could he give 
      that to me? Was that something we could have together?</p>

    <p>Over the course of the next year and half, Fred has shown me how much he loves, 
      supports, cherishes and adores me. He fulfills my list.  And I am so grateful.</p>

    <p>In 2017, Fred and I got engaged.  We are planning our wedding in St. Augustine, 
      Florida in June 2018.</p>

    <p>He is the man of my dreams.</p>

    <p class="signature">I am LOVED.<br />
    I am SUPPORTED.<br />
    I am CHERISHED.<br />
    I am ADORED.</p>

    <p>I am getting married at 40!!!</p>

    <p>Pinch me!!!!</p>
    
    <hr />

    <img src="images/AnikClemens.jpg" alt="">

    <p class="signature">Anik Clemens is a Certified Law of Attraction Life Coach, 
      doTERRA Essential Oils Mama and owner of Anik Perspectives, LLC.  Anik 
      specializes in working with women in transition. She has worked through 
      many transitions in her own life and feels blessed to empower others.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '27'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="welcoming-a-new-child"/>
    <p>&nbsp;</p>
    <h5>Welcoming a New Child</h5>
    <h6>By Dez Stephens</h6>

    <p>My current (and second) husband, Chuck, proposed to me on my 40th birthday. 
      It was a total surprise, and one of the mental flashes I had in that moment 
      was, “Because of my age, we need to get pregnant right away if we want a child!”</p>

    <p>My OB/GYN doctor agreed. She said, “Let’s get you on folic acid and prenatal 
      vitamins ASAP because you’re not getting any younger.” Then she described to 
      me all the reasons to be urgent in this matter, facts about the higher chances 
      of Down Syndrome, Spina Bifida, etc.</p>

    <p>When I was younger (in my 20s), I got pregnant quickly and easily. My first 
      husband and I had a daughter when I was 23, and I never had a thought like, 
      “Is it going to be hard to get pregnant?”</p>

    <p>But now, every month counted. Every month mattered because the statistics 
      showed the increased chances of pregnancy challenges due to “old eggs.” (Boy 
      did I get tired of hearing that term from my doctor, friends, and family 
      members – not the mention the Internet with all of its scary data.)</p>

    <p>My husband and I luckily got pregnant within two months when I was 40. We 
      went through the typical testing including an amniocentesis, a super long 
      scary needle in my belly to extract tissue to determine whether my child 
      had any birth defects. The whole pregnancy process was nerve-wracking because 
      there was always a sense of “tick tock, tick tock” based on my age.</p>

    <p>The initial test results came back “normal,” but our ultrasound at 22 weeks 
      was a very different matter. We were scheduled on a Monday for the appointment, 
      and I remember feeling a bit strange the weekend prior, like I had a stomach 
      ache that I’d never had before. When the technician put her equipment wand 
      on my stomach and started searching for the baby, her face went white.</p>

    <p>None of us heard a heartbeat. She said, “I’m going to get the doctor,” and 
      that was simply terrifying. My husband and I waited in frozen silence &ndash; even 
      holding our breath it seemed. Then the doctor came in to exam me and 
      unfortunately had to deliver bad news. Our baby had died. In a rare occurrence, 
      the umbilical cord got wrapped around his neck and suffocated him. Yes, our 
      genetic testing just six weeks prior showed it was a boy.</p>

    <p>We spent the next couple of days in the hospital with a procedure to remove 
      our baby boy from my very-pregnant looking body. When he was “born,” he had 
      all his fingers and toes and looked like a beautiful porcelain doll.</p>

    <p>We named him. We held him. We cremated him. Then we left the hospital without him.</p>

    <p>It was such a painfully intense week for us that led to an excruciating month 
      or so of, “What now?”… “Do we try again? Do we adopt instead? Do we let the 
      dream go?” At 41, these questions were not easy to answer.</p>

    <p>After two more years of trying, we realized that we were still grieving and not 
      emotionally ready at a subconscious level to get pregnant again. Then I had one 
      of those life-defining days.</p>

    <p>It was my 43rd birthday, and it was also Mother’s Day. My mother-in-law gifted 
      me with a white wrist flower corsage to represent the baby that we had lost. Then 
      she gifted me with another wrist corsage (for my other wrist) – with one blue and 
      one pink flower. (Yes like the kind that prom dates wear!)</p>

    <p>It was one of those very surreal moments we have in life. To my mother-in-law, 
      the pink and blue flowers represented the twins she wanted to help us “have” in 
      vitro. I was stunned.</p>

    <p>I walked into our pseudo-nursery and realized that we hadn’t officially welcomed 
      our baby because the nursery wasn’t finished yet. Then I noticed that everything 
      in the room was “dead.” There was a Purple Heart framed on the wall – my husband’s 
      Great Uncle’s from World War II. There was also his military outfit hanging in the 
      closet. In the corner was an ivory elephant tusk – a family heirloom.</p>

    <p>I immediately removed all the “dead stuff” and emptied out the entire room. Then 
      I placed a sweet little painting on the wall, painted by a friend specifically for 
      our nursery. We called it “Pinkie” because it was a cute little pink elephant.</p>

    <p>In writing down this story, I JUST NOW REALIZED that this “new” elephant item was, 
      in a way, the opposite of the “old” elephant tusk which, frankly, represented death 
      and animal abuse and negativity to me.</p>

    <p>It was May 11th, and I took yet another step toward something positive &ndash; 
      anything positive – to welcome a child into our lives. I emailed all my friends 
      and family to ask them for a favor. I knew that so many of them were feeling “bad” 
      for us about our miscarriage two years prior. I asked them something very simple 
      &ndash; to see me as a healthy happy pregnant mom-to-be. I basically asked them to 
      change their sadness into hope.</p>

    <p>Later that month, we got pregnant again! At the 12-week mark of our pregnancy, 
      we had a genetic test called a CVS (Chorionic Villus Sampling) so that we could 
      test for early signs of birth defects. It’s basically a DNA map of your child. 
      The nurse said to call the office “by Friday” if they didn’t call us with the 
      results.</p>

    <p>Friday came and we hadn’t heard anything, so at 4 PM I called the doctor. The 
      nurse said, “Oh, let me get the doctor,” so I started to panic. Minutes went by 
      and I tried to stay calm. FINALLY, she got back on the line and says, “I can’t 
      find the doctor so let me just tell you the results. It’s a 26Y.”</p>

    <p>I had no idea what that meant. I tentatively asked, “What is a 26Y?” and she 
      replied, “Oh, sorry. That means that your baby is a boy and he has all of his 
      necessary chromosomes. In other words, he’s perfect!”</p>

    <p>PERFECT. Our baby boy was PERFECT.</p>

    <p>And he is. His name is Merritt, and he’ll be nine years old next month.</p>

    <p>We are so grateful. We are always thinking, “Thank You, Thank You, Thank You!” 
      We are constantly in a state of gratitude about our son and our beautiful lives 
      together.</p>
      
    <hr />

    <img src="images/DezStephens.jpg" alt="">

    <p class="signature">Dez Stephens is the Founder & CEO of Radiant Coaches Academy, 
      a coaches training school for holistic life coaches, wellness coaches, and 
      business coaches. She is a certified life coach, master trainer and marketing 
      strategist.</p>
    <p class="signature">Website: <a @click="myLink('https://radiantcoachesacademy.com/dez-stephens-acc/')">dezstephens.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '28'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="man-of-my-dreams"/>
    <p>&nbsp;</p>
    <h5>Man of My Dreams</h5>
    <h6>by Hannah Golightly</h6>

    <p>For the past five years I have been pretty much desperate for a boyfriend. 
      It's a bit embarrassing to admit, but it's true! I wasn't just desperate for 
      any old boyfriend though. It had to be the right one. I was obsessed with 
      finding him and bored my friends by constantly talking about dating all the 
      time.</p>

    <p>I signed up for all kinds of dating apps and sites. I had the occasional 
      fling with completely unsuitable men. I briefly dated an abusive partner 
      who cheated on me, was violent, spread malicious lies, and carried out a 
      narcissistic smear campaign about me in my home town, while I tried not 
      to give up hope.</p>

    <p>Being in my mid-thirties with most of my childhood friends flaunting their 
      marriages, babies, and children on Facebook day in and day out, it was hard 
      at times. I felt left behind, rejected, left on the shelf. I didn't feel like 
      it was going to happen for me.</p>

    <p>I tried to lower my expectations after years and years of refining what I 
      was looking for in a man down to specific details. I began just wishing for 
      a man who didn't abuse me or hit me. I guess I thought that was more achievable 
      considering that I believed that all the good men were married or taken by 
      the time they were my age.</p>

    <p>Dating sites were full of men with very obvious issues. I spent hours and 
      hours trawling them looking for someone special, someone unique, a good match 
      for me.</p>

    <p>I am pretty unconventional in style, approach to life, music taste, and clothes. 
      I started feeling like I would be better able to attract a man if I looked more 
      normal or more mainstream. I mean, I thought I was cool … but I wasn't surrounded 
      by any men who appreciated me the way I was.</p>

    <p>My recent short-lived abusive relationship was with a man who wanted me to 
      completely change the way I dressed! I didn't give in, but it did make me 
      wonder if I was missing out on love because I was “different” in my dress 
      sense. But I have a fashion degree, and I firmly believed that my dress 
      sense was part and parcel of “the point” of a guy getting together with me. 
      I'd suit someone a bit less conventional and that was what would make me 
      special to the right man. But my faith got tested over and over again with 
      loneliness and failed attempts to get with men from dating sites.</p>

    <p>I started to see that when things manifest in our lives, they often ease 
      their way into our experience gradually. All the men I dated in the last 
      year leading up to finding the love of my life prepared the way in some 
      respect. They each got me used to the idea of a man who shared qualities 
      that my partner now has. In meeting each one, I sort of leveled up my 
      expectations about what I could expect in a partner.</p>

    <p>I mostly dated wealthy men for the first time in my life. Meeting them 
      online, I had no clue to their wealth. Previously, I had dated men who 
      sponged off me, and I paid rent for four of my ex boyfriends! I started 
      to expand my idea about getting comfortable with a man who had money and 
      would have a lot to offer me in terms of being a provider. I didn't actually 
      get together with any of these men, but they had this impact on my mindset.</p>

    <p>I had previously in my twenties written lists of qualities I was looking 
      for in a partner and had boyfriends with those exact qualities manifested 
      in my life. As the year wore on, I grew more and more disappointed with my 
      dating experiences and lack of success. I would meet men, we would get on, 
      and then after two dates or a couple of weeks, they would disappear or show 
      their true (unpleasant) colours while I ran for the hills.</p>

    <p>I wrote another list of qualities for my ideal partner at the end of 2016. 
      I deleted it some time in 2017 from my phone. I realised that whenever I 
      manifested a man to order like that, there was always some catch, something 
      I had overlooked. They didn't make me happy, and it didn't last.</p>

    <p>I persevered through terrible dating experience after terrible dating 
      experience. Being often housebound due to a health condition, I saw online 
      dating as my most likely way to meet a partner, but in all honesty, I didn't 
      truly want a love story that started with meeting on a dating site. I think 
      that's why in spite of being addicted to trawling them, I didn't meet anyone 
      on there worth dating.</p>

    <p>I even had some very scary experiences including a stalker and someone who 
      spat in my mouth! The final straw came when a guy put his hands around my 
      neck repeatedly on the first date, in the street, just a couple of hours 
      after I had met him! I told him I didn't like it, but he kept doing it. 
      That's the point where I just took the hint and deleted my dating accounts! 
      The Universe was clearly steering me away from them!</p>

    <p>After that, I completely gave up on men. I asked myself: do I even wanted 
      a boyfriend after all? I mean, most of my exes in my twenties had been abusive, 
      and dating had become scary and dangerous. What was the point?</p>

    <p>As many people know, depression can be triggered by giving up on a dream. 
      I gave up on love and men. I got very very down in the dumps and barely left 
      my house for about two months. I started to feel like I was literally going 
      to die from loneliness.</p>

    <p>My parents have a happy marriage and are still best friends forty years later. 
      Growing up, I didn't really perceive them as being in love, because it wasn't 
      like love in Hollywood films or on TV. My mother always told me she "married her 
      best friend," which didn't sound very romantic to me at the time. It took me 
      many years to see what they shared together clearly and to understand that what 
      they had was true love, what people should aim for in their life partnerships.</p>

    <p>I used to love the story my dad told about how they got together. They met in 
      Greece in the seventies while traveling, before this became a commonplace thing 
      to do. They discovered after getting together that my dad had actually visited 
      my mother's hometown before they met, meeting her dad in the shop her family 
      owned. I always found that magical to hear! I started to want that sort of thing 
      for myself, an epic love story rather than a convenient online dating boyfriend 
      experience.</p>

    <p>I came to terms with the fact that actually, no, I didn't know what I wanted in 
      a partner because whenever I had manifested from a list of desired qualities, 
      these men had arrived in my life and not made me happy. I usually ask the Universe 
      for the things I want to manifest. But on this occasion it resonated with me more 
      to ask God. So one day, I just asked God to "send me the perfect partner for a 
      soulmate relationship and send me signs so I know it's him."</p>

    <p>As I said that, I pictured my dad walking into my mum's shop and meeting her 
      dad long before they met in another country. To me, that was how I pictured a sign.</p>

    <p>Suddenly one day out of the blue, I was scrolling on Facebook and saw the friend 
      request icon appear. <em>Who is the Universe sending me now?</em> I have no idea 
      why I asked this. I often get random friend requests from strangers or people I 
      just met and don't even think anything of it. But I felt at that moment connected 
      to the Universe and open to its messages for some unknown reason.</p>

    <p>It turned out to be David, my ex-boyfriend from when I was a teenager. I wasn't 
      too excited to speak to him as he had asked me out in 2011 and then stood me up. 
      But I didn't mind adding him again, so I did. I just wasn't that bothered either 
      way.</p>

    <p>By this time I was really low. I usually think positively and upbeat and don't 
      often suffer low feelings or moods. But I wasn't myself, so I chatted to David but 
      wasn't as friendly as I would usually have been.</p>

    <p>I'm pretty blunt and open. So when David asked me how I was, I told him, "Right 
      now I feel suicidal." I wasn't in any danger of acting on these feelings, but I 
      just answered honestly about how I felt. He told me that he was feeling the same 
      way. This worried me, and I encouraged him to talk. I listened to him and did 
      what I could to support him and help him feel better.</p>

    <p>I somehow persuaded him to come over to my house a few days later. Both of us 
      were in a bad way. I hadn't showered for days, and my hair was a mess. I had no 
      makeup on, and I wasn't dressed. His eyes were dark, and he was very guarded. He 
      had a dark aura about him. He sat on the end of my bed and poured his heart out 
      to me, telling me things he had never told anyone before. I listened and listened.</p>

    <p>Eventually, he was about to leave, and I asked him for a cuddle. He gave me a 
      really awkward cuddle at first. I was quite concerned for him as he was so low 
      in himself. Then we lay down together, and we held each other tightly for the 
      first time. I felt like I had never been so emotionally close to anyone in my 
      whole life! It was by far the most intense hug I have ever experienced. It was 
      genuinely life changing.</p>

    <p>As we held each other tightly, both feeling the same thing, my heart spoke up. 
      It said directly, telepathically to David's heart the words, "I love you." 
      My ego mind kicked right in to protest! Thoughts like <em>Don't be ridiculous! 
      Of course you don't!</em> occurred, but my heart was sure.</p>

    <p>It was really weird, because I didn't feel that chemical high that I had 
      previously associated with love. It was a calm knowing feeling from my heart 
      to his. It had nothing to do with my mind or opinions.</p>

    <p>David later told me that I saved his life.</p>

    <p>As the weeks went on, we spent more and more time on the phone and at my house 
      together, reconnecting and getting to know each other again. Over time it became 
      more and more clear that there was something very special between us. There were 
      all these signs and synchronicities!</p>

    <p>We discovered that we had a matching scar on our chins.</p>

    <p>We finally saw significance in the fact that he had spent so much time in my 
      village as a teenager (before meeting me in a nearby town and dating me for 
      about a month), even though he lived about 30 miles away. He had visited my 
      mother's home town in a foreign country, just like my dad had done!</p>

    <p>Even though he lived about 30 miles away, he had visited my mother's home 
      town in a foreign country.</p>

    <p>He had a son born on my birthday. It blew my mind!</p>

    <p>We fell deeply in love, in a way that neither of us had come close to 
      experiencing before. As time goes on we continue to discover more layers 
      to our compatibility and see more signs and synchronicities that tell us 
      we are meant to be together. We have the same dream lifestyle that we are 
      working towards living together.</p>

    <p>It dawned on me that he is the man two psychics predicted that I would 
      end up with. Laul Richardson gave me a reading recently and told me I would 
      get with “a man who I had already met,” telling me he was a chef. After we 
      got together, David decided to change careers and become a chef, with no 
      prompting from me!</p>

    <p>She also told me that we would “live an alternative lifestyle,” and we are 
      doing just that, planning our eco house that we both dreamed of living in 
      and building before we got together.</p>

    <p>Last summer for my birthday, so many people who came for my night out 
      were called Dave or David that we actually nicknamed everyone Dave for 
      the evening, even the girls!</p>

    <p>I also spent a lot of time with two of my best male friends, both called 
      Dave, in 2017. Now I know this was the Universe preparing me for David to 
      come into my life. I love how it does that!</p>

    <p>He is everything I could ever wish for in a partner and so much more. 
      I am so glad I asked God to pick me my partner because he picked me someone 
      far better than I would have dared to dream of.</p>

    <p>David loves the same things as I do, prefers an alternative lifestyle, 
      likes a lot of the same music and fashion, and enjoys a lot of the same 
      food. We have so much fun and laughter together. We seem to be compatible 
      in every way possible.</p>

    <p>His family loves me, and I love them as well. He's more than a dream come 
      true, and vice-versa. He treats me like a queen, and I treat him like a king.</p>

    <p>He is my ultimate partner, and even though we had to wait 20 years to be 
      together, it was worth it for what we have together now. He taught me to 
      dream bigger and to believe in love.</p>

    <p>Neither of us have ever been happier!</p>

    <p>Follow your heart and you will find yourself happy.</p>
    
    <hr />

    <img src="images/HannahGolightly.jpg" alt="">

    <p class="signature">Hannah Golightly is a Law of Attraction Life Coach based in the 
      United Kingdom. She discovered conscious manifesting naturally as a child before 
      rediscovering it when she read <em>The Secret</em> in her mid-twenties.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '29'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="markus"/>
    <p>&nbsp;</p>
    <h5>Markus</h5>
    <h6>by Joel Elston</h6>

    <p>A few years ago, I received a call from a foster care caseworker. She explained 
      that she had been given my phone number by a colleague who thought I could help one 
      of the kids on her caseload.</p>

    <p>Since Medicaid doesn’t pay for life coaching (foster care kids have Medicaid), her 
      request began with the explanation that my services would need to be <em>pro bono.</em></p>

    <p>I agreed to hear the details and then decide what course of action to suggest.</p>

    <p>She said that Markus was 12 years old. He was placed in foster care when he was 8 
      due to his mother being sent to prison for drug distribution. She died a few months 
      into her four year sentence. Markus had no relatives that were able to take custody 
      or even provide minimum emotional support.</p>

    <p>Markus had been in multiple placements during his time in foster care: group homes, 
      therapeutic foster care homes, and regular foster care homes. At that time he lived 
      with a single foster parent with two other boys in the home. The foster mom had asked 
      for Markus to be moved to another home, mainly due to his defiance.</p>

    <p>His grades were all F’s when he would bother to take tests. He would not read the 
      question and often drew inappropriate drawings in the answer section. He was frequently 
      suspended, both in-school suspensions and out. He was on nine different psychotropic 
      medications to treat several mental health diagnoses. He has seen multiple counselors 
      and therapists, but none could get him to participate.</p>

    <p>The case worker said there was something about this particular kid that got to her. 
      He really had been dealt a bad hand. After hearing the details of Markus’ case, I 
      agreed to meet with him to see if I could help.</p>

    <p>For our first meeting, I met Markus at my office. I put my hand out to shake his and 
      said, “Markus, I’m Joel. It’s good to meet you.”</p>

    <p>He put his tiny hand out and lightly shook my hand. He said, “Good to meet you.”</p>

    <p>His voice seemed to be closer to that of a five-year-old than a 12-year-old. After 
      he sat down, he was not able to look me in the eye for long. He moved his legs back 
      and forth, his feet not touching the ground.</p>

    <p>“Markus, tell me about yourself,” is how I began our session.</p>

    <p>“I am oppositionally defiant. I am depressed and have ADHD,” was his response.</p>

    <p>I smiled and said, “No, tell me about you, what do you like to do?”</p>

    <p>“I don’t know,” he replied.</p>

    <p>When I asked which medications he was on, he seemed pleased since he knew the answer. 
      “Prozac, Ritalin, Tegretol, and Remeron are the ones I know. There are some others, 
      but I forget what they are,” he answered.</p>

    <p>“Do you know why you are on those?” I questioned.</p>

    <p>“The Prozac is for depression,” he responded.</p>

    <p>Before he could go on to the next drug, I asked him if he was depressed.</p>

    <p>He said, “Yes, I think.”</p>

    <p>“Do you know what depression is?” I asked.</p>

    <p>“It means you are sad,” he said, looking at the floor.</p>

    <p>“Being sad can be a part of depression, but being sad doesn’t 
      always mean you are depressed. Do you have a reason, or reasons, 
      to be sad?” I asked.</p>

    <p>“Well, I am in foster care, and my mom died. Nobody cares about me. I’m stupid 
      and will always be a fuck-up. Are those reasons to be sad?” he answered in a 
      cross between a mocking and angry tone.</p>

    <p>“Yep, I would be sad, too. There is one thing you said that I know for sure is 
      not true. You are not stupid. In fact, you are very smart,” I said with confidence.</p>

    <p>“That’s not what my teachers say,” he quipped.</p>

    <p>“FUCK THEM,” I said with a deep bass in my voice.</p>

    <p>“Can you say that?” he asked with a shocked look in his eyes.</p>

    <p>“I can say what I want, especially when it is the truth,” I answered.</p>

    <p>He smiled at the fact that I had used such strong language. I could tell he was 
      starting to invest in our session emotionally.</p>

    <p>I began explaining to Markus the concept of negative inner dialogue and the role 
      it plays in our reality. Markus had many people telling him what was wrong with him, 
      and as any kid would do he believed them. Doctors, counselors, and parental figures 
      had all told Markus how bad or disordered he was.</p>

    <p>I explained to him that he was behaving defiantly and that some one had labeled 
      him as having, “Oppositional Defiant Disorder,” a condition listed in the Diagnostic 
      and Statistical Manual of Mental Disorders, 4th Edition (DSM-IV).</p>

    <p>He had created his inner dialogue based on what he heard and observed. He basically 
      had become what they had told him he was. After I explained my theory to him, I could 
      tell he was buying it with a little skepticism.</p>

    <p>“What if everything I told you was true, and you created this obnoxious version of 
      yourself because you were given false information about yourself?” I asked.</p>

    <p>“What about all the damn medication I’m taking? That’s for real stuff,” he argued.</p>

    <p>“Let’s look at your medication. The first one you said you were on was Prozac. It is 
      for depression, right? You said you thought depression is about being sad. Does it help 
      you to not be sad?” I asked.</p>

    <p>“No,” he quickly answered.</p>

    <p>“You said your Mom died, and you are in foster care. I think anyone would be sad if 
      those things happened, right?” I asked him.</p>

    <p>“Yes,” he conceded.</p>

    <p>“Does Prozac in any way help your Mom not be dead or get you out of foster care?” 
      I asked.</p>

    <p>“No, it doesn’t,” he said, with a bass and power in his voice that wasn’t there before.</p>

    <p>I spent the rest of our session explaining to Markus how he is in charge of his own 
      happiness, how his thoughts create his reality, and more details about the Law of 
      Attraction.</p>

    <p>I gave him a copy of the book, <em>The Secret,</em> by Rhonda Byrne and asked him 
      to call me when he wanted to meet again, but only after he read the book. He told me 
      he would read it. We stood up, and I was caught off guard seeing tears in is eyes as 
      we shook hands.</p>

    <p>The next day I had a message on my voicemail from Markus’ caseworker asking me to call 
      her back. When I returned the call, she was excited. Markus went home after our session 
      and told his foster mom that he was misdiagnosed with Oppositional Defiant Disorder and 
      he would no longer be giving her a hard time. He apologized to her for his past behavior 
      and thanked her for taking care of him. The foster mom said he was a different kid the 
      rest of the day.</p>

    <p>He got up the next morning without prompting and got dressed for school with no arguing. 
      On the way out the door, he asked his foster mom to get him an appointment with his 
      psychiatrist, saying he needed to discuss his medications.</p>

    <p>The case worker was shocked.</p>

    <p>“He has never listened to any counselor before. What did you tell him that reached him?” 
      she asked.</p>

    <p>“The truth,” I replied.</p>

    <p>A few days later I got a call from Markus’ foster mom. She reinforced what the case worker 
      had reported and said his remarkable change continued.</p>

    <p>She also reported that Markus’ teacher called her to let her know Markus apologized for 
      his past behavior. He committed to work hard in her class. He even asked to be moved to 
      the front of the class to avoid distractions.</p>

    <p>She also asked if I would go to Markus’ psychiatric appointment with him the following 
      week. She was worried that the psychiatrist would not listen to what he had to say. 
      I agreed to go.</p>

    <p>I met Markus and his foster mom outside of the psychiatrist’s office. I asked him, 
      “Are you nervous?”</p>

    <p>“Not a bit,” he responded with confidence.</p>

    <p>After a 30-minute wait to see the psychiatrist, Markus and I stepped into his 
      consulting room. The psychiatrist asked who I was several times and asked Markus 
      if he wanted me in the appointment.</p>

    <p>Markus looked him in the eye and said, “I asked him to be here.” He had a resolve 
      I didn’t know he possessed.</p>

    <p>The psychiatrist began to speak, and Markus interrupted, “How does Prozac help with 
      my mom dying? How did you determine I needed 80 mgs of Ritalin? Where is the evaluation 
      that shows I have ADHD?”</p>

    <p>Markus was relentless but remained in control. He clearly had researched each 
      medication. The psychiatrist tried to answer along the way, but Markus kept asking 
      medication questions. It was clear the psychiatrist was frustrated and no match for 
      this amazing kid.</p>

    <p>“I want to get off all this crap as quickly as possible,” Markus demanded.</p>

    <p>The psychiatrist was clearly angry but agreed. When he handed Markus his new 
      prescriptions, Markus asked me, “Will you help me find a new doctor?” I nodded 
      in agreement.</p>

    <p>In the parking lot I told Markus that I was impressed with what I saw. I reminded 
      him of his power over his perspective, saying his new perspective should include 
      seeing himself as powerful, resilient, and brilliant. He gave me a hug.</p>

    <p>His foster mom hugged me and then hugged Markus. She told him, “I have never been 
      more proud of anyone than I am of you. I have never seen anyone make such a positive 
      change so quickly. You make me want to be a better person.”</p>

    <p>Markus told her, “Let’s help each other.”</p>

    <p>I had several more sessions with Markus, and his change was amazing. His new 
      attitude caused others to change their attitudes toward him.</p>

    <p>His teacher became his biggest advocate and worked with him to catch him up. He 
      went from all F’s to the A/B Honor Roll. Markus started to love school, and he 
      continues to thrive in the educational environment. His only medication is a small 
      dose of Ritalin to help him focus. He only takes it on school days.</p>

    <p>A few months ago, I had a call from Markus. He was joyful as he yelled, “I’m 
      getting adopted!” A family had been identified as an adoptive placement.</p>

    <p>Markus is now 14-years-old and living with his new family. His adoption hearing 
      will occur sometime in March 2018. I will be there!</p>

    <p>A young man changed his entire world for the better by simply changing his 
      perspective. The Law of Attraction is always at work. Knowing how to use it to 
      your advantage is the key. Younger people actually respond better than older people 
      to this message because they have less negative baggage to release.</p>

    <p>The Law of Attraction cannot change the past, but understanding it can change 
      your perspective of the past. Markus decided he was no longer going to be a victim 
      of his past. He chose to be strengthened by his experience instead of defeated by 
      it. He realized that he, and he alone, was in charge of how he viewed the past. We 
      each have this amazing power.</p>

    <p>Markus recently told me he wants to be a psychiatrist who uses Law of Attraction 
      concepts in his practice. Trust me: if this kid wants it to happen, it will happen.</p>

    <hr />

    <p>Markus’ story is based on a real case. However, Markus is not his real name, and 
      other details have been altered to protect his confidentiality. One day this 
      outstanding young man will let the world know who he is and share even more 
      details of his amazing story.</p>
      
    <hr />

    <img src="images/Joel.jpg" alt="">

    <p class="signature">Joel Elston, CCP, CHC, Certified Life, Health, Success, 
      Addictions &amp; Recovery Coach specializing in gambling and alcohol addiction, 
      substance abuse, and other related issues.</p>
    <p class="signature">Website: <a @click="myLink('https://www.joelelston.com/')">joelelston.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '30'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="being-found"/>
    <p>&nbsp;</p>
    <h5>Being Found</h5>
    <h6>by Walt Thiessen</h6>

    <p>During the first 40 years of my life, I was less than successful when it came to 
      the opposite sex.</p>

    <p>That's putting it mildly!</p>

    <p>n truth, I had not had a single successful relationship in all my years that lasted 
      more than one month. One month! On numerous occasions I asked friends and family to 
      please explain women to me using small words, short sentences, and illustrative 
      diagrams. I was that confused.</p>

    <p>After 22 years as a legal adult, I was so depressed and so discouraged that I was 
      ready to just give up. I could not see any way around this seemingly insurmountable 
      problem.</p>

    <p>It's not like I hadn't taken any steps to try to improve my situation over the years. 
      I had signed up for dating services and even started a dating newsletter, a singles 
      dance with a friend that produced exactly one dance before we decided it was 
      uneconomical, and a singles magazine that produced just one issue.</p>

    <p>I had met more women than most men meet in a lifetime, leading to one crushing 
      disappointment after another.</p>

    <p>During the most recent 10 years, I had crawled out of my shell as an extreme 
      introvert by becoming a swing dancer, which introduced me to dozens, even hundreds 
      of women. I was good at it too, so for the first time in my life I was popular &ndash; 
      as a dance partner in demand, but that was about it.</p>

    <p>I felt that my biggest hurdle was the fact that I stand 6'8" tall, and the limited 
      feedback I received from women I met for romantic purposes was that I was just too 
      tall. I even joined a club for tall people and was told by one of the members that 
      I was STILL too tall for her!</p>

    <p>With no idea what I should do about that, all I managed to accomplish was to become 
      more depressed.</p>

    <p>So by the Spring of 1998,  after a particularly bad series of dating experiences 
      with a “friend,” I had enough. I threw in the towel. In my gloomy perspective, I 
      tried to come to grips with the fact that I would likely remain an unhappy bachelor 
      the rest of my life.</p>

    <p>I knew nothing about the Law of Attraction at the time. I later realized that my 
      real problem with women was that I had rapidly become more and more negative in my 
      outlook toward women over time, so I expected relationships with them to not work 
      out. And so of course, they didn't. How could they?</p>

    <p>Heck, I practically forgot how to smile, let alone laugh!</p>

    <p>Meanwhile, about six months earlier, my future wife's cat died. She and Shadow had 
      been together for 16 years, and losing him was understandably difficult. But as she 
      emerged from her grief, she made a conscious decision to switch tracks.</p>

    <p>One day a friend asked her if she planned to get another cat.</p>

    <p>"No, I am going to get a husband!" she replied without skipping a beat.</p>

    <p>Her luck with relationships had not been much better than mine. She had one serious 
      relationship that lasted a few years, but in the end it just did not work out. They 
      were not a good match.</p>

    <p>But unlike me, she was determined not to be alone for the rest of her life. So she 
      began a concerted campaign to ask as many people as she could about whether they knew 
      of any emotionally healthy single guys who were available.</p>

    <p>Many years earlier, as a graduate student seeking a degree in Marriage and Family 
      Therapy, she filled out a written "wish list" identifying the characteristics and 
      traits of her ideal mate, an exercise required by one of her professors. Now, after 
      updating it in her mind, she put it out to everyone she knew that she wanted to find 
      that man.</p>

    <p>Not surprisingly, as a professional therapist she had many friends and business 
      associates in the field. Because of what she learned from her own therapy, as well as 
      what she learned through the therapeutic services she supplied to her clients, it had 
      become critically important to her to find someone who was emotionally stable and 
      healthy. That became the basis of the question that she asked everyone with whom she 
      came in contact during her daily life.</p>

    <p>One of the people Louise asked was a fellow therapist whom she did not know really 
      well and perhaps might not have picked as her first choice for making such a request. 
      Dee was a consulting therapist in the family services outfit Louise worked for. She 
      was a little new-agey in her interests, and Louise was not entirely sure that she 
      would know a man that would fit Louise's requirements.</p>

    <p>But she did not let that deter her. She asked anyway. Dee's immediate response was, 
      "Yes, I do know one. Shall I ask him to call you?"</p>

    <p>Just one? Why did Dee think of me when asked for a recommendation for an emotionally 
      stable and healthy male? I have no idea. She knew hundreds of men in the swing dance 
      community, many of whom I would have described as emotionally stable, healthy, and 
      available.</p>

    <p>I later asked her why she thought of me. She just shrugged her shoulders.</p>

    <p>Louise blushed a bit and replied, "Well, maybe you might ask him first whether he 
      might be interested. If he is, give him my phone number. "</p>

    <p>Dee did just that. I had attended some parties and get-togethers she had sponsored, 
      so I wasn’t completely surprised when she called me one Tuesday in early April to 
      explain that she had a coworker who was looking to meet me. Would I be interested?</p>

    <p>Dee's inquiry did catch me off balance, though, as it reopened some old wounds 
      unintentionally. After all, I had just given up on women! We talked for a bit, and 
      I guess I just kinda gave in more than anything else. I certainly was not enthusiastic. 
      Saying yes was more of a default reaction than anything else.</p>

    <p>She gave me Louise's phone number, telling me that the best day to reach her was on 
      Wednesdays. After her call, I left the slip of paper with Louise’s number on the side 
      table in my living room. But the phone number’s existence stuck in my mind, and a day 
      later on April 15, 1998, I decided, <em>Oh what the heck! The worst thing that happens 
      is I get emotionally crushed once again.</em></p>

    <p>I picked up the phone and called her.</p>

    <p>"Hello, my name is Walt Thiessen. A mutual friend, Dee, gave me your phone number. 
      Is this a bad time to call?"</p>

    <p>She replied, "No! Not at all. I was just doing some things around the house. Nothing 
      important."</p>

    <p>I decided before calling that I would talk to her for five or 10 minutes to be polite, 
      probably lose interest, and then hang up. Two hours later, I modified my opinion slightly. 
      Louise had a silly sense of humor that I found refreshing, and unlike so many other 
      women I met, she had not yet given me any signals that she intended to play games with 
      me.</p>

    <p>Of course, it was just one call. I had too much experience with too many women to believe 
      that the final verdict was in.</p>

    <p>We hung up after agreeing to touch base again another time. To be honest, I wasn't so 
      sure I was going to call again, but I did. The next week, again on Wednesday, I phoned 
      her. That conversation also lasted more than two hours. So did the one the following 
      Wednesday.</p>

    <p>After three long phone conversations, I figured it was probably time to try to meet 
      each other. I made it clear during the third conversation how tall I was, without 
      actually specifying the height. I heard the hesitation in her voice, but she said she 
      was 5’6” if she stood up straight.</p>

    <p>I laughed at that, and we agreed to meet the following Saturday at a local restaurant 
      halfway between our respective homes.</p>

    <p>That Saturday, May 2, 1998, we met for lunch at the Maples Restaurant in Middlebury, 
      Connecticut. The food was only so-so, but that was the least of our problems. Louise 
      walked in the door wearing this battered old straw hat that she thought of as quirky, 
      cute, and fun.</p>

    <p>I thought it made her look like a hick.</p>

    <p>To make matters worse, the entire time that we sat to eat and talk together, she refused 
      to look me in the eye. Not once. For whatever reason, we just couldn't make eye contact.</p>

    <p>She also knew exactly how tall I was now!</p>

    <p>We parted company that day with me giving her a tepid promise to call her. She 
      decided on the spot that she would never hear from me again, and if you had pressed 
      me on the point, I probably would've agreed with her assessment.</p>

    <p>Dee had previously scheduled a party for that night that I planned to attend. She, 
      another woman, and myself all shared birthdays that week, so it was a combined birthday 
      party for the three of us. When I showed up at her house, the first question Dee asked 
      me was, "How did the date with Louise go?"</p>

    <p>"Not very well," I replied with a roll of my eyes as I twisted my lips together like 
      I had bitten into something bitter.</p>

    <p>She asked why, and I told her the story. Dee did not blink an eye. She simply asked, 
      "You’re going to follow the three date rule, right?"</p>

    <p>"The what?"</p>

    <p>"The three date rule."</p>

    <p>"Never heard of it."</p>

    <p>"That's where you give it three dates before you make a final decision about whether 
      or not the two of you might be right for each other."</p>

    <p>I had never heard of anything so crazy in my life. We had no chemistry at all. 
      Why would three dates matter?</p>

    <p>I already knew that we had nothing in common. Well, that wasn't quite right. In our 
      phone conversations we actually had quite a bit in common. But in person, we clearly 
      were not getting along in, shall we say, a romantic way.</p>

    <p>After the party as I drove home, I pondered Dee's suggestion. Once again, I kinda 
      shrugged my shoulders and thought, <em>Oh well, what could it hurt? My emotions are 
      so frayed these days that one more disappointment won’t hurt ... much.</em></p>

    <p>For the next date, I invited Louise to go with me to the Norwalk Aquarium. We had a 
      really nice time, and when I took her home, she asked me if I might be interested in 
      rollerblading. It was one of the many subjects we had discussed that day. I told her 
      I wasn't really good at it, but I was willing to give it a shot.</p>

    <p>The rollerblading date went okay too, but when I took her home she "inadvertently" 
      left her sweater in my car. She called me later and asked me if I’d found her sweater. 
      I asked her to hang on and went out to check the car.</p>

    <p>When I came back to confirm that I found it, she asked if I liked strawberry shortcake. 
      I said that I did. She invited me over, and when I got there she introduced me to her 
      new kitten, Eli.</p>

    <p>Being the romantic man that I am, I spent most of the evening playing with the kitten.</p>

    <p>Louise was not impressed, but she was also not deterred.</p>

    <p>I had already told her about my interest in swing dancing. I wanted a partner who 
      knew how to dance. So for the next date, I brought over to her apartment a cassette 
      tape of swing dance music so I could teach her the basic steps.</p>

    <p>To this day, we can't agree who pulled whom in, but that was the night we became 
      a couple.</p>

    <p>I had been in love before, but this was different. It wasn’t that, “Oh god, I 
      desperately need you,” kind of love. This love felt more real, more solid, and 
      surprisingly relaxed. It was the love of a best friend as much as the love of 
      a lover.</p>

    <p>A new feeling began to well up in me, one that I hadn’t experienced in ... well, 
      in a very long time. How long, I couldn’t have said. Perhaps I’d never felt anything 
      like to before. I wasn’t sure, but I also didn’t care one way or the other whether 
      I had.</p>

    <p>In short, I was happy. I mean, I was really happy. I even smiled. A lot. It wasn’t 
      that sexual chemistry kind of happy. It was more like a deep-in-your-being kind of 
      happy, the kind that feels real and permanent.</p>

    <p>Some days later, she pulled out that “wish list” she had written all those years 
      before. To my surprise, I matched every important requirement on her list.</p>

    <p>The height issue didn’t go away without a fight, however. A month after we got 
      together, Louise called me one day to say that she needed a break for a few days 
      because we’d been spending so much time together.</p>

    <p>That nasty little voice in the back of my head piped up.</p>

    <p><em>Here it comes,</em> I thought with a cringe.</p>

    <p>We stayed apart for one night ...</p>

    <p>I thought it was over.</p>

    <p>Little did I know, Louise called her friend Lesley about her situation with me. 
      Lesley asked her what was wrong.</p>

    <p>“He’s just so tall!” Louise said.</p>

    <p>“Okay, what else?” Lesley asked.</p>

    <p>“Well, that’s it. How will we ever fit together?”</p>

    <p>“Louise,” Lesley lectured her, “If that’s the worst 
      thing you can say about him, what are you really afraid of?”</p>

    <p>When she examined her feelings even deeper, Louise realized that she was just 
      so emotionally overwhelmed by being with a guy (me) who was the first guy she 
      had ever met who just loved and accepted her for who she really was.</p>

    <p>She wasn’t used to being treated this way by a lover and a mate, as a woman 
      who deserved to be loved, respected, with emotionally healthy boundaries and 
      being treated as an equal in every way.</p>

    <p>She called me right after that conversation with Lesley to invite me over.</p>

    <p>A little more than a year later, we married.</p>

    <p>For all those years, I felt defeated. Little did I know that all I had to do 
      was give up trying so hard, give up feeling unhappy and depressed about my lack 
      of intimate relationships, and the universe would happily deliver my life mate 
      within a matter of weeks.</p>

    <p>Surprise!</p>
    
    <hr />

    <img src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '31'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="friends-delivered-to-me-by-the-law-of-attraction"/>
    <p>&nbsp;</p>
    <h5>Friends Delivered to Me By The Law of Attraction</h5>
    <h6>by Wendy Dillard</h6>

    <p>Having a close friend to share my thoughts and deepest desires has always been 
      important to me. When I was married, my husband was my best friend and the one 
      with whom I shared deep and meaningful conversation. However, when he and I weren’t 
      getting along, I wished I had nurtured my before-marriage girlfriend relationships. 
      I found myself without a close female friend to discuss difficulties I was facing. 
      Since I have a big need to express myself verbally, I know that almost every time 
      I talk out my thinking to someone, I gain new insights. I love receiving new insights. 
      I practically live for them.</p>

    <p>After the divorce, I found myself in quite the conundrum. Even though my ex and I 
      parted on good terms, reaching out to him for good conversation was no longer an 
      option, as we had chosen to end our marriage so we could spread our wings and move 
      on in different directions.</p>

    <p>At this point in my life, I was using the Law of Attraction the best I knew how. 
      As I pondered my situation of not having any close friends, I was clear that I wanted 
      a girlfriend that lived close to me, so that I could call on a whim and ask her to 
      share a meal at a local restaurant. This girlfriend needed to love deep and meaningful 
      conversation like I did and be actively involved in her own personal development.</p>

    <p>I wondered if this was too much to ask. But, having studied Law of Attraction, I 
      recalled learning that <em>if I have the wherewithal to desire something, the Universe 
      has the wherewithal to deliver it to me.</em></p>

    <p>So, I set my intention on my new female friend. Then I quickly revised my request 
      have several close friends, not just one. The others didn’t have to live as close, 
      just close enough that we’d be within driving distance for in-person time together.</p>

    <p>In my area, we have hundreds of Meetups where you can connect with others locally 
      on practically any given subject matter and I regularly received email notices when 
      a new Meetup group had been launched.</p>

    <p>One day I saw the name of a new group that captured my attention. It was called the 
      “Wonder Tribe of North Texas.”</p>

    <p>I thought, “Hmmm, let’s read the description to learn more.”</p>

    <p>I could tell the description was written by a very positive, upbeat, highly energetic 
      woman. The thought of being with like-minded people like her really excited me, so I 
      joined.</p>

    <p>I got to the first Meetup a bit early where I was greeted by Rhonda, the leader of 
      the group. She was as energetic and welcoming as her group description. While engaging 
      her in conversation, I started to hope no one else would show up so I could spend more 
      time getting to know her. Also, I was wondering if maybe she would become my new 
      bestie. But then she mentioned where she lived, and I realized it was too far for 
      an impromptu dinner.</p>

    <p>Once other participants arrived, the Meetup began. The group conversation was definitely 
      to my liking, so I knew I wanted to do this again because it felt so invigorating to be 
      in the presence of like-minded people. Near the end of the gathering, Rhonda made a point 
      to let me know that the lady sitting across from me (Keisha) lived in the same town as 
      I did. So, Keisha and I agreed to car-pool to the next Meetup.</p>

    <p>The next Meetup was a month out, and as promised Keisha and I drove together. Our 
      conversation was quite stimulating both there and back. As the drive home was coming 
      to an end, I asked if she’d be interested in sharing a meal sometime. She said she’d 
      absolutely welcome that. I went home that night with a sense that I might have met 
      the new friend I was hoping to find that lived near me!</p>

    <p>Even though I was eager to schedule a dinner, I wanted to go slow because I’d been 
      burned before – thinking I’d made a new friend only to find subsequent conversations 
      were boring. But, driving together to the next <em>Meetup</em> was around the corner, so 
      I knew we’d have another opportunity to see if our conversation was just as satisfying. 
      <em>And it was!</em></p>

    <p>We spent hours in deep conversation during our first dining excursion, not leaving 
      until the restaurant was closing. And we knew we’d not even begun to scratch the 
      surface of the things we could talk about.</p>

    <p>We began to meet for dinner more often until it became a weekly event that we both 
      looked forward to with great anticipation. During the week, I’d keep track of the 
      things I wanted to talk about with her, so that when Friday night came, I was prepared 
      with all sorts of fun ideas to discuss. And little did I know, she was doing the same 
      thing. Our conversations went all over the place from personal development to 
      technology to childhood stories to our thoughts on global consciousness. We could 
      literally talk about anything with one another.</p>

    <p>As a life coach, having a friend where we could engage in coaching conversations was 
      an aspect I really desired in a friendship. During one of our weekly dinners, I asked 
      Keisha for some coaching to which she was agreeable. I found her insights refreshing, 
      and I definitely appreciated the different point-of-view she came from.</p>

    <p>One hiccup we faced as friends was that even though we both spoke English, how we 
      expressed our experiences was very different. I come from a left brain, logical and 
      linear perspective. Whereas, Keisha comes from a very right brain, etheric perspective. 
      She sees the world through Energy (the unseen level of our existence). I’d never met 
      anyone like her before that interpreted the world through Energy and the non-physical. 
      We often had to interrupt our flow of conversation to define terms to try to get to 
      the heart of what was being communicated which left me feeling very frustrated.</p>

    <p>I recalled that when I was requesting a like-minded friend, I had specifically said 
      to the Universe that this person didn’t have to know the same personal development 
      systems that I knew, so long as she was passionate about her own personal evolution. 
      If she was schooled in different techniques, that could be even better because I could 
      learn new ways to work on issues that could benefit both myself and my clients. (Be 
      careful what you wish for!) Keisha was definitely as passionate about personal growth 
      as I was, but her terminology was so different from mine.</p>

    <p>But even with our communication challenges, our conversations were fun, exciting, 
      and incredibly inspiring. One night, as we were saying our good-byes, Keisha said, 
      “I can’t wait to see how much our lives will have changed by next week.”</p>

    <p>And she was right, our lives really were making dramatic changes from week-to-week. 
      Whatever topics we discussed fueled our desires to easily show up by the following 
      Friday night (or at the very least, we’d see evidence of the desire making its way 
      into reality).</p>

    <p>Keisha and I were tenacious and eventually came to a place of more easily understanding 
      each other. We’re continually amazed at the amount of personal growth we’ve each 
      experienced in the time we’ve been friends.</p>

    <p>One of the Meetups Rhonda arranged was to attend an Abraham-Hicks workshop. Since 
      I’m a huge Abraham-Hicks fan, I immediately signed up for this road trip that I knew 
      would give us a four-hour drive to talk. During the drive, I shared a painful 
      childhood story, to which Rhonda coached me into new empowering beliefs. And since 
      then, Rhonda and I have shared girlfriend / coaching conversations on numerous 
      occasions.</p>

    <p> Rhonda’s Meetup came to an end after only a handful of gatherings. But Rhonda 
      believes (and so do I) that the primary purpose for creating this Meetup was because 
      it was the Universe’s way to connect us and for her to introduce me to Keisha.</p>

    <p>A short time later, at an Abraham-Hicks land-cruise in Cancun, I met Clarissa. While 
      sharing an elevator ride, we learned that we both lived in the same city, so we 
      exchanged business cards promising to be in contact when we arrived home. Humorously, 
      a year later when planning to go to a local Abraham-Hicks workshop, I texted her to 
      see if she planned to attend and she responded that she would be there.</p>

    <p>Clarissa and I hugged at the workshop, laughing at how we’d not been in touch since 
      Cancun. I found out that Clarissa was a practitioner of services I could use. So, we 
      purposely scheduled my appointments at the end of her work day, so we could grab 
      dinner afterwards and enjoy some juicy Law of Attraction conversation. As our 
      friendship was blossoming, I’d had the internal nudge to introduce Clarissa and 
      Keisha.</p>

    <p>So, my next impulse was to schedule a lunch for the four of us (me, Rhonda, Keisha 
      and Clarissa). Our synergy was unlike anything I’ve ever experienced. The four of us 
      now meet periodically where we’re never at a loss for conversation or laughs! We are 
      so on the same vibrational wavelength. It’s truly inspirational! (And as I suspected 
      Keisha and Clarissa struck up a wonderful friendship for themselves.)</p>

    <p>I now have individual friendships with Keisha, Rhonda and Clarissa that are unique, 
      each satisfying a different aspect of me. But, having all four of us like-minded 
      women hanging out together is <em>game-changing!</em> We now call ourselves the 
      “Fab Four,” which perfectly suits us. We are four fabulous women choosing to live 
      our lives at the highest level. When we’re together, we support one another, share 
      our latest epiphanies, and do a lot of laughing!</p>

    <p>Even though I’ve been applying the principles of Law of Attraction for a number of 
      years, it never ceases to amaze me when experiencing the full manifestation of 
      something for which I’ve asked. I’m always surprised and delighted at how it shows 
      up because it’s always so much better than I could have planned.</p>

    
    <hr />

    <img src="images/WendyDillard.jpg" />

    <p class="signature">Wendy Dillard is a Masterful Law of Attraction Teacher &amp; Coach. Her expertise is in 
      nowing how to apply the Law of Attraction to any situation. What other people call 
      miracles and coincidences, Wendy considers normal and the way life is intended to be. 
      Website: <a @click="myLink('https://www.wendydillard.com')">www.wendydillard.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '32'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="overcoming-five-devastating-losses"/>
    <p>&nbsp;</p>
    <h5>Overcoming Five Devastating Losses</h5>
    <h6>by Debra Oakland</h6>

    <p>In the span of four years, I lost my 21-year-old son, my unborn baby girl in 
      my eighth month of pregnancy, both brothers, and my father to prostate cancer.</p>

    <p>Those few, tragic years could have led to a dramatically worse outcome had I 
      not embraced my inner power, but I knew that the combined power of thought, 
      feeling, and action was required to build a strong inner foundation of courage.</p>

    <p>I look at life as my own personal, ever-changing movie reel. While some may 
      question how I could be writing my own script when there was so much sadness 
      in such a short period of time, I firmly believe we are where we are at any 
      given moment in time based upon an infinite and sequential series of choices 
      we make on our journey.</p>

    <p>The seemingly random events that occur are our cues to speak, to act, or to 
      respond. Which direction the scene takes is not based on the events occurring in 
      our lives but rather upon how we script our response.</p>

    <p>As the lead character in our own mental movie, we deliver our feelings, our 
      emotions, and our words while we direct our inner movie, sometimes with very 
      little editing but always in living color.</p>

    <p>My ultimate goal was to become the conscious director of my personal life movie, 
      rather than the reluctant supporting character.</p>

    <p>Let me share my story as a script with two different endings.</p>

    <hr />

    <p class="signature center">SCRIPT #1 – FADE IN</p>

    <p>My husband, Cody, answers a call from the hospital at five o’clock on a Sunday 
      morning. It is news a mother never expects to hear. There has been a car accident. 
      My son has died.</p>

    <p>First: disbelief. This can’t be happening! You never expect to lose a child before 
      your own life is complete. <em>Please God, make this go away.</em></p>

    <p>Shock sets in; indescribable pain permeates my entire being. I had been through so 
      much loss already. Now I have lost my only child and am heartbroken.</p>

    <p>In a state of shock, feeling disconnected and out of body, I have to decide how 
      to begin handling this news. Family is calling; people are trying to connect out 
      of concern and love.</p>

    <p>I want to sit and be still. No, that doesn’t feel good. I need to get up and move 
      around, go somewhere. No! That doesn’t work either. What to do, where to turn, how 
      to function?</p>

    <p>Cody is my rock, but he is in shock as well. How do we get through this loss? How 
      do I comfort us both? I can’t. Not now!</p>

    <p>Depression sets in, unable to function on any level; the days drag on to become 
      weeks, months, and years. Life has lost its luster. There seems to be no hope of 
      feeling normal again. Tears flow endlessly, guilt, self-pity, and hopelessness 
      become close friends.</p>

    <p>My marriage is lifeless, and I see no hope of it changing. My greatest fear is to 
      be hurt again by loving so deeply. Cody can no longer live in this sad and broken 
      marriage. As he takes his leave, he wishes it would have all turned out differently.</p>

    <p class="signature center">FADE TO BLACK</p>

    <hr />

    <p class="signature center">SCRIPT #2 – FADE IN</p>

    <p>My husband, Cody, answers a call from the hospital at five o’clock on a Sunday 
      morning. It is news a mother never expects to hear. There has been a car accident. 
      My son has died.</p>

    <p>First: disbelief. This can’t be happening! You never expect to lose a child before 
      your own life is complete. <em>Please God, make this go away.</em></p>

    <p>Shock sets in; indescribable pain permeates my entire being. I had been through 
      so much loss already. Now I have just lost my only child and am heartbroken.</p>

    <p>In a state of shock, feeling disconnected and out of body, I have to decide how 
      to begin handling this news. Family is calling; people are trying to connect out 
      of concern and love.</p>

    <p>I want to sit and be still. No, that doesn’t feel good. I need to get up and move 
      around, go somewhere. No! That doesn’t work either. What to do, where to turn, how 
      to function?</p>

    <p>Cody is my rock, but he is in shock as well. How do we get through this? I make a 
      conscious choice to find a way out of this despair. I must believe Love is greater 
      than even this situation. Cody and I decide to comfort each other as we talk about 
      how to get through this loss.</p>

    <p>I ask myself an important question: <em>What would my son, who loves me as I love 
      him, want most for me?</em></p>

    <p>I say to my husband, “Knowing the love we all carry for each other is on a deep 
      soul level, the only answer is that he would want us to live a happy life, celebrating 
      his life as a gift, grateful for the time we had together.”</p>

    <p>I choose to define my life by handling this loss with courage, strength, and peace. 
      My marriage to Cody grows stronger, and we become more resilient together.</p>

    <p>I realize there are different ways of responding to hardships and that we can change 
      our perspective from within. Both Cody and I rely on a strong foundation of inner 
      power that houses our courage and strength, knowing this is the way to celebrate and 
      honor our son’s life, to carry him in our hearts as a precious gift. I embrace life 
      with peace, gratitude, and compassion. I find the silver lining by going into the 
      world courageously and helping others through the process of loss and grief.</p>

    <p class="signature center">FADE TO LIGHT</p>

    <hr />

    <p>This is my true story, and I am happy to report that Script #2 re-directed my life 
      in miraculous ways.</p>

    <p>After losing my son, something powerful awakened in me: courage, fearlessness, and 
      determination. I had nothing to lose. I needed to share my voice, and through writing 
      I found my silver lining.</p>

    <p>During the years that followed, I pursued various interests. I love photography, 
      so I took a class at a local college and learned to develop my own photos. I also 
      took art classes. Fashion has always been something I gravitate to. I collaborated 
      with a friend who owns a boutique and entered into the clothing business for 
      several years. Best of all, I was not afraid to step outside my comfort zone 
      any longer.</p>

    <p>I committed myself to my passionate purpose by showing up to write each day. Every 
      experience and challenge I went though led me back to my passion and was instrumental 
      to my growth, molding me into the woman I am today. It is a true joy to be living my 
      passion.</p>

    <p>Courage became a welcome companion as I pulled up my big girl boots and continued on 
      with my life, editing and rewriting my script as I went along. Every day as I sat down 
      to write, I said to myself, “I am the author of my life movie, I am unlimited, I am a 
      successful author with a powerful voice.”</p>

    <p>I later released my book, <em>Change Your Movie, Change Your Life: 7 Reel Concepts for 
      Courageous Change,</em> to the world.</p>

    <p>Had I continued with self-limiting beliefs, I would have never written my book, which 
    became a bestseller in the categories of happiness and personal transformation.</p>

    <p>It’s never too late to consciously choose to change the movie of your life. I have 
      connected with people around the world through my Living in Courage platform. Before 
      the loss I experienced, I was hesitant to use my voice, but no longer. I have been 
      invited to share my story on over 70 radio shows, podcasts, and videos. I have 
      collaborated on several books and support other inspirational writers.</p>

    <p>Gratitude fills my heart. We each have our own unique voice. My goal is to shine a 
      bright light into the world and to support others going through some of life’s biggest 
      challenges. What’s yours?</p>

    <p>Rather than dancing our life to the beat of other people, dance to the beat of your 
      own heart. When the Universe asks you to dance, say YES!</p>

    <hr />

    <img src="images/DebraOakland.jpg" alt="">

    <p class="signature">Debra Oakland</p>
    <p class="signature">Founder of Living in Courage - A Spiritual Oasis for Overcoming 
      Life’s Biggest Challenges, Author of <em>Change Your Movie, Change Your Life: 7 Reel 
        Concepts for Courageous Change</em></p>
    <p class="signature">Website: <a @click="myLink('http://www.debraoakland.com/')">DebraOakland.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '33'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="the-bath-that-keeps-on-gifting"/>
    <p>&nbsp;</p>
    <h5>The Bath That Keeps On Gifting</h5>
    <h6>by Keisha Clark</h6>

    <p>I have my own birthday tradition of taking the day for myself to do whatever 
      I want, creating it spontaneously with no particular plan or schedule.  And so 
      I did with this particular forty-somethingth birthday, letting the day unfold 
      as I enjoyed my hermitage.</p>

    <p>I let myself sleep in.  I spent extra snuggle time with my fur-babies.  I 
      received “happy birthday” calls and messages from friends.  I treated myself 
      to a nice lunch and a big screen movie.  I was having a delightful day.</p>

    <p>I began to notice my body was asking for some attention. I got the idea of a 
      hot bath for my birthday.  It was my birthday after all; the day of the forty-
      somethingth anniversary of me and my body being together (the longest relationship 
      I’ve had in this lifetime).  Wouldn’t it be perfectly fitting to give my body 
      what she desired?</p>

    <p>In the year leading up to this birthday, I had come to see my body as an equal 
      partner in this venture, though I had not always treated her that way.  She has 
      been with me through every adventure and had not kicked me out yet, and I was 
      not always very good at acknowledging, much less thanking her.</p>

    <p>On this particular birthday, I had a different idea of what my birthdays were 
      really about – celebrating my relationship with my body.  And so I chose to 
      include my body in the celebration.  She desired a bath, and I desired to co-create 
      that with her, because truly, I love baths ... I LOVE baths.</p>

    <p>For me, there is something so sensual and soul-healing being immersed in a bath 
      of steaming hot water. It is like a sacred ritual.</p>

    <p>&nbsp;</p>

    <p>I begin disconnecting from the noise of the world as I set out tea candles in 
      beautiful colored glass holders, lighting each candle and watching the flame 
      catch and glow.  I pick fresh towels from the cabinet and lay out the big 
      cotton bath mat.</p>

    <p>I begin filling the tub with hot water, dripping essential oils into the bath, 
      taking in their scent on the rising steam as each drop disappears into the water. 
      Shedding my burdens as my clothes fall to the floor, I dip my foot into the hot 
      water and allow my body to acclimate to the heat, letting the rest of me relax 
      into the bath, enveloped by it.</p>

    <p>I suspend myself in the delicious steam, wet, and white noise of the water.  
      I turn the faucet off and soak in the silence.  I breathe in the aromatic steam 
      and let it soothe me into the beyond-cognitive space of me.  I exhale and let my 
      body become liquid as the water alters the effect of gravity.  I am peaceful and 
      present in a perfect moment.  I am in communion with the Universe, receiving from 
      and offering my gratitude in a deep state of grace.</p>

    <p>I float for a while, then slowly return to my earthly awareness.  I give thanks 
      to the water as it drains from the tub.  I wrap myself in a thirsty towel and sit 
      in the afterglow, reacquainting with my body as the slightly cool air of the room 
      caresses her fresh skin.  I give thanks to her as I extinguish the candles and 
      tidy up the space, feeling refreshed, renewed, and ready to open the door to the 
      world once again.</p>

    <p>&nbsp;</p>

    <p>With this dream in mind, I found myself in a wee bit of a pickle. In order to 
      experience a hot bath, it would require a place with a bath tub and hot running 
      water, which I did not have at that time!  That would require a hotel room.  Was 
      I willing to rent a room in order to have a nice hot bath?</p>

    <p>Hmmm… At first, it was a “no,” so I looked closer. Was I willing to stretch into 
      a new choice simply because I could choose it?  My “no” quickly turned into a 
      slightly excited “yes”.</p>

    <p>“I am choosing this,” I said to myself, and the excitement began to build. 
      The moment I said “yes”, I perceived something shift in my world.  It felt like 
      the air in the room got lighter and more joyful.</p>

    <p>I asked the question, “Where do we go for this bath?” I quickly got a picture of 
      a particular hotel that was only a couple of miles from where I lived.</p>

    <p>“Really?” I asked. I was a little surprised because it was not the place I would 
      have thought to check into.  I got a definite yes-sense in response, and I chose 
      to trust it and go with it.</p>

    <p>“This should be interesting,” I thought with a laugh as I began to collect my 
      things to pack for <em>my bath getaway.</em></p>

    <p>It was a bit of fun actually, like a special something I was getting to do just 
      for me (hehehe)!  I collected my clothes and towels, bath pillow, candles, essential 
      oils, my iPad, and a few other items.  I set up my fur-babies for the evening, then 
      put my bags in the car and headed to the hotel.</p>

    <p>Nature had set the perfect backdrop for my birthday adventure.  A light rain wet 
      the ground, the air thick and cold outside – just the kind of weather that makes 
      you want to get inside and get warm.</p>

    <p>I pulled into the hotel parking lot, surprised to see it was pretty full.  I went 
      into the lobby to check in. There was one person ahead of me.</p>

    <p>As I waited in line I kept asking my body if this is where we really wanted to go. 
      I kept getting a clear sense of “yes”, so I took a deep breath and reminded myself 
      to trust my guidance.</p>

    <p>I stepped up to the front desk and asked for a room.  The lady behind the counter 
      said it was my lucky night because they had only one room left.  I grinned and said 
      I felt very lucky.  She asked for my license and credit card.</p>

    <p>She looked at her computer screen for a moment and added, “And I’m really sorry, 
      but this room has a Jacuzzi tub. Will that be a problem?”</p>

    <p>It took a couple of seconds for what she said to register in my brain. Then I let 
      out a burst of laughter.</p>

    <p>“A Jacuzzi tub?” I asked in total surprise.</p>

    <p>“Yes,” she said, “I know some people don’t like them, so I wanted to let you know,
      in case you wanted to change your mind about the room.”</p>

    <p>She had no way of knowing how hilariously awesome it was to me that the one room 
      she had left had a Jacuzzi tub, and it just so happened I LOVE Jacuzzi tubs!</p>

    <p>At this point, I erupted in full blown giggles at the joy of such delightfully 
      surprising news.  I could feel the excitement in my body, in the gleeful expectation 
      of what a Jacuzzi tub meant for her!  I felt like I had just won a fabulous prize!</p>

    <p>“You have no idea how happy a Jacuzzi tub makes me,” I said. “I actually came here 
      to enjoy a hot bath for my birthday, and a Jacuzzi tub is perfect!”</p>

    <p>She laughed and wished me a happy birthday.  Then she printed up the room bill, 
      said the weekend rate was in effect and the total would be $45.  I giggled even 
      louder as I handed her the charge card, amazed by what was taking place.</p>

    <p>I had not put any specific expectation out for this experience other than having 
      a hot bath, and the Universe delivered to me a room with a Jacuzzi tub at less than 
      the weekday rate!  How does it get even better than that?</p>

    <p>I drove around the building to find my room.  It was in a perfect spot near the back 
      of the property where it was quiet.  Behind the property was a large pasture and the 
      soft night lighting of the moon and stars.</p>

    <p>I got my bag and went to the door, still giggling to myself at the way this experience 
      was unfolding.  I opened the door, stepped into the room, and there it was: the Jacuzzi 
      tub.  I walked over to it and just marveled at it for a minute.  It was huge!  And it 
      was mine for the night!</p>

    <p>I turned the heat on to warm up the room and set up the space: clothes, towels, candles 
      out, iPad set, and music on.</p>

    <p>It had been quite a while since I had gotten to do this, and every part of it felt 
      particularly yummy.  I savored each step, each action, being even more present to 
      the sacredness of this ritual on this night.</p>

    <p>I filled the tub almost to the top and slowly slid into the water.  It was as hot as 
      I could stand it, and it came all the way up over my shoulders.  I breathed in the scent 
      of the oils in the water and on my skin and let the soft glow of the candle light in 
      the rising steam carry all my cares away in this oh-so-peaceful, perfect moment.</p>

    <p>As I melted into the sheer bliss of the experience it occurred to me: my body, 
      the Universe, <em>and</em> I had co-created this.  It had not occurred to me in this 
      way before, but at this moment I was so aware of her part in this creation, and I was 
      in awe.</p>

    <p>I would never have thought to ask for a Jacuzzi tub, yet the Universe knew how much 
      I loved them.  I never would have imagined this hotel even had Jacuzzi tubs, yet the 
      Universe knew!  And my body was totally willing to assist me in receiving the guidance 
      to get there.</p>

    <p> would never have imagined I could have a room with a Jacuzzi tub at a price that 
      worked for me. Yet when I became willing to let go of my resistance and my reasons 
      for not choosing something I actually desired, I got out of the Universe’s way, and 
      it brought a perfect experience for me and my body to enjoy.</p>

    <p>I sat in total gratitude and wonder of how the elements of that day had come together 
      so perfectly, so brilliantly – and on my birthday.  Happy Birthday, Body ... Happy 
      Birthday to Us ... and Thank You, Universe!</p>

    <p>That forty-somethingth birthday continues to give me inspiration and awareness.  
      In the moments that I slip into feelings of doubt or uncertainty, I am reminded of 
      my birthday bath and how completely the whole of the Universe is right here with me, 
      knowing me intimately, ready to co-create with me at every moment, and oh so excitedly 
      willing to deliver to me what I truly desire in greater ways than I can imagine!</p>

    <hr />

    <img src="images/KeishaClark.jpg" alt="">

    <p class="signature">Keisha Clark is a Spiritual Medium and Intuitive Living Coach. 
      She teaches people how to develop and incorporate their intuition as a practical 
      and powerful tool for creating, living and loving their lives.</p>
    <p class="signature">Website: <a @click="myLink('https://keishaclark.live/l')">keishaclark.live</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '34'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="the-third-degree"/>
    <p>&nbsp;</p>
    <h5>The Third Degree</h5>
    <h6>by Linda Armstrong</h6>

    <p>I was a first degree black belt in karate. It was suggested to Gavin (my husband 
      and Sensei) that I be put up for the upcoming promotion test by the USA World Chief 
      Instructors. Gavin, who has his sixth degree belt, had not yet considered putting 
      me up for promotion to second degree. In our style of karate, when you go for 
      promotion (grading) in the black belt grades you test before the four World Chief 
      Instructors of Kimura Shukokai Karate, held at the World Chief Instructors course 
      attended by hundreds of people from all around the globe.</p>

    <p>I had three months to prepare. Others going for black belt grading had already been 
      told to prepare for the test many months prior. Gavin told me that if I worked hard 
      enough, and if he thought I was ready, he would let me go for testing. Gavin does 
      not give out gradings easily. He expects a lot from his students and does not want 
      to put someone up for grading unless they meet his standards … especially me, his 
      wife. Well, I took this as a challenge. In my mind I thought … <em>Oh yeah, I’ll 
      show you I’m ready!</em></p>

    <p>So I started training harder. I went to more classes. I practiced my katas (which 
      are like a choreographed fight, only without any opponents). I worked on my impact 
      and worked on fighting. <em>But, this is not where the real work was done.</em> You 
      see, I practiced in my mind. I did my best training inside my head.</p>

    <p>It’s sort of like meditation, only I did this all the time, anywhere I was. I could 
      be riding in a car, taking a shower, sitting at the Motor Vehicle station waiting to 
      renew my license. It didn’t matter where I was. I imagined in my mind. I did my katas 
      in my mind and often actually worked up a sweat. I would spar (fight) in my mind, and 
      my heart would beat rapidly. I felt the adrenaline. I felt all of the emotions attached 
      to showing these four Chief Instructors that not only was I second degree, <em>I was 
      actually <strong>third degree!</strong></em></p>

    <p>Yes, I was going for second degree grading, but I told myself, <em>I am a third degree 
      black belt.</em> I would have no trouble getting my second degree. They would observe 
      me at the test and pass me with flying colors. I imagined what being a third degree 
      might be like (even though I didn’t really know).</p>

    <p>“Anything that you have the ability to visualize you have the ability to have a physical 
      manifestation of!” &mdash; Abraham-Hicks</p>

    <p>The test is given after two days of intense training, with one hour instruction by 
      each of the four Chief Instructors both days. The facility accommodated 300 to 400 
      participants on very hard, carpeted floors. Usually when training we work on thick 
      padded floors.</p>

    <p>Prior to these two days we had had another two days of training, again four hours each 
      day. Needless to say, by the time the testing took place my feet and legs (along with 
      everyone else’s) were feeling some pain.</p>

    <p>The Chief Instructors ran us all through our punches, kicks, blocks, and combinations, 
      both in the air and with the impact pads. Then we did a variety of katas. We did whatever 
      we were asked to do during this test despite feeling extremely tired.</p>

    <p>Then the test was over. There were close to 30 students testing. All of the 
      participants in the test stood still as the Chief Instructors deliberated. In karate, 
      when standing still we stand in Yoi position. This is ready position, basically 
      standing still but ready to move if needed. You dare not fidget or lose focus. You 
      stand ready.</p>

    <p>Well, I have to tell you, standing still while they deliberated was the absolute 
      hardest part of the whole week. My legs were killing me! I could see other students 
      struggling like me with the simple act of standing still. Everyone’s legs shook.</p>

    <p>The Chief Instructors spoke to each other for what felt like hours. It was probably 
      only 20 minutes, but it felt like an eternity. Finally, they asked each student to go 
      up and stand before them as they awarded their new gradings. I’m happy to say that I 
      passed the test and received my second degree black belt.</p>

    <p>Shortly after the test was over, each of the four instructors came to me individually 
      and told me that they had been deliberating for such a long time because they wanted to 
      jump me to third degree! Whooooo hooooo!  Thank you Law of Attraction!</p>

    <p>They never jump black belt degrees and didn’t want to start a precedent.  This just 
      was not done in the black belt grades. Instead, they asked me to test again the 
      following year for third degree, which was an honor because normally going for third 
      degree requires a minimum of another three years of training. It normally takes as 
      long as it takes until you show your Sensei you are ready.</p>
    
    <p>I did return the following year to test again and was awarded my third degree black 
      belt in karate.</p>

    <hr />

    <img src="images/LindaArmstrong.jpg" alt="">

    <p class="signature">Linda Armstrong is a Master Certified Law of Attraction Energy 
      Coach, and Energy Healer. She works with The GATE Healing Method and Theta Healing® 
      Technique. She is also a Reiki Master Teacher, and Light Body Meditation Practitioner.</p>
    <p class="signature">Website: <a @click="myLink('https://www.lovemylife.coach/')">lovemylife.coach</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '35'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="hide-and-seek"/>
    <p>&nbsp;</p>
    <h5>Hide and Seek</h5>
    <h6>by Louise Thiessen</h6>

    <p>Around my 10th wedding anniversary, I was working as a lead teacher in an infant 
      room in a day care center in Virginia. Halfway through one particular morning, I 
      sat down to give a baby his bottle. I looked down at my left hand and noticed the 
      center diamond from my engagement ring was missing. My ring is a center-round cut 
      diamond with baguettes on either side running side to side, not up and down as in 
      most settings. I was perplexed but not worried and certainly not panicked. I didn’t 
      remember looking at my ring that morning, so who knew when the stone fell out ... 
      here at work, at home, in the shower?</p>

    <p>I looked around my classroom and even donned gloves to go through all the discarded 
      gloves that had been used so far that day changing diapers. No diamond. I called my 
      husband and asked him to check the bathroom shower drain, while I would look elsewhere 
      in the house when I came home soon for lunch.</p>

    <p>I remained calm and knew that our insurance would cover the loss if need be. I just 
      didn’t feel anxious or panicky.</p>

    <p>A search at lunchtime turned up nothing, so I went back to work leaving the rest of 
      the engagement ring at home. A closer look showed that three of the six prongs that 
      held that center stone were broken. I had no idea how they got that way.</p>

    <p>I walked back into my classroom not phased by the loss. My co-worker who covered my 
      lunch break greeted my with, “How much do you love me?” In her outstretched hand 
      sitting in her palm was my diamond. She found it when she picked up one of the babies 
      from his bouncy seat. There was the gem, which he had been sitting on. It must have 
      come out of the setting just as I lowered the baby into the seat earlier that morning.</p>

    <p>I had not felt confident that we would find it, but I also had not panicked. I did 
      not block it’s recovery with anxiety or negative feelings.</p>

    <hr />

    <img src="images/LouiseThiessen.jpg" alt="">

    <p class="signature">Louise Thiessen is a former psychotherapist and currently owns 
      a local gardening services and maintenance business, 
      <a @click="myLink('https://gardensbylouise.com/')">Gardens By Louise</a>. She is 
      also an occasional co-host of LOA Today. She lives with her husband, Walt, and 
      two black cats, Harmony and Joy, in Simsbury, CT</p>
    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '36'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="out-of-the-darkness"/>
    <p>&nbsp;</p>
    <h5>Out Of The Darkness</h5>
    <h6>By Michael Craig</h6>

    <p>I only discovered the real Law of Attraction at a time when my life was at its 
      lowest point, a time when I realized like Janis Joplin that, “Freedom’s just another 
      word for nothing left to lose…”   Money was really scarce. I got divorced (again), 
      was fed up with my career, and felt I had nothing of value to share with the world.</p>

    <p>Oh, and I also did affirmations.  Religiously.  I woke up, looked at myself in 
      the mirror and repeated the “I love you, you are good-looking, rich and loved” 
      mantras.</p>

    <p>For years.</p>

    <p>Nothing but grief followed me.  As much as I tried to shut out this negative 
      force, my dark side kept pounding into me like a pile driver into the sand.</p>

    <p>I felt hurt, poor, unloved, and generally miserable in spite of my efforts 
      to talk myself out of this condition.</p>

    <p>The lowest point came after my first divorce when my girlfriend killed herself.</p>

    <p>I spent the next year feeling numb – not caring who I slept with, earning 
      money any way I could, and generally becoming a genuine S.O.B.</p>

    <p>It was then that the migraine headaches started.</p>

    <p>Another marriage didn’t help.  I ended up divorcing her as well after 
      cheating on her several times and feeling so worthless that I contemplated 
      my own suicide.</p>

    <p>The headaches only got worse.</p>

    <p>&nbsp;</p>

    <h6>The Silent Prayer</h6>

    <p>It was at this point that I consider my darkest night of the soul that 
      I fell to my knees and admitted defeat.  I knew no way out and finally 
      asked God to help.</p>

    <p>I didn’t expect anything, but after my acknowledged defeat, life suddenly 
      switched on.  I found I didn’t need affirmations ... just the ability to 
      let go of the chaos!</p>

    <p>Soon I met the woman of my dreams.  Brigitte brought me back from the 
      brink.  She stayed with me while I released all the pent-up anger.  She 
      worked with me to discover and establish a powerful method of healing and 
      self-discovery that I’ve used successfully on myself and others for many 
      years.</p>

    <p>It even cured my headaches.</p>

    <p>Now, over 25 years later, Brigitte and I are still happily married and 
      living in our paid-for home.  We also have some vacation property, paid 
      off our debts, and developed a way to earn a comfortable income from home.  
      We are also pretty active and healthy.</p>

    <p>I don’t say this to brag.  Far from it, I am most grateful for the gifts 
      I’ve received in my life ... especially those painful episodes that awakened 
      me to the limitations of my thoughts and affirmations.</p>

    <p>&nbsp;</p>

    <h6>You can do this yourself</h6>

    <p>Look around you.  What do you see?  Who are you with?  Well guess what:  
      these are things (and people) you have already attracted!</p>

    <p>I found this out when I became honest enough with myself to know I didn’t 
      know squat!  My “saying” some affirmation also carried with it the opposite 
      of the affirmation ... each thought contained within itself its own mirror.</p>

    <p>If I affirmed, “I easily attract $5000 or more each month in personal 
      income,” I may have felt good about “doing something” to attract more wealth, 
      but to no avail. I soon discovered that the hidden decisions my subconscious 
      mind drove home were just the opposite, i.e., “This is total B.S.; I always 
      lose more money than I make!”</p>

    <p>Using a technique based on affirmations and testing, I was able to discover 
      in myself and others the pathway to communication with the hidden being in all 
      of us.  The ancient Hawaiians had a name for it; they called it the Ku or 
      Unihipili (I started using Ku because “The One Who Makes Things Happen” was 
      too damn long).</p>

    <p>Years of testing proved my method worked.  The people I worked with reported 
      that they were more in touch with the hidden decisions that ran their lives, 
      and were able to start attracting more good things into their lives; soul mates, 
      more money, diseases and infirmities disappearing, and an overall sense of 
      happiness with themselves and with life.</p>

    <p>I found out I didn’t have to live a life full of struggle.  My struggles, 
      in fact, were simply a reaction to the hidden decisions that constantly 
      goaded me to create more drama.</p>
      
    <hr />

    <img src="images/MichaelCraig.jpg" alt="">

    <p class="signature">Dr. Michael Craig is a licensed chiropractor.  
      He has published several books and works with patients 
      and groups using his technique, the Logical Soul®.</p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '37'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="anybody-but-me"/>
    <p>&nbsp;</p>
    <h5>Anybody But Me</h5>
    <h6>by Ruby Gangadharan</h6>

    <p>For as long as I could remember, I wanted more than anything 
      else in the world to be someone other than me. I lived, breathed 
      and dreamed of a time when I could stop being the person I was 
      and become someone else.</p>

    <p>This was me at age 12, and this intention stayed with me until 
      I finished college and started my first job. I am not entirely 
      sure of the exact moment it took hold. However, I do remember 
      being very aware of the conversations and experiences that helped 
      me to reach it, a mixture of what I was told, what I perceived, and 
      what explanations I was given.</p>

    <p>There were remarks that were directed towards me from my immediate 
      and extended family, from the teachers in school and our neighbors, 
      while others were more indirect like things I watched on television, 
      saw in movies, or heard between adults.</p>

    <p>At the heart of this was my list of “flaws”. There are too many to 
      list, but here are the few I remember because these had the greatest 
      impact on me.</p>

    <p>I wasn’t an early riser, so I was lazy.</p>

    <p>I was loud and vocal, so I wasn’t a decent girl.</p>

    <p>I didn’t like Math and numbers, so I wasn’t intelligent.</p>

    <p>I didn’t help with chores in the kitchen, so I would experience a hard life ahead.</p>

    <p>My skin was dark, I had a big belly, and I was short. So I was going to 
      create difficulties for my parents when the time was right. (Years later 
      I realized it meant marriage and finding a match.)</p>

    <p>I didn’t show a natural talent in the arts, so I was average and lacking.</p>

    <p>I was sure about what I liked and wanted, so I was stubborn and inflexible.</p>

    <p>I wore cheap hand-me-downs, so I was uncool and a lesser being.</p>

    <p>I asked for things that others my age had, so I was ungrateful and greedy.</p>

    <p>The other thing that shaped my intention was the confidence and happiness 
      I perceived in other people, either in real life or on television. My cousins 
      were so bold and articulate. My aunts were flawless in everything they did. 
      My school mates had all the answers.</p>

    <p>I also clearly remember being constantly asked to replicate all these actions 
      and behaviors.</p>

    <p>“Why can’t you do that?”</p>

    <p>“That’s what a good girl looks like.”</p>

    <p>“You should try this. It will make you more likable, successful, and popular.”</p>

    <p>The messages sank into my being until all I did was compare everything I 
      did with what I saw in others. I still struggle to recall an early memory of 
      being told what I was doing was good enough. It was always about the chase 
      of getting something else. Every achievement was overshadowed by what needed 
      fixing next.</p>

    <p>At 12 years old, I didn’t like my life, my body, my voice, my clothes, my people, 
      my circumstances, and everything else in-between. I lived the cliché, “The grass 
      is always greener on the other side.”</p>

    <p>I acted out this desire to be someone else and to fix my flaws. I hid my truth 
      and played a role, acting and pretending to be someone else. I learned how to 
      pretend and project strength and confidence. I learned what worked, what did not 
      work, and what would make me seem ... not me. It became my M.O.</p>

    <p>The pretense forced me to flex my curiosity muscle to read more, to investigate, 
      to ask questions, to try new things, to keep up the facade of “being anyone else 
      but me”.</p>

    <p>I hoped and wished for someone to give me a helping hand, a cool someone who would 
      validate who I was becoming. I believed that external validation is the only thing 
      that counts.</p>

    <p>I became alert and aware of people around me, noticing every individual that 
      crossed my path. I developed my communication skills and got good at reading the 
      room: faces, expressions, and everything between the lines. Soon, I could catch 
      every emotion that people knowingly or unknowingly communicated through words, 
      tone of voice, or physical actions. Eventually, I got so good at it that I kept 
      finding myself in a unique position to support others even before they knew they 
      needed it.</p>

    <p>In my mid 20’s, I was introduced to the literature of the Law of Attraction and 
      Yoga Sutras. I was so taken with everything I read, I decided I must dive in deeply. 
      I quit my job and decided to become a yoga teacher and a coach.</p>

    <p>I learned new practices and techniques on my spiritual journey. I read everything 
      I could get my hands on. I found discussion groups and started an introspection 
      that revealed what had been happening to me all my life. It was as if in one swift 
      stroke someone had articulated everything I had been feeling all these years.</p>

    <p>It was liberating. I finally understood myself through this literature, and I now 
      had the tools and a language to explain my experience.</p>

    <p>And that’s when it happened, quick as a blink. My wish, something that I was hoping 
      for since I was 12, had come true.</p>

    <p>I had become someone else!</p>

    <p>I was now a person who loved her life, body, voice, clothes, and the people I knew, 
      a person who was self-aware with the ability to self-correct.</p>

    <p class="signature">I WAS living the good life.<br />
      I WAS interesting and articulate.<br />
      I HAD the best deal with opportunities and people I trusted<br />
      I WAS living in greener pastures.<br />
      I WAS the person that had it made.<br />
      I HAD become the opposite of the old me in every way.</p>
    
    <p>In retrospect, I realize that the universe had heard the request of my 12-year-old 
      self to be anybody else but me. The change was not so much about who I was but more 
      about how I thought about who I was, about embracing all that I had and loving what 
      I could do with it.</p>

    <p>The Law of Attraction, the universal truth of creation, of action and subsequent 
      consequence, is always working. This is absolute and without exception. It is always 
      responding to our intentions and feelings.</p>

    <p>We don’t need to be anybody else but ourselves.</p>
    
    <hr />

    <img src="images/RubyGangadharan.jpg" alt="">

    <p class="signature">Ruby Gangadharan is a Transformational Life Coach and Yoga 
       who combines Law of Attraction with the Yoga Sutras.</p>
    <p class="signature">Email: <a href="mailto:rubygangadharan@gmail.com">rubygangadharan@gmail.com</a></p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '38'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="the-only-choice"/>
    <p>&nbsp;</p>
    <h5>The Only Choice</h5>
    <h6>by Louise Thiessen</h6>

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

    <img src="images/LouiseThiessen.jpg" alt="">

    <p class="signature">Louise Thiessen is a former psychotherapist and currently owns 
      a local gardening services and maintenance business, 
      <a @click="myLink('https://gardensbylouise.com/')">Gardens By Louise</a>. She is 
      also an occasional co-host of LOA Today. She lives with her husband, Walt, and 
      two black cats, Harmony and Joy, in Simsbury, CT</p>
    
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '39'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="my-boat-was-taking-on-water"/>
    <p>&nbsp;</p>
    <h5>My Boat Was Taking On Water</h5>
    <h6>by Tom Wells</h6>

    <p>About seven years ago, the tidy, previously ever-upright sailboat of my life 
      was overturned in one fell swoop. Within a 12-month period, my lovely wife and 
      soulmate of 15 years divorced me; I lost my half-a-million-dollar home; I lost 
      my very lucrative business and income source which I had enjoyed for 25 years; 
      I lost half of my already inadequate life savings; and I got quite sick with a 
      debilitating sinus condition that had built slowly for years and now manifested 
      like the plague itself.</p>

    <p>To top it all off, I found myself growing and changing so much that I was no 
      longer able to believe in and rely upon the foundational support of the spiritual 
      teacher I had so happily depended on to carry me through the previous 40 years.</p>

    <p>I awoke each morning with my guts in a knot, a litany of unanswered questions 
      flooding my mind.</p>

    <p>Where was I going to live?</p>

    <p>How would I ever be able to own a home again?</p>

    <p>How would I create a new business and income? (I had been self-employed my whole 
      life and wasn’t likely to get a job. Nor did I want to get hired for a job.)</p>

    <p>How would I ever recover enough money or enough health to get me through my later 
      years (which I was already entering at age 61)?</p>

    <p>How would I fare without the support of the spiritual teacher and his philosophy 
      and meditation that I had relied on so long for my stability in life?</p>

    <p>At first, I embraced it all with my characteristic “I’ve got great sea-legs” 
      resilience, righted my little boat in the water, and began to act as if, “Of 
      course, I’ll nail all of this! Before long I’ll have a brilliant new career 
      firmly established, doing exactly what I love, a beautiful, super-compatible 
      new partner, and plenty of money to buy a new home and replenish my devastated 
      life savings! I know I can overcome this sinusitis and am sure I will unfold a 
      magical, transformative, and supportive spiritual experience that will guide me 
      to happiness and my wonderful new fulfilling destiny!”</p>

    <p>It took about a year and a half for me to realize that I was decidedly <em>NOT</em> 
      as resilient as I had assumed I was. Suddenly it seemed my life was adrift on a 
      sea of dilemmas as I sailed into a three-year period of the most choppy, “dark night 
      of the soul” waters that I had ever encountered. I realized that seasickness really 
      could affect me, and drowning was a distinct possibility. I had only a vague idea 
      of where these winds and waters might take me.</p>

    <p>I felt a calling to do life coaching, so I invested many hours and dollars in 
      learning two different forms of coaching ... but they just didn’t inspire me 
      enough. Even though I saw some clients, I wasn’t yet in the groove of doing my 
      life’s work, doing what I loved, although I knew I was close.</p>

    <p>I took every kind of workshop that came along that spoke to me, whether it was for 
      my heart and my spiritual development or for the development of my business. But 
      throughout it all, my worries about spending too much money with practically nothing 
      coming in haunted me day and night. I watched my life savings dwindle away week by 
      week, feeling a nearly ever-present dread of time and money running out. I remember 
      the day I found myself walking into the natural food store to buy my weekly groceries 
      thinking, “I’d better be really careful what I buy because I really can’t afford what 
      I want anymore!”</p>

    <p>Every morning, the seasick pain in my stomach reminded me once again of how anxious 
      I felt. My solution was nearly always the same. I knew I had to create a new business, 
      and I knew I had to do it NOW!!</p>

    <p><em>Work harder!</em> I told myself, <em>Be more diligent! Hoist the main-sail! Learn 
      more! Make more effort to apply what you’re learning! Get it together!</em></p>

    <p>As you might imagine, my solution was the problem. The rigid expectations I put on 
       only added to my stress.</p>

    <p>Patiently, characteristically, I set in for the long voyage to find land. I put my 
      back into the rowing and worked on my situation day and night from the little living 
      room of my condo, one lonely anxiety-ridden month after another. I felt like I was 
      literally in the doldrums, with false start after false start, feeling increasingly 
      disempowered, no wind in my sails, and not exactly enjoying my life. The harder I 
      rowed, the less progress I made.</p>

    <p>With so much of myself hyper-vigilantly focused in this fearful, survival-based mode, 
      I imagined I had little time for fun, family, and friends.</p>

    <p>So of course it was true ... I had little time for fun, family, and friends.</p>

    <p>I began to experience the breakdown of my friendships with many people I had known 
      for years and years. And of course, this felt crappy too. Loneliness and isolation 
      quickly set in.</p>

    <p>Woe was me ... no land in sight!</p>

    <p>I remember the day I sat in my recliner launching into yet another day of plodding 
      along, when it hit me so clearly that with all the self-criticism I felt toward myself, 
      my pessimistic thinking, my feelings of unworthiness and shame, poverty consciousness, 
      perfectionism, and over-thinking everything … the biggest obstacle to my forward 
      progress was no one else but ME!</p>

    <p>I had a close friend who spoke to me often about his thoughts of suicide, and I 
      found myself thinking, <em>Things can’t really be this hard, can they?? If it all 
      seems this impossible to have the life I want, and I am so prone to make it so 
      hard on myself, I can really understand how my friend has gotten to this place 
      of kind of wanting to check out.</em></p>

    <p>(I knew I wouldn’t really do it, but, by God, to actually think this way for the 
      first time in my life was shocking to me!)</p>

    <p>One summer’s night, I finally had enough. I determinedly jumped up and pulled out 
      a large piece of newsprint along with 10 colored markers and started feverishly writing 
      and drawing pictures all over the page of the things I absolutely knew I loved about 
      life … passionately … freely … joyfully …</p>

    <p>I drew people dancing, playing music, singing, rivers flowing through mountains, 
      deer, trees, the moon and sun, the things I knew beyond a shadow of a doubt that I 
      believed in and was passionate about.</p>

    <p>In that moment I made a new commitment to myself that from that evening forward, 
      I would only settle for doing things, as my work in life, that authentically inspired 
      me and brought alive my passions and bliss!</p>

    <p>One day, a big, burly, sensitive friend named Ray invited me to a local fair of 
      psychics and healers of all sorts. I didn’t particularly want to go, but when the 
      day came, I showed up midway through the event, even though Ray bowed out.</p>

    <p>As I wandered through a room full of these gentle healers, for some reason, I was 
      drawn strongly to connect with one woman in the far corner. Her whole aura, attitude, 
      and mannerisms stood out in stark relief for me from the other practitioners in the 
      room.</p>

    <p>I handed her my 20 bucks, and she began to move around me as I stood there motionless. 
      Clicks, sighs, and sounds of various indescribable sorts emanated from her, and I 
      recognized the shamanic roots she drew upon as she circled me, touching me lightly 
      on my head, heart and neck. Strangely, happily, I felt she put me in some kind of 
      altered state. I felt light, floating, suspended as if in liquid, less in touch with 
      my logical, reasoning self.</p>

    <p>To my surprise, when she finished, she told me she had three messages for me:</p>

    <ol>
      <li>I should look into the work of Abraham and the Law of Attraction, as received 
        by Ester Hicks;</li>
      <li>I should take local classes in developing my psychic abilities; and</li>
      <li>I should get into a practice called Matrix Energetics.</li>
    </ol>

    <p>Her recommendations felt like they came from some deeper knowing within myself, 
      that this was very different from following my mind’s lead in choosing yet another 
      book or seminar or teacher to look for hints to my life’s work. I didn't hesitate 
      at all in following through on all three suggestions.</p>

    <p>My work with the entities that call themselves “Abraham” most massively transformed 
      my life and continue to transform my life every day.</p>

    <p>Days later, I attended an event in my hometown of Boulder, Colorado with a roomful 
      of about 20 people on a Saturday morning. As we ate our pot-luck brunch, we watched 
      a live four-hour video feed from San Diego of Ester Hicks receiving these non-physical 
      entities as they answered the questions of various audience members about various 
      subjects.</p>

    <p>I couldn’t write fast enough to keep up with the constant stream of insights, 
      answers, and wisdom flowing through this woman! All that mattered to me was the 
      immense sense of <em>RELIEF</em> I received with all I heard. Land Ho! My wandering 
      vessel finally reached terra firma.</p>

    <p>Everything I had ever wondered about, struggled with, suffered with, worried over,
       had angst about, longed for wisdom and clarity about, needed to know what to do 
       about, needed to know how to do it, ALL OF IT, was answered by these funny and wise 
       entities speaking through the pleasant, normal voice of this distinguished, 
       well-spoken woman.</p>

    <p>Needless to say, I went back the next weekend for yet another four-hour screening. 
      EVERYTHING in my life began to transform.</p>

    <p>I dove into a six month long joyful process of compiling playlists of music gathered 
      from indigenous and ethnic peoples throughout the world, music I had largely obtained 
      from my shaman friend in New Mexico.</p>

    <p>I created six consecutive freestyle conscious dance events over a four-month period, 
      proving to myself the beauty and fulfillment of following my bliss.</p>

    <p>Could I make a living putting on dances?</p>

    <p>Would my idea of being a life coach satisfy the level of passion I had gotten in 
      touch with?</p>

    <p>I enrolled in a Law of Attraction life coaching academy to more formally augment my 
      learning with tried and true coaching principles.</p>

    <p>One warm summer’s day while hanging out at the vertical-walled Boulder Canyon, I 
      realized that I needed to start a practice of telling new, better-feeling stories 
      about my life.</p>

    <p>As the creek rushed by murmuring it’s reassuring water words over the tiny rapids, 
      I took out my journal and drew a line down the center of a page.</p>

    <p>On the left side of the page, I wrote my oh-so-familiar thoughts about my life’s 
      difficulties:  money woes, career dilemma, failing to find a life partner, 
      struggling to make new friends, wondering where to live, and so on.</p>

    <p>On the right side of the page I finally, finally, <strong><em>finally</em></strong>
      wrote what I wanted to see happen instead, with a knowing and a commitment to 
      accepting that it was truly possible to have my life start to show up as the new 
      better-feeling stories on the right side of the page!</p>

    <p>Inspired by a nice couple I know, I also soon vowed to stop talking about things 
      that I didn’t want to happen in my life.</p>

    <p>I’m back to sailing on the vast sea of my life, but no more in the fragile, 
      un-seaworthy vessel of a troubled, struggling existence. Now, it’s more like a 
      streamlined, double-hulled ocean-going catamaran, tacking steadily to the winds 
      of solutions and ease! I’m clearly the captain, and I’m clearly at the helm … and 
      that’s a good thing!</p>

    <p>It’s clear sailing from here on out. When the storms come, as they surely will do, 
      I’m ready for them. Drowning is no longer my focus. I’m in wide open waters, and I 
      can raise my sails and head for any destination I choose. The sun shines, the winds 
      blow strong and steady, and I love this infinite ocean!</p>
      
    <hr />

    <img src="images/TomWells.jpg" alt="">

    <p class="signature">Tom Wells is a Certified Life Coach, but wishes 
      he were out on the open sea right now in a catamaran, tacking along 
      to a stiff breeze!</p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '40'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="vienna-station"/>
    <p>&nbsp;</p>
    <h5>Vienna Station</h5>
    <h6>by Walt Thiessen</h6>

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

    <img src="images/WaltThiessen.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '41'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="a-steinway-piano"/>
    <p>&nbsp;</p>
    <h5>A Steinway Piano</h5>
    <h6>by Anne-Marie McEwen</h6>

    <p>At the north end of Main Street in Middletown, Connecticut sits The Buttonwood 
      Tree, our beloved community arts center. It was named for its birthplace, once 
      known as the Avenue of the Buttonwoods.</p>

    <p>In 1989 Wesleyan University alumna named Susan Eastman Allison opened a used 
      bookstore, called the Ibis. It soon became a hub of activity where creativity 
      and community flourished.</p>

    <p>Besides being a bookstore, the Ibis became an informal gathering place for people 
      to share their ideas and talents. It bustled with activity and brought positive 
      energy to the neighborhood.</p>

    <p>Two years later the Ibis morphed into a nonprofit arts organization, North End 
      Arts Rising, while retaining its nickname, The Buttonwood Tree. It served the 
      community by offering books, poetry readings, and programs for personal enrichment 
      and the cultivation of artistic talent.</p>

    <p>Jump to February 2007.</p>

    <p>I found myself needing to “re-create” myself after my retirement from my career 
      as a dental hygienist and more recently from my business as a food truck operator. 
      I decided to volunteer in areas that interested me and see where it would lead me.</p>

    <p>In addition to serving Miles for Smiles and the Coalition for Children, I responded 
      to a newspaper ad looking for volunteers to help write grants for The Buttonwood 
      Tree. I had a brief, very positive experience years earlier with The Buttonwood Tree, 
      and knew they were about music and the arts. So I joined.</p>

    <p>Three months later, one of the people on the grant writing team, Kunle Mwanga, invited 
      me to join the Board of Directors for The Buttonwood Tree.</p>

    <p>My first board position!</p>

    <p>I accepted, not knowing what it entailed, but believing that they were doing good 
      work in the community. For about nine months I volunteered for all three organizations 
      and learned all about North End Arts Rising and The Buttonwood Tree.</p>

    <p>Simultaneously, I focused on learning and growing to make myself the best person I 
      could be, diving into reading all the <em>Conversations with God</em> books by Neale 
      Donald Walsch, Louise Hays’ <em>You Can Heal Your Life,</em> and studying the teachings 
      of Abraham books by Esther and Jerry Hicks.</p>

    <p>Meanwhile, The Buttonwood Tree operated in low gear. Suffering from the economic 
      downturn and a lack of leadership after Susan Allison stepped down due to illness, 
      programming and funding reached their lowest ebb. I helped write some grants and 
      did my best to inject hope, but half of the board members wanted to shut our doors. 
      Our executive director stepped down to have a baby, and things looked dim.</p>

    <p>I resigned from everything but the North End Arts Rising board, then took a trip 
      to Hawaii to see my daughter. I stayed for six weeks. While there I was offered a 
      job to run a sustainable seafood “fast food” truck. I’d have jumped at the chance 
      if it weren’t in Hawaii, but I knew that my daughter wouldn’t be there very long, 
      and all my family was in Connecticut. I declined.</p>

    <p>Returning to The Buttonwood Tree, I learned that soon we’d have no executive director. 
      There had been much discussion about closing for months. At our next board meeting, 
      three directors voted to close down. Three others, including myself, voted to keep 
      our doors open. The only problem was that since we had no funds, one of us needed to 
      take over as executive director. As I voted to stay open, I felt the tug inside me 
      &ndash; a nudge and a knowing that said THIS was my new job.</p>

    <p>We all looked around the table in silence. It was a scary moment. I knew nothing 
      about administration and nonprofits. I had no qualifications or experience. But 
      knowing that my gut wouldn’t lead me astray, I said I would take the job.</p>

    <p>I told them I knew nothing and didn’t know if I was capable. John Basinger, the 
      president, looked at me reassuringly. He convinced me I could do it and offered to 
      mentor me, helping as much as I needed.</p>

    <p>My saving grace was that I had a passion for keeping The Buttonwood Tree open, with 
      some decent writing skills, a love for music, and an even deeper love for humanity 
      tossed in for good measure.</p>

    <p>As executive director, it’s my job to keep everything running smoothly, all systems 
      “go” you might say. I was in charge of everything from programs to posters, including 
      booking the acts, paying bills, and maintaining all the equipment.</p>

    <p>Over the years we held many poetry events and classes of all sorts from painting to 
      yoga. But the main focus of our arts programming was to provide concerts by local and 
      touring musicians.</p>

    <p>For a small arts organization, we had some good basic equipment in the music department, 
      a great sound system with top microphones.</p>

    <p>One item that was not quite up-to-par, however, was the piano. It was with great 
      distress that I would bring in world-class pianists to perform at The Buttonwood 
      Tree on a very inferior piano with various mechanical problems and issues with 
      tuning stability. Their performances would suffer as a result.</p>

    <p>Our piano tuner and repair man was one of the best in the area, Bruce MacLeod, 
      who would make repairs until it couldn’t be fixed anymore.</p>

    <p>At one concert the piano rolled away from the pianist! We had to laugh about it 
      at the time, and the pianist was more than cordial about it, but I was mortified.
      We needed another piano soon.</p>

    <p>In our small space, the issue of the piano often brought up the question: should 
      we get an upright instead of the baby grand that we had? Because we attracted 
      pianists due to having the piano, and the piano happened to be my favorite 
      instrument, I was emphatic about keeping the baby grand size. So Bruce bought a 
      rebuilt piano from his friend and did his best with it. That held up fairly well, 
      but it was still far from perfect.</p>

    <p>We are fortunate to have many world-class musicians at The Buttonwood Tree. One 
      music teacher, Carolyn Halsted, performed classical piano concerts at The Buttonwood 
      Tree occasionally throughout the years. After we had the piano rebuilt, I invited 
      her to play again. The concert was nice, and afterward I asked her to come back 
      some time. I’ll never forget her response. She said to me in the most gentle, kind 
      and sympathetic tone, “I’m sorry, but I can’t play that piano.” Her softened facial 
      expression revealed how painful playing it had been to her.</p>

    <p>That pain embedded in me a very strong desire to get a fantastic piano so she would 
      return and be happy to play at our place. I told her I’d do what I could to get 
      another piano and asked what kind of piano I should seek to be suitable both to her 
      and to the many other pianists we hosted. With humility and reserve, she sweetly 
      said that she had a Steinway at home.</p>

    <p>I could see in her eyes that she knew we couldn’t afford one and that we’d probably 
      never get a really good piano, but I felt otherwise. I felt hope and a drive to remedy 
      the situation. In that moment I vowed to myself to get a good piano, one she deserved 
      to play on, worthy of the very best pianists in the world &ndash; a Steinway.</p>

    <p>The next day I added “a Steinway” to our online wish list. I talked with our piano tuner 
      and told him that I wanted a Steinway. He chuckled, and said it would never happen.</p>

    <p>I replied, “I can hope can’t I?”</p>

    <p>He smiled and nodded, “Of course, you can. Good luck with that.”</p>

    <p>So I hoped. I imagined having happy pianists, and I talked about it with anyone who 
      would listen.</p>

    <p>Concerts came and went. Pianists asked to perform, and I’d turn many of them down, 
      saying some day when we have a better piano we would be happy to host them. When I 
      stood in front of the audience, welcoming them and introducing the musicians, I’d 
      tell them that we are hoping one day to get a Steinway piano for these wonderful 
      pianists.</p>

    <p>I put the word out that we wanted a new piano, preferably a Steinway, and my passion 
      for it never died. We actually got several calls from people offering pianos, but their 
      pianos were no better than what we already had.</p>

    <p>Concerts came and went.</p>

    <p>Three years later, in early September I received an interesting phone call from a 
      gentleman who lived about an hour away. Steve Gorden was moving and had a piano he 
      couldn’t fit into his new home. Though he had someone who offered to purchase it, 
      he wanted to know who we were and what we would do with the piano.</p>

    <p>After having fielded several such calls in the past, I learned that many people 
      just wanted someone to take their piano away. Being cautious, I asked about his 
      piano and its condition. It turned out his was a Steinway in perfect condition! 
      I was thrilled at the possibility.</p>

    <p>He wanted his piano to go to a good home where it would be played often and 
      appreciated by many. We spoke for 45 minutes all about The Buttonwood Tree and 
      how we serve the community, who would be using the piano, who our performers are, 
      and all the other details. He said he would think about it and talk to some people 
      about our organization and then call me.</p>

    <p>I waited with bated breath but felt deep down: this was it. I could sense it 
      happening … and it felt so exciting!</p>

    <p>A few days later Steve called back and confirmed he would give us the piano. 
      I was ecstatic and beside myself with joy. We were getting a Steinway in perfect 
      condition! It took three years, but it was worth it.</p>

    <p>And then it got even better.</p>

    <p>The next issue was the timing. Steve didn’t know when the move would happen. So 
      we put things on hold. He said he’d call me and let me know when I’d have to pick 
      it up. When that call came in I’d have to be ready &ndash; so I called the movers.</p>

    <p>In this same time frame we planned to put down a new floor at The Buttonwood Tree. 
      We had received a grant and planned the job to be done in late October. Our space 
      has a lovely performance room that doubles as an art gallery about 20’ x 20’, and 
      the other room is a small bookstore. To redo the floor we’d have to move everything 
      from one room to the other, and of course the piano had to be disassembled.</p>

    <p>I talked to a local moving company about a moving our old piano. We arranged for 
      the piano to be disassembled and moved on Monday, then returned to its space after 
      the floor was done.</p>

    <p>On the Friday before the floor job was to be done, I got the call from Steve. He 
      said the piano needed to be picked up on the following Tuesday, serendipitously the 
      same week we planned to redo the floor! This meant we could pick up his piano, store 
      it for a few days, and then move it into the performance space after the floor was done.</p>

    <p>So we moved the old piano to the moving company for storage until we eventually 
      traded it away. The moving company didn’t even charge us for storing the Steinway!</p>

    <p>Only the Universe could have planned it so well.</p>
    
    <hr />

    <img src="images/Anne-Marie.jpg" alt="">

    <p class="signature">Anne-Marie McEwen has been studying the Law of 
      Attraction since 2001 and is an incessant learner and teacher. She 
      is the executive director of The Buttonwood Tree Performing Arts 
      Center in Middletown, CT.</p>
    <p class="signature">Website: <a @click="myLink('https://www.buttonwood.org/')">buttonwood.org</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '42'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="ill-have-an-owl-please"/>
    <p>&nbsp;</p>
    <h5>I’ll Have an Owl, Please</h5>
    <h6>by Cindie Chavez</h6>

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

    <img src="images/CindieChavez.jpg" alt="">

    <p class="signature">Cindie Chavez, the “Love & Magic Coach,” is the creator of MOONLIGHT: 
      A Course in Manifesting Love, and is a best selling author, Certified Life and 
      Relationship coach, and Energy Leadership Master Practitioner. She co-hosts on LOA 
      Today.</p>
    <p class="signature">Website: <a @click="myLink('https://www.cindiechavez.com/')">cindiechavez.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '43'}">Back To Top</q-btn></p>
    <p>&nbsp;</p>
    <hr id="fins-up"/>
    <p>&nbsp;</p>
    <h5>Fins Up</h5>
    <h6>by Leslie Shew</h6>

    <p>It was our last day at the beach, and my friends were still sound asleep. The weather 
      was perfect. I wanted to get in a morning run while it was still quiet outside, but 
      also wanted to meditate and journal a little. I made the decision to journal first and 
      write down what was whirling around in my head to maybe bring some order to my thoughts.</p>

    <p>I came here to get away, attempting to escape the pain from previous months. My life 
      had recently been turned upside down in the most difficult year I could remember. It 
      was not the first time I faced serious adversity, but this was different. Recent 
      failures and set-backs unleashed my deepest fears, and I was now forced to deal with 
      them once and for all … only I felt alone this time.</p>

    <p>The ocean has always been a source of comfort to me. It’s so godlike in it’s magnificent 
      power and beauty: intimidating, mysterious, yet calming to my soul.</p>

    <p>I embraced the opportunity to face my darkest fears and sadness through the power of 
      meditation. I understood that what we think about creates our emotions and reality, but 
      there was still a part of me that challenged Law of Attraction principles.</p>

    <p>I guess you could call it disbelief. Attraction Law didn’t align with my strict 
      religious upbringing … or did it? Perhaps the basic concepts and beliefs are just 
      packaged differently. Either way, there was something I wanted to fully trust, yet 
      I was still a bit skeptical.</p>

    <p>I sat and journaled about what I wanted my life to look like when I got back to the 
      real world. I wrote about what I wanted to manifest, what I wanted to feel, and who 
      I wanted to be. I wondered: is it really as simple as shifting my belief? Decide what 
      I want and focus on that until it manifests? Is it really possible?</p>

    <p>It seemed simple when listening to the gurus who lived out their dreams and desires 
      in their own personal lives of manifested creation. According to these masters of 
      manifestation, thoughts would manifest whether I believed it to be true or not, but 
      what if it didn't apply to me somehow? I mean, who am I to have the kind of power 
      to create what I desire in my life, to evoke the emotions I want to feel instead of 
      the ones that imprisoned me since childhood?</p>

    <p>It seemed that lots of people were capable of making this powerful shift in mindset, 
      so maybe it was real.</p>

    <p>I had recently studied Dr. Joe Dispenza and his research into the power of the mind 
      and manifesting your desired reality through meditation. For the first time in my 
      life, I began meditating. It was not easy at the beginning, mind you. My life was a 
      hot mess, and my mind was full of even more chaos and craziness. Attempting to quiet 
      the voices inside my head was becoming a full time job.</p>

    <p>However, I was determined. I wanted to see if meditation really worked and remembered 
      hearing a powerful testimonial from a woman at one of the workshops I had attended who 
      manifested seeing a red balloon while practicing a walking meditation on the beach. 
      I rolled my eyes when I first heard it, but as the story unfolded, I found myself 
      intrigued. What would be the point of manifesting a stupid balloon? That seemed like 
      a lot of work for something insignificant. Why not try and manifest a hundred dollar 
      bill or something more useful?</p>

    <p>I obviously missed the point about how it wasn’t what's manifested but rather the 
      fact that it happened that matters. The woman believed she could do it, and she did. 
      Many people around her watched it unfold. She couldn’t deny the truth. I eventually 
      thought, "Good for her for picking something so outlandish to manifest that her mind 
      couldn’t rationalize it away."</p>

    <p>That's when everything changed for me.</p>

    <p>I hopped out of bed, put on my running shoes, and decided to finish my quiet time 
      alongside the ocean, my happy place.</p>

    <p>I stepped outside where the smell of salt in the air, the warm breeze coming off 
      the ocean, and the sounds of sea gulls fighting over their morning meal hit me in 
      the face.</p>

    <p>I put on my headphones, turned up the volume, and began to lose myself in my music 
      and thoughts. The only thing that would have been more perfect would be to run with 
      my eyes closed as I felt the warm sun beaming down on my face.</p>

    <p>I smiled for the first time in a long while; you know, that deep smile that comes 
      from within your soul, the one that makes you feel in the moment that things will 
      be okay.</p>

    <p>I have always loved running on the beach. I love to see who is out so early in 
      the morning … the other joggers and walkers ... the early risers dragging their 
      beach chairs and coolers to the beach while the rest of their crew sleeps off the 
      rum runners from the night before … the fishermen determined to catch a yummy lunch 
      or just enjoying the peace and quiet.</p>

    <p>Just as I began to enjoy this welcome peace in my soul, my subconscious mind bullied 
      it’s way in to remind me of my past emotions, the ones that keep me paralyzed, the 
      ones that are so familiar and in some strange way, comforting.</p>

    <p>At first I thought I could just run harder and maybe that would shake them off. 
      If I turned up my music, then maybe I couldn’t hear them any more.</p>

    <p>Dangit. Here came the tears, the feeling of loneliness, the despair, the regrets, 
      the fears, the shame. It was like they all played in unison, joining forces to 
      disrupt the few minutes of peace I had found in my morning of triumph.</p>

    <p>How can the mind shift so quickly? And if it can happen so easily then how in the 
      world would I ever experience true and lasting change?</p>

    <p>Maybe all this stuff is just bullshit. Maybe this Law of Attraction and meditation 
      talk was just for gurus and yogis … or maybe all of those people were just being 
      scammed and brainwashed.</p>

    <p>Ironically, I have since come to realize that I was the one being brainwashed by 
      my own subconscious mind, by my own demons, my repetitive thoughts and beliefs that 
      had brought me to this place in my life to begin with.</p>

    <p>I decided to do an experiment. What did I have to lose?</p>

    <p>One of the happiest memories of my entire life was when my husband took me to swim 
      with the dolphins for my birthday a few years prior.</p>

    <p>As a teenager, I had dreamed of working with dolphins. You know, one of the marine 
      biologist folks who get to train them, study them, teach them sign language, and 
      whatever else they do. I didn’t care, as long as I could just be in their presence. 
      I had actually never seen one up close, other than the ones who swam in front of 
      the boats when I would go on dolphin watches. But there was just something about 
      them that captivated me.</p>

    <p>Being in the water with them was such an incredible experience. The energy coming 
      off the dolphins was intensely beautiful and invigorating. They made me laugh, smile, 
      and cry all at the same time. It was literally the most amazing thing I had ever 
      done and in that moment I felt more alive and happier than at any other moment in 
      my entire life as I experienced the feeling of a powerful energy that is indescribable.</p>

    <p>I began smiling just thinking about it. I remembered Dr. Joe say that to manifest 
      something you must feel the emotions that you will feel when it becomes your reality.</p>

    <p>So, I halfway closed my eyes and began to feel that energy and happiness I wanted, 
      the feelings I had felt years before. I began imagining seeing a dolphin swim up to 
      the shoreline and giving me a “fins up” that everything was going to be okay.</p>

    <p>Immediately my subconscious mind began sending back “hell no” thoughts.</p>

    <p>The first one was, <em>Leslie, you have been coming to this beach since you were a 
      child and have never once seen a dolphin in these waters. So what makes you think 
      you will see one today?</em></p>

    <p>But I knew they were there ... it’s the damn ocean! I knew they were in there, 
      and if a woman can manifest a silly red balloon for God’s sake, then surely I can 
      manifest something that actually lives.</p>

    <p>I thought, <em>Okay, maybe, but you might have to sit and watch for a while. I mean, 
      do you really think it’s just going to happen right away just because you are willing 
      it to happen with your newly discovered mind powers?</em></p>

    <p><em>Why not,</em> I answered myself. <em>I will even ask God to help me. He loves 
      me and wants me to see that I have the ability to do it, so maybe I will ask Him to 
      throw in a little help from above.</em></p>

    <p>So, I did. I prayed to God and asked if He would just do this. Give me a sign that 
      I’m on the right path and that things were going to be okay.</p>

    <p>I approached the end of the boardwalk and stopped to lean over the wood railing to 
      look out at the ocean. I saw a guy feeding the seagulls, a couple walking on the beach, 
      and a man fishing on the edge of the water. It was beautiful and calm.</p>

    <p>The ocean looked like a glass floor. It was almost still. The sunrise was stunning. 
      I took a deep breath and waited.</p>

    <p>In what seemed like only half a second, I saw him. A single dolphin leapt out of the 
      water right in front of me!</p>

    <p>I literally began laughing out loud and jumped up and down. I couldn’t believe what 
      I was seeing. And it wasn’t a pair of dolphins, which is what you would normally see, 
      it was just one single dolphin swimming alone, dancing his way towards me as though 
      he could tell that I had seen him.</p>

    <p>He immediately turned around and swam back into the ocean. I continued to smile, that 
      big hard smile I had when I had gone swimming with the dolphins years before.</p>

    <p>I thanked God and the dolphin out loud. I didn’t care who saw me or what they were 
      thinking. I had done it! We had done it!</p>

    <p>I guess this Law of Attraction thing is for real.</p>

    <p>I could barely see to get back to my condo from the tears pouring out of my eyes. 
      It felt like I floated back to the room. I couldn’t wait to write down what had 
      happened in my journal. I wanted to be able to preserve this manifestation and memory 
      feeling in my mindset arsenal for the next time my subconscious mind tried to tell 
      me I was a fool.</p>

    <p>Everything is going to be okay. I just have to keep believing in what I want to 
      have in my life. When I can see it in my mind and feel it in my heart, I see the 
      beauty of my desires manifest before my very eyes. The feeling is as beautiful as 
      watching a dolphin jumping for joy at sunrise.</p>
      
    <hr />

    <img src="images/LeslieShew.jpg" alt="">

    <p class="signature">Leslie G Shew, PhD, CTN is a Certified Holistic Wellness 
      Coach, a Member of The American Nutraceutical Association, DSHEA Certified, 
      a Certified Nutritional Consultant, and a Certified Life Strategies Coach.</p>
    <p class="signature">Website: <a @click="myLink('https://www.drlesliewellness.com/')">DrLeslieWellness.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><q-btn class="myStyle" :to="{ path: 'rssotloa', hash: '44'}">Back To Top</q-btn></p>
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