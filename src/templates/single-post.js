import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import {
    Card,
    CardBody,
    CardSubtitle,
    Badge 
} from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../util/utilityFunctions"

export default function SinglePost({ data }) {
    const post = data.markdownRemark.frontmatter
    return(
        <Layout pageTitle={post.title}>
            <SEO title={post.title}></SEO>
                <Card>
                    <GatsbyImage className="card-image-top" image={post.image.childImageSharp.gatsbyImageData}></GatsbyImage>
                    <CardBody>
                        <CardSubtitle>
                            <span className="text-info">{post.date}</span> por {" "}
                            <span className="text-info">{post.author}</span>
                        </CardSubtitle>
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>

                        </div>
                        <ul className="post-tags">
                            {post.tags.map(tag => (
                                <li key={tag}>
                                    <Link to={`/tag/${slugify(tag)}`}>
                                        <Badge color="primary" className="text-uppercase">{tag}</Badge>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
        </Layout>
    )
}

export const postQuery = graphql`
query ($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        author
        date
        slug
        tags
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`
