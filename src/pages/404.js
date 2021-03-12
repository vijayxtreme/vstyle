import React from "react"

import Layout from "../components/layout"
import {Container} from 'react-bootstrap'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
    <p>You just hit a route that doesn't exist yet... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
