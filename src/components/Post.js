import React from "react"
import { Link } from "gatsby"
import { Card, 
    CardTitle, 
    CardText, 
    CardSubtitle, 
    CardBody,
    Badge
} from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../util/utilityFunctions"

export default function Post({ title, author, slug, date, body, image, tags }) {
    return(
        <Card>
            <Link to={slug}>
                <GatsbyImage className="card-image-top" image={image}></GatsbyImage>
            </Link>
            <CardBody>
                <CardTitle>
                    <Link to={slug}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> por {" "}
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                    {tags.map(tag => (
                        <li key={tag}>
                            <Link to={`/tag/${slugify(tag)}`}>
                                <Badge color="primary" className="text-uppercase">{tag}</Badge>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link className="btn btn-outline-primary float-right" to={slug}>Leia mais</Link>
            </CardBody>
        </Card>
    )
}