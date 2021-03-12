import React from "react"
import { Link } from "gatsby"
import vijayImage from "../images/vijay.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{textAlign: `center`}}>
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
    
    </section>
    </Layout>
)

export default IndexPage