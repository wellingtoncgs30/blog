import React from "react"
import { 
    Card, 
    CardTitle, 
    CardBody,
    Form,
    FormGroup,
    Input } from "reactstrap"
import { Link, graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Sidebar() {
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Newsletter
                    </CardTitle>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Informe o seu e-mail:"></Input>
                        </FormGroup>
                        <button className="btn btn-outline-success text-uppercase">Inscreva-se</button>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        Anúncio
                    </CardTitle>
                    <img src="https://via.placeholder.com/320x200" alt="Anuncie" style={{width: "100%"}}></img>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Últimos Posts
                    </CardTitle>
                    <StaticQuery query={sidebarQuery} render={data => (
                        <div>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Card key={node.id}>
                                    <Link to={node.frontmatter.slug}>
                                        <GatsbyImage className="card-image-top" image={node.frontmatter.image.childImageSharp.gatsbyImageData}></GatsbyImage>
                                    </Link>
                                    <CardBody>
                                        <CardTitle>
                                            <Link to={node.frontmatter.slug}>
                                                {node.frontmatter.title} 
                                            </Link>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    )}></StaticQuery>
                </CardBody>
            </Card>
        </div>
    )
}

const sidebarQuery = graphql`
query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
        }
      }
    }
  }
`