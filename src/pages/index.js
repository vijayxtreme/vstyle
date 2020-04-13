import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{textAlign: `center`}}>
      <h2>Vijay Menon</h2>
      <p>Full Stack Developer</p>
      <p><a target="_blank" href="https://github.com/vijayxtreme">Github</a> | <a target="_blank" href="https://twitter.com/vijayxtreme">Twitter</a> | <a target="_blank" href="https://linkedin.com/in/vijayxtreme">LinkedIn</a> | <a target="_blank" href="https://slides.com/javascriptla">Slides.com</a></p>
    </section>
    <section>
      <h3>Thanks For Visiting!</h3>
      <p>Hi, and welcome to my web developer portfolio.  I decided to create a portfolio given that the traditional 'paper' resume feels a bit incomplete in this modern era.  It feels a bit impossible to sum up EVERYTHING about me onto two pieces of paper.</p>
      <p>I realize some people just want the "cliff notes", and so yes I would hand them a resume, but for those who are more detail oriented like myself, I think they would appreciate a website like this.</p>
      <h3>So Who Am I? </h3>
      <p>I go by Vijay (rhymes with D.J.), or if you are an Indian, you’ll know my name sounds more like "Vih" jay.   Either way is fine with me, so long as you don’t call me VY-JAY or my favorite (V-HEY) — totally wrong.  It goes without saying, if you butcher my name — I probably might ignore you on voicemail :).  (Thank God for email right?).   As for my last name; it sounds like "Men" -"Inn".  "By Mennen!"</p>  
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
        
        <p style={{textAlign: `left`}}>Often by going back through history and understanding the decisions made, you can use that as leverage to build something that works even better given your newer awareness of technologies and ideas available.   Even if you build nothing, you’ll at least have more understanding of something works, so when you do have to use the legacy software, you can use it to its full potential rather than throwing it away as garbage.   Even if no one uses Assembly Langage anymore, as in the case of Nintendo and Sega, it’s still great to know how the computer works at the base level, so when you write new applications in higher programming languages like Python and JavaScript, you can make your programs as optimal and performant as possible.     React works great as a JavaScript framework, but if you know your JavaScript fundamentals, you’ll be able to write React code that works even better as leverage.</p>
      </div>
      <div>
        <h4>Don’t Reinvent the Wheel — But Do Break It, And Often.</h4>
        <p style={{textAlign: `left`}}>If I were going to code a new website today, I might use Drupal with Gatsby.   Both these web technologies are really great and do a lot of amazing things to help me get a robust, stable, fast and efficient website out to market.    I might even be lazy and just use Wordpress.    My own website, <a href="https://javascriptla.net" target="_blank">JavaScriptLA</a>, runs on Wordpress.</p>   

        <p style={{textAlign: `left`}}>Why? Because they work — if I had to write my own Drupal, React, Gatsby or Wordpress from scratch, it would take me years and years of time that I just don’t have.   In a business sense, we needed the website YESTERDAY.</p>
        
        <p style={{textAlign: `left`}}>Yet at the same time — if I am going to work with these technologies, you can bet for sure I am going to kick the tires around and examine what’s going on under the hood of each “engine”.   For fun, I might rewrite some of the components inside just to see what happens if I break things.   And I’ll do this quite often.    Through breaking things, we learn why stuff was written a certain way, and that gives us insight on how to leverage the platform/language, as well as possibly contribute to its future development — OR start something brand new that may do things better.   Many of the great new things we see coming out (daily) are the result of developers learning something old, playing around with it, breaking it and then writing something newer from scratch that solves a certain problem the legacy software couldn’t; then getting an open source community to help jump in on the idea.   It’s through breaking things, we improve our own understanding of how they might work and thus helps us learn how to build things even better (or at least maintain the things that we support).</p>
      </div>
    </section>
    </Layout>
)

export default IndexPage