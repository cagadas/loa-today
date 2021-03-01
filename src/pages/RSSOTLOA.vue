<template>
  <q-page class="flex-center">
    <img style="max-width: 100%;" src="images/Cover-Bestseller.jpg" alt="Real Success Stories Of The Law Of Attraction" />
    <p>&nbsp;</p>
    <p class="centerNoIndent">©2018 Walt Thiessen</p>
    <p>&nbsp;</p>
    <hr>
    <p>&nbsp;</p>
  
    <p id="top">&nbsp;</p>
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
     <p class="centerNoIndent"><a href="#i">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="introduction"/>
    <p>&nbsp;</p>
    <h5>Introduction</h5>

    <p>“Can you share your Law of Attraction manifestation story?”</p>

    <p>That’s a question most students of LOA like to get answered whenever possible.</p>

    <p>The basic concept of LOA is simple. As Abraham-Hicks puts it, “That which is like 
      unto itself is drawn.”</p>

    <p>But what about applying LOA in their “real world” lives? That’s where students of 
      LOA often trip up. So hearing the successful manifestation stories of others often 
      help us all to believe, despite what “reality” insists on telling us.</p>

    <p>I put that word “reality” into quotation marks to remind us that reality is what 
      we make of it and that even scientists have trouble making sense out of it.</p>

    <p>Once Albert Einstein ripped open Pandora’s Box with his General and Special Theories 
      of Relativity in the early twentieth century, human scientists stopped thinking of 
      reality as being fixed and immutable. Now there’s quantum physics, dark energy, the 
      observer effect, and a host of other relatively new scientific terms invented to make 
      sense out of what Einstein uncovered, stuff which often seems almost insensible.</p>

    <p>The New Thought movement of the late nineteenth and early twentieth centuries, the 
      precursor of modern day LOA thought, latched onto Einstein quickly, but the scientific 
      community didn’t accept New Thought explanations as anything but “nonsense” or “wishful 
      thinking”. To this day, the Law of Attraction and its other related concepts are largely 
      ridiculed and rejected by mainstream science.</p>

    <p>That “reality” does not stop the rest of us from exploring and embracing the Law of 
      Attraction. To the contrary, so many people have taken an interest in LOA that it has 
      become a worldwide phenomenon.  Rhonda Byrne’s movie, The Secret, helped LOA reach many 
      millions of people who had not previously heard of it, and it has gained significant 
      recognition among the population.</p>

    <p>I discovered LOA by watching The Secret for the first time in November 2008. My first 
      reaction was skepticism, but I was also in such a bad place in my own life that I was 
      willing to consider almost anything. And so I did. I launched into a personal study of 
      this LOA thing, determined to either harness it for myself or to prove it to be a bunch 
      of rot.</p>

    <p>In September 2012, with the help of my wife, Louise, I decided to start a podcast on 
      the subject. I called it LOA Today, and it became my personal way to explore LOA concepts 
      by interviewing other people who knew more about it than I did.</p>

    <p>To my surprise and pleasure, I found that the podcast became one of my favorite things 
      to do, even though I had no listeners at all at first and only an occasional listener 
      dropping in throughout most of the first year.</p>
    
    <p>In the second year after a brief sabbatical, my brother, Mark and his then-girlfriend 
      (now wife), Uohna became my co-hosts.</p>

    <p>By the third year, Mark and Uohna had given way to Joel Elston, one of my first 
      interviewees in Episode 12. Joel stayed with me until April 2017, at which point he had 
      to leave the show to attend to other things in his life.</p>

    <p>David Scott Bartky took Joel’s place, and during that summer something remarkable began 
      to happen. Our listenership started to increase at a rapid rate. By November 2017, we had 
      as many episodes played in a month as had been played in all the previous five years 
      combined.</p>

    <p>That led to me expanding the podcast to a twice daily broadcast, and I brought on board 
      Wendy Dillard, Cindie Chavez, and Tom Wells to co-host the shows with me, with Joel Elston 
      returning to the show as well (to my delight).</p>

    <p>The one characteristic all of my co-hosts shared in common is that they are professional 
      life coaches or therapists. I figured that if I was going to do a podcast, I wanted expert 
      commentary.</p>

    <p>In a matter of weeks, both Wendy and Cindie told me about book projects they’d been 
      involved with. Apparently, both had contributed to multi-author anthologies where all of 
      the authors contributed not only to the book but also to promoting the marketing of the 
      book through their social connections online.</p>

    <p>As soon as I heard about these projects, I wondered, <em>Would it be possible to use the 
      same technique to promote our LOA Today podcast?</em></p>

    <p>Within a couple more weeks, I became obsessed with the idea of doing an anthology style 
      book sharing personal manifestation stories with as many students of the Law of Attraction 
      as we can find. These would be real stories told by real-life people in the LOA field from 
      their own life experiences.</p>

    <p>I imagined it to be an LOA version of Jack Canfield’s world-famous <em>Chicken Soup For 
      The Soul</em> series of books. No one needs positive reinforcement and confidence building 
      more than “deliberate creators” attempting to leverage the Law of Attraction in their daily 
      lives. What better way to get such leverage than from the real-life experiences of others 
      who are equally devoted to studying and applying this marvelous universal law?</p>

    <p>You hold the result in your hands.</p>

    <p>I’ve organized the book into sections, to make it easy for readers to find particular 
      kinds of stories. You can find stories about manifesting new homes and offices, 
      relationship, careers, improved health, new cars, and even the weather.</p>

    <p>You will find a wide range of perspectives in the enclosed stories. Perspective is a 
      key concept in LOA, and it plays no less of an important role here. So many perspectives, 
      39 in all, came together to create such a great book.</p>

    <p>So you’ll find stories that range from really happy, light-hearted pieces such as Keisha
      Clark’s “My Birthday Bath”, to the dark, blunt, and even brutal experiences detailed by
      Misti Jackson-Derringer in her story, “Boot Camp”.</p>

    <p>You’ll find stories where the main players didn’t even know how LOA worked, side-by-side 
      with stories from experienced practitioners who knew exactly what they wanted to attract 
      and how to do it deliberately.</p>

    <p>The stories range from being locked in a garage and using our inner voice to get out, 
      to following one’s nose all the way out to an oceanic adventure.</p>

    <p>The emphasis on what’s important varies considerably from story to story, just as the 
      voices of the different authors also vary.</p>

    <p>Some stories emphasize the internal self-talk and self-listening. Others emphasize 
      physical talk and actions. Some emphasize theory, while others emphasize feeling your way.</p>

    <p>But they all have one thing in common. They are all stories of things, experiences, and 
      events that occurred by thinking and feeling about them <strong>first</strong>.</p>

    <p>The Law of Attraction always operates in everything that comes into our lives. This book 
      not only recognizes that fact but also plays up stories where LOA’s role is clear.</p>

    <p>The main criteria that your editor used when putting the book together was to make the 
      book a collection of stories. Our purpose here is to entertain and inspire rather than to 
      teach. We hope you agree that this is really the best way to hear other peoples’ stories.</p>

    <p>On behalf of all the authors of this book, I hope you’ll find this book is a bright light 
      in your daily life. Perhaps it will take a place on your coffee table for you to read for 
      a bit whenever you need a pick-me-up. Or perhaps it will adorn your bedside table, giving 
      you some happy thoughts before you go to sleep at night.</p>

    <p>Just like what we say about the LOA Today podcasts, we hope that his book becomes Your 
      Daily Dose of Happy, one that not only provides you with inspiration and reinforces your 
      belief in yourself and in what you want most to manifest into your life, but also gives 
      you something you are eager to share with friends and families.</p>

    <hr>

    <p>I want to thank all of the people who have played roles both in the creation of this 
      book and in helping me to develop the LOA Today podcast over the years. Hopefully, I 
      don’t leave anyone out. If I do, please accept my apologies.</p>

    <p class="signature">My thanks go to:</p>

    <p class="signature">Stacey Aarssen<br />
      Linda Armstrong<br />
      Esther Bailey-Bass<br />
      Ellen Bakker<br />
      Clarissa Barraza<br />
      David Scott Bartky<br />
      Cambria Berger<br />
      Cathy Brown<br />
      Rhonda Burns<br />
      Cindie Chavez<br />
      Keisha Clark<br />
      Anik Clemens<br />
      Michael Craig<br />
      Wendy Dillard<br />
      Renate Donnovan<br />
      Joel Elston<br />
      Patricia Framo<br />
      Ruby Gangadharan<br />
      Hannah Golightly<br />
      Ana Hernando<br />
      Misti Jackson-Derringer<br />
      Anne-Marie McEwen<br />
      Mike McEwen<br />
      Susan Murray<br />
      Debra Oakland<br />
      Barbara Pinti<br />
      Geanina Roman<br />
      Galina Shadrova<br />
      Paulette Sherman<br />
      Leslie Shew<br />
      Dez Stephens<br />
      Sherry Trentini<br />
      Louise Thiessen<br />
      Mark Thiessen<br />
      Uohna-June Thiessen<br />
      Tarryn Tomlinson<br />
      Janet Warnecke<br />
      Tom Wells<br />
      Jean Yang<br />
      Susan Shearer Young</p>

    <p>I also want to give my special thanks to program director Jesse Funk and owner Gary Null 
      of the Progressive Radio Network (<a @click="myLink('https://prn.fm/')">prn.fm</a>) who 
      began carrying my podcast on their network nearly four years ago . Without their support, 
      I would not have reached anywhere near as many new listeners as I have. Thank you, guys!</p>

    <p>Finally, I would be remiss if I didn’t take a moment to address our primary purpose. 
      If you haven’t listened to the our podcast at 
      <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a>, please do so. 
      And when you like it (and we’re confident you’ll like it), please subscribe and share.
       The instructions on how to subscribe are found on that same page, and a huge number of 
       social media links for sharing with your friends are provided there as well.</p>

    <p>Thank you, dear reader, for picking up this book. Now, get ready for a really fun ride!</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#i">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="home-sweet-home"/>
    <p>&nbsp;</p>
    <h5>Home Sweet Home</h5>
    <h6>by Wendy Dillard</h6>

    <p>After living in many rental properties, I’d had all I could stand of white-colored 
      walls and boring color palettes that rentals provided. So, it wasn’t any surprise to 
      me that I’d been dreaming of my own house where I would have the luxury of painting 
      the walls and decorating it in every conceivable way that my artistic heart desired. 
      Living in a space that reflected my colorful personality felt like the kind of nurturing 
      environment that would nourish my soul.</p>

    <p>When we were financially ready to buy a house, I performed an analysis of home prices 
      around our city and landed on the target area where we could get the most square footage 
      for the lowest price.</p>

    <p>Even though this would be my first house, I didn’t want a typical 3 bedroom / 2 bath 
      starter home because when I want something, I dream BIG! I really wanted 5 bedrooms, 
      but realistically 4 bedrooms was more in line with our budget.</p>

    <p>Since I had been planning for my first house for a long time, I’d developed a pretty 
      long list of criteria, needs and wants. So, here’s an abbreviated list:</p>

    <ul>
      <li>Five bedrooms (which included: a master suite, a guest room, a workroom for me to do 
        my many artistic projects, my office, and a separate office for my husband so we wouldn’t 
        have to share an office anymore. I’m a highly organized neat-freak, and he loves his piles 
        and piles of stuff scattered about everywhere)</li>
      <li>Two to three bathrooms</li>
      <li>An open-concept floor plan</li>
      <li>A nice yard for our dog</li>
      <li>A long and flat driveway that could park a minimum of six cars. (My husband loved to 
        tinker with cars and always had a number of non-running vehicles that he was in the 
        process of restoring. Our current rental house gave birth to this criteria because even 
        though the driveway could hold four cars, the driveway was pitched at a 45 degree angle. 
        It took me forever just to have the courage to drive up or down this steep, monster-like 
        driveway. We ended up replacing the brakes on our cars practically every six months! So, 
        between our personal cars and the ones that my husband was working on, we knew we wanted 
        lots of space to park our cars, and it had to be on a flat surface.)</li>
      <li>We wanted it to be at a price that we could comfortably afford, so we wouldn’t feel
        that every dollar we earned went toward the mortgage.</li>
      <li>And it had to be no-money down!</li>
    </ul>

    <p>Needless to say, the list was long. But, my life’s experience had taught me that no dream 
      was too big for God (or the Universe) to deliver.</p>

    <p>As the house-hunting began, we found the four-to-five bedroom houses in our price range 
      were completely unacceptable, which left us feeling melancholy. We thought we might need 
      to compromise or settle for less than what we wanted, causing all the air in our lofty 
      balloon to deflate. My hope of finding my dream home took a huge blow. What do you do 
      when you believe your dream is out there somewhere, but you don’t see any evidence of it?</p>

    <p>A number of months went by. I thought maybe the latest inventory of houses on the market 
      could possibly provide better options. So with renewed energy and vigor, I went back to 
      searching.</p>

    <p>This time we still found a bunch of duds, but the last house on the list showed promise. 
      It was a black-and-white brick, one-story, four bedroom, two bathroom house. The flat 
      driveway wasn’t particularly long, but because of where the house was situated at the end 
      of street, it could work.</p>

    <p>The inside of the house was darling. It checked almost all the boxes on our list. It was 
      in super-duper, wonderful condition. There weren’t any dings or dents in the walls or doors
      (like we saw in the other houses). The back yard was small, but it was beautifully 
      landscaped and definitely appealed to the artist in me.</p>
    
    <p>Overall, the house made my heart smile. Both of us could easily picture ourselves here. 
      While heading home, our excitement was almost uncontainable as we chatted on and on about 
      its attractive curb appeal, charming interior, wonderful floor plan, pristine landscaping, 
      and spacious area for cars.</p>

    <p>We floated on Cloud Nine with smiles fixed indelibly on our faces.</p>

    <p>The only glitch was that we needed $2,000 for a down-payment (which we didn’t have), 
      but we thought for certain that either his parents or mine would happily loan it to us. 
      We knew his parents had the money, so contacting them felt like a formality.</p>

    <p>With a feeling of “this was a done-deal,” my husband called them by phone while I stood 
      close by with great anticipation and a readiness to celebrate. His smile quickly changed 
      to a somber expression. The call was brief. They said “No.” They had a reason as to why 
      the money was not available, but the reason faded as I focused on the shock that they 
      wouldn’t lend us the money for the down-payment.</p>

    <p>We moved on to the backup plan of asking my parents for the money. With the sale of my 
      grandma’s home after she passed on, I knew they had a large amount of cash in the bank. 
      I knew this was a conversation that required me reaching out to my Dad (because he was 
      the decision-maker). He hated talking on the phone, but loved email.</p>

    <p>So, I promptly typed up an email using all the sweetness, charm, and “you love your 
      daughter, don’t you?” wording I could think up. Then we waited ...</p>

    <p>Day One, no response ...</p>

    <p>Day Two, no response ...</p>

    <p>We were practically out of our minds with impatience while waiting for a response from 
      my dad. My thoughts turned to fears as I pictured someone else snatching up the 
      black-and-white brick house. It was not easy to keep calm. I kept reminding myself that 
      IF this was to be our house, that it would be &ndash; and my dad’s delayed response wouldn’t be 
      a problem.</p>

    <p>Finally on Day Three, my inbox held the response from my dad. I’ll never forget his words:</p>
      <blockquote>“After much prayer, your mother and I don’t feel we are to loan you the money. 
        We wish you all the best in finding a new house.”</blockquote>
    
    <p>OMG! This was not at all what we’d expected. Our hearts sank to an all-time low. I re-read 
      his email over and over. I couldn’t believe my dad’s words. But, knowing their religious 
      beliefs, if God had told them “No,” there was no overturning their decision.</p>

    <p>With no other resources available to us, our plans to live in the black-and-white brick 
      house died. We wallowed in anger, sadness, and grief for the next several days as the 
      realization settled in that we’d lost this house.</p>

    <p>Fortunately, after a few days of releasing much pain and sadness, the cheerful, optimistic 
      side of me buoyed back to the surface. I felt an unanticipated surge of knowingness permeate
      my entire being with this inspiring thought: If not this house, then what’s in store for us 
      must be even better!</p>

    <p>With that, I felt jubilantly refreshed as my vision of my dream house was reinvigorated. 
      I knew with every ounce of my being that the house actually awaiting us would be even 
      grander than the black-and-white brick house, because what was yet to show up would truly 
      be The House.</p>

    <p>That thought was so powerful within me, it held me in a sense of hope for an entire year. 
      One day, I felt the nudge to hit the Internet again in search of our house. This time I 
      went into it knowing the exact suburb that would give us the biggest bang for our buck, 
      so that’s where I concentrated my efforts.</p>

    <p>One day, I found a house on April Showers Way that perfectly fit my search criteria. 
      I thought, <em>How cute is that street name?</em></p>

    <p>I could totally live on a street called, “April Showers Way.”  I decided to check it 
      out on my own, so as not to get my husband’s hopes up if it turned out not to be a good 
      option.</p>

    <p>I printed my MapQuest directions, and off I went. When I found the address, I thought 
      to myself: <em>Something about this house doesn’t seem right.</em> The description online 
      was for a two story house, and this was only one story. Feeling misled by whoever wrote 
      up the description, I drove around the neighborhood to see if there would be anything 
      else for sale</p>

    <p>I meandered through the streets of this subdivision where I found a group of six model 
      homes. I went in to check them out. Each one was beautifully staged with furniture, décor, 
      and impeccable landscaping. As I walked through each home, my enthusiasm grew while my 
      artistic-self resonated with the attractive décor. I was in heaven!</p>

    <p>As I opened the front door to this two story, five bedroom house, feelings of fairy 
      tale-like enchantment enveloped me. This enormous house was so big, I actually got lost 
      in it (true story).</p>

    <p>When I walked up the stairs, I couldn’t help but wonder what this house might cost and 
      if it was anywhere within our price range. I strolled from room to room. The master 
      suite’s entrance had two French doors that majestically opened up into the large master 
      bedroom. Even with a king-size bed, there was plenty of space for this room to have a 
      feeling of being absolutely grand.</p>

    <p>Surprisingly, as I walked all the way to the end of the bedroom expecting to find the 
      Bathroom area, I found yet another room that could perhaps be used as a secluded room for 
      reading.</p>

    <p>Tears began to stream down my cheeks as I was filled with an overwhelming flood of joy. 
      This magnificent house was more perfect than I’d ever pictured in all of my imaginations 
      about my dream house. I felt deep within me that I’d come home. There was something about 
      that extra room within the master suite that filled me with feelings of royalty and 
      grandeur like I’d never experienced. It was the icing on the top of my dream-house cake! 
      My tour ended with an enormously sized bathroom, followed by a huge walk-in closet 
      (the size of another bedroom).</p>

    <p>Wiping the tears from my eyes, I pulled out my cell phone to call my husband. He worked 
      nearby, and quitting time was coming soon. I told him I was in the area looking at homes, 
      and asked him to meet me at the model home sales office, because I wanted him to view the 
      model homes. I did my best not to blurt out anything that would broadcast my extreme 
      excitement because I wanted him to have his own experience.</p>

    <p>I walked behind him as he toured the model homes, trying to be as quiet as a mouse so as 
      not to influence him in any way. When he came to the one I’d fallen in love with, he 
      became enthusiastically more vocal about the things he liked. By the time he reached the 
      master suite, he too fell in love with this model as much as I did.</p>

    <p>How’s that for synchronicity and like-mindedness?</p>

    <p>With a particularly large bounce in our steps, we headed off to the sales office. While 
      there, I picked up the sales sheet with the description of the “Chanticlair” Model that 
      we loved. I laughed because it was the exact description of the house on April Showers 
      Way that brought me to this subdivision. I love how guidance doesn’t always come in the 
      package I expect, but the path is always laid out for me.</p>

    <p>The prices were higher than we’d hoped &ndash; big ouch! But, we still talked the salesman’s 
      ear off with our joyful enthusiasm for making a purchase, and we simply acted as though 
      we could afford the model we loved. We left there knowing we’d have to do some creative 
      financing, but we felt “sold” on that model.</p>

    <p>The next weekend was New Year’s Day, and we drove out to the sales office to talk more 
      seriously about locking down one of the pieces of property upon which to build our new 
      home. We thought for sure the sales office would be open to do business, but we were 
      wrong. The office was closed.</p>

    <p>Because we felt such a powerful desire to go there, we thought maybe the purpose of the 
      trip was to drive through the development to select the property we’d build upon. Most of 
      the properties had the driveways either poured or measured-out with stakes. Shockingly, 
      these driveways were tiny &ndash; barely one car length long. The longest was one-and-a-half car 
      lengths long &ndash; definitely not what we were expecting. This meant that none of the available 
      properties would work for us.</p>

    <p>We were back to feeling disappointed and a bit hopeless. This seemed like yet another case 
      of getting our hopes really high, only to have them dashed.</p>

    <p>How was this possible?</p>

    <p>I was once again reminded of the powerful thought: “If not this house, then what’s in store 
      for us must be even better!”</p>

    <p>This encouraged us only slightly.</p>

    <p>While in our saddened state, we drove around the neighborhood next to this new 
      development. I couldn’t believe my eyes when I saw the Chanticlair home in an already 
      developed neighborhood with a "for sale" sign in the front lawn. Could this be real?</p>

    <p>As we looked for a place to park the car, we found yet another Chanticlair home with 
      a "for sale" sign.</p>
    
    <p>Were we in a Twilight Zone episode? It sure felt like it.</p>

    <p>efore we dared to get excited, we drove through the alley where we could see the lengths 
      of the driveways. Astonishingly, the first driveway was about four car lengths long, and 
      the second one was five car lengths long!</p>

    <p>We couldn’t help ourselves. Our hopes sky-rocketed once again. Right before us were two 
      Chanticlairs with long driveways already in existence, and they were for sale.</p>

    <p>We called the listing agents on each of the "for sale" signs. The first house had just 
      sold. The second house was still available, so we scheduled a meeting to see it. When we 
      physically walked into the house, we knew this was truly the one.</p>

    <p>This house was incredibly perfect. It met all the criteria on our list with a few bells 
      and whistles thrown in. The sales price was within our budget, which was lower than the 
      new construction home, and we could buy it with no money down!</p>

    <p>We celebrated by dancing with joy because this house was beyond what we’d ever thought 
      possible. It had our five bedrooms, three bathrooms, and three living rooms. It had an 
      open concept kitchen looking into the living room, and the walls beckoned the brush of 
      my artistic stroke as I envisioned the beautiful colors that would make my heart sing.</p>

    <p>We went home, got all of our ducks in a row financially, and planned to put our offer 
      on the house the next Saturday.</p>

    <p>On Friday before my work day came to an end, I was unexpectedly called into the HR 
      office. Without any warning, I was told that my job had been eliminated. It felt surreal 
      like I was in a movie with a major plot twist. The HR lady continued to speak, but I 
      could barely hear her over the sounds of my own thoughts racing about how this would 
      impact the purchase of our house.</p>

    <p>I didn’t know what to think or what to feel. I felt certain we’d been guided to our 
      house &mdash; and now this?</p>

    <p>When I called my husband from the car to tell him what had just happened, he said 
      with a sad tone of voice, “I guess we won’t be able to buy the house.”</p>

    <p>To which I replied with powerful intensity: “Oh, no &ndash; this is not going to stop us! 
      We found our house, and we’re going to put on offer on it tomorrow as planned.”</p>

    <p>aturday, we met our Realtor and took one more walk through the house drinking in the 
      feeling of being at home. Standing at our soon-to-be kitchen counter, we quickly agreed 
      on the amount we would offer.</p>

    <p>As the Realtor wrapped up the discussion, he asked if we had any questions.</p>

    <p>“Well, there’s one thing. I lost my job yesterday. Will that be a problem?”</p>

    <p>He looked up toward the ceiling and pondered as he composed his answer.</p>

    <p>When he was ready, he looked directly at me and said, “Well, in my 25 years as a 
      Realtor, I’ve dealt with worse circumstances. So your job will be to get a job before 
      the closing.”</p>

    <p>I loved how my job circumstances didn’t derail him, and it definitely gave me the 
      encouragement to go forth and land a new job!</p>

    <p>Our offer was accepted, and we were ecstatic. We’d finally found our dream home. 
      We were relieved that this arduous search had finally come to an end.</p>

    <p>For the next six weeks, I didn’t allow myself to focus on anything except finding 
      a new job. I was in the final round of interviews for a job that would pay about the 
      same salary as my previous job, and it looked good. While driving there, a headhunter 
      from another company called saying that he’d already shared my resume with his client, 
      and they felt I was perfect for the job. I told him that I was really close to securing 
      a job, as I was literally driving to the final interview, but this headhunter was 
      persistent and begged me to call him anyway when I exited the interview.</p>

    <p>When I walked into the final interview at the dairy company, they informed me that the 
      company prioritized hiring from within. They had just learned of an associate desiring 
      to transfer to this office, so they gave her the job.</p>

    <p>As much as I was disappointed, I also felt relieved. Even though I needed a job ASAP, 
      I didn’t really want that one. It didn’t feel challenging enough to hold my interest for 
      long.</p>
    <p>I called the headhunter from the other company. He was right. His client loved me. After 
      one of the easiest interviews I’d ever had, they hired me on the spot. And guess what? 
      The salary was significantly higher than the dairy company. With this salary, we’d have 
      a financial cushion so we wouldn’t just be working to pay the bills, fulfilling another 
      criteria on our list.</p>

    <p>I immediately called our Realtor and told him the good news. He was delighted. I told 
      him that I would start my new job just in time for the paperwork to be drawn up for the 
      closing to happen on time. Closing day went off without a hitch. Whew! We drove around 
      our new city looking for a place for us to have lunch and bask in the joy of 
      home-ownership.</p>

    <p>While directing our movers as they carried our furniture into our new house, I could 
      barely contain my exuberance. This house filled me with such incredible joy. Even after 
      11+ years of living in it, I still get giddy about its perfection.</p>

    <p>We got everything that was important to us about a house. Thank goodness that knowing 
      the ins-and-outs of the Law of Attraction was not necessary for it to show up in our 
      experience, because at the time we didn’t know about Law of Attraction.</p>

    <p>Knowing what I know today, I can see in hindsight how the Law of Attraction coordinated 
      all necessary elements to deliver to us exactly what we desired with a synchronicity I 
      could have never orchestrated. My strong desire and never-give-up attitude played a large 
      role in landing our dream home. And as Dorothy from the Wizard of Oz said, “There’s no 
      place like home.”</p>

    <hr />

    <img src="images/WendyDillard.jpg" />

    <p class="signature">Wendy Dillard is a Masterful Law of Attraction Teacher &amp; Coach. Her expertise is in 
      nowing how to apply the Law of Attraction to any situation. What other people call 
      miracles and coincidences, Wendy considers normal and the way life is intended to be. 
      Website: <a @click="myLink('https://www.wendydillard.com')">www.wendydillard.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#i">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="the-lot"/>
    <p>&nbsp;</p>
    <h5>The Lot</h5>
    <h6>by Barbara Pinti</h6>

    <p>In 1978 our family of six was too big for our house.</p>

    <p>We had loved living on the last road cut into the side of a mountain.  During nice 
      weather our family had hiked through the woods up that mountain to see the white-tailed 
      deer.  With three of our kids walking and one in a pack on our backs, we loved to 
      explore the area.</p>

    <p>One day we had found a huge sprawling rock formation and decided to have our picnic 
      lunch there.  It became “our” rock and a favorite place to rest and eat after hiking.</p>

    <p>But our house was too small, and our family was growing. It was time to move.</p>

    <p>We searched for our new “family home” where we would raise our children to adulthood.  
      We took several trips through town looking for that perfect house.  Finding nothing after 
      several months, we thought about building one ourselves so we could have all the things we 
      wanted in our ideal house.</p>

    <p>A builder in a nearby town put up some larger homes, and we went to look at them.  He 
      had a few different house plans, and there were some lots available.  We started getting 
      excited about it, chose a lot, and selected a plan.</p>

    <p>The house took forever to build. We visited the site daily to check on progress.</p>

    <p>One day, we were very upset to find that the builder had switched the floor plan to be 
      the opposite of what we had planned.  It was very disappointing, but there didn’t seem 
      to be anything possible to be done about it as the foundation was already poured.</p>

    <p>We accepted the disappointment.  About a week later we found another problem.  The 
      fireplace was done, and it was amateurish, awful, completely unacceptable.   I remember 
      at the time we said it looked like a kindergartner had built it.</p>

    <p>A decision had to be made.  I no longer wanted the house.  It had become a disaster 
      project instead of a joyous one.  After consulting our lawyer, we found we were able 
      to get out of the commitment.</p>

    <p>So after all this time, we found ourselves right back again at step one.  We began 
      to search again for that house that would make my heart flutter.</p>

    <p>We learned that lots were being forged out of the road further up our mountain.  
      We took a ride up the mountain to see what was going on up there.</p>

    <p>Nothing had been built yet, but all of the lots were marked off. We checked them out. 
      As we perused the lots,  one lot seemed very familiar.  It included a large rock with 
      some of the same parts that I had remembered from our picnics.  However much dirt 
      covered parts of the rock, so it took a while for us to realize that it was indeed “our” 
      rock.</p>

    <p>That was it!  We wanted that lot!  We started getting excited about the possibility 
      of building on that site where our footprints had tread while our joys and laughter 
      had rung out.</p>

    <p>Finding the builder’s number on a sign nearby, we went right home and called him up.  
      Our disappointment was profound when he told us that all of the lots had been sold.  
      I was crushed at first, but I remembered other times during my life when I thought all 
      was lost.</p>

    <p>I began imagining the house that we would build on that property and all the fun that 
      the children would have playing in the woods.  I even planned out just where I would 
      locate my garden.  I walked the land and scoped it all out as though it were mine.</p>

    <p>I confided to several friends how much I wanted that building lot and continued to hope 
      beyond hope that it could be ours. Every night before sleep, I would imagine all of us 
      snug in the house that we had built on that property.  I pictured us playing outside 
      around the rock while laughing and enjoying ourselves completely.  I felt as though I 
      had claimed that property as our own, not only then, but years earlier as well.</p>

    <p>A few weeks later, a miracle happened.  I spoke to a friend who had been bowling that 
      morning with the woman who owned “our” lot.  The woman confided that her husband had 
      just been offered a new and better job in another state.   They needed to sell the lot 
      as quickly as possible.</p>

    <p>Events moved very fast now.  We bought the lot from them in a quick, private sale.  
      I worked feverishly designing our new home.  We found a builder.</p>

    <p>One of the first things we asked him to do was to remove the dirt from the rock so 
      that it looked exactly like it did in the days when we picnicked on it.</p>

    <hr />

    <img src="images/BarbaraPinti.jpg" style="margin-bottom: 30px;" />

    <p class="signature">Barbara A. Pinti, MA, MA, ABD, LMFT, LPC is a psychotherapist in private practice in 
