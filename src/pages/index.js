import React, { useEffect } from "react"
import { Link } from "gatsby"
import vijayImage from "../images/vijay.png"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <section
        className="jumbo vaporwave text-center"
        style={{ paddingTop: `150px` }}
      >
        <h2 className="title">Full Stack Engineer</h2>
        <p>
          <span className="vaporwave-text">[ Vijay . Menon ]</span>
        </p>
        <p className="mt-5">
          <a target="_blank" href="https://github.com/vijayxtreme">
            Github
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://twitter.com/vijayxtreme">
            Twitter
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://linkedin.com/in/vijayxtreme">
            LinkedIn
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://slides.com/javascriptla">
            Slides.com
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://javascriptla.net">
            JavaScriptLA
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://hackbuddy.com">
            HackBuddy.com
          </a>
        </p>
      </section>
      <Container>
        <section className="mt-5">
          <h3>Thanks For Visiting!</h3>
          <p>
            Hi, and welcome to my web developer portfolio. I decided to create a
            portfolio given that the traditional 'paper' resume feels a bit
            incomplete in this modern era. It feels a bit impossible to sum up
            EVERYTHING about me onto two pieces of paper.
          </p>
          <p>
            I realize some people just want the "cliff notes", and so yes I
            would hand them a resume, but for those who are more detail oriented
            like myself, I think they would appreciate a website like this.
          </p>
          <h3>So Who Am I? </h3>
          <p>
            I go by Vijay (rhymes with D.J.), or if you are an Indian, you’ll
            know my name sounds more like "Vih" jay. Either way is fine with me,
            so long as you don’t call me VY-JAY or my favorite (V-HEY) — totally
            wrong. It goes without saying, if you butcher my name — I probably
            might ignore you on voicemail :). (Thank God for email right?). As
            for my last name; it sounds like "Men" -"Inn".{" "}
            <a
              href="https://www.youtube.com/watch?v=daG-0KkirDI"
              target="_blank"
            >
              "By Mennen!"
            </a>
          </p>
          <p>
            For the past 10 years, I’ve been working in sunny Southern
            California as a self-taught web developer using programming
            languages like PHP and JavaScript. My specialty has been building
            websites using platforms like Wordpress, Drupal, Zend and Django.
            Along the way, I also started a group called{" "}
            <a target="_blank" href="https://javascriptla.net">
              JavaScriptLA
            </a>{" "}
            which helps developers like myself become better with JavaScript
            tools and frameworks like React, Angular and Vue.js. I have also
            mentored and taught at coding bootcamps like General Assembly and
            Thinkful — all which I can say has helped me really understand how
            to learn and study better, and help others as well get up to speed
            on changing technologies.
          </p>
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
