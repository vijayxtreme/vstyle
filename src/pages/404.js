import React from "react"

import Layout from "../components/layout"
import {Container} from 'react-bootstrap'
import SEO from "../components/seo"
import fail from "../images/fail.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="mt-5 pt-5">
    <p><img src={fail} /></p>
    <p>You just hit a route that doesn't exist yet... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
