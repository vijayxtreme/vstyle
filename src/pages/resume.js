import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container, Card } from "react-bootstrap";
import Breadcrumb from "../components/breadcrumb";

const ExperiencePage = () => {
  let createLayout = (arr) => {
    let output = [];

    output = arr
      .sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      })
      .map((item, idx) => (
        <div className="col-md-4">
          <Card className="mr-1 mb-4" key={idx}>
            <a target="_blank" rel="noreferrer" href={`https://${item.link}`}>
              <Card.Body className="">{item.title}</Card.Body>
            </a>
          </Card>
        </div>
      ));
    return output;
  };

  const radnetWebsites = [
    {
      title: "Arizona Diagnostic Radiology",
      link: "arizonadiagnosticradiology.com",
    },
    { title: "Rad.Link", link: "rad.link" },
    { title: "Walk-In X-Rays", link: "radnetimaging.com/walk-ins" },
    { title: "Prostate@RadNet", link: "prostate.radnet.com" },
    { title: "Applications RadNet", link: "applications.radnet.com" },
    { title: "RadNet Choice", link: "choice.radnet.com" },
    { title: "APACF", link: "apacf.org" },
    { title: "RadNetTV", link: "radnet.tv" },
    { title: "RadNet.com & All Location Sites", link: "radnet.com" },
    { title: "RadNet Imaging", link: "radnetimaging.com/here-for-you" },
    { title: "Wave Imaging", link: "waveimagingnetwork.com" },
    { title: "Breastlink", link: "newyork.breastlink.com" },
    { title: "40not50", link: "40not50.org" },
    { title: "CRC", link: "cancerresearchcollaboration.org" },
    { title: "MSK", link: "msk.radnet.com" },
    { title: "BreastCare", link: "breastcare.com" },
  ];

  const budgetWebsites = [
    { title: "BudgetVanLines", link: "budgetvanlines.com" },
    { title: "iMover", link: "imover.com" },
    { title: "Equate Media", link: "equatemedia.com" },
    { title: "GotMovers", link: "gotmovers.com" },
    { title: "ULoad", link: "uload.com" },
    { title: "Review Weekly", link: "review-weekly.com" },
  ];

  let radnetOutput = createLayout(radnetWebsites);
  let budgetOutput = createLayout(budgetWebsites);

  return (
    <Layout>
      <Seo title="Resume" />
      <Breadcrumb title="Resume" />
      <Container style={{ marginTop: `2rem` }}>
        <section>
          <h2>Download A Resume</h2>
          <a
            href="https://docs.google.com/document/d/1ZOmuCrBLP47RVTn4gcDXcm4XkVa3qlF7EtM6sBJOVe0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </section>
        <section className="mt-5">
          <h3 style={{ textAlign: `center` }}>Work Experience</h3>
          <p>
            <strong>
              Sr Software Engineer,{" "}
              <a href="https://radnet.com" target="_blank" rel="noreferrer">
                Beachbody
              </a>
            </strong>
            <br />
            Santa Monica, California
            <br />
            Apr 2021 - Current
          </p>
        </section>
        <section className="mt-5">
          <p>
            <strong>
              Web Developer,{" "}
              <a href="https://radnet.com" target="_blank" rel="noreferrer">
                RadNet.com
              </a>
            </strong>
            <br />
            Orange County, California
            <br />
            Nov 2016 - Apr 2021
          </p>
          <p>
            Responsible for full stack web development for{" "}
            <a href="https://radnet.com" target="_blank" rel="noreferrer">
              RadNet
            </a>{" "}
            (NYSE:{" "}
            <a href="https://finance.yahoo.com/quote/RDNT" target="_blank" rel="noreferrer">
              RDNT
            </a>
            ) (Diagnostic imaging centers and research) in Santa Ana, California.
          </p>
          <p>
            My primary responsibilities were to design and develop websites, landing pages that help
            promote RadNet imaging technologies, research and applications that interface with
            RadNet customers. I was tasked with making improvements to UI, front-end, backend and
            relevant software engineering aspects to help improve the overall experience of
            customers utilizing RadNet web services.
          </p>
          <p>
            Technologies utilized: HTML5, CSS3/SASS, Bootstrap, JavaScript, JQuery, D3, React,
            Angular, Node.js, Express, PHP, Drupal 7/8, Wordpress, SQL/APEX, AWS, MongoDB. Strong
            with Illustrator, Photoshop, Sketch and Figma. Familiar with SCRUM/Agile methodology,
            use Kanban style JIRA/Trello for project management.{" "}
          </p>
          <div>
            <p>Work Samples:</p>
            <div className="grid">{radnetOutput}</div>
          </div>
          <ul>
            <li>
              Implemented new stacks on state-of-the-art frameworks like React, Angular to help
              improve items like page speed, ease of use with websites, security and accessibility
            </li>
            <li>
              Helped migrate websites from Pantheon to AWS, huge cost savings for company, as well
              as future proofing using the cloud.
            </li>
            <li>
              Converted legacy websites using Drupal 7 and PHP5 to newer websites on Gatsby & React
              with Drupal 8 as a headless CMS.
            </li>
          </ul>
        </section>
        <section className="mt-5">
          <p>
            <strong>
              Web Developer,{" "}
              <a href="https://equatemedia.com" target="_blank" rel="noreferrer">
                Equate Media
              </a>
            </strong>
            <br />
            Los Angeles, California
            <br />
            May 2015 - Nov 2016
          </p>
          <p>
            Developed desktop and responsive for websites like Budget Van Lines (aka Equate Media),
            a moving company in Los Angeles for households and apartments. Technologies used
            included Zend PHP, Wordpress, HTML, CSS, JavaScript, JQuery, Angular 1, React on
            frontend. Additionally worked with JQuery plugins, D3.js, Greensock API, Wordpress and
            Gulp/Grunt/Bower to make sites more performant and employ better UI. Worked with tools
            like Photoshop, Illustrator and Sketch to generate new ideas and landing pages.
          </p>
          <div>
            <p>Work Samples:</p>
            <div className="grid">{budgetOutput}</div>
          </div>
          <ul>
            <li>
              Landing pages that I designed helped generate new traffic and sales for Budget Van
              Lines, allowing our department to hire more workers and build new websites like Uload,
              Equate, iMover. The landing pages reduced the amount of steps from previous landing
              pages to help get customers quickly over to contacting sales instead of struggling
              with the UI.
            </li>
            <li>
              Used the latest in JQuery and CSS3 Animations to make websites that were fast,
              performant and interactive for the customer (improvements included custom datepickers,
              improved cost calculators, Google Maps integration, and less loading time per pages;
              we improved our page score and rank on Google as a result).
            </li>
          </ul>
        </section>
        <section className="mt-5">
          <p>
            <strong>Web Developer, Freelance & Contract Roles</strong>
            <br />
            Los Angeles, California
            <br />
            2011 - 2014
          </p>
          <p>
            Worked freelance, contract for companies like{" "}
            <a target="_blank" rel="noreferrer" href="https://www.trafficzoom.com">
              TrafficZoom
            </a>
            ,{" "}
            <a target="_blank" rel="noreferrer" href="https://preeninc.com">
              PreenInc
            </a>
            ,{" "}
            <a target="_blank" rel="noreferrer" href="https://telescope.tv">
              Telescope
            </a>
            ,{" "}
            <a target="_blank" rel="noreferrer" href="https://zachorfoundation.org">
              Zachor Foundation
            </a>
            ,{" "}
            <a target="_blank" rel="noreferrer" href="https://vs-corp.com">
              Verdure Sciences
            </a>{" "}
            among others. Stacks worked on included Wordpress for CMS, LAMP (Linux, Apache, MySQL,
            PHP) for backend development, and JavaScript/JQuery for front-end development. Began my
            transition from business development to web development with TrafficZoom, coding small
            Wordpress sites and social media pages to more robust webpages with Neoganda Agency
            where I made websites for movies like Grown Ups 2 and Cloudy With A Chance of Meatballs,
            as well as directly worked on their advertising software website,{" "}
            <a target="_blank" rel="noreferrer" href="https://addroid.com">
              Addroid
            </a>
            . I also helped create pages for popular shows like The Voice at Telescope, and full
            websites for Verdure Sciences and PreenInc, an interior design firm for restaurants in
            Hollywood.
          </p>
        </section>
        <section className="mt-5">
          <p>
            <strong>
              Marketing Project Manager,{" "}
              <a href="https://pe.com" target="_blank" rel="noreferrer">
                The Press-Enterprise | PE.com
              </a>
            </strong>
            <br />
            Riverside, California
            <br />
            2005 - 2011
          </p>
          <p>
            Worked directly for General Manager of Interactive Media for Digital Advertising. Was
            responsible for sales development in online advertising categories such as Automotive,
            Real Estate, Retail and Classified advertising. Helped with the strategy and tactics
            behind the launches of many revenue generating initiatives such as Cars.com with PE.cars
            for our Automotive category, PE.WOW, a motorcycle, boat and RV publication, PE.homes,
            PE.jobs, and PE.buy for Retail shopping. Duties included forecasting, sales plan and
            strategy development, creating marketing collateral and designs, infield and outfield
            sales calls, sales training, sales assistance, and marketing research with tools like
            SQL, Excel, Google Analytics. Helped generate and manage over $12 million in annual
            sales for PE.com.
          </p>
        </section>
        <section className="mt-5">
          <h3 style={{ textAlign: `center` }}>Education</h3>
          <p>
            <strong>University of California, Riverside</strong>
            <br />
            BA, Business Economics
            <br />
            2001 - 2005
          </p>
        </section>
        <section className="mt-5">
          <h3 style={{ textAlign: `center` }}>Teaching & Mentorship</h3>
          <p>
            <strong>
              <a target="_blank" rel="noreferrer" href="https://javascriptla.net">
                JavaScriptLA
              </a>
            </strong>
            <br />
            Head Organizer
            <br />
            2012 - Present
          </p>
          <p>
            Organize and host meetups for JavaScript technologies and frameworks monthly in Los
            Angeles and Orange County. Technologies covered include: JavaScript, JQuery, React,
            Angular, Node.js, AWS, Azure, TypeScript, Docker, MongoDB, NoSQL, and more. I have
            personally given talks at JavaScriptLA on Angular, EcmaScript 6, React, and Redux, as
            well as mentored many attendees through JavaScriptLA on the fundamentals of JavaScript.
          </p>
          <p>Presentations I Gave</p>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=T9xHk8uNjSg&list=PLzVJ4BkY_MBDdsRI9GaKNDq3Gsfv41o14"
                target="_blank"
                rel="noreferrer"
              >
                YouTube Guide To ES6 Playlist
              </a>
            </li>
            <li>
              <a
                href="https://slides.com/javascriptla/guide-to-es6"
                target="_blank"
                rel="noreferrer"
              >
                Guide To ES6 (2020) at Farmers Insurance
              </a>
            </li>
            <li>
              <a href="https://slides.com/javascriptla/deck" target="_blank" rel="noreferrer">
                Angular Deep Dive (2019) at Farmers Insurance
              </a>
            </li>
            <li>
              <a
                href="https://slides.com/javascriptla/react-redux"
                target="_blank"
                rel="noreferrer"
              >
                Intro to React & Redux
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=CTRke-_WxUM"
                target="_blank"
                rel="noreferrer"
              >
                How To Use React (2015) at General Assembly
              </a>
            </li>
          </ul>
        </section>
        <section className="mt-5">
          <p>
            <strong>
              <a target="_blank" rel="noreferrer" href="https://www.thinkful.com">
                Thinkful
              </a>
            </strong>
            <br />
            Full Stack Web Development Mentor
            <br />
            2019 - 2020
          </p>
          <p>
            Mentored students on the Full Stack Immersion Track with Thinkful and Bloc.com on
            weeknights and weekends (around 10 hours a week). The Full Stack Immersion track
            included HTML, CSS, JavaScript, Github, JQuery, React, Node.js, JWT with Authentication,
            Data Structures and Algorithms, and preparation for coding interviews. Was favorably
            rated high by a majority of my students that I taught at Thinkful mentor sessions.
          </p>
        </section>
        <section className="mt-5">
          <p>
            <strong>
              <a target="_blank" rel="noreferrer" href="https://generalassemb.ly">
                General Assembly
              </a>
            </strong>
            <br />
            Front End Web Development (FEWD), Teachers Assistant
            <br />
            2015 - 2016
          </p>
          <p>
            Worked as a teachers’ assistant at General Assembly in Santa Monica, CA for the Front
            End Web Development (FEWD) course offered 2015-2016. I helped students learn the
            fundamentals of HTML, CSS and JavaScript two nights a week, as well as 4 additional
            office hours another night. Was favorably rated high by a majority of my students that I
            taught at General Assembly sessions.
          </p>
        </section>
      </Container>
    </Layout>
  );
};
export default ExperiencePage;
