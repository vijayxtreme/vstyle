import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <section>
                <h3 style={{textAlign:`center`}}>If Contacting Me About Jobs / Sales Inquiries</h3>
                <p>Please note, I only respond to serious inquiries.   In addition, I occassionally have hired assistants help me read and respond to messages from visitors of my website.   This is to help fight against spam, unwarranted email and unsolicited notices.   You can message me about <a target="_blank" href="https://javascriptla.net">JavaScriptLA</a>, <a href="https://www.hackbuddy.com" target="_blank">HackBuddy</a> for sponsorships, but it’s probably better if you visit the websites directly and make requests there.</p>
                <p>Also please note, I am not looking for contract work at this time.  I will consider only roles that are full time, with health benefits, offer good pay and allow remote work from home.   As mentioned on the <Link to="/">home page</Link>, I tend to look for work that helps me advance my skills, as it is my skills that help me get by market wise.</p>
                <p>Finally, if I do not respond, please do not take it personally, it could be a handful of many different things including me turning off my email for a while to focus.  Simply just reach out again or try to reach me another way; <a target="_blank" href="https://linkedin.com/in/vijayxtreme">Linkedin</a> is good, as well as chat — I’m usually active on <a target="_blank" href="https://javascriptla.net">JavaScriptLA</a>’s chat servers (<a href="http://javascriptla.herokuapp.com/" target="_blank">Slack</a> and <a target="_blank" href="https://discord.gg/WMBTHXx">Discord</a>).  Short messages are usually the best, as I prefer that to writing lengthy emails back and forth.   Thanks and have a great day!</p>
            </section>
            <section>
                <h3 style={{marginTop:`2rem`, textAlign:`center`}}>If Contacting Me For Mentorship / Advice</h3>
                <p>By all means, reach out.  You can probably get ahold of me faster via <a target="_blank" href="https://linkedin.com/in/vijayxtreme">LinkedIn</a>, though I would encourage you to check out <a target="_blank" href="https://javascriptla.net">JavaScriptLA</a> to network with myself and the group, or visit <a target="_blank" href="https://hackbuddy.com">HackBuddy.com</a> (my other website for training in fullstack web development).</p>
                <p>I also blog quite often on <a target="_blank" href="https://javascriptla.net/">JavaScriptLA</a> and <a target="_blank" href="https://hackbuddy.com">HackBuddy</a>, as well as vlog for the <a target="_blank" href="https://youtube.com/javascriptla">JavaScriptLA YouTube Channel</a> which you can follow as well for video content.  Due to time constraints, I have limited personal 1:1 mentorship to only a handful of students, and am the moment only helping those who <a target="_blank" href="https://javascriptla.net/volunteer-with-us/">volunteer for JavaScriptLA</a>.</p>
            </section>
        </Layout>
    )
}

export default ContactPage