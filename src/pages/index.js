import React from "react"
import { Link } from "gatsby"
import vijayImage from "../images/vijay.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{textAlign: `center`}}>
      <p><img style={{border: `4px solid #ccc`, borderRadius:`100%` }} src={vijayImage} /></p>
      <h2>Vijay Menon</h2>
      <p><strong>Full Stack Developer</strong></p>
      <p><a target="_blank" href="https://github.com/vijayxtreme">Github</a> | <a target="_blank" href="https://twitter.com/vijayxtreme">Twitter</a> | <a target="_blank" href="https://linkedin.com/in/vijayxtreme">LinkedIn</a> | <a target="_blank" href="https://slides.com/javascriptla">Slides.com</a> | <a target="_blank" href="https://javascriptla.net">JavaScriptLA</a> | <a target="_blank" href="https://hackbuddy.com">HackBuddy.com</a></p> 
    </section>
    <section>
      <h3>Thanks For Visiting!</h3>
      <p>Hi, and welcome to my web developer portfolio.  I decided to create a portfolio given that the traditional 'paper' resume feels a bit incomplete in this modern era.  It feels a bit impossible to sum up EVERYTHING about me onto two pieces of paper.</p>
      <p>I realize some people just want the "cliff notes", and so yes I would hand them a resume, but for those who are more detail oriented like myself, I think they would appreciate a website like this.</p>
      <h3>So Who Am I? </h3>
      <p>I go by Vijay (rhymes with D.J.), or if you are an Indian, you’ll know my name sounds more like "Vih" jay.   Either way is fine with me, so long as you don’t call me VY-JAY or my favorite (V-HEY) — totally wrong.  It goes without saying, if you butcher my name — I probably might ignore you on voicemail :).  (Thank God for email right?).   As for my last name; it sounds like "Men" -"Inn".  <a href="https://www.youtube.com/watch?v=daG-0KkirDI" target="_blank">"By Mennen!"</a></p>  
      <p>For the past 10 years, I’ve been working in sunny Southern California as a self-taught web developer using programming languages like PHP and JavaScript.   My specialty has been building websites using platforms like Wordpress, Drupal, Zend and Django.   Along the way, I also started a group called <a target="_blank" href="https://javascriptla.net">JavaScriptLA</a> which helps developers like myself become better with JavaScript tools and frameworks like React, Angular and Vue.js.   I have also mentored and taught at coding bootcamps like General Assembly and Thinkful — all which I can say has helped me really understand how to learn and study better, and help others as well get up to speed on changing technologies.</p>
      <p>Currently I am studying data structures and algorithms, as I find this aspect of computer science extremely useful in helping me approach ordinary programming.   I also have "gone back to school" to learn Java, C++ and Python, primarily to learn more about how computers actually work; so when I write web applications and programs, they’re not only visually aesthetic, but amazingly efficient.   I am also interested in Amazon Web Services (AWS), Azure, Linux, Docker, and cloud development — as these technologies give me endless freedom to practice and try rebuilding legacy applications into modern applications that are cost-efficient, faster and "just work".</p>
    </section>
    <section style={{textAlign: `center`}}>
      <h3>My Core Principles & Philosophies (When It Comes to Design & Development)</h3>
      <div>
        <h4>Keep It Simple</h4>
        <p style={{textAlign: `left`}}>The simpler, the better.  I use this approach to evaluate all aspects of my life;  especially my projects at work.    Simple is reliable.   I use simplicity to help me answer probably the most important question of my day — “I wonder what’s for dinner?”  By knowing how to make simple things like a salad, or a sandwich; I’ve covered my bases.   We can always add complexity later, but at least if you have something simple that works — you’re covered.   I believe this is the same approach people should fall back to when it comes to business, making money.  Have a simple plan in place first, so that when your more complicated one fails — you still can keep the lights on.</p>
      </div>
      <div>
        <h4>Build for Practicality, Real World Use First, Then Make It Pretty</h4>
        <p style={{textAlign: `left`}}>This philosophy extends the Keep It Simple principle.  I love pretty just as much as the next Apple product enthusiast, but if I had to pick between practicality or prettiness, practicality wins every time.</p>
        
        <p style={{textAlign: `left`}}>I’d rather make an ugly portfolio that explains who I am and what I do well than a beautiful site that cost me a lot of time/money and doesn’t help me get a job.   Reddit and Craigslist are ugly, but people still use them more for blogging/e-commerce than their own custom websites.</p>

        <p style={{textAlign: `left`}}>By the way, making it pretty is much better than being “pretty”.  At least through hard work, you can iterate and find out what makes something pretty and then finally start selling.   I’d much rather learn how to make something pretty than just have something given to me and take it for granted.  (Hence, this is why I love designing rather than just being okay with designs given by someone else who may not really care).</p>
      </div>
      <div>
        <h4>Respect The Grind</h4>
        <p style={{textAlign: `left`}}>I believe in the iterative approach to web development and design.   I know a lot of managers out there want to get it right the first time, and have worked for some managers that demand FAST, PIXEL PERFECT, and IT JUST WORKS!</p>  

        <p style={{textAlign: `left`}}>After ten years of web development, I can truly say that NOTHING will ever be right the first time you build something.   It takes iteration; you have to try, fail, try, fail, try, fail and eventually something will actually work right.   The best companies hide this “try/fail” from the public well — hence when they finally launch something that looks and feels amazing to you, you think they got it right the first time.   Just take a walk through history on any brand you love and check out what they looked like in their early days — you’ll be shocked at how much has changed, and how much was so ugly the “first time” they tried to do it right.</p>   
        
        <p style={{textAlign: `left`}}>Good ideas take time, and the best ideas take iteration.  Yourself and your team also need to be able to iterate to generate solid ideas.  Keep the faith that you’ll get it right eventually, but you also need to respect the “grind”. </p>
      </div>
      <div>
        <h4>Respect The History.  Use It As Leverage.</h4>
        <p style={{textAlign: `left`}}>I meet a lot of developers who balk at the first sign of legacy code.   “Eww Java?  Back away!”   “PHP SUCKS”.  “JQuery IS TRASH”.</p>   

        <p style={{textAlign: `left`}}>I don’t understand all the hate.   These technologies were invented because they were meant to solve specific problems.   Java was invented to make it easier to work cross platform with different computer architectures; until then C++ and Assembly had to be written for specific computer architectures; otherwise companies would have to spend 3-4x as much money writing the same set of instructions to work for all platforms it supported.   Cross platform support is the reason why PlayStation was able to break away from Assembly unlike Nintendo and Sega, leaving them in the dust and gaining tons of new developers and gamer support.</p>   
        
        <p style={{textAlign: `left`}}>PHP was meant to make it easier to build websites; even to this day it is the easiest web language to work with and enables many non-coders to create websites in minutes with platforms like Wordpress and Drupal.   It may be clunky, but it gets the job done.   JQuery made it easier to write JavaScript, something that even now is still difficult especially when writing code that works cross-platform, and JQuery is one of the first JavaScript languages that led the way to writing higher order JavaScript functions; something many developers who hate on JQuery are unable to write on their own.</p>   
        
        <p style={{textAlign: `left`}}>Often by going back through history and understanding the decisions made, you can use that as leverage to build something that works even better given your newer awareness of technologies and ideas available.   Even if you build nothing, you’ll at least have more understanding of how something works, so when you do have to use the legacy software, you can use it to its full potential rather than throwing it away as garbage.   Even if no one uses Assembly Langage anymore, as in the case of Nintendo and Sega, it’s still great to know how the computer works at the base level, so when you write new applications in higher programming languages like Python and JavaScript, you can make your programs as optimal and performant as possible.     React works great as a JavaScript framework, but if you know your JavaScript fundamentals, you’ll be able to write React code that works even better as leverage.</p>
      </div>
      <div>
        <h4>Don’t Reinvent the Wheel — But Do Break It, And Often.</h4>
        <p style={{textAlign: `left`}}>If I were going to code a new website today, I might use Drupal with Gatsby.   Both these web technologies are really great and do a lot of amazing things to help me get a robust, stable, fast and efficient website out to market.    I might even be lazy and just use Wordpress.    My own website, <a href="https://javascriptla.net" target="_blank">JavaScriptLA</a>, runs on Wordpress.</p>   

        <p style={{textAlign: `left`}}>Why? Because they work — if I had to write my own Drupal, React, Gatsby or Wordpress from scratch, it would take me years and years of time that I just don’t have.   In a business sense, we needed the website YESTERDAY.</p>
        
        <p style={{textAlign: `left`}}>Yet at the same time — if I am going to work with these technologies, you can bet for sure I am going to kick the tires around and examine what’s going on under the hood of each “engine”.   For fun, I might rewrite some of the components inside just to see what happens if I break things.   And I’ll do this quite often.    Through breaking things, we learn why stuff was written a certain way, and that gives us insight on how to leverage the platform/language, as well as possibly contribute to its future development — OR start something brand new that may do things better.   Many of the great new things we see coming out (daily) are the result of developers learning something old, playing around with it, breaking it and then writing something newer from scratch that solves a certain problem the legacy software couldn’t; then getting an open source community to help jump in on the idea.   It’s through breaking things, we improve our own understanding of how they might work and thus helps us learn how to build things even better (or at least maintain the things that we support).</p>
      </div>
      <div>
      <h4>You're the Noise, Until You're the Signal</h4> 

      <p style={{textAlign: `left`}}>One of my favorite heroes of all time is the singer Michael Jackson.  I have a ton of heroes actually, but every time I come back to revisiting Michael Jackson, I'm still blown away how talented the guy truly was.</p>

      <p style={{textAlign: `left`}}>Of course he could sing well, but the thing that defined him way above any other musician of that time period was his insane creativity.  But this is because he was so dialed into his craft, it only made sense.  Take a minute and YouTube Michael Jackson right now, look up <a href="https://www.youtube.com/watch?v=1RNPVpFEztA" target="_blank">Michael Jackson Spin</a>.   He could spin so many times in one go -- can you even spin once without losing your balance?</p> 

      <p style={{textAlign: `left`}}>Michael Jackson was known for being a perfectionist, if you watch any of his interviews where he talks about his work, he is always talking about what he could have done better (despite blowing other peoples' minds).  <a href="https://youtu.be/AG-ckOMg4MY?t=539." target="_blank">Check out this video</a> here where he talks about his performance in 1983 for Billie Jean (the night that propelled him into Hollywood fame).    He talks about how he wished he could have finished his 5 spins into a freeze and hold, but instead his feet gave out which made him angry.  Yet it was Fred Astaire who called him the next day (one of my Michael's many sources of inspiration and a legend in his own right) that told Michael he was absolutely blown away.  Think of how dialed in Michael was, to have his own mentor be blown away!  </p>

      <p style={{textAlign: `left`}}>I think Michael Jackson was one of the few people who understood the principle of the "Signal and the Noise".  Essentially, we're all trying to compete for people's attention; especially when it comes to getting / finding work.  Even though we are working really hard and think we are so great -- we're just "noise", meaning that other people don't really hear or see what we are trying to show them, especially in a crowded market full of competitors.  That's why Michael worked so hard, he was constantly sourcing material, looking for ideas, reworking old ideas into new ideas, merging theater with music, because he wanted to be the signal.  And he became the signal -- for years and years he dominated because his music was beyond anything the world had ever seen.</p>  

      <p style={{textAlign: `left`}}>To wrap up, ultimately when you are working -- you need to ask yourself from time to time, are you just making noise, and if you are how do you become the signal?  It's really important because people pay attention to signals, not noise.  I know that's really hard to do, but hey it is possible for anyone.  Remember Michael Jackson could have just been another Motown singer, but it was this concept that made him Michael Jackson instead.</p>
      </div>
      <div>
      <h4>Build Degrees of Complexity</h4>

      <p style={{textAlign: `left`}}>To really succeed in life, you can't be happy with a couple of skills you have right now. It's great that you worked really hard for them, especially if you are like me, someone who went to college, got a degree and expected to be set up for life after "4 years of hard work".</p>  

      <p style={{textAlign: `left`}}>I always think of how stupid I must sound to someone else when I tell them I graduated from college with a degree.  Yet, as a young 20 something I expected people to think I was somehow in a higher place in life than they were; I was educated compared to someone who might be working in a grocery store bagging groceries.</p> 

      <p style={{textAlign: `left`}}>The truth is, I've worked for people who've never gone to college and somehow ended up being my boss or my boss' boss.  One guy I used to look down on is now a certified multi-millionaire.  In fact the last 10 years of my life have just been one bitter truth pill after another.</p> 

      <p style={{textAlign: `left`}}>I would think, how the *&^% did this person get ahead of me in life? I just don't get it! I'm supposed to be smarter than them but they totally kicked my ass.  What is it they have that I don't?</p>  

      <p style={{textAlign: `left`}}>The answer is degrees of complexity.  While I was thinking I was so great for having a college degree, that low level grocery bagger was studying hard at night to acquire new, useful skills that could make he or she money; and right now.  While I was spending nights feeling sorry for myself that no one cared about how smart I was and how I couldn't get a raise even after years of working "hard"; this other person networked hard and made great new connections and take opportunities that I never did.</p>  

      <p style={{textAlign: `left`}}>When I started feeling like I needed to work harder, this person had already learnt most everything I learned in college, and more and could be the boss.   Suddenly I was working for this person.  And then I was mad, because they were ahead, so I kept focusing my anger at them instead of on myself.  That didn't matter to them, in fact, they kept adding more degrees of complexity -- next they wanted to make their first million, so they began hustling very hard (to the point I'd be really tired and exhausted).  They built the stamina to keep going, (one more layer of complexity I didn't have), and in a few years they were able to sell a side company they were working on for their first million.  Meanwhile, I was still upset because I had been working 5 years and was still at the same salary and suddenly realizing my skills might soon be outdated; I'd probably need to go back to school!</p>  

      <p style={{textAlign: `left`}}>As I continued to watch this other person sail ahead, I realized in the end I was the uneducated one.  And then I realized, I couldn't compete with them anymore.  They had something I didn't have -- I had the college degree, but they had degrees of complexity. In the end, it's not about your college degree, it's about the degree of how much value you can create for yourself with the time you have.  Use degrees of complexity to help you succeed and win the big prizes in life.</p>
      </div>
  <div>
    <h4>Take the Initiative -- Because You Are Your Greatest Investor</h4>

    <p style={{textAlign: `left`}}>This is a core principle of mine.  I have to remind myself quite often that if I have a good idea, it doesn't matter to others all that much -- most often they'll view it as noise; even if they are my friend or my family member.</p>

    <p style={{textAlign: `left`}}>A lot of times in the past, I'd feel really discouraged if I didn't get any feedback on my idea.  Heck even now, if I post to Instagram a cool picture of myself or some awesome thing I did over the weekend only to get 1 or 2 likes -- one from myself and one from my mom, I feel like I failed and probably should just take down the post.</p>

    <p style={{textAlign: `left`}}>Yet, it's on me to keep going.  If I stop and give up, then I'm never going to get better.</p>  

    <p style={{textAlign: `left`}}>This is how I feel right now about my journey with data structures and algorithms, as well as learning to design.  I feel inferior to a lot of people who are already great; why should I even bother continuing on?</p>

    <p style={{textAlign: `left`}}>The reason for going on is because I'm my greatest investor.  I may not have money, but I do have time and love for myself.  Those are good investments, and so long as I put in the time and love for myself, my work -- I'll be able to keep getting better, and it becomes one extra degree of complexity I can use for later to make jumps others won't be able to.   So from that perspective, it's worth it.</p>  

    <p style={{textAlign: `left`}}>Today it might be stupid, but take the initiative -- no one else is going to own something like you do, and so long as you keep at it, it'll get better.   Jeff Bezos made Amazon.com in his garage in 1993 and worked at it for near 30 years; now he's the richest guy in the world.  Dial in and start taking initiative to do things, and you will eventually get others noticing the signal, wanting to help out, then you realize your investment wasn't so stupid; in fact it's paying off big time!  You are your greatest investor.</p> 
  </div>
    </section>
    </Layout>
)

export default IndexPage