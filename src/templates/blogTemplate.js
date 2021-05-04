import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import { Container } from "react-bootstrap";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const capitalizeFirstLetters = (text) =>
  text
    .split(" ")
    .map((word) => word.substr(0, 1).toUpperCase() + word.substr(1))
    .join(" ");

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx;
  const pageTitle = capitalizeFirstLetters(frontmatter.title);
  return (
    <Layout>
      <Seo title={`Blog | ${pageTitle}`} />
      <Breadcrumb title="Blog" link="blog" subtitle={pageTitle} />
      <Container>
        <div className="blog">
          <div className="blog-post mt-5">
            <h1 className="text-center">{frontmatter.title}</h1>
            <small>{frontmatter.date}</small>
            <p className="mt-4">
              <Link to="/blog">&larr; Back</Link>
            </p>
            <div className="blog-post-content mt-5 mb-5 pb-5">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

//pulls the data from graphql for this template
export const blogQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
