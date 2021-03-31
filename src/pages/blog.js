import React from 'react'
import SEO from '../components/SEO'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import {Container} from "react-bootstrap"
import {Link, graphql} from 'gatsby'

const Blog = ({data}) => {
    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { nodes } = allMarkdownRemark
    console.log(nodes)
    return (
        <Layout>
            <SEO title="Blog" />
            <Breadcrumb title="Blog" />
            <div className="blog-home mb-5 pb-5">
                <Container>
                    <h1 className="mt-5">Blog Roll</h1>
                    <p>Blog under development. But hey, stay tuned!</p>
                    <ul>
                        {nodes.map(node => 
                        <li>
                          <Link key={node.frontmatter.title} to={node.frontmatter.slug}>{node.frontmatter.title} - {node.frontmatter.date}</Link>
                        </li>)}
                    </ul>
                </Container>
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
    }
  }
`