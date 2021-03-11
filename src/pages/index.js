import * as React from "react"
/*import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"*/
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout pageTitle="CodeBlog">
    <SEO title="Home" />
        <StaticQuery query={indexQuery} render={data => {
        return(
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
              key={node.id} 
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              slug={node.frontmatter.slug}
              date={node.frontmatter.date}
              body={node.excerpt}
              image={node.frontmatter.image.childImageSharp.gatsbyImageData}
              tags={node.frontmatter.tags}></Post>
            ))}
          </div>
        )
      }}></StaticQuery>
  </Layout>
)

const indexQuery = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          author
          slug
          tags
          image {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
