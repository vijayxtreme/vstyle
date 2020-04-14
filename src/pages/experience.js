import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ExperiencePage = () => {

    let createLayout = arr => {
        let output = []

        arr.forEach((item, idx)=>{
            if((idx+1) % 4 == 0){
                output.push(
                    <div key={idx} className="row"></div>
                )
            }else{
                output.push(
                    <div className="col" key={idx}><a target="_blank" href={`https://${item.link}`}>{item.title}</a></div>
                )
            }
        });
        return output

    }

    
    const radnetWebsites = [
        {title:"RadNet.com & All Location Sites", link:"radnet.com"},
        {title:"Rad.Link", link:"rad.link"},
        {title:"Prostate MRI", link:"mri.rcg.ninja"},
        {title:"RadNet Choice", link:"choice.radnet.com"},
        {title:"RadNetTV", link:"radnet.tv"},
        {title:"Breastlink", link:"newyork.breastlink.com"},
        {title:"40not50", link:"40not50.org"},
        {title:"CRC", link:"cancerresearchcollaboration.org"},
        {title:"MSK", link:"msk.radnet.com"},
        {title:"BreastCare", link:"breastcare.com"},
        {title:"RadNetPip", link:"pip.radnet.com"},
        {title:"Imaging Specialists", link:"imagingspecialists.com"},
        {title:"APACF", link:"apacf.org"},
        {title:"Applications RadNet", link:"applications.radnet.com"},
    ]

    const budgetWebsites = [
        {title:"BudgetVanLines", link:"budgetvanlines.com"},
        {title:"iMover", link:"imover.com"},
        {title:"Equate Media", link:"equatemedia.com"},
        {title:"GotMovers", link:"gotmovers.com"},
        {title:"ULoad", link:"uload.com"},
    ]

    let radnetOutput = createLayout(radnetWebsites) 
    let budgetOutput = createLayout(budgetWebsites) 

    return (
        <Layout>
            <SEO title="Experience"/>
            <section>
                <h3 style={{textAlign:`center`}}>Work Experience</h3>
                <p>
                    <strong>Web Developer, RadNet.com</strong>
                    <br />Orange County, California
                    <br />Nov 2016 - Present
                </p>
                <p>Responsible for full stack web development for RadNet (Medical diagnostic imaging centers and cancer research) in Santa Ana, California.</p>
                <p>My primary responsibilities are to design and develop websites, landing pages that help promote RadNet imaging technologies, research and applications that interface with RadNet customers.   Technologies used include CMS websites like Drupal, Wordpress on the LAMP Stack (Linux, Apache, MySQL, PHP), and Oracle APEX.   In addition, HTML, CSS/SASS/LESS, JavaScript, JQuery, React, Angular, Node.js for faster UI & improved performance on both the CMS and front end layers.   Work with tools like Photoshop, Illustrator and Sketch to generate new ideas and landing pages.</p>
                <div>
                    <strong>Websites Include:</strong>
                    <div className="grid">{radnetOutput}</div>
                </div>
                <ul>
                    <li>Built websites primarily on Drupal 7 & Drupal 8, currently building sites on Drupal 8 with GatsbyJS, seeing improved performance on UI and speed</li>
                    <li>Migrated 12 franchise sites to AWS from Pantheon; giving us more control over stacks (can now use MERN stack, MEAN stack) as well as control over application security and lower hosting expenses</li>
                    <li>Helped migrate 16 location sites to RadNet.com from Wordpress to one Drupal instance on Acquia Cloud, to save company on hosting expenses, upcharges</li>
                </ul>
            </section>
            <section>
                <p>
                    <strong>Web Developer, Budget Van Lines</strong>
                    <br />Los Angeles, California
                    <br />May 2015 - Nov 2016
                </p>
                <p>Developed desktop and responsive websites for Budget Van Lines, a moving company in Los Angeles for households and apartments.  Technologies used included Zend, Laravel (on backend) and HTML, CSS, JavaScript, JQuery on frontend.   Additionally worked with JQuery plugins, Greensock API, Wordpress and Gulp/Grunt/Bower to make sites more performant and employ better UI.   Worked with tools like Photoshop, Illustrator and Sketch to generate new ideas and landing pages.</p>
                <div>
                    <strong>Websites Include:</strong>
                    <div className="grid">{budgetOutput}</div>
                </div>
                <ul>
                    <li>Landing pages that I designed helped generate new traffic and sales for Budget Van Lines, allowing our department to hire more workers and build new websites like Uload, Equate, iMover.   The landing pages reduced the amount of steps from previous landing pages to help get customers quickly over to contacting sales instead of struggling with the UI.</li>
                    <li>Used the latest in JQuery and CSS3 Animations to make websites that were fast, performant and interactive for the customer (improvements included custom datepickers, improved cost calculators, Google Maps integration, and less loading time per pages; we improved our page score and rank on Google as a result).</li>
                </ul>
            </section>
            <section>
                <p>
                    <strong>Web Developer, Freelance & Contract Roles</strong>
                    <br />Los Angeles, California
                    <br />2011 - 2014
                </p>
                <p>
                    Worked freelance, contract for companies like TrafficZoom, Neoganda, PreenInc, Telescope, Zachor Foundation, Verdure Sciences, Lifestyle Athletics among others.   Stacks worked on included Wordpress for CMS, LAMP (Linux, Apache, MySQL, PHP) for backend development, and JavaScript/JQuery for front-end development.  Began my transition from business development to web development with TrafficZoom, coding small Wordpress sites and social media pages to more robust webpages with Neoganda Agency where I made websites for movies like Grown Ups 2 and Cloudy With A Chance of Meatballs, as well as directly worked on their advertising software website, Addroid.   I also helped create pages for popular shows like The Voice at Telescope, and full websites for Verdure Sciences and PreenInc, an interior design firm for restaurants in Hollywood.
                </p>
            </section>
            <section>
                <p>
                    <strong>Business Development Manager, The Press-Enterprise</strong>
                    <br />Riverside, California
                    <br />2005 - 2011
                </p>
                <p>
                    Worked directly for General Manager of Interactive Media for Digital Advertising.   Was responsible for sales development in online advertising categories such as Automotive, Real Estate, Retail and Classified advertising.  Helped with the strategy and tactics behind the launches of many revenue generating initiatives such as Cars.com with PE.cars for our Automotive category, PE.WOW, a motorcycle, boat and RV publication, PE.homes, PE.jobs,  and PE.buy for Retail shopping.   Duties included forecasting, sales plan and strategy development, creating marketing collateral and designs, infield and outfield sales calls,  sales training, sales assistance, and marketing research with tools like SQL, Excel, Google Analytics.    Helped generate and manage over $12 million in annual sales for PE.com.
                </p>
            </section>
            <section>
                <h3 style={{textAlign:`center`}}>Education</h3>
                <p>
                    <strong>University of California, Riverside</strong>
                    <br />BA, Business Economics
                    <br />2001 - 2005
                </p>
            </section>
            <section>
                <h3 style={{textAlign:`center`}}>Teaching & Mentorship</h3>
                <p>
                    <strong><a target="_blank" href="https://javascriptla.net">JavaScriptLA</a></strong>
                    <br />Head Organizer
                    <br />2012 - Present
                </p>
                <p>Organize and host meetups for JavaScript technologies and frameworks monthly in Los Angeles and Orange County.   Technologies covered include: JavaScript, JQuery, React, Angular, Node.js, AWS, Azure, TypeScript, Docker, MongoDB, NoSQL, and more.  I have personally given talks at JavaScriptLA on Angular, EcmaScript 6, React, and Redux, as well as mentored many attendees through JavaScriptLA on the fundamentals of JavaScript.</p>
            </section>
            <section>
                <p>
                    <strong><a target="_blank" href="https://www.thinkful.com">Thinkful</a></strong>
                    <br />Full Stack Web Development Mentor
                    <br />2019 - 2020
                </p>
                <p>Mentored students on the Full Stack Immersion Track with Thinkful and Bloc.com on weeknights and weekends (around 10 hours a week).   The Full Stack Immersion track included HTML, CSS, JavaScript, Github, JQuery, React, Node.js, JWT with Authentication, Data Structures and Algorithms, and preparation for coding interviews.   Was favorably rated high by a majority of my students that I taught at Thinkful mentor sessions.</p>
            </section>
            <section>
                <p>
                    <strong><a target="_blank" href="https://generalassemb.ly">General Assembly</a></strong>
                    <br />Front End Web Development (FEWD), Teachers Assistant
                    <br />2015 - 2016
                </p>
                <p>Worked as a teachers’ assistant at General Assembly in Santa Monica, CA for the Front End Web Development (FEWD) course offered 2015-2016.   I helped students learn the fundamentals of HTML, CSS and JavaScript two nights a week, as well as 4 additional office hours another night.   Was favorably rated high by a majority of my students that I taught at General Assembly sessions.</p>
            </section>
        </Layout>
    )
}
export default ExperiencePage