Wen      workshops, and her private practice.</p>
    <p class="signature">Email: <a href="mailto:barbarapinti@comcast.net">barbarapinti@comcast.net</a></p>
    
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#1">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="manifesting-an-apartment-on-central-park-west"/>
    <p>&nbsp;</p>
    <h5>Manifesting an Apartment on Central Park West</h5>
    <h6>by David Scott Bartky</h6>

    <p>Many years ago before I became a professional life coach, I moved from Los Angeles to 
      New York. While in Los Angeles, I learned about the Law of Attraction from Michael 
      Beckwith many years before he appeared in the movie, <em>The Secret</em>.</p>

    <p>When I moved to New York City, I became part of the masses who raced to see any new 
      apartment listing. Since I didn’t have a large budget, most of the apartments I ran to 
      ended up being very disappointing. They were either too small or had some weird quirk 
      about them that for me made them undesirable.</p>

    <p>After many of these cattle call type experiences, I suddenly had an “ah ha” moment. 
      I remembered the Law of Attraction and how powerful it is. I thought to myself, “Why am 
      I looking at these apartments all over New York City when I always dreamed about living 
      on Central Park West?” I thought this despite the fact that my budget didn’t qualify for 
      an apartment on one of the nicest streets in New York City. So in an instant I went from 
      an “I’ll take anything” attitude to an “I know exactly what I want, and that’s all I’m 
      interested in!” attitude. How could my dream of rollerblading from my apartment building 
      into Central Park become a reality?</p>

    <p>I learned from Beckwith that what I focus on is what I attract. I didn’t have to know 
      how it would happen. I just had to get into the vibration of what I wanted and expect it 
      to happen.</p>

    <p>After my wonderful “ah ha” moment, I called my Realtor and told him, “Don’t let me know 
      about anything unless it’s on Central Park West.” Silence on the other end of the phone 
      told me he thought I was crazy. After the silence he said, “Well, that’s a tall order, 
      but I’ll keep my ears open.” I thanked him, and I never looked at another “for rent” ad 
      again. I just trusted that it would happen and went about my business. Within two weeks 
      I received a phone call from that Realtor about a studio apartment coming available in a 
      building on Central Park West. It was $500 more than what I could afford. He asked me if 
      I was interested. I didn’t hesitate: “YES!”</p>

    <p>Why did I agree to go look at an apartment that was $500 more than I could afford? 
      Because I know that anything is possible, so why not look at it? I met him outside the 
      building. The lobby was so nice it took my breath away. The elevator was the nicest one 
      I had ever been in. It had oriental birds painted on the walls. I was ready to move in 
      before I saw the apartment!</p>

    <p>We walked into the apartment. I knew it was perfect for me. The tenant, who wasn’t 
      supposed to be home, was gathering some things. I asked her why she was moving. She told 
      me her mother was ill, and she had to go back home to care for her. She also said I was 
      the first one to see the apartment and that since she was breaking the lease, the owner 
      didn’t want it to sit empty. I got the nerve up to ask her how much she was paying per 
      month. She told me, and it was exactly what I could afford!</p>

    <p>I guess the owner was told she could charge $500 more, so that’s why she raised the 
      price. However, since I knew what the current tenant was paying I told the building 
      manager that I wanted the apartment, and I offered $25 more than what the current tenant 
      was paying. My Realtor told me that that wouldn’t be enough, but it really was all I 
      could afford, so I asked the building manager to propose my offer to the owner.</p>

    <p>The next day I found out that the owner accepted my offer, and I got the apartment. A 
      few weeks later I moved in. Thank you Law of Attraction. I loved living in that apartment!</p>

    <hr />

    <img src="images/DavidBartky.jpg" style="margin-bottom: 0;" />

    <p class="signature">David Scott Bartky<br />
    Life Coach David<br />
    Web Site: <a @click="myLink('https://www.facebook.com/lifecoachdavid')">lifecoachdavid.com</a><br />
    Facebook: <a @click="myLink('https://www.lifecoachdavid.com/')">@lifecoachdavid</a></p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#2">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="our-dream-house-in-northern-california"/>
    <p>&nbsp;</p>
    <h5>Our Dream House in Northern California</h5>
    <h6>by Janet Warnecke</h6>

    <p>In 2015, My husband, Ed and I, after years of living literally in the middle of Hollywood, 
      California, started putting into action our plan of moving to Auburn, California and away 
      from the traffic and the crazies.  We needed to sell our home and improve our credit scores 
      and get all our financial ducks in a row.  We knew we had a slightly long road ahead, but 
      it was certainly doable, and we started doing just that.</p>
      
    <p>That summer, our daughter graduated from the University of California at Santa Barbara but 
      was still living at home and looking to find her way.  What exactly does a degree in German 
      get you? She switched from majoring in history to German because “The German Department is 
      more fun.” Sounded good to us &ndash; fun is better.  Without knowing it, she clearly had her own 
      momentum, but that’s a whole different story.  She is currently working on her Masters degree.  
      So proud!</p>

    <p>We moved to Encino as a pit stop for her to find a job and begin working.  We were not 
      exactly in a position for Ed to give up his job (we were still improving our financial 
      situation). All that time, we constantly discussed what we wanted from the move, i.e., 
      the feeling, the calm, the lack of rush hour traffic, the ability to work from home, 
      neighbors we would actually get to know as opposed to the zillion people surrounding us 
      in condos and apartments.</p>

    <p>We rented a home from a friend in 2015 in Encino.  We moved in and all was going great.  
      Our daughter started working and boom, within a year she met and started a relationship 
      with a very nice guy.  His family was very welcoming and later that year she moved in with 
      him and his family &ndash; all the while continuing to enjoy her job and look into her options.</p>

    <p>Things seemed to be lining up perfectly for my husband and I to make the move to Auburn 
      as we were only planning on staying in Encino for a year and a half.</p>

    <p>In October 2016, my husband was diagnosed with throat cancer, and our whole world changed. 
      Three months of heavy chemo was followed by a short break before handling 37 daily treatments 
      of radiation.  We were devastated.  With Ed in a fight for his life, moving was no longer on 
      the front burner.</p>

    <p>The treatments were brutal.  I was his sole caretaker and had no idea what I was doing.  
      It was truly one minute at a time, one appointment at a time, one pill at a time.  Without 
      going into too much detail, I had never experienced anything so scary.  My husband went 
      from 160 lbs to 112 lbs in three months.  I have no idea how he didn’t fling himself off 
      the roof, except that he was too weak to climb up a ladder.</p>

    <p>With the help of friends and family we made it through.  He had a very good result from 
      the chemo which gave us strength to go forward with the radiation.</p>

    <p>During this time I did not personally think about the house and the move, but my husband 
      told me later that it was constantly on his mind to get through this treatment, so that 
      one way or another we could make it to our dream life.  During most of his treatment he 
      could barely speak, so he did not share this vision with me, but thank God the Universe 
      was listening and that we had been filling that vortex over a lifetime.</p>

    <p>By July 2017. the day after my husband’s radiation treatments ended, our landlords 
      (previously our friends of 30 years) gave us a 30% rent increase.  It was astronomical!  
      Apparently, they wanted to sell the home but had not informed us.  So with this giant 
      increase we decided to move as quickly as possible.  Ed was way too weak to move, but 
      we started taking action to find storage facilities and do whatever we could to go 
      forward.  More importantly, we had gotten the news that the tumors were all gone, and 
      Ed was given a clean bill of health, but it would still take several years to recover 
      fully.</p>

    <p>Our hopes were high that we would still be able to make our dream come true.  Unbeknownst 
      to me &ndash; and certainly to Ed, because we were so consumed with treatment and appointments 
      and ER visits &ndash; we didn’t pay attention as well as we should have to our financial 
      situation. When we went to apply for a loan, we were told it would take us approximately 
      a year or so to clean things up &ndash; again &ndash; to get a loan.</p>

    <p>That was it for me.  I cracked.  After getting through the cancer and seeing the light 
      at the end of the tunnel, I was DEVASTATED!  Another year?</p>

    <p>After I sobbed for about three hours that my life was over &ndash; not too self-obsessed or 
      ungrateful for the good things happening, i.e., cancer free &ndash; I got a grip and pulled 
      myself together.  Well, it would take what it takes.  We’re not giving up.  I made a 
      list of what I wanted in a house and started thinking about it again.</p>

    <p>By November we were ready to move, after briefly talking about our “house dreams” with 
      the guys on the LOA Today podcast.  Even with Ed’s low weight and difficult physical 
      condition, we packed and the movers came.  We were out by November 30th, on our way to 
      stay with my father-in-law up north and darn grateful that we had a nice place to stay 
      for Ed to continue to recover and for us to house hunt.</p>

    <p>In December, we saw several homes that first week, but we didn’t have much positive 
      vibration on the actual purchase of a house because we knew we had to improve the 
      financial end.</p>

    <p>But just being up here, looking at the lake, looking at the trees, the beauty &ndash;
       our vibrations improved whether we had our own house or not.  If it took a year, fine, 
       we were in the most beautiful place on earth for us.  A lot of stress released as we 
       accepted the situation and just enjoyed our surroundings.</p>

    <p>We suddenly got word that Ed qualified for a VA loan, which opened up a whole new 
      enthusiasm about purchasing a house.  The day after that news, our lender said, “Hmm, 
      your credit score is great, I don’t know what happened.  You can get any loan you need.”  
      We were so jazzed.  Now we just had to find a house.  No pressure though, we thought 
      we’d take the next three or four months to look around.</p>

    <p>On New Year’s Day 2018, we took a walk. It was a gorgeous day.  We decided to go up a 
      street we never take, and there on the corner was a house for sale.  Since it was New 
      Year’s Day we did not expect anyone to be showing the house.</p>

    <p>I had seen this particular house on the MLS listings a month earlier, and it had just
       been sold and was in escrow.  A week before, the previous potential buyer’s offer fell 
       through.</p>

    <p>The agent just happened to be in the house for a private showing as we walked by. We 
      asked if we could take a peek.  She said, “Sure.”  And we fell in love!  We made an offer, 
      and after one day of back and forth, it was accepted.</p>

    <p>What happened next was also crazy.  It seemed at every step exactly what we needed fell 
      into our lap.  All the paperwork, people who had what we needed – everything! By 
      February 8, 2018, the keys were in our hands!</p>

    <p>After moving in, about every other day I’d say to Ed things like, “You know, I didn’t 
      notice this when we were looking at the house, but I remembered I always wanted a stream 
      in the backyard – and wow, we have one!”  It was that way with so many things in this 
      house.  So much of my wish list is here.  The Christmas trees out front, the fireplace, 
      the deer and bunnies running around, the lake, the sound of children playing in the 
      neighborhood, my sliding glass doors, French doors, a guest room, a music room, etc.  
      My neighbors brought us welcome cookies.</p>

    <p class="signature">Here’s the original wish list:</p>

    <ol>
        <li>Fireplace In Every Room – <strong><em>Got one in the living room</em></strong></li>
        <li>3 Bedrooms, Office Space, Guest Room – <strong><em>Got it</em></strong></li>
        <li>At Least 1800 Sq Ft – Would Have Accepted Less – <strong><em>Got it</em></strong></li>
        <li>Trees – Amazing Views – <strong><em>Got it</em></strong></li>
        <li>Close To My Father-In-Law – <strong><em>Got it (three minute walk)</em></strong></li>
        <li>Short Walk To The Lake  – <strong><em>Got it</em></strong></li>
        <li>Porch/Deck  – <strong><em>Got it</em></strong></li>
        <li>Backyard The Deer Can’t Get Into For The Cats To Wander – <strong><em>Got it</em></strong></li>
        <li>Good Closet Space – <strong><em>Got GREAT closet space</em></strong></li>
        <li>Two To Three Bathrooms – <strong><em>Got three</em></strong></li>
        <li>Mother-In-Law Suite – Saw several in the MLS and thought it would be a great thing 
          to have. There are not that many homes here with that situation, but i still wished for 
          it – did not expect it in a million years. – <strong><em>Got three</em></strong></li>
        <li>Deer And Bunnies And Blue Birds – <strong><em>Got them</em></strong></li>
        <li>Super Cozy Feeling – <strong><em>Got it</em></strong></li>
        <li>Good Size Kitchen – <strong><em>Got it, nice and bright too!</em></strong></li>
        <li>White Kitchen – <strong><em>Got it</em></strong></li>
        <li>Decent Size Parcel Of Land – <strong><em>Got it, one-half acre</em></strong></li>
        <li>Double Front Door – <strong><em>Got it, couldn’t believe it</em></strong></li>
        <li>Sliding Glass Doors/French Doors – <strong><em>Got French doors in the bedroom</em></strong></li>
        <li>Great Back Yard – <strong><em>Got it</em></strong></li>
        <li>Garage with space/shelves and could actually fit the car – <strong><em>Got it</em></strong></li>
        <li>Indoor Laundry – Last one was outside – hated that – <strong><em>Got a whole laundry 
          room with counters and sink. Amazing!</em></strong></li>
    </ol>

    <p>Plus, there were more things we didn’t even think of for our wish list that showed up 
      anyway, like a built-in sprinkler system and a golf cart.</p>

    <p>This DOES NOT HAPPEN in the middle of Hollywood! Apparently, all the years of putting 
      different thoughts on what we wanted our home and lives to look like were all piling up 
      in the vortex.  I like to think that while Ed was going through this time, OUR home was 
      being prepared to be put on the market.</p>

    <hr />
    <p class="signature">Janet and Ed Warnecke listen to LOA Today from their beautiful new home in Auburn, 
      California.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#3">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="divorced-broke-and-homeless"/>
    <p>&nbsp;</p>
    <h5>Divorced, Broke and Homeless</h5>
    <h6>by Mike McEwen</h6>

    <p>That's where I was in 2013, the result of 20 years of trying to make everyone else 
      happy but myself. I guess this is what it takes to "wake up" and be responsible for 
      your own happiness.</p>

    <p>Looking back on it today, I am very grateful for all the failures and the lessons I 
      learned, which helped me to write this story in the hope that I can inspire someone 
      who's going through something similar. When one gets caught up in life’s circumstances, 
      it's like being trapped in a revolving door of lack. The Law of Attraction gave me 
      plenty of opportunities to continue feeling all that I lacked. I eventually realized 
      that the one thing I lacked most was happiness.</p>

    <p>My divorce was finalized July 28, 2013. On August 1st, I arrived in Phoenix, Arizona 
      to visit my daughter, son-in-law, and two grandkids for a healing vacation. For the 
      first time in a long time, I felt like I was moving forward, and I was so grateful to 
      be with my Arizona family. I arrived back in Connecticut in late August refreshed and 
      feeling loved and appreciated ... something I hadn't felt in a long time.</p>

    <p>I was still homeless but not broke. A good friend of mine invited me to stay at his 
      house until I could get my own apartment. John likes big bonfires, and I arrived one 
      Friday evening to find him building one.</p>

    <p>It gave us a great opportunity to sit around the fire and drink some beer, so we did. 
      Around the fourth beer, I decided to burn all of the old negative past paperwork and 
      anything linked to my unhappiness. I made the intention to connect with new people with 
      similar interests.</p>

    <p>Oh what a great night that was! I had no idea what was about to happen.</p>

    <p>Sitting at the kitchen table the next morning having coffee, I decided to go online 
      to check out some events. I found a meditation group meeting that afternoon in the 
      town where I grew up and decided to attend. After the meeting, I talked with the 
      facilitator of the meditation group, telling her that I would like to find more 
      events to attend so I could meet more positive, like-minded people, and she recommended 
      I check out a website called Meetup.com.</p>

    <p>Back at my friend’s house that afternoon, I decided to go online to check out the 
      Meetup.com site. I typed in “local events.” The first thing that popped up was Laughter 
      Yoga at The Buttonwood Tree. So without hesitation I signed up for it. Not only did 
      Laughter Yoga teach me how to laugh at things that would normally upset me, I met 
      the director of The Buttonwood Tree, Anne-Marie, and it didn't take long before a 
      strong connection grew between us ... something that hadn't happened in a long time. 
      She asked me out for tea.</p>

    <p>I replied, "It's 9:00 at night. How about a beer?"</p>
    <p>In conversation over a few beers we found that we had a lot in common, so I invited 
      her to sunrise Tai Chi that next morning. I was happy that she showed up. After Tai 
      Chi we went out for breakfast. It was a wonderful start to a new relationship.</p>

    <p>Before I knew it, we had a dinner date. The food and the conversation were great as 
      we sat overlooking Lake Pocotopaug at Angelico's Lake House Restaurant.</p>

    <p>What a great manifestation!</p>

    <p>Several days after our dinner date she handed me a key to her apartment. Hesitating 
      at first, I realized here was another manifestation: no longer homeless and no longer 
      alone. As we say in Laughter Yoga, "Very Good Very Good Yay!"</p>

    <p>After living with her for about a year, the landlord sold the house, and we had to 
      move out … in three weeks! Oh no! At that time, my contracting business was slow, and 
      money was real tight. How could we find a place to live in three weeks?</p>

    <p>Intend it to be and it shall be. My then fiancée just kept saying,  "No worries … the 
      right place to move into will show up at the right time.”</p>

    <p>Okay, I thought, but where's the money going to come from? If we feel abundant when 
      there seems like there's nothing to feel abundant about, the universal Law of Attraction 
      matches the feeling with more of the same. People, circumstances, and events line up at 
      the right time … and that's what happened.</p>

    <p>Anne-Marie called a Realtor whom she worked with in the past and received a lead on a 
      single-family house for lease that she <em>thought</em> might be available but wasn’t 
      sure. Anne-Marie investigated and found that it was the perfect little house for us.</p>

    <p>We had five days to sign the lease, but we didn't have the $3,000 we needed up front 
      for it.</p>

    <p>I had sold a contracting job that would yield us enough money, but it would take 30 days 
      to complete the job and get paid. Three days before signing the lease, I received a call 
      from the management company for the construction project. The bank had taken over their 
      property, creating a very unusual situation because they had to close out all the 
      accounts for that property. He requested that I send my invoice for the job even though 
      I hadn’t started so he could pay me in full to get it off the books for the sum total 
      of $9,600!</p>

    <p>Problem solved. I still can’t believe it</p>

    <hr />

    <img src="images/MikeMcEwen.jpg" />
    <p class="signature">Mike McEwen, LOA practitioner. Certified Tai Chi instructor for 25 years. 
      Reiki healing energy practitioner. Group or private sessions are available.<br />
    Email: <a href="mailto:mikegonow@gmail.com">mikegonow@gmail.com</a><br />
    Cell <a href="tel:+012035150818">203-515-0818</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#4">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="wouldnt-it-be-cool-to-live-here"/>
    <p>&nbsp;</p>
    <h5>Wouldn’t It Be Cool To Live Here?</h5>
    <h6>by Stacey Aarssen</h6>

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

    <hr />

    <img src="images/StaceyAarssen.jpg" />

    <p class="signature">Stacey Aarssen<br />
    Personal Branding Specialist<br />
    Helping individuals &amp; business owners who want to be financially better. Be Better!<br />
    Phone: <a href="tel:+015193413691">519-341-3691</a> Ext 102<br />
    Toll-Free: <a href="tel:+018444747284">844-474-7284</a><br />
    Cell: <a href="tel:+015193626644">519-362-6644</a><br />
    Website: <a @click="myLink('http://www.path2wealth.ca')">www.path2wealth.ca</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#5">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="arizona-dreaming"/>
    <p>&nbsp;</p>
    <h5>Arizona Dreaming</h5>
    <h6>by Barbara Pinti</h6>

    <p>In 1995 I took a vacation right after Christmas with a friend of mine.  We spent 
      two weeks in Sedona, Arizona seeing all the sights and doing all the things that 
      tourists do.</p>

    <p>It was a wonderful two weeks.  Each day we went to one of the popular destinations 
      the area is known for, such as the Grand Canyon,  Cathedral Rock, Oak Creek Canyon, 
      and other places where we could feel the energies that abide there.</p>

    <p>One of our favorite places was Red Rock Creek.  We drove there each day, gazed at 
      the beautiful rock formations of Cathedral Rock, hiked through the creek, and smelled 
      the wonderful scent of honeysuckle from the many nearby bushes.  I took a sprig of 
      it and put it in my hair so I could smell it all day.</p>

    <p>Red Rock Creek was one of the most photographed places in the old western movies.  
      I remembered the movies I had seen as a girl, recalling Roy Rogers and especially The 
      Lone Ranger.</p>

    <p>One day, instead of continuing around the curve to go to the creek, I took a dirt 
      road straight ahead to explore the area.  I drove about a quarter of a mile and 
      stopped at a perfect view of Cathedral Rock on the left-hand side of the road.</p>

    <p>To the right I saw the most wonderful house for viewing Cathedral Rock.  I said to 
      my friend, “Now that is the house where I would love to live.  It’s just perfect!”</p>

    <p>During our two week stay, I kept getting a strong feeling that I would come back 
      to Arizona.  The longer I was there, the stronger the feeling became.  I even 
      thought about starting a business there and living there.  I took a four-seat 
      airplane ride over the area, and the sights were just breathtaking!  I truly 
      wanted to spend more time here.</p>

    <p>Before my trip to Arizona, I had a vision of a large tract of land with a barn 
      with upstairs rooms on the top floor of the barn.  I thought a lot about it as I 
      drove all over Connecticut looking for that barn, sensing I would somehow work out 
      of those rooms. Since I never found that barn, I decided it must have just been my 
      imagination.</p>

    <p>When I returned to Connecticut from Arizona, I spent a great deal of time thinking 
      about living in the southwest.  I began creating in my mind a self-made sabbatical 
      for the summer and spending it in Sedona.  I called one of the healers I visited 
      while vacationing there and inquired whether she knew anyone who could help me with 
      housing.  She gave me a name.</p>

    <p>I started saving money every week and putting it away for my sabbatical. I called 
      the woman whose name I had been given and asked her about renting a place for the 
      summer.  I told her the particulars of what I could afford and the dates of my stay.  
      She told me she would ask around and get back to me.</p>

    <p>While I awaited her response, I kept imagining spending the summer in such a magical 
      place with sunshine every day.  I was enthralled with the red rocks, seeing them in 
      my mind with the sunshine sparkling off them.</p>

    <p>Not long after that, the housing helper called and told me she had a very nice place 
      for me to rent.  She had checked off all the parameters I had given her, spoke to the 
      person who owned the apartment, and left it to us to work out the details.</p>

    <p>I was very excited and looked forward to the beginning of May when I would take what 
      I thought of as my healing journey.  The leases on both my apartment and my office were 
      up at the end of April, and the classes I taught at the local college ended May 
      9<sup>th</sup>.  Perfect timing!</p>

    <p>I put everything in storage, turned in all my students’ grades, and began what I later 
      called my “moving meditation”.  I drove to Sedona in my little red Honda Civic, windows 
      down, sun roof open, hair blowing in the wind, and loving every moment.</p>

    <p>That summer is one I will never forget. For the first time I was able to think all my 
      thoughts to completion.  I loved being by myself for the first time in many years.  I 
      listened to my favorite music and the many spiritual and holistic tapes I had collected 
      over the years.</p>

    <p>I spent nine days crossing the country so that I would be able to see the many sights 
      I had read about and so often wanted to visit. During that drive I felt as though I had 
      waited a very long time to do something this important to me.  I spent each day enjoying 
      it to the fullest.  It was a dream coming true.</p>

    <p>I arrived in Sedona early in the day and followed the directions I had been given to 
      the house I was about to rent.  I saw that I was driving on the road I had taken 
      previously to get to Red Rock Creek.</p>
    
    <p>I kept on looking at the houses, checking them against the address of the house where 
      I would stay.  Each moment of that drive became more and more exciting as I began to 
      think that the house was surely near my favorite spot in all of Sedona.</p>

    <p>As I kept driving and looking, I found my route taking me down the special road I had 
      explored during my previous visit.  My excitement was paramount now.  Could it be?  
      Could it be the house I had spotted and fallen in love with?</p>

    <p>Yes!</p>

    <p>The very same house I found during my winter vacation and designated as the “perfect” 
      place to live was the house I rented by phone, not knowing it was the same house! The 
      Law of Attraction had been hard at work bringing me everything I wanted.</p>

    <p>What a wonderful summer! I awoke every morning, hiked to Red Rock Creek, absorbing 
      the breathtaking scenery around me.</p>

    <p>Returning to Connecticut brought some confusion.  I wasn’t sure what I wanted to do or 
      where I wanted to live.  I rented some temporary office space from friends and got back 
      to work meditating on what my future held.</p>

    <p>Within a few months, I decided to open a center for alternative and complementary 
      therapies.  I found a great location for the center, then opened and filled it with 
      therapists doing different holistic modalities.</p>

    <p>It wasn’t what I had originally imagined, but it was very successful and one of the 
      first of its kind.  This kept me very busy with my own practice, managing the center 
      as a whole, and teaching college.</p>

    <p>However, there was that one niggling thought, “What about Arizona?”  I just knew there 
      was something more there for me.</p>

    <p>About a year later I returned to Arizona and began to explore the state once more.  
      I didn’t have a clear idea of what I wanted or what I was looking for.  I vaguely 
      thought about finding a ranch where I could open a residential center like the one 
      I founded in Connecticut, one where people would come and stay for several weeks at 
      a time for healing.  But I couldn’t find the right place.</p>

    <p>Feeling confused and discouraged, I returned to Connecticut and decided to put Arizona 
      out of my mind for a while.  However, it wasn’t long before I once again felt strongly 
      that I must return.</p>

    <p>An old friend who lived in Arizona gave me the name of a Realtor who might be able to 
      help me.  I really liked the first ranch he took me to, but something was holding me 
      back from signing the deal on the lease. Something wasn’t quite right.</p>

    <p>I’ve learned over the years to pay attention to those feelings and not ignore them.</p>

    <p>There were several out buildings besides the main house and barn.  I spent all day 
      checking things out.</p>

    <p>Late in the afternoon, I took my last walk around the property still undecided but 
      trying to be realistic about the fact that everything seemed to be just what I wanted.  
      I walked way out beyond the barn into the horse pastures.</p>

    <p>When I turned around and looked at the back of the barn from that angle, I saw my 
      vision!  It was the barn in the vision I had seen when I was in Connecticut.  It 
      never occurred to me that I would find it here in Arizona!</p>

    <hr />

    <img src="images/BarbaraPinti.jpg" style="margin-bottom: 0;" />

    <p class="signature">Barbara A. Pinti, MA, MA, ABD, LMFT, LPC is a psychotherapist in private practice in 
      West Hartford, Connecticut.  She has taught the Law of Attraction in many groups, 
      workshops, and her private practice.</p>
    <p class="signature">Email: <a href="mailto:barbarapinti@comcast.net">barbarapinti@comcast.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#6">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="a-new-healing-center"/>
    <p>&nbsp;</p>
    <h5>A New Healing Center</h5>
    <h6>by Clarissa Barraza</h6>

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

    <img src="images/office.jpg" style="max-width: 500px;margin-bottom: 0;" />
    <p class="signature" style="text-align: center;">This is the view from my office.</p>

    <hr />

    <img src="images/ClarissaBarraza.jpg" />

    <p class="signature">Clarissa J.Barraza LMT<br />
    Email: <a href="mailto:cjbarrazalmt@gmail.com">cjbarrazalmt@gmail.com</a><br />
    Facebook: <a @click="myLink('https://www.facebook.com/ClarissaJBarraza')">@ClarissaJBarraza</a><br />
    For 25 years in the Dallas area I have practiced LOA in my sessions, allowing Source 
    to guide me to do what's best for my clients.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#7">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="trapped"/>
    <p>&nbsp;</p>
    <h5>Trapped</h5>
    <h6>by Esther Bailey-Bass</h6>

    <p>It was a beautiful sunny day in May, with a breeze and a slight chill in the air. 
      I remember it was Monday, May 1, 2017, typical as any other Monday before.</p>

    <p>I readied myself for work, and as I proceeded to leave the house, I turned down 
      the thermostat, set the house alarm, then closed and locked the door behind me. I 
      noticed that I was leaving on time ... in fact, a little early.</p>

    <p>I got into the car, and using the hand remote I opened the garage door and drove 
      the car outside onto the driveway. Again using the hand remote, I closed the garage 
      door. Just as I was pulling away, I noticed the garage door was still open.</p>

    <p>“Huh, that was odd,” I said.</p>

    <p>So, I tried it again, and this time I watched the door close completely, then 
      open again.</p>
    <p>Not wanting to leave home with the garage door open and easy access to tools, 
      lawn mower, yard equipment, bikes and more, I got out of the car to investigate.</p>

    <p>First, I went to the wall unit to close the door from there. The same thing happened. 
      The garage door went up and down and then up again.</p>

    <p><em>Check the sensors,</em> I thought.</p>

    <p>So I did, and they seemed to be aligned. How could I tell? Again, I used the hand 
      remote, the same thing. The wall unit, the same thing – the garage door went up and 
      down and then up again.</p>

    <p>“What!?” I screamed.</p>

    <p><em>I don’t have time for this.</em></p>

    <p>Then I remembered that James, my husband, had adjusted the motor. So I decided 
      I would climb up onto a bench and check the motor. Maybe I could manipulate 
      something there.</p>

    <p>I did, and then again with the hand remote, I pressed the button to open and 
      close the garage door.</p>

    <p>It worked, the garage door was down completely. Now on the inside, I was faced 
      with a dilemma. Do I attempt to open the garage door using the hand remote or 
      wall unit, or would the problem persist?</p>

    <p>I remembered James once told me I could pull the red string to detach the garage 
      door from the motor and then lift the door open manually.</p>

    <p><em>That’s it! That’s what I’ll do.</em></p>

    <p>Something inside me was a little twitchy at this idea but I went for it anyway.</p>

    <p>I pulled the red string and heard a sound of something becoming unhinged. Now 
      I’ll be able to manually open and close the garage door then go onto work.</p>

    <p>Not so fast.</p>

    <p>I went to lift the garage door. I pulled and tugged as hard as could, but it was 
      impossible to move even a little bit.</p>

    <p><em>Wait, I have muscles, I’m not weak. I can do this!</em></p>

    <p>So I tried again, and still not even the slightest budge would the door make.</p>

    <p>I was locked in.</p>

    <p>It was in that moment I realized I was trapped in the garage with no way out. 
      The onset of panic came quickly. Standing in the middle of the garage, nearly in 
      tears, I twirled around like Cinderella.</p>

    <p><em>What just happened? What did I do?</em></p>

    <p>In a panic stricken voice, I said to myself, “Calm down, take a breath, think.” 
      I was going to meditatively coach my way out.</p>

    <p>Yeah, right! That was B.S.</p>

    <p>What could I do? Who could help me? My car, with the keys in the ignition, 
      cell phone and purse on the seat, was on the other side of the garage door.</p>

    <p><em>WTF!</em></p>

    <p>What to do? Well, I did what anyone would do in a similar situation. 
      I screamed and cried for help.</p>

    <p>There was just a sliver of space between the garage door and wall, 
      and through it I screamed for help, calling out, “Neighbor, neighbor help!”</p>

    <p>It seemed utterly useless.</p>

    <p>Looking around the garage for an answer, a way out, I heard sirens in the 
      distance, and that triggered a memory.</p>

    <p>“There’s a phone in here,” I said.</p>

    <p>Immediately, I rushed to search for the cordless phone. I had placed it 
      in the garage for this exact reason.</p>

    <p>I found it, but James had unplugged it. When I plugged it into the outlet it read, 
      “Warning check battery … warning check battery.”</p>

    <p>Surely, it won’t take long to get a charge, and I could call 911 for help.</p>

    <p>While the phone was charging, I got down on my hands and knees and began 
      screaming through the exhaust vent to the neighbor next door.</p>

    <p>“Help, neighbor, help!”</p>

    <p>No one. Nothing. Crickets.</p>

    <p>I went between the cordless phone, the exhaust vent, and garage door screaming 
      for help.</p>

    <p>Then I thought, <em>How can I trip the lock on the interior house door. I’ve seen 
      this done before.</em></p>

    <p>Sure, but it doesn’t work on a deadbolt lock, and I knew that before I even tried, 
      but thought I’d go for it anyway.</p>

    <p>The cordless phone panel kept blinking, “Warning, check battery … warning, check 
      battery.”</p>
    
    <p>I felt a sense of despair that I would be locked in the garage until someone came, 
      perhaps the mailman or James coming home from work.</p>

    <p>Eureka! I’ll dismantle the outside lock of the garage door and use a pole with a 
      rag attached, stick it through the hole to draw attention to passersby.</p>

    <p>So I fashioned a kind of surrender flag and stuck it through the lock hole, waving 
      frantically to no one. Cars would pass by with windows rolled up against the chilly day.</p>

    <p>The UPS truck went speeding by. The next-door neighbor pulled into their driveway but 
      was deaf to my screams.</p>

    <p><em>No phone.</em></p>

    <p><em>No response.</em></p>

    <p><em>No keys.</em></p>

    <p><em>No way out.</em></p>

    <p>I felt a sense of exhaustion take over me, and then I heard: <em>RESIGN</em>.</p>

    <p><em>From what, my job?</em> My body felt exhausted and I surrendered. I had been 
    planning to leave my employment over the past 5 years.</p>

    <p>Pausing to listen, the word settled in me, and I obliged myself to sit down. 
      I pulled up a bench and sat in front of the garage door, looking back and forth 
      asking myself, <em>How does it work?</em> I don’t know how a garage door works. 
      <em>How does it work?</em></p>

    <p>It was like asking a genie in a bottle for a wish.</p>

    <p>Before I could say or hear the word “hands” I sensed them, and there they were, 
      right in front of me. Then I heard, “You can do it,” in a warm, confident, 
      encouraging tone.</p>

    <p>It was a familiar voice. Somehow I knew this voice. It was an aspect of myself 
      from long before college, marriage, and the mundane.</p>

    <p>She was my encourager, a voice of wisdom, clarity, and certainty. I knew her 
      because we had played together before, and I was inclined to follow her lead. 
      So, I reverse engineered my steps.</p>

    <p><em>Hands.</em></p>

    <p><em>What did I do?</em></p>

    <p><em>You did <u>this</u>.</em></p>

    <p><em>When I did that, what happened?</em></p>

    <p><em><u>This</u> happened.</em></p>

    <p>So, I climbed up onto the bench looking for what had detached. Using my hands, 
      I latched two metal arms together. Something in me said, “That’s it, now try.” 
      With the hand remote still in my hand, I stood suspended and pushed the button. 
      Just like magic, the garage door opened.</p>

    <p>Now free, I was dumbfounded. I remember looking at the clear blue sky, uncertain 
      what to do next. I was baffled. So I got in the car and sat for a while before 
      calling work to explain why I would be late. Then I called my mother to tell her 
      what had just happened. After being trapped in the garage for nearly two hours, 
      I ended up being my own rescue.</p>

    <p>Seven months later, I did in fact resign from my employer after nearly 18 years 
      of service. Life on the other side is already proving sweeter.</p>

    <hr />

    <img src="images/EstherBailey-Bass.jpg" alt="">

    <p class="signature">Esther Bailey-Bass is a Certified Professional Coach helping 
      women in mid-career who are ready to embrace the role of leader and champion.</p>
    
    <p class="signature">Esther can be reached by email at 
      <a href="mailto:engage@ebbnflowcoaching.com">engage@ebbnflowcoaching.com</a> 
      or found on major social media platforms <a @click="myLink('https://www.facebook.com/EBBNFLOWCOACH/')">@ebbnflowcoach</a>.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#8">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="our-dream-home"/>
    <p>&nbsp;</p>
    <h5>Our Dream Home</h5>
    <h6>by Linda Armstrong</h6>

    <p>The funny thing about how we manifested our dream home is that I was really FINALLY 
      happy in the home we were living in. I did not plan to move. We lived in a very small 
      Cape Cod style home on a very small lot, about one-eighth of an acre.</p>

    <p>When we purchased that house, we actually had to settle for it. It was the only house 
      we could afford in the town where we really wanted to live. We wanted to live there 
      because the town had a very good school system.</p>

    <p>The house was filthy because of the hoarders who occupied it. So there was a lot to 
      confront. I actually had a knot in my stomach when we made the offer. I was horrified 
      at the thought of living there</p>

    <p>The house was filthy because of the hoarders who occupied it. So there was a lot to 
      confront. I actually had a knot in my stomach when we made the offer. I was horrified 
      at the thought of living there</p>

    <p>I am very interested in Feng Shui, so I had a Feng Shui Master come to the house and 
      do a floor plan for us to make the energy in this house work best for us. Well, after 
      she did a walk through and took some notes, she told us that she saw red ... blood ... 
      and that it would be best if we were to move. Since we could not move, we had her 
      create a Feng Shui plan designed just for us to make the energy work better.</p>

    <p>We rearranged furniture and placed crystals in specific places throughout the house. 
      She told us that we would have to move our front entrance. She said it had to be moved 
      to another side of the house.</p>

    <p>Cape Cod homes generally have a staircase that leads straight out the front door. In 
      this house the entrance had literally three feet between the door and the staircase, 
      just enough space for the door to open. The staircase led straight upstairs into the 
      bathroom … more bad energy. The more she looked around the house, the more bad energy 
      flow she saw.</p>

    <p>We did move the entrance, adding a new foyer. We purchased a really cool carved wood 
      door that had a large sun and moons carved into it. It was such a happy door. I actually 
      miss that door. It set the mood for the whole house.</p>

    <p>I created a custom mosaic floor in the foyer, making it very inviting and improving 
      the house’s energy. We removed walls and opened up the stairway so that it had a wall 
      on only one side. We added a nice iron bed foot board as a see-through railing for the 
      basement. It was quite unique. It really did turn out to be a great little house full 
      of character.</p>

    <p>Always in the back of my mind, I thought that once we renovated the kitchen, we would 
      be able to sell the house and move to a home that we really wanted. We added all new 
      cabinets, granite counter tops, a tiled floor, and a really interesting stone mosaic 
      back splash that pulled out an amethyst color that ran subtly through the granite 
      counter top, which was mostly black with shades of grey. We added all new stainless 
      steel appliances, making the kitchen a wonderful space.</p>

    <p>After seven years of work, we were very happy with the house. We loved this little 
      house that was as different as night from day compared to when we moved into it. 
      I landscaped the whole property myself. I enjoyed doing that as well.</p>

    <p>There was no garage. When we created the new front entrance, we added a large pergola 
      that acted as a carport. We really put a lot of ourselves into that house, adding so 
      much LOVE to it.</p>

    <p>While sitting in my living room with my sister-in-law, she asked me if, now that the 
      house was totally renovated, would we consider moving? She knew I hadn’t been happy 
      when buying it, but she admired the work we had done. Would we want to sell it and 
      move on or stay and love it since it was a really cute and unique home?</p>

    <p>My answer to her was, “The only way we would move is if we found a ranch style home 
      that was contemporary in design. And it would have to be on a large piece of property.”</p>

    <p>And that was that. I didn’t give it another thought. I merely stated what our ultimate 
      dream home would be.</p>

    <p>Then my son, Steele, who always hated school since preschool, asked if he could drop 
      out of school and get his GED. He was miserable in school. We had done Child Study 
      Team each year, but not one of the so-called professionals could ever figure him out. 
      You see, he is very smart. He never fell into any category that would place him with 
      any sort of learning disability. He is a very respectful kid, never got into trouble. 
      But he just hated being in school all day, every day.</p>

    <p>He had a way of outsmarting his teachers, in a respectful way. He would only do the 
      bare minimum of any requirement he was asked to do. The teachers wanted more.</p>

    <p>I had to tell his teachers to be specific when giving him an assignment. If they asked 
      him to summarize a book he read, he would turn in one paragraph that told in a nutshell 
      what the book was about. He had an algebra tutor. Before the tutor could write out the 
      math, he would already have the answer.</p>

    <p>Kids actually do know what is in their best interest. Steele had long used Law of 
      Attraction. He made things go his way without any resistance.</p>

    <p>At first my husband and I were not too thrilled about him wanting to leave school, 
      but Steele was so sure of himself that we decided he knew best.</p>

    <p>Since Steele was leaving school, there was no reason to stay in the town we lived in any 
      longer. Now that there wasn’t anything keeping us there, we decided to look around for 
      another house to live in. Our current house was very nice now, and it would be easy to 
      sell.</p>

    <p>We started looking around and found a nice house on an acre of land. It met most of our 
      requirements except that it was a split level. We put our house on the market. It sold 
      for full asking price, and we then put a bid on this new house, which was accepted.</p>

    <p>Everything was good … until our buyer backed out. Now we had to try to find a new buyer. 
      The house was on the market again, and although everyone seemed to like the house and 
      made nice comments about it, we weren’t getting another offer. And then the seller of 
      the house who had accepted our offer lost patience with us and decided to accept another 
      offer. We lost that house.</p>

    <p>We did then get another offer on our house from a new buyer. This offer was $20,000 less 
      than our asking price, but they were very serious about purchasing it. My husband was in 
      the hospital having hip resurfacing/replacement surgery. As I sat with him in the hospital 
      room, I thought that I might as well start looking for homes in our slightly reduced price 
      range.</p>

    <p>I found a very contemporary-looking ranch on nearly two acres of land. I remembered the 
      conversation with my sister-in-law about my dream home. It seemed perfect.</p>

    <p>We couldn’t wait to go and see it.</p>

    <p>I went to see the house first. A few days later, Gavin could hop around using crutches, so 
      we both went to see the house. We loved it.</p>

    <p>This was the house that we wanted. We made an offer and it was accepted.</p>

    <p>Next came the legal details of purchasing a home. Gavin’s brother and his girlfriend came 
      to visit us from California. They stayed with us for a week. During their stay, they 
      started talking about the Law of Attraction. We had never heard of it before. We were 
      very intrigued. They spoke to us about Abraham-Hicks, and once they were back in 
      California, Gavin’s brother sent us a video clip of the Abraham material. Soon, we were 
      hooked!</p>

    <p>We always thought that everything happens for a reason … that was for sure with us. And 
      always in both of our lives, things always did work out. But, now for the first time we 
      fully realized that we do create our own reality and that the Universe will guide us to 
      our desires as long as we are in alignment with the energy of the desire.</p>

    <p>While we were in attorney review, someone else put in a higher offer on the house that 
      we were in the process of purchasing. While the sellers considered that offer, the buyers 
      of our old house were having some difficulties with their Realtor and their mortgage 
      commitment. It was turning into a real struggle, and at times it didn’t look good, but 
      thankfully we had learned about the power of our thoughts.</p>

    <p>So I started showing appreciation for my current home (I actually miss it even now). 
      I also thought about why I wanted this new house and why I thought I would receive it. 
      I created stories in my mind of living in the new house. I really did A LOT of 
      visualization.</p>

    <p> looked at the listing photos, decorating each room in my mind and creating experiences 
      of living in the new house. I saw us hanging out in the backyard entertaining guests. 
      I sat with these images in the listing and imagined living in the house before we even 
      had the keys. I did this every day.</p>

    <p>I took on the feeling of what it would be like already living there. I did NOT let 
      myself think about it not happening for us, I only thought about how great it will be 
      when we moved in.  I really felt into it. That’s the power of imagination: anything is 
      possible.</p>

    <p>I swam in the energy of living in that home so much that the owners decided to sell it 
      to us and our buyers were able to complete their purchase of our old home. WOW!</p>

    <hr />

    <img src="images/LindaArmstrong.jpg" alt="">

    <p class="signature">Linda Armstrong is a Master Certified Law of Attraction Energy Coach, 
      and Energy Healer. She works with The GATE Healing Method and Theta Healing® Technique. 
      She is also a Reiki Master Teacher, and Light Body Meditation Practitioner.</p>
    <p class="signature">Website: <a @click="myLink('https://www.lovemylife.coach/')">lovemylife.coach</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#9">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="treasures-from-tikashi"/>
    <p>&nbsp;</p>
    <h5>Treasures From Tikashi</h5>
    <h6>by Renate Donnovan</h6>

    <p>I lived in a shared accommodation. It was a cute, rented duplex with plush 
      off-white rugs and rustic wood trim on the doors and ceilings. I shared this 
      space with two roommates.</p>

    <p>All three of us were going through divorces or some version of massive 
      “life-restructuring.” These restructurings took the forms of career changes, 
      recovery from financial losses, and ending relationships.</p>

    <p>One of my roommates was a drug addict who created chaos in the house through 
      both a remarkable lack of hygiene (personal and home) and through the unpredictable, 
      Dr. Jekyll/Mr. Hyde behavior he displayed depending on his level of drug-induced 
      high or withdrawal.</p>

    <p>We had a controlling, prying, noisy landlord who attempted regularly to bypass 
      the landlord-tenant laws in every way from unannounced, surprise visits, to using 
      the garage we were renting for his own purposes, to spying on us by looking in our 
      windows, to holding yard sales on our property without asking or notifying us.</p>

    <p>One day, my already frayed nerves encountered more than I could manage.</p>

    <p>My stoned roommate blared heavy metal music while dancing around the house in his 
      underwear screaming lyrics at the top of his lungs.</p>

    <p>Our landlord worked in “our” detached-garage while peering into our house windows 
      through a pair of binoculars.</p>

    <p>I attempted to deal with legal needs created by my “life-restructuring,” failing 
      miserably.  I felt frantic. I needed peace. I needed an escape.</p>

    <p>Despite the drizzling, cold late-March rain, I bundled up in rubber boots, a 
      rain-slicker, and gloves.  Pulling the hood of the slicker over my head, I bolted 
      out the front door like a house cat making a desperate play for freedom and went 
      for a walk.</p>

    <p>Walking usually has a therapeutic quality for me, but on the day in question I was 
      stirred up … not just because of my roommate and landlord, but from the personal 
      archaeological unearthing that deep inner work and personal growth create.</p>

    <p>I was enrolled in a personal growth program that would last several years. I was 
      trying to reconcile concepts of the Law of Attraction with my current reality.</p>

    <p>I was also reading Maximum Achievement: <em>Strategies and Skills that Will Unlock 
      Your Hidden Powers to Succeed,</em> by Brian Tracy.</p>

    <p>My heart was heavy, and my thoughts were disjointed. One minute my mind replayed 
      the antics of roommate and landlord, the next minute it practiced Brian’s technique, 
      then it swung between thinking about what I didn’t want and what I did want, then 
      back to my roommate, and so on.</p>

    <p>Somewhere in that swirling shamble, an inner voice said, “I would really like to 
      own my own home. Is that possible? What would have to happen to make it possible?”</p>

    <p>The thought had barely registered when I spotted an odd purple square on the sodden 
      ground, partially tucked into the winter grass. Enough of it was visible to display 
      the words, “Treasures from Tikashi.”</p>

    <p>I recognized the purple square as one of those inspirational/spiritual cards that 
       reader can use as a personal motivator, provoking insights for daily guidance.</p>

    <p>The card was soaked through, wrinkled, puckered, and darkly stained in one corner. 
      It had obviously been there for some time.</p>

    <p>The strangeness of it stopped me. There were no other cards or objects anywhere 
      around. Knowing how valuable these types of cards are to those of us who have them, 
      it seemed wrong to leave it lying there, abandoned. I took my right glove off and 
      carefully (to ensure I didn’t rip it) lifted the card and turned it over. The face 
      of the card read:</p>

    <hr />

    <h5 style="color: lime;">ABUNDANCE</h5>

    <p class="signature" style="text-align:center; color: lime;">Love, security, freedom, happiness, 
      support and finance are yours in abundance. The universe provides, it is up to you 
      to say ‘Yes!’</p>

    <p class="signature" style="text-align:center; color: lime;">All life flows with love, and you are 
      an energy being of love, you are not separate from what you desire. Let go of limited 
      expectations and acknowledge that you are worthy of all things.</p>

    <p class="signature" style="text-align:center; color: lime;">Participate in life’s joy and you shall 
      receive the rewards of your efforts.</p>

    <hr />

    <p>The rain changed from drizzle to downpour as I stood there blinking, awe struck, for 
      a full five minutes as the synchronicity of the situation sunk in. Then, with a squeal, 
      I jumped for joy.</p>

    <p>Rarely, before or since, have I received such a clear answer. With a combination of 
      irrational joy and expectation, my feet carried me back to my shared accommodations.</p>

    <p>Later that night, my mother called me. She worried about my living situation and 
      wondered what the current housing prices were in Calgary. How much would I need for 
      a down payment? She only had “this amount” that she could spare – would that be enough? 
      Could I manage the mortgage payments? We talked for several hours about my options.</p>

    <p>The first night I slept in my new condo was June 21st – the Summer Solstice, the 
      longest day of the year, exactly three months to the day after I found the Abundance 
      Card on the day of the Spring Equinox.</p>

    <p>I sent an email to the contact address on Brain Tracy’s website. I’m not sure why; 
      I just wanted to share with him the impact his work had made on my life.</p>

    <p>I wrote that when I started reading his book, like so many of the people he wrote 
      about, I thought to myself, “I’m not special. Can I really do this?”</p>

    <p>And, like the people in the stories he shared, I put aside my fears and used his 
      Law of Attraction technique.</p>

    <p>I assumed one of the staff who monitored the email would read it. I simply hoped 
      the person who read it would pass along my appreciation to Brian.</p>

    <p>The response to my note was simple. The email contained one line, “Congratulations 
      on discovering you are one of the special people.  &mdash;<em>Brian Tracy</em>”.</p>
    <hr />

    <img src="images/RenateDonnovan.jpg" alt="" style="margin-bottom: 0;">

    <p class="signature">Renate Donnovan MAL, CEC, Cht, MNLPP, PhD Candidate</p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#10">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="beginning-again"/>
    <p>&nbsp;</p>
    <h5>Beginning Again</h5>
    <h6>by Sherry Trentini</h6>

    <p>Grief sucks. I know this to be true. I became a widow at age 40. My daughters, ages 8 and 10, 
      lost their daddy.  Then five months later my own father died.</p>

    <p>It was an exceptional year for us, to say the least.</p>

    <p>Grief has the unique ability to make everything feel like it’s going too fast, while 
      simultaneously feeling as if you are standing still.  It is plump with conflicting 
      emotions, disconnected and scattered feelings, and there can be more questions than 
      answers.</p>

    <p>And those questions are endless when the cause of death is suicide. I didn’t have 
      answers to those questions for my daughters or anyone else.</p>

    <p>Why did this happen?  Why did he do this? How can this be happening?  To us or to 
      anyone?</p>

    <p>In the months that followed, I did my best to field my girls’ questions.  They were 
      valid. They wanted answers. In their way and at their age they needed something, 
      anything, to try to make sense of it all.</p>

    <p>I believe that grief is a part of life, but it didn’t have to be our life.</p>

    <p>I made the decision to move overseas 14 months after my husband passed away.  I put 
      our acreage on the market, boxed up the contents, let go of a large amount of stuff 
      by either selling it or gifting it, and we set off for our international adventure.</p>

    <p>The home we left was over 3,400 square feet of living area. In contrast we moved 
      into a quaint furnished cottage of about 700 square feet.</p>

    <p>Talk about downsizing!</p>

    <p>We lived simply, and I measure "simply" not only in actual size but in features.  
      The comfort I found in making that change was that we lived within what we needed. 
      There was zero unused space.</p>

    <p>I hosted a Canadian-style Thanksgiving for twelve people, feeding them all the 
      traditional fare, and did so without having things like...</p>

    <ul>
      <li>a double oven</li>
      <li>a double sink</li>
      <li>a dishwasher</li>
      <li>a formal dining room table</li>
      <li>an 8’ x 4’ counter for the buffet</li>
      <li>various kitchen gadgets and accouterments, etc…</li>
    </ul>

    <p>Everyone ate, drank and enjoyed the celebration.</p>

    <p>Would I have attempted to make such a drastic change in houses if we'd stayed 
      in Canada?  I doubt it.</p>

    <p>Did I miss certain creature comforts? No question.</p>

    <p>Am I blessed that my girls adjusted to sharing a bedroom smaller than either 
      of their previous rooms was?  Absolutely.</p>

    <p>Before you would have to look for where a person was in the house.</p>

    <p>Now you were acutely aware of everyone's breathing patterns.</p>

    <p>ot to mention one bathroom for three girls …</p>

    <p>In order to move forward, I believe it is necessary to lighten your load, 
      literally and figuratively. I asked myself If I didn’t have the physical space 
      to keep these items, what would I do with them?  Would I pay to store them elsewhere?  
      How much would I invest to do so?</p>

    <p>I didn't question the contents that my amazing team of friends came and lovingly 
      packed up with me.  Not only did I have a tight time constraint to get this done 
      and on the airplane, everything that I did not let go of retained a high level of 
      value, especially emotional value.</p>

    <p>I attracted the most perfect people to help me move forward with these tasks, and 
      I also attracted the most perfect people to be caregivers of our property in our 
      absence.  Both our bags and my heart were tremendously lighter because of that.</p>

    <p>Selling property can be a true test of patience. When that property doesn’t sell, 
      it can be a pop quiz on one's self worth. The house I was selling burst with emotions.  
      It wasn't just a property. It was:</p>

    <ul>
      <li>the house my husband and I built,</li>
      <li>on the land that he and I loved, </li>
      <li>in the community that we helped to create, </li>
      <li>in association with the business he had dreamed of starting and owning for years,</li>
      <li>for friends, family, Thanksgivings, Christmases, birthdays, and celebrations of all things,</li>
      <li>in our family home that our girls were to grow up in, move out of, and come back to.</li>
    </ul>

    <p>I am keenly aware of and attuned to listening to my "gut" as my intuitive guide.  
      Three main things came up for me:</p>

    <ol>
      <li>Whenever I thought of the house, I felt a clenching in my chest … not good.</li>
      <li>I felt that as much as I wanted to sell it I was clutching it to my chest ... 
        not conducive to manifesting a buyer.</li>
      <li>Whenever the girls and I talked about the house, it sounded like we were talking 
        about their dad, not the building … tricky.</li>
    </ol>

    <p>So I asked myself two questions:</p>

    <ol>
      <li>If we weren't in Europe right now would I be selling the house?<br />
        <blockquote>Answer: Yes</blockquote>
      </li>
      <li>If we were to repatriate to Canada tomorrow, next month, or next year, would we move back into the house?<br />
        <blockquote>Answer: No</blockquote>
      </li>
    </ol>

    <p>So I created some affirmations, “I am so grateful for receiving the most perfect offer 
      on my house now.  I willingly let it go to the new owners with love.”</p>

    <p>Every time I thought of the house I immediately started to affirm letting it go with 
      love.</p>

    <p>Every time we spoke of a family memory, I would thank the house and affirm letting 
      it go with love.</p>

    <p>Every opportunity I could change the language in association with the house, I did.  
      And it began to feel better and easier.</p>

    <p>The next thing I did was write a letter and asked my girls to do the same.  
      The letter was dual purpose:   first it was to express our gratitude to and for 
      the house and land; and secondly it was a welcome letter to the “Most Perfect 
      New Owners.”</p>

    <p>I started by expressing gratitude to the house for keeping us safe, warm in winter, 
      cool in summer, for being the most perfect place to live, for being such a gracious 
      host to our celebrations with family and friends and for daily living.</p>

    <p>I thanked it for being “the most perfect place” for the girls to have grown up.  
      I thanked it for all the attributes that sprung to mind.</p>

    <p>I then thanked my husband for choosing the location, for creating such an amazing 
      yard, for tending to the land and respecting it.  For all the things he did to make 
      the house our home.</p>

    <p>I thanked everyone who ever came through my door and for adding such positive energy 
      to our space.</p>

    <p>Next, I welcomed the new family.  I told them how they had made the “Most Perfect” 
      choice to live there.  I excitedly told them about all the wonderful reasons they 
      will love living there.  How the yard and valley craved for kids to run, play and 
      explore.  How breathtaking the valley was in every season and to watch for the ample 
      wildlife.  I shared how strong and secure the house was and that it would love being 
      freshened up to reflect their style.  And I affirmed all of their reasons for choosing 
      to make this their home.</p>

    <p>After completing the letters, we read them out loud, which led us to share stories 
      and memories.  When we spoke about those things, it felt good. It didn't feel like 
      loss.  It helped us shift from "clutching onto it" to "releasing it peacefully".</p>

    <p>To finish what now had become ceremonial, we burned our letters and released them … 
      with love.</p>

    <p>I then asked my agent for a blank copy of the offer to purchase, which I then filled 
      in with every detail as if it were the real deal.</p>

    <p>For the names of the Purchasers I put: The Most Perfect Family or Better</p>

    <p>For the price, I put in my walk away price:  $XXX,XXX.XX or Better</p>

    <p>For the date of possession I wrote the date and added: or Better</p>

    <p>I signed it as the Seller and signed it for the Purchaser as The Most Perfect Family 
      or Better.</p>

    <p>Then put the document away and let the energy flow!</p>

    <p>I'd love this next sentence to read, "And after I put my pen down my agent called …"</p>

    <p>Alas, the phone did not ring right away, although how cool would that have been!</p>

    <p>Months later there was a family celebration planned in Canada that we wanted to attend. 
      The timing of the event coincided with a school holiday. However, to justify traveling 
      that distance, I wanted to extend our stay, which exceeded the girls’ school break.  
      I had to apply for the girls’ absence well in advance.</p>

    <p>The application form asked, “Why do you require the children to be out of school outside 
      of normal holidays?”</p>

    <p>My answer, “We sold our house in Canada and needed to go back to move out.”</p>

    <p>Which technically was not exactly true, but my intention was for it to BE TRUE.</p>

    <p>This really amped up my energy by way of believing it!  Every time the school break 
      came up in conversation, I told people we were going to Canada to move out of the house!  
      Yes I was affirming it!</p>

    <p>Three weeks before we left for Canada, I received an offer to purchase that ticked all 
      of our boxes, and I eagerly accepted.</p>

    <p>And, yes I did a little jig!</p>

    <hr />

    <img src="images/SherryTrentini.jpg" alt="">

    <p class="signature">Sherry Trentini</p>
    <p class="signature">Life Coach and Grief Recovery Specialist</p>
    <p class="signature">Website: <a @click="myLink('http://www.sherrytrentini.com/')">www.sherrytrentini.com</a></p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#11">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="signs-from-the-universe"/>
    <p>&nbsp;</p>
    <h5>Signs from the Universe</h5>
    <h6>by Susan Shearer Young</h6>

    <p>I lived in Washington, D.C. in a beautiful neighborhood near the National Cathedral. 
      I loved everything about it. Our house was a 100-year-old Victorian with a large front 
      porch. I had installed a porch swing with pillows and comfortable wicker chairs. I 
      loved to sit on the porch and wave hello to neighbors and people passing by.</p>

    <p>People constantly yelled up to me, “I love your house. You look so comfortable.”</p>

    <p>And I was. The huge draw of this particular neighborhood was several excellent schools, 
      all within walking distance. My three children attended three of the schools, and it 
      felt magical to have them walk to school after years of commuting in heavy traffic into 
      the city.</p>

    <p>Our house was a haven for their friends as well, and there were constantly kids in our 
      house, plopping down and talking about what was going on at school, who said what, who 
      did this. It was so nice to be connected and tuned into the lives of my kids and their 
      friends.</p>

    <p>It was very hard to get a house in this neighborhood, precisely because of all of the 
      good aspects this highly desirable neighborhood featured. Houses rarely came on the 
      market, and when they did they were snatched up, sometimes in just one day. It took us 
      nearly two years to get our perfect home, and there were multiple bids.</p>

    <p>My very close friend also had kids who attended those schools, and she still drove the 
      very stressful commute into Washington daily, back and forth for school events and sports 
      practices. It was exhausting. It meant getting up earlier, getting home later, and it was 
      much harder for her kids to socialize with their friends, which required navigating D.C. 
      traffic during rush hour. My friend really, really wanted to move into D.C. Her top 
      choice was our neighborhood.</p>

    <p>I sat in my home office one day, working on a book about the Law of Attraction, which I 
      ultimately published. I was in the zone, focusing upon great ideas, writing, thinking, 
      and just absolutely enjoying what I was doing.</p>

    <p>Strangely, I felt the impulse to go to our basement and straighten out a bookcase. We 
      had moved into the house nearly a year earlier, and it popped into my head that I had 
      never really organized any of the things in that bookcase. It felt a bit strange, as it 
      wasn’t a top priority. It was in the basement after all!</p>

    <p>The basement was mostly a kid hangout, and I had plenty of other things to do. Yet, 
      when I reflect back, it was like I was being moved, nudged to go to that bookcase and 
      put things in order.</p>

    <p>As I began to stack up the books and some files, I noticed on top the closing file from 
      the purchase of our home. I have no idea how it ended up in that bookcase, because I had 
      a filing cabinet. For some reason I felt the nudge to look in the file. On the top of 
      the papers was a check in the amount of $2,500, made out to my husband and I. It was a 
      refund of excess funds from our escrow account. It had never been cashed, and I was 
      happily shocked to find it.</p>

    <p>It occurred to me that because the check was rather dated, I should call the real estate 
      agent who wrote the check and let her know that I would be depositing it. She was a very 
      successful and connected agent who had helped us to get our home in that desirable 
      neighborhood. She could sometimes get people houses when there was stiff competition, 
      and she had done exactly that for us.</p>

    <p>So I phoned her about the un-cashed check. As we chatted briefly, she mentioned that 
      there was a home near ours that was likely to come on the market that weekend. She was 
      going to make a presentation to try to get the listing. I was thrilled when I heard the 
      news, as I knew of the house, and it was beautiful and only ONE BLOCK FROM MY HOUSE! My 
      friend would love it; it was perfect for her family.</p>

    <p>Despite being excited, I knew that having that information was no guarantee that my 
      friend could get that house. It would be competitive. There were lots of moving parts. 
      I told the agent about my friend and arranged for them to talk. As I’m sure you’re 
      imagining now, our agent represented my friend and her husband in the stiff competition, 
      and they got the house.</p>

    <p>Not only did I appreciate the manifestation and my ability to sit on my front porch 
      and drink a glass of wine with my dear friend with no need for prescheduling, but I 
      really appreciated learning how sometimes our best manifestations come with just a 
      series of gentle nudges that light up the path of least resistance.  Very ordinary 
      nudges can lead to extraordinary results.</p>

    <hr />

    <img src="images/SusanYoung.jpg" alt="">

    <p class="signature">Susan Shearer Young is an award-winning Law of Attraction coach 
      who helps her clients live the abundant lives they desire. She is also the author 
      of <em>How to Allow, chosen as Best of Books on Law of Attraction</em> in 2012 and 
      nominated in 2015.</p>
    <p class="signature">Website: <a @click="myLink('https://howtoallow.net/')">howtoallow.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#12">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="the-seller-who-was-the-buyers-ally"/>
    <p>&nbsp;</p>
    <h5>The Seller Who Was The Buyer’s Ally</h5>
    <h6>by David Scott Bartky</h6>

    <p>Several years ago, I decided I wanted to move after visiting a home with 
      gorgeous views on a very quiet street.</p>

    <p>Although my house was very nice inside, I didn’t realize until after purchasing 
      it that you could hear all the noise from the busy street corner on which it sat. 
      I could hear every car, bus, or truck that drove by. There was no view except of 
      the street or the neighbor’s house. So between no nice view, and lots of street 
      noise, it was time to move!</p>

    <p>Besides a nice view and a very quiet street, I wanted a single story home, one 
      with an attached garage. The idea of not having to deal with stairs sounded really 
      good to me – not that I can’t walk up and down stairs, but my parents were getting 
      older, and I had a dog who can’t climb stairs, so a single story home would be much 
      easier.</p>

    <p>After meeting with a Realtor, I was not surprised to be told that single story 
      homes are very hard to find. Her negativity didn’t concern me in the least. I know 
      that the Universe knows what I want and will make it happen.</p>

    <p>She did have one good idea: to sell my current home before finding my next home. 
      That way there would be no chance of paying two mortgage payments at once, and I’d 
      have the down payment for the new home.</p>

    <p>As anyone who knows about selling homes can tell you, the best time to put a house 
      on the market is in the Spring. However, it was December, and we wanted to be in a 
      new home by the Summer. So we didn’t want to wait until Springtime to list the house.</p>

    <p>Two weeks after we met with the Realtor, a For Sale sign appeared in front of our 
      house, and the open house occurred two days later on Sunday. We were unsure what price 
      to put our home because home prices in the area were all over the place. Our Realtor 
      suggested we price low to start a potential bidding war, which is what we did. There’s 
      no guarantee of a bidding war, but it’s a risk we were willing to take.</p>

    <p>The day after the open house, the Realtor called and told us we had two offers. She 
      said that one offer was good, but the other offer would have us “dancing on the tables!” 
       course I was most interested in the dancing on the tables offer, since the more we got 
       for this house meant the more we would have for the purchase of the next house.</p>

    <p>We met with the Realtor, who told us we had a full price offer. Then she told us the 
      other offer was WAY higher than the first one. It turns out the couple who made that 
      offer had tried to buy a few other homes but were outbid. So this time around they 
      came in with their best and final offer.</p>

    <p>Our Realtor cautioned us not to get too excited about such a high offer because the 
      house had to appraise at that amount in order for the deal to go through. I honestly 
      had no doubt that the house would appraise at the full amount, even though others 
      involved did have doubts. The Universe knew that we needed that extra money, and I 
      knew it would all work out.</p>

    <p>Needless to say, the home did appraise at that amount, and the buyer also wanted a 
      quick closing, which is another thing we really wanted. A month later, we sat at the 
      closing table, where they handed us a very large check! Thank you Law of Attraction!</p>

    <p>Now we needed to find a new house to buy that met our requirements. We must have 
      looked at 50-60 homes. Some our Realtor found for us, and some she didn’t.</p>

    <p>One day I drove by a home in our preferred area and saw a <em>For Sale By Owner</em> 
    sign on the lawn. I quickly went home to my computer and plugged in the address. The 
    home was very nice and had 90% of what we were looking for. It was on a very quiet 
    street, was basically a single story home – only had two steps up to the 2nd floor &mdash; 
    and had a great back yard.</p>

    <p>The only issue was that it was way above our price range. Even our Realtor, who didn’t 
      find the home for us, told us not to look at it because of the price. However, knowing 
      how the Law of Attraction works, I decided not to let that get in our way.</p>

    <p>The day before we found it, the owner decided to list it with a Realtor because he 
      wasn’t getting any action trying to sell it himself. We went to look at the house, 
      and once inside we knew it was the one. The owner liked us and told us to come back 
      again to look at it if we wanted to. So we took him up on his offer and went back a 
      few more times.</p>

    <p>Soon the seller’s Realtor called me and asked if we were going to make an offer on 
      the home. We said we wanted to but it was out of our price range. He then told us a 
      long story about how the owner listed the house at a price that was way too high. 
      That’s the reason he didn’t get a lot of people coming to look at it. The Realtor 
      also told us that the owner had to move by a certain date because of plans he had 
      made, so that we should basically make an offer because he had to sell.</p>

    <p>We decided on an offer two days later. When I called, the Realtor told me that the 
      day before someone else made an all-cash offer, and the owner accepted! How could 
      this be? I just knew this was my house! I decided to stay positive about it and 
      didn’t get upset because I trusted it would work out.</p>

    <p>My parents saw the house with us a few times, and they clicked with the owner. After 
      my mom heard that he accepted another offer, she called him and demanded, “How could 
      you do that?” He told her that we were his first choice, but he didn’t know we were 
      going to make an offer when he accepted the other offer. He also told her that he would 
      try to get out of selling the home to the buyer. My mom told me what he said, but I 
      didn’t believe it. Why would he let an all-cash offer go?</p>

    <p>A few weeks went by, and I started looking at other homes on the Internet. One day, 
      I received a text message from the seller’s Realtor asking, “Are you still interested 
      in that house?”</p>

    <p>I replied, “Yes! Why?”</p>

    <p>The deal fell through with the other buyer. The owner refused to fix anything on their list! 
      The buyer pulled out because they didn’t want to spend the money to fix everything.</p>

    <p>The Seller kept his promise to my mother and got out of the deal! How crazy is that! 
      He accepted our offer, telling us to wait before we ordered the home inspection so he 
      could fix everything that had to be fixed. How often does that happen?</p>

    <p>When he finished (including installing a brand new heating system), we got the house 
      inspected. It passed with flying colors.</p>

    <p>A few months later we moved in, and it has been a wonderful, quiet home with great views 
      out of every window and with only two stair steps. Thank you Law of Attraction!</p>

    <hr />

    <img src="images/DavidBartky.jpg" alt="">

    <p class="signature">David Scott Bartky<br />
      Life Coach David</p>
    <p class="signature">Website: <a @click="myLink('https://www.lifecoachdavid.com/')">lifecoachdavid.com</a></p>
    <p class="signature">Facebook: <a @click="myLink('https://www.facebook.com/lifecoachdavid')">@lifecoachdavid</a></p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#13">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="a-financial-surprise"/>
    <p>&nbsp;</p>
    <h5>A Financial Surprise</h5>
    <h6>by Barbara Pinti</h6>

    <p>About a year ago, I began working with a woman who for many years had a poverty mentality.  
      Money was always short, and there was never enough to get to the things that weren’t 
      absolute necessities.</p>

    <p>She inherited a life script from her parents concerning money and honed that script to 
      perfection for 40 years.  She often talked about not having enough money for this or that.  
      She resented not being able to travel, her greatest desire.  She blamed everyone for her 
      living a life of lack rather than abundance.  Her words put forth a low vibration, and 
      that low vibration returned to her daily.</p>

    <p>I helped her write some affirmations about money while teaching her how it could come to 
      her easily by simply changing her beliefs.  We worked on raising her vibration by carefully 
      keeping her thoughts and words very positive.  She became more consciously aware of her 
      thoughts and her words whenever they became negative or discouraging.  I explained to her 
      that everything she desired was right there in the unseen world and only needed to be 
      claimed by her.</p>

    <p>I introduced her to visualizations.  I asked her to imagine herself and her family having 
      a wonderful time traveling to all the places she so wanted to experience.  She began to see 
      herself enjoying life with more than enough money to take those long desired adventures.</p>

    <p>This education about the Law of Attraction went on for about a month, and I did the exercises 
      with her.</p>

    <p>We examined the words of several famous people from Einstein who wrote, “Imagination is 
      everything,” to Buddha who wrote, “All that we are is the result of what we have thought.”</p>

    <p>Henry Ford informed us, “Whether you think you can or can’t … either way you are right.”</p>

    <p>Wayne Dyer added, “I will see it when I believe it.”</p>

    <p>We also studied the work of Masaru Emoto, who conducted many experiments with water showing 
      that the vibration of the words and thoughts connected to vials of water affected their 
      molecular structure in dramatic ways.  Knowing that both our planet and our bodies contain 
      approximately 70% water shows us how important it is to keep our vibrations high.</p>

    <p>After a few weeks of our working together to change her poverty script to raise her income, 
      she told me about a new job offered to her son that would take him to many interesting 
      places in Europe.  Her husband, who previously struggled with a low-paying, commission-only 
      job, also received a wonderful job offer from the same firm as her son and began making 
      much more money than before.  My client herself got back a former job that she loved, this 
      time with the hours and at the wage she asked for.  She later reported receiving a bonus 
      of over $2,000.</p>

    <p>That didn’t surprise me. What surprised me is that even though I wasn’t purposely intending 
      her exercises for myself, I began making more money than I ever had before!  My business 
      phone rang all the time, and my case load filled to capacity.</p>

    <p>This universal law knows not who you are or what it is you desire.  It just WORKS!</p>

    <hr />

    <img src="images/BarbaraPinti.jpg" style="margin-bottom: 30px;" />

    <p class="signature">Barbara A. Pinti, MA, MA, ABD, LMFT, LPC is a psychotherapist in private practice in 
      West Hartford, Connecticut.  She has taught the Law of Attraction in many groups, 
      workshops, and her private practice.</p>
    <p class="signature">Email: <a href="mailto:barbarapinti@comcast.net">barbarapinti@comcast.net</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#14">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="sailing"/>
    <p>&nbsp;</p>
    <h5>Sailing</h5>
    <h6>by Cambria Berger</h6>

    <p>Follow your happiness. That phrase is something that I used to say often as a carefree 
      college student with her whole life ahead of her and a history of loving family and solid 
      friends.</p>

    <p>Little did I realize just how much that sentiment would shape the rest of my life and, 
      more specifically, the year following my college graduation.</p>

    <p>Since my teenage years, I had always been a bit of a dreamer with a love of the outdoors 
      and adventure. In college I became fast friends with a fellow with sailing in his blood. 
      His grandparents were sailors, and his cool demeanor and quick mind convinced me that that 
      was the sailor’s way.</p>

    <p>Since we lived in the rugged part of Northern California – practically in Oregon – his 
      fanciful warm water sailing stories seemed more like fantasy. His images of sunshine and 
      sea spray were a welcome distraction from the cold and musty reality of the weather we 
      endured 70% of the year.</p>

    <p>The more he shared, the more I desired to be that brave and resourceful soul who would 
      cast off the lines and sail into a world of adventure and exploration. I could taste that 
      this was going to be a part of my future.</p>

    <p>Enter Robert … the man who would make my dreams come true! I was instantly attracted to 
      him. As I got to know him, I learned that he was building a massive 60-foot-long sailboat 
      a couple of towns over.</p>

    <p>Robert was a fascinating guy. He was welding the hull together himself and had grown up 
      in a Caribbean Island. He had sailing in his blood, as his grandfather was a Captain in 
      the Coast Guard. His father built sailboats, and being an island boy, he had a deep love 
      for the sea.</p>

    <p>We dated, schemed, dreamed, and worked to turn his hunk of steel into a glorious sailing 
      machine. But as time went on, and my days as a college student began to dwindle, it became 
      clear that Robert and I were not on the same timetable for setting sail. I was willing to 
      work with that, but then our relationship began to implode of its own accord.</p>

    <p>We partied more than worked, played more than schemed, and burned out as fast as we had 
      sparked in the beginning. I was crestfallen. I felt incredibly sad that the relationship 
      ended and mourned the death of my dream of sailing around the world … especially with 
      someone I cared deeply about.</p>

    <p>In the end, I had to leave. I lived in that small town for so long that my wings were 
      damp with the Northern Pacific rains and slow ways of a mountain town.</p>

    <p>I planned a trip to New Zealand with an old friend as a graduation gift to myself. At 
      least I had that to look forward to. It patched up my heart and stoked the dwindling 
      embers of a capricious life at sea.</p>

    <p>Footloose and fancy free in New Zealand with one of my best friends was a feeling of 
      expansion like I’d never known before. All of this “growing up” and becoming an “adult” 
      was supposed to be hard work, nose to the grindstone, sacrifice according to many.</p>

    <p>Granted, I was on vacation, and although a career and work life was imminent, I couldn’t 
      help but keep “follow your happiness” at the forefront of all of my decisions.</p>

    <p>I was responsible. I worked my way through college holding down 30 hours/week jobs and 
      15-18 units of science courses simultaneously. I worked since I was 15 years old. I 
      understood responsibility at a visceral level. Surely I had earned this vacation, and 
      deep inside I knew that this journey would open up my perspective on life and how to 
      live it to the fullest.</p>

    <p>The trip was nothing short of magical. My travel partner Rose and I ran track and cross 
      country together in high school. Part of a close-knit friend group from those days and 
      throughout college, we stayed close and visited one another regularly, even when seven 
      hours of driving time separated us.</p>

    <p>She was bubbly and had this constant sense of curiosity that I adored. As your friend, 
      she made you know that she was truly interested in you and everything that you were up 
      to. That curiosity also drove her to incredible academic heights.</p>

    <p>At the time that we traveled, she was between a rigorous undergraduate degree and an 
      imminent graduate program, taking a break. She was all about squeezing every last 
      delicious drop from our trip.</p>

    <p>As we explored New Zealand, we saved money where we could, opting for hikes and treks 
      into nature while going along with new friends on group adventures.</p>

    <p>We even found our way onto a sailboat for a few days! My taste for sailing around the 
      world bobbed back up to the surface. It turns out that it had been bubbling and gurgling 
      deep inside looking for a fissure, an opportunity to erupt into the ultimate adventure.</p>

    <p>We sailed for three days, though it was cold and wet, and the captain seemed to have 
      more interest in my friend than actually teaching us to sail. I had to let the immediate 
      fantasy go, hoping that the sailing life was growing closer.</p>

    <p>Our travels continued, but after some time my friend had to leave me. She scheduled one 
      month for the trip, but I scheduled two. I was sad to see her go, but our trip had been 
      incredible. We had marvelous synergy, got into epic adventures, and our friendship was 
      now closer than ever.</p>

    <p>Being on my own was a new kind of thrill, though admittedly not as carefree without a 
      second set of eyes and opinions. My money was running low, and I wondered how I could 
      pay for the last two weeks of my trip, since I barely had enough money to cover 
      accommodations.</p>

    <p>I put my “follow your happiness” theory in front of me, as I had in the past. I 
      comfortably moved from town to town safely.</p>

    <p>I even managed to find work in a restaurant for a couple of nights to pay for a diving 
      trip in the Milford Sound, which is an incredible glacier-formed fjord in the southern 
      part of the country.</p>

    <p>Slowly I made my way back up the eastern side of the South Island. Catching rides where 
      I could, I kept calculating how far my money would go, hoping to squeeze in one last 
      touristy excursion, though the thought occasionally occurred that I ought to turn tail 
      and head home a few days early.</p>

    <p>I landed in a little town called Nelson up at the top of the South Island. It was a 
      sleepy, sweet, and artsy town, and I figured it would be a great place to hang around 
      until I was ready to hop back up North to Auckland to conclude the trip.</p>

    <p>I caught a Sunday farmer’s market festival with folk music and sunshine. I rode a bike 
      through the streets imagining living in such a quiet little town. And then honestly, 
      a bit of boredom crept in. It was time to go.</p>

    <p>On departure day, I hemmed and hawed and dilly-dallied until it was almost too late to 
      go. I finally committed, and as I walked to the outskirts of town to catch my ride, I 
      walked past Cambria Street.</p>

    <p>Awesome! I had never seen a street sign with my name on it. Delighted by this detail, 
      my step lightened, and I figured that I must be on the right path.</p>

    <p>I got several blocks away before I realized that I really wished I had taken a photo. 
      I kept walking and then heard clearly in my head, “You may never walk this path again.” 
      I promptly turned around to take the photo.</p>

    <p>As I juggled my camera, a familiar voice called my name. I looked up to see an Israeli 
      fellow my travel partner and I had met at the beginning of our trip. He was gregarious 
      and kind, with a goofy grin, bushy dark hair, and an overgrown beard. He was also on his 
      bike.</p>

    <p>He and his friend (I could never remember their names!), who was equally as friendly 
      and likable with bushy blond hair and a struggling beard, were biking around the whole 
      of New Zealand. When my friend and I met them, they were just starting out. We talked 
      about routes and sights and listening to people tell them they were slightly crazy for 
      attempting such an endeavor. We adored them.</p>

    <p>We saw them all over the country, however only one at a time!  We’d roll into town and 
      there would be one of them asking if we had seen the other after they had gotten separated. 
      A few towns or days later we would see the other one, asking about the first. And so it 
      went, all over the country, six weeks of leapfrogging and near misses.</p>

    <p>So when he rode up to me, he excitedly told me they had finally reunited and were staying 
      just down the road in an amazing hostel where you could sleep in an actual bus, and didn’t 
      you know there was a party tonight, and I just had to be there!</p>

    <p>I laughed at his boyish ways and exuberant ramblings while instantly agreeing to join 
      them for the night at the hostel.</p>

    <p> followed him to the hostel, got settled in, and made plans to meet for drinks and the 
      party later. With a bit of down time, I decided to take a quick jaunt down to the 
      Internet café and report to my mother that my plans had changed. She was keeping tabs 
      on me, and I was diligent about notifying her of my movements.</p>

    <p>When I walked into the café, there was a flier posted on the wall that changed my life 
      forever. It was a black-and-white photo of a pirate ship (well it looked like a pirate 
      ship), that said “Crew Wanted, S/V Alvei; French Polynesia Contact Evan”. Hand written 
      below that was a local phone number and an email address.</p>

    <p>My heart stopped. Could I dare to dream about being a crew member on this incredible 
      ship? Immediately the chatter in my head began … you know the advisory board that lays 
      in wait to chime in on any major decision, or anytime you put yourself really out 
      there? Yes, them … they all woke up and started deliberating. Through it all, I had 
      this silly girlie giddy feeling inside like maybe this was it. Maybe I could go. My 
      dream could begin right here!</p>

    <p>It was not lost on me that the series of “coincidences” that put me in this place at 
      this time were nothing short of miraculous. Cautiously, I tempered my enthusiasm and 
      typed out an email to Evan, followed by one to my mom.</p>

    <p>Needless to say, that night I felt restless, yet cautious. I couldn’t see how this 
      was going to work, but what I knew down to the core of me was that I was going to do 
      whatever it took to make it work!</p>

    <p>The next morning, I rushed over to the Internet café to see if Evan had responded. 
      Dashed by finding no response, I brightened to learn that my mom, who though she 
      expressed concern like a mother can do, said she was also excited to learn what it 
      was all about.</p>

    <p>Now what? I was too excited to sit around, so I made my way down to the docks in 
      search of the ship.</p>

    <p>Nelson is known as the maritime gateway of New Zealand. It is perfectly situated 
      for many commercial and private boats to have a protected place to tie up, because 
      it is located directly top and center between the two islands. As I strolled along 
      a marina filled with sailboats, my heart began to sink. I didn’t see the masts that 
      would surely tower over all of these others.</p>

    <p>I asked a fella walking down the docks, and he told me that he thought that the 
      ship had departed. My heart kept sinking. The ‘opposed’ members of my advisory 
      board smirked. But that fire deep inside of me still burned, and that little girlie 
      dreamer demanded that I not give up that easily.</p>

    <p>I wandered a bit more. Another fellow came down the dock, and I asked him as well. 
      He told me that he thought the ship was on the other side of the buildings at the 
      commercial dock. Quickly I walked up and around, and there she was! Her masts stood 
      tall and proud among the metal smoke stacks and tall bridges of the cargo ships 
      docked there. As I neared, I saw several confident young people working on and off 
      of the S/V Alvei. They smiled, and when I asked, they found Captain Evan for me.</p>

    <p>Evan was lanky and tanned with a knowing look in his eye. He told me that he hadn’t 
      checked his email recently as they had planned to leave yesterday, However they were 
      waiting on a delivery of engine spares that was due to come in that day or the next. 
      The next day was Friday though, and sailors (suspicious lot that they are) never set 
      sail on a Friday.</p>

    <p>He did still have room for one more crew member. If I signed on as crew, he asked 
      for a 10 month commitment, to return the ship to this port after sailing through the 
      South Pacific Islands. He took on passengers as his ship was sort of a combination 
      floating hostel/ learn to sail/ life of a traditional sailor training program.</p>

    <p>The ship was a ‘gaff rigged top sail schooner’. She was 126 feet overall length and 
      82 feet on the water. There was no running hot water, no refrigeration, all 15 sails, 
      and the anchor had to be raised and lowered by hand (well several sets of hands).</p>

    <p>Everyone was expected to do their share. I wouldn’t be paid. It was all volunteer work, 
      but he would waive the $25 per day fee everyone else was paying. I just had to post a 
      bond in Tahiti of $700 as a part of their immigration process, and the money would be 
      returned when we departed the country.</p>

    <p>Holy smokes! I was SO up for that! Living in Northern California when I was at college, 
      my campus was literally in a Redwood forest. I loved camping and roughing it. I loved 
      the physical challenges of hiking and crossing rivers, much as I had loved surfing and 
      playing in the beaches of my home in San Diego.</p>

    <p>Having exchanged pleasantries with some of the other crew members and passengers, I 
      knew that I could quite easily live and work with them. I just had to see about the 
      money and handle the details of my life back at home.</p>

    <p>Rushing back to the Internet café, I’m not sure if my feet even touched the ground!  
      I nervously dialed my mom. My parents were going to have to help me with the money. 
      I had $200 left to my name, and I needed $25 of that to change my plane ticket to get 
      back to the US.</p>

    <p>As luck would have it, and at the end of a very intense conversation, my mom told me 
      that she had just received her tax return and would be happy to lend it to me, even 
      though I knew it was a stretch for her. She agreed to care for my little dog, and my 
      dad agreed to take on payments for my student loan and my storage unit.</p>

    <p>Exhilaration was redefined for me that day. Two days later we sailed. The trajectory 
      of my life changed forever.</p>

    <p>In the ten months that followed that I lived on the S/V Alvei, I fell in love with 
      the sea. It enraptured me. I became enchanted with slowly watching land rise up from 
      the sea and take form as the next paradise to be explored.</p>

    <p>Fruit never tasted so sweet as when pulled fresh off the trees. The smiles and 
      generosity of locals, expats, and fellow sailors settled into my soul as a knowing 
      of “this is how people are meant to be with one another.” Any ideas about sitting 
      at a desk for the rest of my life disappeared.</p>

    <p>I became a sailor that year. The stories and experiences of those island hopping days 
      are a novel all their own.</p>

    <p>In the 13 years since, my itchy feet have touched 15 countries, and I spent close to 
      three years of my life with the rolling deck of a ship beneath my feet as a research 
      technician for a prominent oceanographic institution. I successfully combined my love 
      for the sea and being aboard a ship with my oceanography degree.</p>

    <p>Follow your happiness. I am so glad that I did.</p>

    <hr />

    <img src="images/CambriaBerger.jpg" alt="" style="margin-bottom: 60px;">

    <p class="signature">Cambria is a long time student of personal development. 
      She retired from oceanography in 2012 to raise her two wonderful boys with 
      her husband in San Diego, California and is now a certified Law of Attraction Coach.</p>
    <p class="signature">Web: <a @click="myLink('https://www.cambriaberger.com/')">www.cambriaberger.com</a></p>
    <p class="signature">Phone: <a href="tel:+016198800714">619-880-0714</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#15">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="its-no-accident"/>
    <p>&nbsp;</p>
    <h5>It’s No Accident</h5>
    <h6>by Cathy Brown</h6>

    <p>I learned about negative manifesting the hard way.</p>

    <p>A few years back I was driving home from a visit with my Mom, who was 96 at the time 
      and living in an assisted living facility after my Dad transitioned (passed away) a 
      year earlier at age 94.  (I’ve got good genes ... thank you Universe).  The visit didn’t 
      go too well.  She was not in the greatest mood.  At 96, Mom’s demeanor was often 
      unpredictable.</p>

    <p>I was not in the greatest mood either as I drove home.  I felt a little sorry for myself, 
      focusing on why can’t Mom be happy to see me, since I was so busy yet I had taken time to 
      spend with her when I could be doing so many other (in my mind) more productive activities. 
      I was far from accepting of her feelings, aches and pains.  I now realize it would have 
      taken so little to be more understanding.</p>

    <p>What energy or thoughts do you think I was sending out?</p>

    <p>About halfway home, a large SUV in the middle lane suddenly decided to make a right 
      turn.  Too bad I was in the right lane!  I slammed on my brakes just as I saw her cut 
      in front of me, but I couldn’t stop quickly enough to avoid her smashing into by left 
      side.  At least by hitting my brakes, I avoided a much worse collision.</p>

    <p>I went ballistic.</p>

    <p>We pulled over and the negative energy swirled as she spoke only in broken English. 
      She couldn’t find her license and was driving her brother’s car.  I could feel the 
      anger flaring up inside of me. This was my first accident in over 20 years.</p>

    <p> I didn’t think to call the police, just my insurance company.  My agent tried 
      unsuccessfully to understand the other driver.  Getting nowhere, my agent suggested 
      I just stop the confrontation and take my car in for an estimate.  She booked an 
      immediate appointment.</p>

    <p>I was still furious as I drove to the dealer for a damage estimate.</p>

    <p>Why did this happen to me?</p>

    <p> I didn’t take responsibility for creating the events in my life at all.  Cooling 
      my heels in the dealer’s waiting room helped a little, but you could still cut through 
      my negativity with a knife.</p>

    <p>The mechanic kept coming in to say, “Relax, it will be fine”, but I wasn’t buying it.  
      The estimate came to about $1200, of which $500 was my deductible.  This just increased 
      my anger and negativity.  I didn’t stop to think that if I was not at fault, I would 
      be totally covered, nothing out of pocket.</p>

    <p>I begrudgingly thanked the mechanic, got back into my car and backed out of the service 
      bay – right into a brand-new car.  That’s right, I ran into another car – my second 
      accident that day!  This time there was no question who was to blame: me.</p>

    <p>Sometimes if I don’t get it the first time, the Universe has to whomp me up the side 
      of my head.</p>

    <p>Now whenever I start to go negative, I take a step back, take a few deep breaths, and 
      focus on something positive.  It takes a mere 17 seconds to start to reverse a vibration 
      and 68 seconds to start to manifest that new vibration.  Much better than having two 
      accidents.  Lesson learned!</p>

    <p>In 2014, I enrolled in Christy Whitman’s Quantum Success Coaching Academy’s (QSCA) 
      program totally focused on becoming a great Law of Attraction life coach.  I was about 
      halfway through the program when I heard about the annual QSCA business meeting in 
      California.</p>

    <p>Invitations were sent to all graduates and students to gather for the weekend to 
      network and learn from noted metaphysical speakers while meeting the instructors and 
      Christy herself. This sounded like something right up my alley.  I hadn’t had a 
      proper vacation in a few years, and the opportunity to meet Christy was just too 
      much to resist.  I signed up on the spot.</p>

    <p>On the flight from Ohio to California, I read The Prosperous Coach, by Steve Chandler 
      and Rich Litvin.  The authors said you can only take a client as far as you are willing 
      to go yourself.  How can you expect a client to buy into the concept of coaching if 
      you don’t buy into it enough to have a coach yourself and continue to grow in your 
      business and personal life? That was an “a ha” moment for me.</p>

    <p>At 30,000 feet, I set my intention.  <em>I am going to get a coach this weekend.</em>  
    I had no idea who, or how, but I would get my coach this weekend.  I closed my eyes 
    and asked the Universe to assist in bringing my coach to me.  Then I let to go of my 
    intention.  Every time I thought about the upcoming meeting, I totally focused on 
    finding my new coach.</p>

  <p>The flight was great, the hotel in San Diego was fabulous, and the meeting was really 
    inspiring.  I met so many spiritually minded people and developed many lasting 
    friendships.  I sat in the front row for all the sessions, as my 5’2’ stature made it 
    difficult to see over people sitting in front of me.</p>

  <p>I had almost forgotten about my intention of finding my coach with all the activities 
    and excitement of the speakers and seeing Christy Whitman live.</p>

  <p>Then on Saturday, just before lunch, it happened.  Christy began to explain a new 
    mentoring program she was starting.  It was not for everybody, only a select group 
    of five to six coaches who wanted to excel in their business.</p>

  <p>I nearly fell off my chair.  THIS IS IT!   Christy is going to be my coach.  
    I just have to do this.</p>

  <p>It never crossed my mind that I was only six months into the training and there were 
    over 100 people in the audience, most more qualified than me.  I just knew Christy was 
    going to be my coach. I can’t explain it, I just felt it in my bones.</p>

  <p>I came back to reality to hear Christy say she would give all the details after lunch.</p>

  <p>As she finished and released us all for our lunch break, I jumped up and ran to the 
    stage where Christy was collecting her notes.  On pure adrenaline, I stammered quite 
    loudly, “Christy … I’m a … I’m Cathy Brown, and I want to do this … I really want 
    this.”  I must have sounded like a crazy person, a bit off balance.   I felt the 
    Universe was setting this up for me.</p>

  <p>Christy turned around, smiled and sort of giggled I think, and said “OK Cathy, I’ll 
    get the application to you after lunch.”  I was on Cloud Nine.  I wanted a coach, but 
    I never thought it would be Christy Whitman.  Christy was the New York Times bestselling 
    author, CEO and founder of the QSCA and top spiritual leader.  WOW!</p>

  <p>Once again, I didn’t give any energy to the fact that I was probably one of many applying 
    for the mentorship and one of the least qualified.</p>

  <p>That afternoon, along with many others, I filled out the application and just let it go.  
    I allowed the Universe to take control, trusting that the result would be in my best 
    interest.</p>

  <p>Little did I know, Christy was intrigued with me.  She was genuinely impressed that I 
    was willing to commit and trust the Universe to bring this to me without having any of 
    the details, investment or anything.  I appeared to have total trust in her and in the 
    Universe.</p>

  <p>Unknown to me at the time, Christy started to “check me out” by talking to my instructor 
    and others who knew me from the program.  The Universe was setting things in motion.</p>

  <p>During the final session on Sunday, Christy thanked all of us who applied saying she 
    would email those selected early next week.</p>

  <p>My homeward bound flight was scheduled on Monday morning.  While waiting in the lobby 
    for the airport taxi, Christy and her husband walked by the front desk, and I heard 
    somebody call my name.  I turned around to see Christy Whitman walking over to me 
    smiling.  She gave me a big hug while whispering “Congratulations, you are in the 
    Mentor program.  I’m going to be your coach.”</p>

  <p>This is one of the few times in my life that I was speechless.  When I finally regained 
    my composure, all I could say was, “It works, this stuff really works”, then of course, 
    “Thank you so much”.</p>

  <p>Christy looked a bit puzzled and replied, “Great, yes it does work.”</p>

  <hr />

  <img src="images/CathyBrown.jpg" alt="">

  <p class="signature">Cathy Brown holds an MBA and is a Certified Law of Attraction 
    Life Coach, Hypnotherapist, Reiki Master, Creating Money Coach, a best-selling 
    author and highly sought after speaker and teacher.</p>

  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p class="centerNoIndent"><a href="#16">Back To Top</a></p>
  <p>&nbsp;</p>
  <hr id="making-changes"/>
  <p>&nbsp;</p>
  <h5>Making Changes</h5>
  <h6>by Galina Shadrova</h6>

  <p>A man in his late sixties made an appointment in my Tarzana, California office. 
    When the man walked into my room, he nervously stated, “I don’t think you will 
    be able to hypnotize me, but you were highly recommended from my friend, and I 
    would like to give it a chance.”</p>

  <p><em>This is a really promising beginning,</em> I thought.</p>

  <p>All his life he was the provider for the family, and everybody constantly 
    acknowledged him for it. This made him very happy.</p>

  <p>Time passed. He got older and lost his job with little savings for his retirement, 
    resulting in him lashing out at his wife and kids. He feared that they would leave him.</p>

  <p>After the first session he awoke happy and relaxed and immediately made another 
    appointment for nine days later.  He returned for the second session in an angry 
    mood. He screamed that the hypnosis did not work and that this would be his last 
    session.</p>

  <p>“Okay. That is absolutely fine, but as long as you are here tell me about this past 
    week,” I said.</p>

  <p>“After the first session I was calm and happy and everything at home began to feel good. 
    However, the past two days I began yelling again, and everything became bad again,” he 
    replied.</p>

  <p>I never promised to fix his entire problem in one session. I am a clinical hypnotherapist, 
    not a magician!</p>

  <p>Usually hypnotherapy works for about seven days. Then you must do it again to reinforce 
    it. I hypnotized him again, and he fell into a very deep hypnotic state (so much for not 
    being hypnotizable). Afterward, he decided to make another appointment for seven days 
    later.</p>

  <p>After several sessions his wife called me and asked, “What did you do to my husband? 
    He is a totally different person. I don’t think I’ve ever seen him so happy. After 20 
    years together, we are planning a second honeymoon. Life is great. Thank you!”</p>

  <p>Two months later, he called me again for an appointment, asking for my help to get a 
    job and make more money. He entered my office with a smile on a much younger looking 
    face and with confidence stated, “Everything is good in my life, and I am very happy, 
    but because of my age no one wants to give me a job. My wife is still working, and I 
    would like to make some extra money. Is that possible?”</p>

  <p>Time for Law of Attraction! After two sessions he got job with a 10 minute drive from 
    his home twice a week. After a couple more sessions, another employee left, and the 
    owner offered him two more days of work per week.</p>

  <p>He recently e-mailed me about how he was now working six day a week and had won $500.00 
    from the lottery.</p>

  <p></p>

  <p>I got another call from a woman who said she wanted to make an appointment to help cure 
    her of depression.</p>

  <p>I asked her if she knew that this was a hypnotherapist’s office and that she would need 
    a doctor’s referral for me to help her with her depression.</p>

  <p>“I didn’t know that this is a hypnotherapist’s office. I just called because somebody 
    told me that you would be able to help. I am glad you are hypnotherapist! I believe that 
    hypnosis is my last hope. I saw a psychiatrist for three years and even asked shamans 
    for help. I do not want to live, but I can’t leave my children. On weekends I do not 
    feel like getting out of bed.”</p>

  <p>When she entered my office, I saw a woman without make up and a tired face in her 50s.</p>

  <p>She got divorced after 27 years of marriage. Her husband left her for a much younger 
    woman. Her oldest son lived alone, but her two teenage kids still lived with her.</p>

  <p>I advised her to have hypnotherapy sessions twice a week until they were not needed 
    anymore.</p>

  <p>For the second session, she came in with a nice hair cut and pretty make up, and she 
    was beautifully dressed.</p>

  <p>I knew hypnosis helped, but <em>that fast?</em></p>

  <p>Two more sessions later, she declared, “I want to make repairs in my bedroom. I already 
    bought wallpaper and began to apply it myself.”</p>

  <p>I switched her to one session per week.</p>

  <p>She decided to take a few private drawing lessons. 
    Her life became more and more enjoyable.</p>

  <p>A few months later, I got a call from her. She said that she was ready to start dating 
    again but did not know how to find the right person.</p>

  <p>It was time for her to learn about the Law of Attraction. We had a total of five sessions 
    in which I taught her what she should do for herself.</p>

  <p>Six months later she called me and said that she had met a man with whom 
    she is now very happy!</p>
    
    <hr />

    <img src="images/GalinaShadrova.jpg" alt="">

    <p class="signature">Galina Shadrova is a hypnotherapist and a life coach who believes 
      we are never too old to make positive changes in life. She helps her clients to become 
      magnets to reach their goals in life while enjoying every step on the way.</p>
    <p class="signature">Facebook: <a @click="myLink('https://www.facebook.com/galinashadrova3')">@galinashadrova3</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#17">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="london-calling"/>
    <p>&nbsp;</p>
    <h5>London Calling</h5>
    <h6>by Geanina Roman</h6>

    <p>The first time I visited London was during a three day trip. That was all I needed 
      to fall in love with the city. It wasn’t just the beauty of the place that drew me 
      in but also the feeling that I’d been there before. I remember sitting in line at the 
      airport. As I boarded the flight that would take me back home to Romania, wanted to 
      return so badly.</p>

    <p>Back home I had recently started a very promising full-time job. I was hired as a 
      translator by a prestigious company. This was the sort of job that sounded really 
      good on paper, particularly for a fresh graduate. I thought that I would be happy 
      as long as I was using my language skills. My previous experience as a volunteer 
      translator for cultural events during University made me feel confident about that.</p>

    <p>I didn’t take me long to realise that my new job, where I had to deal with soulless 
      technical details and monotonous press releases on a daily basis, was nothing like my 
      volunteering experience. I felt disconnected from my work. It felt hard, and I began 
      to doubt myself.</p>

    <p>I also missed the small town where I went to university and the friends I made there. 
      The lack of job opportunities there led me to move to a big city that felt cold and 
      unfriendly by contrast. I couldn’t find anything exciting at work or outside it. I 
      began to feel lost and too hopeless to even think about finding something better.</p>

    <p>Only my daily meditation practice prevented me from wallowing in anxiety and helped 
      me regain some of my balance.</p>

    <p>The thought of going back to London was always at the back of my mind. So a few months 
      later, the news that I was being made redundant came as a relief. It also came as a 
      permission slip to finally do something about my dream to go to the U.K.</p>

    <p>Exactly one year to the day from when I stood in line at the airport to leave Britain, 
      I found myself at the Arrivals at Heathrow ready to start my new life.</p>

    <p>That new life revolved around my job as an au pair. This meant that I lived with a 
      British family taking their children to school and helping out with household chores, 
      all in exchange for some pocket money, my own room, food, and no bills to pay.</p>

    <p>My schedule gave me plenty of time to do some soul searching and to explore London. 
      There was so much to see and do! I went to as many parks, galleries, cinemas, and 
      other sites that would allow me to visit. There was so much beauty around me and in 
      the people I met. Everywhere I went I experienced an underlying feeling that anything 
      was possible, that I was supported no matter what. It was so easy to be myself in London, 
      and I had a familiar feeling of belonging there.</p>

    <p>During this time, a deep knowing came to me. I discovered that my thoughts and the 
      things I give my attention to create the events in my life. For example, my strong 
      thoughts about Britain brought me there, and I realised that landing there on the 
      exact same day one year after I made the wish couldn’t have been just a coincidence.</p>

    <p>Also my love of the English language that I’d acquired from a young age when I 
      watched Scooby-Doo on TV must have influenced me to end up in Britain. The deep 
      feeling of peace that I experienced in Britain matched perfectly the feeling I’d 
      practised during my meditations before I arrived.</p>

    <p>I came across a book on the Law of Attraction by Abraham-Hicks, and although a bit 
      doubtful about some of its claims, I decided to buy it. Idea after idea presented 
      in the book resonated with me in a way that nothing did before then. The Law of Attraction 
      became my life philosophy as I learned how to shift my thoughts to create happy 
      experiences as my self-confidence grew with every day.</p>

    <p>Living in London was the most joyful thing I could imagine. I wanted to stay there 
      for as long as possible. But in order to do that, I needed a different job, one that 
      would give me a proper salary and thus more freedom to be more than just a guest in 
      another family’s house, no matter how kind and friendly they were to me.</p>

    <p>My interests were scattered, and my work experience was limited. I had no idea how 
      I could use them to get a good job.</p>

    <p>The most interesting experience I had was volunteering for cultural events while I 
      was still a student. I acted as a guide for tourists and for other volunteers, 
      translated movie scripts, and offered information to festival goers, among other things.</p>

    <p>I loved working behind the scenes in events related to the cinema and the theatre 
      because of their ability to transport the audience to new places. It felt good to 
      contribute to that purpose in my own way. As for my other skills, my previous work 
      as a translator wasn’t particularly helpful because Romanian isn’t exactly a sought 
      after language in Britain (or anywhere else!)</p>

    <p>As an au pair I learned that I loved children, and I would have liked my dream job 
      to involve them somehow. But my au pair job was too informal, and it didn’t qualify 
      me to work with children in an institution.</p>

    <p>Nor did I have the finances to study and eventually obtain such a qualification. All 
      I knew for sure was that I had good administrative skills so, that’s what I applied for: 
      any job that would make use of them. The more I thought about it, getting a job I liked 
      seemed hard.</p>

    <p>Could I find something I enjoyed doing despite my lack of experience? Where could I 
      find this job? Would it mean starting from the bottom and thus having to put up with 
      some shortage?</p>

    <p>Those questions went through my mind as I started my search. Thinking about them brought 
      a lot of the old anxiety back, and there were many times when I had to remind myself 
      that the Law of Attraction expands anything I focus on.</p>

    <p>Lack wasn’t what I wanted, so I did my best to snap myself out of negative patterns. 
      Instead, I remembered how the Universe orchestrated my arrival in London, how it 
      brought me to my wonderful au pair family, how easily it helped me meet people who 
      encouraged me, including a boyfriend. The Universe had already brought to me so many 
      things that made me happy. Surely, my dream of staying in London must have been heard 
      too.</p>

    <p>The first time I realised that something was beginning to manifest was when I got a 
      call from what sounded like a potential employer. Except that I was in a place with 
      poor reception and I could hardly hear what the caller was saying. I hung up 
      disappointed, unable to reach them back.</p>

    <p>That seemed like an awful start to my search. I felt sad, but I tried to remember 
      Abraham’s words about there being more than one opportunity lined up for each desire. 
      So that if you miss one, there’s always another one around the corner. This helped 
      me keep my hopes high.</p>

    <p>Once, more or less randomly, I applied at a big entertainment company only to get a 
      rejection email, politely saying that they don’t need anyone with my skills at the 
      moment. Again, I tried to see it as just another opportunity to keep focused on what 
      I wanted and to ignore any evidence of the opposite.</p>

    <p>So I kept visualising the expansive and exhilarating feeling of embracing London more 
      and more, having fun there, meeting more interesting people, going to a job I loved 
      where I felt at ease and happy. My daydreams were as real as I could make them.</p>

    <p>About two months later, I found myself sitting in the office of an employment agency 
      whose furniture was exactly like what I’d visualised. I couldn’t help but smile. At 
      the same time, I was also blown away by how I got there to begin with: I was headhunted!</p>

    <p>The lady sitting in front of me had been looking for someone with my language skills 
      for a while, and she was wondering if I’d like to interview with a big broadcasting 
      company.</p>

    <p>Soon afterward, as I walked through the building of the company for my interview, 
      I was in awe and a bit star struck because this is where my favourite cartoons as a 
      child were broadcast from. The walls were covered in posters of Scooby, Tom & Jerry, 
      Dexter’s Lab, and many others. I thought to myself: <em>How cool is that?! Even if 
      I don’t get the job, I’m just happy to be here!</em></p>

    <p>It was the only interview I went to during my job search and the only one that I 
      needed. Shortly afterwards, they offered me the job, and I accepted it. Despite the 
      fact that I didn’t have any experience in broadcasting, they were happy to train me 
      because I was a Romanian speaker and because as a student I used to volunteer for a 
      film studio.</p>

    <p>My main responsibility was scheduling the children’s TV channel that went out to 
      Romania, the same one I learned English from as a child! This meant so much to me 
      because I could contribute to making other children happy too. It made use of my 
      organising skills as I had to put together programs, trailers, and commercials 
      into a schedule according to broadcasting rules before I delivered them to 
      Transmission. It was also fun to use my language skills as I had to check and 
      edit scripts for trailers and also watch programs and graphics to make sure they 
      were in the right language.</p>

    <p>Everything else lined up in a way that met all my needs at the time too. It was an 
      office job in central London, in a building filled with toys that reminded me of 
      childhood and fun. The pay was even higher than what I asked. The work environment 
      was positive, and my manager taught me so many things, appreciated my work, gave me 
      a raise a year later.</p>

    <p>I’ve been living in London for a few years now, and I still can’t get over how 
      perfectly the Universe brought together so many aspects of what I wanted and needed 
      then. It felt like a nod to carry on following my joy because I was on the right track.</p>

    <hr />

    <img src="images/GeaninaRoman.jpg" alt="">

    <p class="signature">Geanina Roman is a certified career and Law of Attraction coach with 
      a background in media and translation.</p>
      
    <p class="signature">When she isn’t helping people, she photographs and explores the 
      British countryside.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#18">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="getting-published"/>
    <p>&nbsp;</p>
    <h5>Getting Published</h5>
    <h6>by Paulette Sherman</h6>

    <p>While I was in graduate school getting my doctorate, we were told that our dissertation 
      could be a literature review instead of lab research, and we could choose our topic.  
      Since my grandparents and mother were Holocaust survivors from Romania, I became 
      interested in how holocaust survivors used creativity and play to survive psychologically 
      during extreme trauma. My mom told me a story about how she made a slide out of an old 
      storm door when there was no food in the ghetto, and I wondered what similar stories 
      others had.</p>

    <p>I started reading survivor’s accounts and heard that a new Holocaust museum had opened 
      in Washington, D.C., so I made plans to visit for the day.  They had video testimonials 
      with survivor’s stories, and I spent the day watching them.</p>

    <p>During a break, I went up to the librarian, Mishlee, and mentioned that my grandfather 
      was originally from Chotin in Bessarabia and had been killed during the Holocaust.  
      I asked whether she had any photographs of him or the town.  She came back with one 
      Hebrew book, and at first I did not understand the names, nor did I know what he 
      looked like.  She helped me look for the name Avraham Wolkove, and by some miracle, 
      there he was.</p>

    <p>In those days, people took few photographs, but my grandfather had been a known speaker 
      in the town and was sitting at a meeting with several other people in the photograph.  
      She gave me a photocopy of that black and white photo in the book.</p>

    <p>This was the first time that my sister and I saw our grandfather.  My mom also did not 
      know what he looked like because she had been two years old at the time of his death.  
      In my heart I had wanted to find that picture, but I had not planned it, and this 
      missing piece of our family puzzle seemed to fall magically into place.</p>

    <p>After graduate school, I knew that I’d like to write a book and maybe a column.  One 
      day I picked up a free magazine, called <em>The Improper Magazine,</em> from a kiosk 
      on the street in Manhattan.  I looked at the masthead and had the thought to email 
      the editor Keith Girard to ask to write a column.  I had not written a column before 
      and did not have much writing experience, but this limitation did not occur to me at 
      that time, so I just did it. He wrote back and said he’d be glad for me to write a 
      monthly column on relationships, which I then did for two years until the print magazine 
      went digital.</p>

    <p>At the time I was dating, hoping to meet find a husband while working as a therapist and 
      wishing I would publish my first book before I married.  I took notes on what I learned 
      in my own dating process and subsequently developed a manual for a dating class I 
      facilitated for single clients.</p>

    <p>I went into a Barnes and Noble to look through a <em>Writers Market</em> book and jotted 
    down the contact information of four publishers on an envelope.  Then I sent in my dating 
    manual via snail mail with my resume.  I got calls back from two editors, both of whom told 
    me it was something they’d been looking for.</p>

  <p>One editor submitted it to the editorial board review, but they passed on it.  The other 
    editor was Cynthia Black, who was also the publisher of <em>Beyond Words,</em> which formed 
    an imprint called Atria Books with Simon and Schuster.</p>

  <p>I did not know that at the time, nor did I know that she was in the process of publishing 
    the book, The Secret, and was looking for other books on the Law of Attraction. My dating 
    book was about the Law of Attraction, but that term was not in the subtitle until she added 
    it, and it was not mentioned in the book.  She suggested that we go back and forth with 
    rewrites, and if she was satisfied with the final book then she’d offer me a contract.</p>

  <p>I signed the publishing contract right before I got married.  What were the chances of 
    getting my first deal with Simon and Schuster without an agent and with little writing 
    experience (except for a column), and then sending it to the person working on that topic?  
    It was not something I could have planned consciously.</p>

  <p>After the book got published, I married, and we later had two kids.  I had little time for 
    writing then and had to focus on more practical things.</p>

  <p>At age 41, I was diagnosed with breast cancer.  I walked on the beach and prayed and asked 
    whether I was going to die.  I heard that I would not and that I had a legacy of at least 
    22 books left to write.  I went through chemotherapy and radiation for a year and lost all 
    my hair.  I continued working as a therapist and wrote on the subway and in the hospital. 
    The idea of 22 books seemed crazy to my conscious mind, but my spirit accepted it as a 
    clear command, so I just went to work, learning self-publishing.</p>

  <p>I was on a mission to write these books, but didn’t want to go into any debt in the process, 
    since our kids were our practical priority.  My desire was to have those self-published 
    books paid for even if I did not make a profit.  I did not have many book sales and had no 
    energy or budget for marketing at the time and had not yet worked on much of a social media 
    platform.  My goal was to get my messages of love out there and to put my books in hope 
    chests for my kids as a legacy, which I did.  I trusted it would all work out, even if I 
    didn’t know how.</p>

  <p>I happened upon a blog by Gordon Burgett who writes about self-publishing where he said that 
    he made more money by getting a foreign agent and translating his self-published books into 
    a few languages than he did with a traditional American publishing deal.  I didn’t know 
    anything about this, so I searched the term foreign literary agent in Linked In, and a woman 
    named Marleen Seegers came up.</p>

  <p>She looked beautiful and smart, and her agency looked new.  This was the first and only 
    foreign agent that I wrote at that time. She liked my book, When Mars Women Date: <em>How 
    Career Women Can Love Themselves into the Relationship of their Dreams,</em> and it 
    subsequently got published into Chinese, Korean and Czech.  The sales more than covered 
    my basic publishing expenses for my ongoing book legacy</p>

  <p>Later, another foreign agent from Linkedin helped me to publish two other books I wrote 
    into Chinese.   I later read a publishing book by an expert who said that one of the main 
    reasons to get a traditional publisher is they have a much better chance to sell your 
    translation rights, but I hadn’t known that or adopted that limiting belief.</p>

  <p>As I wrote and worked on my self-care, I started to take sacred baths where I would have 
    silence in the morning to align my thoughts and feelings with my intention and goals.  
    I’d relax, pray, meditate, and receive guidance. In this way I got many creative ideas 
    for my books, and they flowed out of me. I published them one after another (literally) 
    on Amazon and soon had 20 published books just five years after my diagnosis.</p>

  <p> I was doing well emotionally, physically, and spiritually and felt that this morning 
    bathing ritual could be helpful to others. So I wrote a small book about it.  I had 
    given my Reiki teacher, Raven Keyes, several of my books as gifts. She had never said 
    anything about them, but for some reason when I handed her book number 21 (which was 
    about using different sacred bath rituals to improve your love life), Raven said that 
    she loved the idea and encouraged me to create bath rituals in many other life areas 
    as well.  She said she’d never done this, but she thought her editor at Llewellyn might 
    consider the book a good fit.</p>

  <p>So, I submitted a proposal and several chapters. Llewellyn came back with a publishing 
    contract.  This felt like a miracle to me because of the ease with which it happened.  
    My latest book, The Book of Sacred Baths, came out last year, and now I am writing book 
    number 22 in my legacy project.</p>

    <hr />

    <img src="images/PauletteSherman.jpg" alt="">

    <p class="signature">Dr. Sherman is a psychologist, certified life coach, author, 
      teacher and speaker.  She offers international phone coaching and specializes in 
      relationships.</p>
    <p class="signature">Twitter: <a @click="myLink('https://twitter.com/kpaulet')">@kpaulet</a></p>
    <p class="signature">Facebook: <a @click="myLink('https://www.facebook.com/pauletteshermangroup/')">@pauletteshermangroup</a></p>
    <p class="signature">Website: <a @click="myLink('https://drpaulettesherman.com/')">DrPauletteSherman.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#19">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="the-poker-tournament"/>
    <p>&nbsp;</p>
    <h5>The Poker Tournament</h5>
    <h6>by Walt Thiessen</h6>

    <p>Here's a very simple manifestation story that happened on March 10, 2018. I play 
      poker online … play chips, although I used to win money before the U.S. Government 
      shut that down. I'm pretty good at it. I've accumulated over 90 million play chips 
      in my account over the years while playing sporadically and casually.</p>

    <p>This particular Saturday I played in a tournament, my favorite way to play. It was 
      a pretty big tournament, over 700 players. I decided to use it as a sandbox, so to 
      speak, for practicing LOA.</p>

    <p>In the past, when I tried deliberately creating while playing poker, I usually tried 
      manifesting particular hands at particular times. However, like everyone else, I have 
      my own levels of resistance, and I usually ended up failing to manifest the right hand 
      at the right time.</p>

    <p>This time, I did it differently. I decided to stop trying to micromanage the hands 
      and just leave it to the Universe to provide the ideal results in its own way and time.</p>

    <p>So instead of trying to attract winning hands, I visualized doubling my chips and/or 
      reaching new and higher chip levels.</p>

    <p>Before I started doing this, I'd already lost half my chip pile. I was way behind and 
      in danger of losing all my chips and being eliminated from the tournament. So I figured, 
      <em>This is a good time to really put my new LOA approach to the test.</em></p>

    <p>I had about 700 chips at that point. (All contestants started the tournament with 
      1,500 chips). So I decided I wanted the Universe to double my chip count and got 
      really excited about it. A few hands later, it happened.</p>

    <p>So I decided to do it again. This time I wanted 3,000 chips. Once again, I just kept 
      thinking about having 3,000 chips, building my emotional excitement about it while 
      playing the hands. A few hands later, I reached that goal as well.</p>

    <p>As the tournament went on, I kept asking for a higher chip count than what I had 
      already achieved. I got myself into a really great feeling place each time.</p>

    <p>I didn't worry about my fortunes from one hand to the next. Sometimes I won, and 
      sometimes I lost.</p>

    <p>Overall, out of 125 hands played, I won about one out of every five hands I played, 
      while managing to avoid having any big losses.  It didn't matter to me what the results 
      were. As long as I was still in the tournament and successfully focusing on my goal, 
      without getting attached to any particular hand, I was happy.</p>

    <p>Nor did I worry about how it would happen. I only focused on the goal. I didn't care 
      which particular hand got me there, regardless of what cards I had, good or bad.</p>

    <p>At one point, my goal was to get 20,000 chips. I had about 9,000 at the time. I got a 
      really big hand, but only won about 3,000 chips with it.</p>

    <p>I thought, <em>Oh well.</em></p>

    <p>But I'd forgotten that I was also in a tournament where you get bonuses for 
      eliminating another player. I did just that with this particular hand, and my 
      reward was – you guessed it – 20,000 chips!</p>

    <p>This kept going and going. Over time I got to 30,000 – then 50,000 – then 80,000 – 
      then 100,000  - then 150,000 - then 200,000 chips.</p>

    <p>Each step of the way, I visualized my goal, got really excited about it, and held 
      it in my mind as I played each hand, not allowing myself to become attached to the 
      result of any particular hand. Without exception, I kept reaching my goals!</p>

    <p>When I reached 500,000 chips, I was the leader in the tournament. I also got greedy. 
      I tried to micromanage, scaring players into folding with big bets and "captaining" 
      the table as it's called.</p>

    <p>The result? I lost more than half my chips!</p>

    <p><em>Okay,</em> I thought. <em>I get the message. No more micromanaging! No more 
      trying to make it happen.</em></p>

    <p>I went right back to focusing on my next chip goal and getting really excited about 
      how I would feel when I got there.</p>

    <p>Much faster than I expected, I got back to 500,000 chips after about 10 more hands.</p>

    <p>When I got to 600,000, there were just two players left, me and the guy I'd been 
      butting heads with for some time.</p>

    <p>I got a King – Nine pocket, off-suit.</p>

    <p>I didn't know it, but he had a Queen – Seven pocket, off-suit.</p>

    <p>A “pocket” is the two cards each player gets dealt face down in the No Limit Texas 
      Holdem style of poker.</p>

    <p>“Off-suit” means that the two cards are from different suits.</p>

    <p>Neither hand was a strong hand, but both were worth betting.</p>

    <p>I raised, he called, and then the first three cards flopped: King – King – Seven. 
      I had three of a kind … three Kings! That's a very rare kind of flop, and I got it 
      at the best time.</p>

    <p>My opponent had two Sevens, and since the odds are about 4:1 against matching 
      anything in your hand on any given play, and since he saw two Kings on the board 
      (which made it even less likely in his mind that I would have a King), he figured 
      the odds favored him.</p>

    <p>So he went <em>all in</em> with his remaining chips. I called, and I won the pot, 
    all his chips, and thereby won the tournament!</p>

    <hr />

    <img src="images/WaltThiessen.jpg" alt="">

    <p class="signature">Walt Thiessen is the founder of LOA Today, where he does 
      daily podcasts on the Law of Attraction. He lives with his wife, Louise in 
      Simsbury, Connecticut.</p>
    <p class="signature">Website: <a @click="myLink('https://www.loatoday.net/')">www.loatoday.net</a></p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#20">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="healing-myself"/>
    <p>&nbsp;</p>
    <h5>Healing Myself</h5>
    <h6>By Jean Yang</h6>

    <p>Since I became a young woman, I dealt with severe menstrual cramps and heavy bleeding 
      during my periods. I dreaded that time of the month. Things got so bad for me that I 
      finally went to the doctors. They found a large growth the size of an orange on my left 
      ovary that needed to be removed. I had my surgery, and the doctor had to remove my left 
      ovary as well as the growth, which turned out to be benign endometrioma. The diagnosis 
      was endometriosis.</p>

    <p>After recovery from surgery, I remember still having to deal with very painful cramps 
      every month, as well as heavy bleeding that sapped my energy and stamina. It was so bad 
      that one day on my 70 minute morning walk, I could not make it back home. I had to lie 
      down on a concrete bench because I did not have enough strength to move my body. I 
      rested for a good bit of time before I could gather enough strength to slowly get back 
      home.</p>

    <p>I became desperate and sought help on the web. I found a lady named Carolyn Levett 
      and got her book, <em>Reclaim Your Life – Your Guide to Aid Healing of Endometriosis.</em> 
      Along with dietary and lifestyle changes, Ms. Levett suggested Reiki as helpful for 
      those suffering from endometriosis. Reiki piqued my interest, even though I had never 
      heard of it before.</p>

    <p>I found a Reiki instructor named Karen Harrison from Kansas City, who came into the 
      Dallas area a few times a year to teach. I quickly signed up for her class, which 
      started not long afterward.</p>
      
    <p>Meanwhile, the changes in diet Ms. Levett suggested in her book and on her website, 
      <a @click="myLink('https://www.endo-resolved.com/')">www.endo-resolved.com,</a></em> 
      helped me quite a bit with pain management. A Reiki news magazine mentioned Louise 
      Hay, whom I had not heard of before. I bought her book, <em>You Can Heal Your Life,</em>
      and watched her movie of the same title. I enjoyed the movie, but none of the authors 
      and teachers interviewed stood out to me.</p>

    <p>About a month later, I watched the movie again with my friend, Elizabeth. She pointed 
      out to me her favorite speaker interviewed at the end of the movie, which turned out 
      to be Abraham, a collective consciousness received by Esther Hicks.</p>

    <p>I went back to watch that particular interview again after my friend left and took 
      note of the book mentioned in the interview, <em>Ask and It Is Given.</em> After I 
      purchased and read the book, I cannot tell you all the changes that it made in my 
      life! I have read many of their other books, watched their DVDs, attended workshops, 
      and traveled the world on several Abraham cruises. Coincidentally, those Abraham 
      cruises helped me realize one of my fondest dreams, which is to travel and see this 
      beautiful world of ours. As an artist, I must say those experiences in themselves 
      are priceless!</p>

    <p>A beautiful young man I met on an Abraham cruise in the Mediterranean showed me a 
      book he’d been reading that fascinated him. It was <em>Seth Speaks: The Eternal 
        Validity of the Soul,</em> by Jane Roberts. I later overheard an older gentleman 
        mention the same book. Then on my plane ride home from the cruise, a lady sitting 
        to my left next to the window was reading a novel, and I was inspired to look 
        over at what she was reading. Lo and behold the name Seth popped out from the left 
        page of the book she was reading, as if a spot light was shining on it! Obviously, 
        the Universe was trying to get my attention. Of course I took the hint and 
        purchased and read the book. It absolutely blew my mind.</p>

      <p>Everything was delicious on my journey of discovery: the people I met, the clarity 
        I received, ever improving health, all of the synchronicity that guided me to even 
        more fun and stuff that I have asked for through the living of life. Needless to say, 
        I am so much happier than I have ever been, so much so that others who have known 
        me have remarked upon my transformation.</p>

      <p>One transformation that is clearly visible to those around me is that my skin that 
        use to give me trouble has cleared up, and friends and family often tell me how 
        much happier and better I look these days. Louise Hay’s book, <em>You Can Heal Your 
        Life,</em> gave the probable cause of acne as, “Not accepting the self. Dislike of 
        the self.” It made sense to me.</p>

      <p>As for the endometriosis, I prayed for and received an early menopause at the age 
        of 48. I had some trepidation about menopausal symptoms, but they were really mild 
        and easy to deal with compared with the pain I had to deal with on a monthly basis. 
        And since then, I just keep feeling better and better.</p>

      <p>I so appreciate the joy and clarity I have discovered and am passionate about 
        sharing it with others who are ready for this information.  This is such an 
        exciting time to be alive on Earth. It really is the time of awakening as more 
        and more of us are ready to remember who we really are and the power we hold in 
        our own hands.</p>

    <hr />

    <img src="images/JeanYang.jpg" alt="" style="margin-bottom: 60px;">

    <p class="signature">Jean Yang is an intuitive adviser, a licensed massage therapist, 
      a Reiki master, and an artist.</p>
    <p class="signature">Jean can assist you in pinpointing those thought patterns or 
      beliefs that are hindering you from success, health, and happiness.</p>
    <p class="signature">Website: <a @click="myLink('https://www.jeanyangwellbeing.com/')">jeanyangwellbeing.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#21">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="boot-camp"/>
    <p>&nbsp;</p>
    <h5>Boot Camp</h5>
    <h6>Misti Jackson-Derringer</h6>

    <p>Nearly one year had passed since my mom’s last drink. She seemed okay, 
      having made the transition into living a normal life, but the shadows crept 
      and crawled around, as shadows do. Something big needed to happen. We needed 
      help seeing through these shadows to a better life, a better connection, and 
      certainly a better understanding.</p>

    <p><em>The Shadow Process is a catalyst for our healing as we embrace our darkest 
      side,</em> the pdf read. I checked the dates for the next event: Miami, end of 
      June. My mothers birthday is June 24, Miami is warm, and there's a beach. She 
      loves the beach, as do I.</p>

    <p>I booked the flights and bought the tickets as a birthday present. A vacation 
      in June seemed a perfect way to celebrate her one-year mark of sobriety.</p>

    <p>My childhood was spent in limbo between two parents stuck in their own shadows. 
      I survived the harsh realities of divorce, drug, and alcohol addiction. Years of 
      unworthiness and fear of neglect kept me stuck in a place of complacency. From 
      the exterior I appeared exceptionally grounded, while the inside was a different 
      story.</p>

    <p>We landed in Miami and checked into the hotel, feeling relieved of our daily 
      responsibilities and hopeful to create a newly meaningful relationship between
       mother and daughter. The Shadow event started the next day, so we sat by the 
       pool sipping cool (non-alcoholic) fruity drinks.</p>

    <p>I felt very good about providing my mom this opportunity to get away, to dig 
      deeper.</p>

    <p><em>This will be good for her,</em> I told myself.</p>

    <p>I forgave her long ago. Had to. The grief I felt from mourning my motherless 
      childhood was too much to bear, and forgiveness was freedom from my pain, even 
      when the sadness became a security blanket as I hid behind a confident smile 
      and warm laughter. Her growth would mean my growth. More growth, more forgiveness.</p>

    <p>The next morning, my mother and I showed up excited and ready to take on the 
      program. Armed with our venti lattes and chatting like school girls, we had NO 
      CLUE what we were getting ourselves into.</p>

    <p>Within minutes, the facilitator began giving us her “expectations'” for the next 
      72 hours. She was attractive and well dressed. She knew things, and you could tell. 
      Her story had scars, and she shared them fearlessly.</p>

    <p>She laid out the rules.</p>

    <p>Rule number one: Noble silence except for group exercises.</p>

    <p>She went on: No meat, no sugar, and … <em>no caffeine!</em> She set aside her 
      notes and looked silently at the group. The coaches in the back row sat tall, also 
      knowing something we didn't. Each of them looked like wounded soldiers who hadn't 
      lost the spirit of the fight. From the first moment, I trusted them.</p>

    <p>We each took a long delicious gulp from our over-priced mochas and stared at each 
      other, in shock and awe.</p>

    <p><em>This was not a vacation,</em> we both realized. <em>This was a battlefield, 
      and we had just been informed we would be on the front lines to fight for our healing.</em></p>

    <p>At the first break, forbidden to discuss what had just happened, we tossed out 
      our precious $7 drinks and got some bottled water. The simple fact that we didn't 
      run screaming out of there indicated progress for us.</p>

    <p>In the first session, we listened to story after story of fearlessly facing the 
      shadows from our coaches. I trusted them even more. Stories of loss, pain, grief, 
      and shame poured out from their hearts. We cried, we laughed, but we didn't talk. 
      We listened.</p>

    <p>Over the next three days, we both experienced something deeply profound. We slowly 
      began to understand the nobility piece of the silence. After the first awkward meal 
      with the other noble souls, we started to see the benefits of not blabbing our guts 
      out to everyone and each other.</p>

    <p>We kept our vow for the retreat (minus the initial mouthing and failed attempts to 
      make hand motions to signal what we desperately wanted to say out loud) as we learned 
      then and there that words have power.</p>

    <p>And no words? Even more power internally.</p>

    <p>In my own personal silence, it became a wave of relief not having to explain or 
      excuse myself or listen to others’ explanations or excuses. It was peaceful to not 
      feel the heavy obligation to make meaningless small talk about ignorant things with 
      people we barely knew.</p>

    <p>Most of all, it quickly brought a depth to this experience that nothing else would 
      because when you can't speak, you <em><strong>must listen.</strong></em> You must be 
      open to receive.</p>

    <p>As a southern girl from Tennessee, I had always heard the saying, “The good Lord 
      gave you two ears and one mouth for a reason,” but I just thought that was some 
      redneck saying for “shut the hell up.” And I suppose it was, but not in the way I 
      had once considered.</p>

    <p>Our coaches led us through a shadow-laden process to reveal deeply held judgments 
      and beliefs about ourselves and others. When we weren't listening to our program 
      leaders, we had to listen to our own thoughts. Scary stuff there.</p>

    <p>But without this experience, I would not have the awareness I <em>even had</em> 
      scary thoughts, much less listened to their meaning or intention.</p>

    <p>On the last day of the retreat, we participated in several group exercises in which 
      we journaled things about ourselves we did not want to hear or believe. Some were 
      things we'd tell ourselves and some were things said to us with hurtful intention.</p>

    <p>In short sentences we were expected to speak what we had written, and the group 
      repeated back our words to us. The instructions were simple. Execution was brutal.</p>

    <p>My mom’s list included: "I was a horrible mother."</p>

    <p>She choked out the words over and over. As I wanted to run and silence her, it 
      became clear that I didn't want her to admit this because then it WAS true. With 
      each time she repeated it, I was reminded how terrible it had been and how deeply 
      wounded I was.</p>

    <p>Our group drove in the knives as we repeated, "You were a horrible mother." The 
      knife of her words hit me over and over. Repeating the words in confirmation of 
      this fact stung like a thousand needles.</p>

    <p>Then in an instant, I realized – where I felt a knife, she felt a sword. Where 
      I felt needles, she felt razors. My compassion arose as hot tears fell down both 
      our faces.</p>

    <p>Working our way through our breakout tribe of shadow warriors, we continued. When 
      my turn came, tears began to flow. Where to begin? Which shadow that had been hidden 
      in my wounds could I choose.</p>

    <p>I took a long breath and tried to gather myself. My mother's eyes welled as her 
      own shadow wounds lay open, bleeding for all to see, and she knew the pain I felt 
      in my heart. Yet she looked at me with a fierce love that gave me the courage to 
      speak. I had her support, and in that moment I had never needed it more.</p>

    <p>"I am unlovable," I whispered, voice shaking.</p>

    <p>My group spoke it back to me, and their words pierced my soul. I continued saying 
      it over and over until something loosened inside. I wept as I looked at my mother 
      and said what I had always felt. We connected and again her fierce look of love 
      gave me the push to go on until I heard these words as only sounds.</p>

    <p>The power of my words had not been in the sounds but in the meaning and truth I 
      granted them.</p>

    <p>We were strictly limited to the script we had written, and no one got out of the 
      hot seat until they were crying their damn eyes out and shaking all over.</p>

    <p>Believe me, noble silence came easily that day as no one wanted to say a word 
      during the break. We were all so shaken up, it was as though there had been some 
      sort of mass spoken exorcism of words.</p>

    <p>The final program exercise was to set up in the same groups. This time, we had 
      the chance to say what we wanted to say. What we really needed to say to ourselves, 
      out loud, to set a new intention for our lives where the raw hole had been hallowed 
      out before.</p>

    <p>After a weekend of cultivation and awareness of words (or lack there of) we were 
      more than ready to express our truest selves aloud. Statements filled with love 
      and compassion. Words of hope and intention.</p>

    <p>Again my brave mother took her seat opposite us. She took a breath and stated 
      timidly, "I am a wonderful grandmother."</p>

    <p>We confirmed her words with ours, "You ARE a wonderful grandmother." Loudly 
      enunciating each word for her as we were given the chance to repeat her bold 
      statement. "YOU are a wonderful grandmother." Again, "You are a wonderful 
      GRANDMOTHER."</p>

    <p>She began to smile as we saw a visceral acceptance of pride grow in her eyes, 
      melting my heart with her truth. She is a wonderful grandmother. My children have 
      had the very best of her, which meant I had also received that precious gift.</p>

    <p>She went on to admit another truth. "I am safe," she proclaimed. I realized I 
      had never considered my mother to be fearful of ANYTHING. Yet here she was telling 
      us she desperately wanted to feel safe.</p>

    <p>We confirmed her statement. "You ARE safe." Our embrace when she completed her 
      turn was all we had both wanted and needed.</p>

    <p>Once again, it was my turn to speak truth. I sat with an excitement for the 
      next words I would speak.</p>

    <p>"I am a good mother." I said firmly. I locked eyes with her first as she repeated 
      the fact back to me the way only a mother can do.</p>

    <p>Each time I said it, her heart healed more and mine leaped for joy. Our eyes 
      locked deeper and we both knew in that moment the reason we had come here.</p>

    <p>The healing that took place in these brutal and honest statements sealed off 
      the wounds we had carried for one another.</p>

    <p>I looked down at my next statement, but as I opened my mouth those words didn't 
      come out. Instead, as though a voice from my soul spoke into my heart I blurted 
      out instead, "I am a spiritual guide."</p>

    <p>Electricity shot through every cell in my body, as I looked shocked at my mother 
      who leaned forward and confirmed it loudly with her fellow team of repeaters, "YOU 
      ARE A SPIRITUAL GUIDE." I said it again and again until the words were very much 
      my own: "I am a spiritual guide."</p>

    <p>I had found purpose for the pain that feeling unlovable for so long had gifted me.</p>

    <p>After the program ended, my mom and I went for another venti coffee and then for 
      a huge steak dinner that night. We spent the entire evening recapping the incredible 
      gift we had received, a powerful tool that separated fact from fiction in our 
      awareness. We now understood the power of our words, spoken or not, and how they 
      created the life we called our own.</p>

    <p>Our words attract our outcomes, and we were both amazed at how something as simple 
      as “noble silence” could be the catalyst to speaking with intention.</p>

    <p>My words, "I am a spiritual guide," connected me to the universal power of attraction. 
      Today, I am a spiritual guide, a certified yoga instructor, and a certified holistic 
      leadership coach. I now do the work to guide others spiritually back to their own 
      truth. I travel, speak, and train others to be guides.</p>

    <p>Almost five years later, my mom continues to feel safe in her sobriety, and she 
      supports my family by being a WONDERFUL grandmother.</p>

    <p>Quite literally, our life is the words we speak both inside our head and out to 
      the rest of the world.  We are living proof that your words most definitely have 
      the power to create your reality and to redeem your past.</p>
      
    <hr />

    <img src="images/MistiJacksonDerringer.jpg" alt="">

    <p class="signature">Misti Jackson-Derringer is a poet, speaker, author, Certified 
      Holistic Coach, Intuitive Energy Worker and Yoga Teacher.</p>
    <p class="signature">She is a teacher and leader in her local community and worldwide who helps others design a life they legitimately love.</p>
    <p class="signature">Website: <a @click="myLink('https://meetmisti.com/')">meetmisti.com</a></p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#22">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="nizhoni"/>
    <p>&nbsp;</p>
    <h5>Nizhoni</h5>
    <h6>by Ellen Bakker</h6>

    <p>Help came when I was almost 24 years old.</p>

    <p>When I was 7, I was diagnosed with Type 1 Diabetes. By the time I was 21, 
      I started having problems with my eyesight. It didn’t come as a surprise. At 
      age 12 the doctors had already told me and my parents that I had symptoms that 
      would lead to future eye problems.</p>

    <p>I was diagnosed with retinopathy, a diabetes-related eye disease. In the years 
      that followed, I was treated with laser therapy many times. The results were not 
      successful.</p>

    <p>One day, when I was at the hospital again, I asked the doctor a simple and very 
      direct question: “Am I going blind?” His answer was: “Well, I cannot say that you 
      won’t go blind. I am sorry...”</p>

    <p>Now I wasn’t brought up religiously at all, and I don’t remember having ever 
      prayed before, but that night I prayed very hard and intensely for help! I remember 
      vividly while I cried that I prayed with the words, “I don’t care what I have to 
      do, if you want me to hang upside down here on this lamp, I will do it! Please, 
      please, please help me!”</p>

    <p>Help came a couple of months later. My aunt knew a homeopath whom she thought 
      could help me. So I went. My parents went with me the first time, very reluctantly 
      though. They had always been non-believers when it came to alternative practitioners. 
      Spirituality was not in their book and definitely shouldn’t be in mine either!</p>

    <p>My parents were very dominant, especially my father whom I had always been afraid of. 
      Even though I was 24 years old and not living at home anymore, they still believed 
      they could forbid me things. After that first visit to see the homeopath, I decided 
      to go again alone and didn’t tell them about it.</p>

    <p>On one of my visits, I told one of the employees working for the homeopath that 
      the doctors had said that the problems with my sight were irreversible. I could tell 
      she wanted to tell me something but felt hesitant. I encouraged her to tell me.</p>

    <p>She said she knew someone who could probably help me but that the woman was very 
      unconventional. I said that I didn’t care about “unconventional” and convinced her 
      to tell me more. Today I am so grateful that she did!</p>

    <p>The first time I went to see Marian, I remember walking in feeling as if my back 
      was pushed to the wall. When I saw her, I knew immediately that I had come to the 
      right place and person. I simply thought, “Okay, this is good.”</p>

    <p>As I learned about her methods, I became really interested in spiritual matters. 
      I also started to attend the courses she gave.</p>

    <p>The courses took place at her house, which is how I got to know her family as well. 
      With her husband Peet, she had two children a little younger than myself, Yosi and 
      Richard.</p>

    <p>The first time Marian told me about her son Richard, whom she was clearly very proud 
      of, I immediately felt a connection to him. I didn’t know why or how this was possible. 
      I had never met him and probably never would because he was studying in the U.S. at 
      the time. And obviously I had much bigger issues!</p>

    <p>One evening, just before the start of one of the evening classes, I had the following 
      conversation with Yosi.</p>

    <p>“I have been going to the library many times, looking for books on spiritual subjects. 
      As usual I really didn’t know what book to pick, so this time I decided to choose a 
      book in a different way. I made sure no one watched me.</p>

    <p>“I closed my eyes and touched the spines of the books with my fingertips. There were 
      approximately a hundred books to choose from, so it took some time, but at one point 
      my fingers started to tingle. So I chose that book, took it home, and started to read.”</p>

    <p>“And, was it good?” Yosi asked.</p>

    <p>“I couldn’t even finish the first page, simply because I just couldn’t stop crying. 
      It was a story of a young girl having spiritual experiences. For her, they were as 
      normal as breathing. Somehow it felt like it was my story. And my God! ... the 
      description of the landscape she grew up in!</p>

    <p>“That touched me even deeper. Apart from that I am intrigued by the way the regression 
      therapy is done at that institution the author talks about. So I read and cried and 
      read and cried and now I have decided I want to go there!”</p>

    <p>Yosi looked at me, amused, and asked me who the author was.</p>

    <p>“Chris Griscom,” I answered.</p>

    <p>The look on her face changed from amused to totally shocked and even a bit nervous.</p>

    <p>“What’s wrong,” I asked.</p>

    <p>“Are you sure?” she replied.</p>
    
    <p>“Well, yes, of course I am sure,” I said, not understanding her reaction.</p>

    <p>“Chris Griscom is the director and teacher at the school my brother is studying at, 
      in the United States.”</p>

    <p>Now it was my turn to be completely blown away. Yosi didn’t know that I so much 
      wanted to meet him. I couldn’t wrap my head around this so-called coincidence!</p>

    <p>Of all the dozens of books I could pick, I unknowingly chose the one that made me 
      decide to go to that awesome place in the U.S. not knowing that the one person I so 
      much wanted to meet was living and studying there.</p>

    <p>Yosi got up, and told her mom about it. Marian didn’t seem surprised and simply 
      said: “Well, I think some things are awaiting you there.”</p>

    <p>So here I was in September 1993, 26 years old, still studying, no job, no money, 
      determined to go to the Nizhoni School for Global Consciousness. Studying there 
      was not an option, but I learned they organized summer camps as well.</p>

    <p>The regression sessions described in the book and that I so much wanted to experience 
      were part of the program. I was not and am not a very patient person, so I decided 
      that next summer would be the right moment to go!</p>

    <p>Of course I knew I needed a lot of money that I didn’t have. The regression sessions 
      were pretty expensive, and I knew I had to save at least $6,000. I had no clue how to 
      do that. I just knew I wanted to.</p>

    <p>The next week a professor from Leiden University where I was studying Child Education 
      and Development asked me if I was interested in working for him for 16 hours per week.
      He was looking for someone who could help him with the book he was writing.</p>

    <p>The book was about a French pedagogue, and since I already had a master’s degree in 
      French he figured I would be the right choice. I started in October and thus made some 
      money … not enough to be able to go to the U.S., but it definitely was a start.</p>

    <p>What happened during the following months is still a mystery to me. For some reason 
      and in ways that I honestly cannot recall, I was able to save money. I “found” money 
      everywhere, and I saw opportunities everywhere to cut down on my regular expenses. It 
      became sort of an exciting game to me that I turned out to be very good at!</p>

    <p>I ran into Richard four times that same year. The first time wasn’t a coincidence. 
      I heard from Marian that her son would come home for two weeks. I knew that I wouldn’t 
      have a chance of meeting him unless I visited on an evening with no classes. Marian 
      had a lot of spiritual books. I asked her if it was okay for me to come over one 
      evening to take a look at her books to see if she had some that I might want to read. 
      Luckily, she agreed!</p>

    <p>It was typical Dutch winter weather, cold and rainy, so I put on something nice, 
      warm, and comfortable . I always wore glasses, but for this occasion I put in my 
      contacts. I felt prepared and ready to go. Still, I had no idea if he would actually 
      be at his parents’ home.</p>

    <p>As I came in, Marian immediately noticed I wasn’t wearing my glasses. I had a perfect 
      excuse: “Well, it’s dark and raining, and I suffer from night-blindness (which she knew 
      was true). I don’t see well with raindrops on my glasses.” She bought it.</p>

    <p>My preexisting feeling of connection was confirmed.  I fell in love with him. Actually, 
      that wasn’t accurate. A better word would be soulmate, someone I once knew.</p>

    <p>That same year, Chris Griscom came to the Netherlands to speak at a Congress organized 
      in Amsterdam. Of course I went with Yosi’s family. Richard was there too.</p>

    <p>That was the last time I saw him in the Netherlands. The next time would be at the 
      Nizhoni summer camp in 1997.</p>

    <p>I somehow had been able to save up $8,000 in nine months time! I still remember the 
      look on the face of the bank employee. I booked the camp and flight.</p>

    <p>She said, “Well, now you will have to pay $6,000.”</p>

    <p>Since I had saved the money all in cash, I simply took the $6,000 out of my pocket 
      and gave it to her. I remember wearing a red pair of trousers with huge pockets and 
      a long white sweater covering them. I figured no one would be able to see or least 
      of all expect me to have so much money on me.</p>

    <p>I didn’t know her thoughts, but I could tell she was surprised to say the least! 
      Now that I am older, I understand, but at the time I thought there was nothing 
      unusual or odd about it.</p>

    <p>So that is how I overcame the money hurdle, but there was yet another hurdle to clear 
      as well: my family. I had to tell them I was going to the U.S. alone to a 
      spiritually-oriented camp.</p>

    <p>They reacted the way I expected: upset, angry, scared, and dead set against my plans. 
      My father simply forbade me to go, even though I was 27 years old. He told me that if 
      anything went wrong I couldn’t count on the help of my family.</p>

    <p>My sister refused to talk to me all together.</p>

    <p>My brother didn’t understand why I had to go and what the hell I was going to do there.</p>

    <p>My mom agreed with my dad.</p>

    <p>I felt terrible. A week before my scheduled flight I took a long look in the mirror 
      and seriously imagined for about 30 seconds not going.</p>

    <p>I felt my energy drop drastically. The things around me and in the mirror lost their 
      colour. At that moment, I knew I wouldn’t be able to live with myself if I didn’t go.</p>

    <p>So I told my family my decision was final, and I went.</p>

    <p>I only have a few regrets in my life. One of the biggest, or probably THE biggest, 
      is that I didn’t get up when Richard showed up with a friend at the tent I stayed in 
      at Nizhoni Camp close to Santa Fe in New Mexico.</p>

    <p>I was lying on my stomach on the floor. I was still so ashamed of my body that I 
      didn’t dare to get up and walk over to him. I felt awful! I didn’t know what to do, 
      so I did nothing.</p>

    <p>Maybe that didn’t matter to him, but I felt and still feel deeply ashamed of not 
      getting up. I just said, “Hey, hi.”</p>

    <p>Even though he wasn’t the reason I went to the US, I really wanted to see him there. 
      He showed up, unannounced, and what did I do.…?</p>

    <p>“I told you there would be a Dutch girl here.”</p>

    <p>Those were the last words I ever heard him say and the last time I saw him.</p>

    <p>The Nizhoni camp was fantastic, and I never regretted going there for a second. 
      The environment was magical and “home” to me. I had great fun with the people I met 
      and learned a lot!</p>

    <p>In the regression sessions I discovered a lot about about myself and the role of 
      certain people in my life. I also understood why I had the absolute urge to come to 
      this part of the U.S. And yes, I also found out the reason I felt such a deep 
      connection to Richard.</p>

    <p>When I got back home after almost four weeks, I had trouble sleeping in a bed in 
      a house. In the U.S. I was part of a group that slept outside instead of in the 
      tent. I had slept outside on the ground for weeks, and I missed that. Once back 
      home, I tried sleeping on the balcony. It obviously wasn’t the same. No clear sky 
      filled with stars, no coyote sounds, just the city sounds. After a couple days of 
      this, I went to bed, my head and heart full of amazing experiences and blissful 
      memories. Today I am so grateful I had the opportunity to go and darn proud of 
      myself that I actually went.</p>

    <p>PS: My eyesight improved from 5 percent to 90 percent in one eye, and from 50 
      percent to a 100 percent in the other.</p>
      
    <hr />

    <img src="images/EllenBakker.jpg" alt="">

    <p class="signature">Ellen Bakker is a certified Law of Attraction Life Coach, 
      a masters degree holder in Child Psychology, and a former member and coach of the Dutch national 
      table tennis team.</p>

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#23">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="coping-with-arthritis" />
    <p>&nbsp;</p>
    <h5>Coping with Arthritis</h5>
    <h6>by Tarryn Tomlinson</h6>

    <p>The pain was unbearable, sometimes stabbing and hot, other times dull and 
      throbbing. The doctors said there was no cure for the arthritis that ravaged 
      my joints. I took the medication, but it did nothing much for the pain and 
      discomfort. Not being one to take the opinions of others as law, I decided 
      to research this affliction and how I could go about getting some relief.</p>

    <p>I had always believed that the mind was powerful and that life was far more 
      magical than what I had been experiencing. I took the practical approach to 
      attempt to heal the illness; I changed my diet, took homeopathic meds, tried 
      acupuncture, went for body alignment and yoga. I tried just about anything 
      and everything, and it helped to a marginal degree. Over the years the disease 
      slowed down, and the pain lessened, but it was the mental work that got me 
      through the worst of it.</p>

    <p>I intensely studied the mind-body connection, my emotions, the power of positive 
      thinking, the perils of negative thinking, and the Universe at large. I believed 
      that our bodies and lives are the result of our thoughts and set about understanding 
      my route to constant physical pain.</p>

    <p>In 2007, things clicked for me in a big way. I had heard of the Law of Attraction 
      and had studied books on creative visualization, but only after I watched The Secret 
      did the simplicity of it all became apparent. The documentary in itself was a 
      confirmation of all that I have learned up until that point. Cutting away the 
      philosophy and mysticism introduced me to the simple three step process: Ask, 
      Believe, Receive.</p>

    <p>There is a point in the documentary when one of the teachers speaks of how he decided 
      to set a big goal for himself, one so big that if he achieved it, he would know it was 
      only because of what he had learned. I decided to do the same.</p>

    <p>However, I never concentrated on walking. What set my heart on fire was the idea of 
      going to live in Italy. For a long time I felt guilty about not concentrating on my 
      health but later came to understand that if a topic is too emotionally charged and 
      brings up too many fears it is best to get off the subject. The thought of living in 
      Italy felt free of the past, the pain, and the limitations. It brought me joy to think 
      about visiting Italy and excited me. I needed something to feel excited about.</p>

    <p>I decided that I wanted to visit Italy, but not just to go on a holiday. I wanted to 
      stay there for longer than a year, and I wanted to live in absolute luxury. I wanted 
      to experience the best Italy had to offer, because if what I was learning was the 
      truth, if the natural state of the Universe is one of abundance, and if any experienced 
      limitation was just a product of my own thoughts, then there was no reason why I should 
      not experience abundance on my trip.</p>

    <p>Dreams are beautiful things. They give you hope and make you live out in fantasy what 
      seems so far from reality. The reality of my situation at that time was that I was 
      wheelchair-bound with no source of income, no job, and no trust fund. There was 
      absolutely nothing in my reality that even resembled my dream, but I did not let that 
      stop me.</p>

    <p>I re-watched <em>The Secret</em> and did my journaling work on a daily basis. Each time 
      I watched the documentary, I carried myself away during that hour in complete belief. 
      The journaling helped me to process emotion and understand what I was thinking. I 
      used it each day to write down my affirmations.</p>

    <p>Months passed, months of watching, writing, believing, and standing guard over my 
      thoughts. I would be lying to you if I said I had perfect faith. I just gave it the 
      best attempt I could.</p>

    <p>I started watching <em>The Secret</em> in August, and by the time December came 
    around I had reached the height of my frustration. You could hear a pin drop in the
     silence of the nothingness the Universe presented to me. I remember sitting on my 
     chair in my mother's room, crying because all I wanted to do was to go to Italy, and 
     all my mental work was producing nothing.</p>

    <p>My mom hugged me and wiped my tears as she tried to alleviate my heartbreak. She then 
    decided that we would go to Italy together. She had leave coming to her the following 
    year in June, and we could go for 18 days then. Though this immediately eased my hurt, 
    I still had to figure out how to get my airfare, and 18 days was not what I asked for.</p>

    <p>Being desperate to get to Italy, this small move in the right direction to me was a 
      great relief. The money for the airfare quickly manifested when my aunt, who had 
      promised to purchase me a plane ticket years prior, made good on her promise.</p>

    <p>It was not until sometime towards the end of January of the following year that 
      something spooky started to take place.</p>

    <p>It was late in the afternoon, and I was going to have a bath. I decided to take my 
      phone with me into the bathroom, and I turned it on to listen to my messages. The 
      first voice I heard was that of a man: “Hi Tarryn. You don’t know me. My name is 
      Mike, and I am a friend of Nadia’s. She is not sure if you remember her, but she 
      asked me to contact you and pass on her details. She has some information about 
      your health.”</p>

    <p>Nadia was an acquaintance I had met four years prior. She contacted me from Paris, 
      saying that she had some news about my health. There was some type of natural 
      medication that was said would help decrease inflammation and abate the disease. 
      She had access to this medication because she worked at UNESCO for a well known 
      virologist, the very man who discovered HIV back in the 1980s. The problem was 
      that they could not send the medication to me because it was still in its trial 
      phase. I needed to go to Paris in order to have it administered.</p>

    <p>Though the offer was one worth trying, I simply didn’t have the funds to go to 
      Paris and financially look after myself for a month. I communicated this to her 
      and said that I planned to come to Italy in June/July. It just so happened that 
      they would be in Italy around the same time and could meet up with me to give me 
      the medication.</p>

    <p>Something was brewing in the Universe. I just didn’t know what or how all the 
      pieces would fit together.</p>

    <p>My first trip to Italy with my mom and friends was amazing. I remember the Trevi 
      fountain like it was yesterday. Rome on any given day is packed with tourists, and 
      that day around the Trevi fountain a horde of tourists stood to take in the magic
      of the place, and of course to take pictures. A friend suggested that I throw a 
      coin into the fountain. Apparently, if you throw a coin in, you will come back to 
      Rome. I simple shrugged it off telling him that I do not have money to waste. I 
      knew I was coming back.</p>

    <p>The fateful day arrived when Nadia and her boss came to meet me at my hotel room. 
      What an honour to meet face to face with such a great mind! Professor Montagnier 
      and Nadia sat down with my mother and I to explain the medication, reminding us 
      that it might or might not help, suggesting that it would be worth a try.</p>

    <p>It was the second-to-last day of my stay in Italy. At one point in our conversations, 
      Nadia turned to me, and with her excitable French accent said, “But Tarryn, you know 
      that you cannot go? You have to stay here in Italy.” She looked at her boss and said, 
      “Professor! Tell her!”</p>

    <p>After asking Nadia to calm down began, Professor Montagnier said the words I had 
      been praying to hear.</p>

    <p>“There is a possibility for you to stay in Italy. I know of a man who is a very 
      famous song writer who also has a type of arthritis like yours. He healed himself 
      with diet and a number of treatments and is now doing a trial on his estate. Maybe 
      we can talk to him about you being one of the candidates for the trial.”</p>

    <p>As cliché as it may sound, time stood still. I do not remember breathing very much 
      as each and every hair stood up on my arms. Listening with such intensity to what he 
      said, all my senses became heightened as competing thoughts were drowned out. It felt 
      like I was in the eye of a storm in my mind.</p>

    <p><em>This is it!</em> I thought. <strong><em>This is it.</em></strong></p>

    <p>After the moment passed and my mind reactivated with expressions of joy, I told 
      them that I simply could not stay as I had a Visa that was about to expire and 
      roughly 10 Euros left to my name.</p>

    <p>Both Nadia and the Professor suggested I return to South Africa, while they would 
      see what they could do from their end regarding the trial. A part of me disbelieved 
      it would work out. That censor voice said, “Don’t get your hopes up. You know how 
      people say stuff and do not follow through.”</p>

    <p>I did not allow that type of thinking to sink in. During the days that followed, 
      I argued against it, telling myself that I will not entertain negative thinking.</p>

    <p>My arrival back in South Africa was filled with wonder, gratitude, and excitement. 
      Instead of visualizing and affirming, I trusted that everything would work out 
      perfectly. I had put sufficient energy into the creation of what I wanted, and now 
      it was running of its own accord. I simply needed to trust.</p>

    <p>Four weeks after my arrival in South Africa, I ended up back on a plane to Rome. 
      I planned to stay in Umbria at the home of one of the most famous Italian lyricists 
      of all time, a man who goes by the name of Mogol. The estate is a sight to behold, 
      and I had everything I could possibly want and more.</p>

    <p>Close to midday, we finally drove the private road leading to the estate. The tall 
      trees hanging overhead provided shade as we drove down the winding road that led deeper 
      into the forest. I rolled down the window to feel the cool breeze caress my face, a 
      welcome reprieve from the stuffy, hot air of Rome.</p>

    <p>As a passenger, I had the luxury of taking it all in: the breeze, the shade, the 
      forest, and the other passengers in the car, one of them being the man who discovered 
      HIV. The chauffeur took the bend, and just like most things unexpected in Italy, a 
      huge clearing appeared ahead where I saw for the first time the magnificent estate 
      I would call home for what I thought would be a month. It took my breath away, and 
      as time slowed while the hairs rose on my arms, it dawned upon me that my
      manifestation far exceeded my dream.</p>

    <p>My first week there I made headline news in a national newspaper and was treated 
      like a celebrity. Professor Montagnier and my friend stayed with me the first week, 
      when he learned he had won the Nobel Prize for Medicine for his discovery of HIV.</p>

    <p>The treatment was best suited for people at the onset of arthritis, and too many 
      of my joints had been destroyed according to the doctors. They told me there was 
      nothing to be done. I was less than a month into my stay!</p>

    <p>I kept calm. A little while later, Mogol came to me with a proposal. He knew of a 
      good surgeon who could operate on me. I could stay on the estate, and he would 
      support me.</p>

    <p>The occurrences that followed are too numerous to mention. I traveled around Italy, 
      had amazing experiences, met fascinating people, and underwent two operations.</p>

    <p>When I returned to South Africa after close to two years living abroad, I did the 
      tally. The trip would have cost me about $150,000. I did not pay a cent out of my 
      own pocket. I am still wheelchair bound, but what is life without something to work 
      towards – something else to manifest?</p>

    <p>Since I have had this experience and manifested many other things, I have become 
      a coach. I also started a foundation for underprivileged kids by teaching them the 
      Law of Attraction.</p>
      
    <hr />

    <img src="images/TarrynTomlinson.jpg" alt="">

    <p class="signature">Tarryn Tomlinson is a life coach and public speaker living in 
      Cape Town, South Africa.</p>
    <p class="signature">She helps people learn to take responsibility for their own
      thoughts without blame.</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#24">Back To Top</a></p>
    <p>&nbsp;</p>
    <hr id="all-is-well"/>
    <p>&nbsp;</p>
    <h5>All is Well</h5>
    <h6>by Susan Murray</h6>

    <p>With my husband’s death grip on the steering wheel, our minivan careened down 
      I-540 keeping pace with the ambulance ahead of us. What began as concern that one 
      of our children was dehydrated after a night of vomiting became one of the most 
      harrowing experiences of our lives.</p>

    <p>Barely 15 hours earlier, our sweet family of five: mama, papa, daughter Laura, 
      just shy of 15, and our two sons, Eamon, aged 13, and Liam, almost 10, had just 
      completed our final Saturday night community theater performance of Oliver! We 
      looked forward to the final Sunday matinee performance the following day, and the 
      next chapter in our lives promised an overseas adventure for which we had been 
      preparing for eight long months.</p>

    <p>Laura, a member of an elite all-girl’s choir, had labored over knit goods she 
      sold in the community. She developed a loyal following of people who appreciated 
      her artistry and talent and were happy to pay for it. Together, the kids and I 
      began a small house-cleaning service to help further secure the funds necessary 
      for Laura to travel with her choir to Salzburg to perform in the Mozart Festival 
      that summer.</p>

    <p>Ours was a single-income, unschooling family. Funds may have been scarce, but 
      love and generosity were abundant. Even in our more cash-strapped times, through 
      the love and generosity of others, we managed to get what we needed and even much 
      of what we desired. Dennis, Laura, and I intended that Laura would travel to 
      Salzburg with her choir, and we were open and willing to do whatever was in our 
      power to get her there.</p>

    <p>Just when we’d nearly secured Laura’s travel fare, my mother decided to give Eamon 
      and me the gift of joining Laura on this once-in-a-lifetime adventure. We spent 
      several months studying German,  planning and preparing for our European excursion. 
      With Saturday’s performance “in the can,” we had just one more matinee until we 
      could begin the countdown and fully devote our energy to our upcoming trip to 
      Austria!</p>

    <p>Following that Saturday night performance, after changing out of her costume, 
      Laura complained of nausea and headache. A viral infection had been plaguing much 
      of the cast over the past couple weeks. We were grateful our family managed to avoid 
      it up to that point but assumed Laura was an unhappy recipient of the nasty bug. 
      What we wouldn’t know until days later is that she collapsed backstage during the 
      curtain call, requiring her scrambling cast mates to help her to her feet. Like a 
      consummate theater professional, she mustered the strength to walk out on stage and 
      take her bow.</p>

    <p>Once home from the theater, I did a web search of her symptoms: she was severely 
      nauseated without fever, and had headache radiating down the sides of her neck. 
      My little visit to “fearmongers dot com” did little to assuage our concerns, but 
      Dennis and I put her to bed, giving her some Boswellia extract to relieve her pain, 
      and then tag-teamed staying with her throughout the night. By morning, we were 
      finally convinced there was something seriously wrong with our beautiful daughter.</p>

    <p>On Sunday morning, Dennis gingerly placed Laura into the van, and we drove to our 
      local emergency room where a CT scan revealed she suffered a potentially fatal brain 
      hemorrhage.</p>

    <p>In an instant, a life full of hope, joy, and promise was turned on its head.</p>

    <p>We had no idea what lay ahead of us, but we knew that, though our lives were about 
      to be altered irrevocably, allowing ourselves to be beaten down by unforeseen 
      circumstances was not an option.</p>

    <p>Dennis and I had weathered many storms over the course of our 25-year relationship. 
      Whether it was due to the power of prayer, gratitude, affirmations, or the deep, 
      abiding belief that “all is well,” every time we pulled through and overcame whatever 
      hardship threatened to destroy the life we’d built together.</p>

    <p>We were determined this time would be no different.</p>

    <p>Matching the ambulance mile for mile, Dennis and I endured a fairly silent 30 
      minute drive from our local emergency room in Raleigh, NC, to the Duke University 
      Medical Center E.R. in Durham. We may not have spoken many words, but our hearts 
      and minds hummed in harmony: <em>All is well. All is well. All is well…</em></p>

    <p>Scans revealed that a mass in the fourth ventricle of Laura’s brain was the 
      cause of the hemorrhage; she would require emergency surgery to remove the mass 
      and repair the bleeding.</p>

    <p>Facing such a terrifying and unexpected event, I immediately began looking for 
      what was going <strong><em>right</em></strong> that day and found many things 
      worthy of gratitude.</p>

    <p>Despite this emergency occurring on the Sunday of Memorial Day weekend, an 
      internationally respected pediatric neurosurgeon was on call, and Laura was in 
      a world-class medical facility near our home rather than on an airplane 30,000 
      feet over the Atlantic, which could have easily been her fate had the brain 
      bleed occurred three weeks later.</p>

    <p>Despite living a 10-hour car ride away, my mother found a direct flight from 
      Cleveland to Raleigh, allowing her to arrive at the hospital before Laura was 
      wheeled into surgery, thanks to dear friends who conveyed her from the airport 
      to the medical center and then hosted her in their Durham home overnight.</p>

    <p>Thanks to the coordinated efforts of dear friends in our home town, not only 
      were our sons able to participate in the final matinee performance with the 
      community theater, but they were cared for in our absence.</p>

      <p>Home-prepared, nutritious food was brought to us at the hospital.</p>
      
      <p>We were surrounded by the people who loved us most and supported by the 
        rapidly expanding circle of prayer and affirmation warriors who blanketed us 
        with the energy of healing, protection, and God’s Highest and Best outcome 
        for this untenable situation.</p>

      <p>Our daughter sailed through the surgery, which took less time than 
        anticipated. The surgeon was confident he removed 100% of the mass.</p>

      <p>My husband and I brought great comfort and support to each other, and our 
        different perspectives helped balance and strengthen our decision-making process.</p>

      <p>More friends and acquaintances, some traveling great distances, came to the 
        hospital to comfort us and support Laura.</p>

      <p>We had a lot to be grateful for.</p>

      <p>Laura enjoyed a robust recovery following the trauma of surgery. But though 
        we held out hope the mass was a benign tumor, the results were not in our 
        favor. Diagnosis: medulloblastoma, an aggressive childhood brain cancer.</p>

      <p>It’s easy for hope, faith, and the enduring trust that, “the Universe has 
        your back” to quaver in the face of immense challenges. Holding on to the trust 
        that all is well when all physical evidence points to the contrary is itself 
        a major feat of manifesting.</p>

      <p>My husband has always been the more optimistic person between the two of us. 
        It comes naturally to him to see his glass as perpetually overflowing. I, on 
        the other hand, have my work cut out for me whenever it comes to trusting that 
        all that is happening in and around my life is “well with my soul.”</p>

      <p>Not surprisingly, our plans for the summer took a dramatic turn. Europe would 
        have to wait while Laura endured additional tests and procedures, including 
        painful and risky spinal taps and the collection of stem cells through pheresis. 
        Treatment included six weeks of head and spine irradiation, and four consecutive 
        rounds of inpatient, high-dose chemotherapy and stem cell transplants.</p>

      <p>We agreed that this challenge would be met head on, frequently irreverently, 
        often with humor, and always with unrelenting optimism.</p>

      <p>We treated every milestone of Laura’s protocol as a cause for celebration, 
        whether it was throwing a party at the salon, complete with guests, to mark the 
        occasion of Laura having her hip-length hair bobbed into a pixie cut prior to 
        radiation treatments, or celebrating the end of radiation with fireworks in our 
        cul-de-sac, or popping open a bottle of something sparkling to mark the end of 
        a round of treatment.</p>

      <p>Our family found things to celebrate and mark with gratitude throughout the 
        entire year.</p>

      <p>We also chose to incorporate holistic, natural healing strategies with the 
        mandatory cut, burn, and poison allopathy. Careful research and investigation, 
        followed by meticulous implementation helped all of us feel empowered and 
        actively part of the process.</p>

      <p>The gifts from that year have been abundant and are still revealing themselves
        to us. Laura continues to be 100% cancer-free since her surgery on May 30, 2006.</p>

      <p>The integrative practices we utilized during and after her oncology treatment 
        protected her from the aggressively toxic protocol; with the exception of some 
        mild cognitive challenges and very, very thin hair (thanks to the radiation 
        treatments) she emerged from the experience relatively unscathed and even has 
        her fertility intact. She graduated from college and is employed in her chosen 
        field.</p>

      <p>Our “cancer year” inspired me to author a book, <em>Walking on the Ceiling: 
        Reflections on Life Turned Upside Down by Pediatric Cancer</em> and to become 
        a certified holistic coach. I now help others experiencing cancer develop and 
        implement their own anticancer lifestyle.</p>

      <p>And Europe? It was still there a year later, but this time, thanks to the 
        generosity of the Make A Wish Foundation, our entire family enjoyed an enchanting, 
        life-affirming visit to Italy.</p>

      <p>All is well!</p>
      
    <hr />

    <img src="images/SusanMurray.jpg" alt="">

    <p class="signature">Susan Murray</p>
    <p class="signature">Certified Holistic Coach, Radiant Health Institute</p>
    <p class="signature">Reiki Master, Certified through Lisa Powers, CRMT</p>

    <p>&nbsp;</p>
    <p class="centerNoIndent"><a href="#25">Back To Top</a></p>
    <p>&nbsp;</p>
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
  .signature, .centerNoIndent {text-text-decoration: underline;
    text-indent: 0;
  }
</style>