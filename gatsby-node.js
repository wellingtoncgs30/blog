const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")

exports.onCreateMode = ({ node, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type === "MarkdownRemark") {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            slug,
            value: slugFromTitle
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const singlePostTemplate = path.resolve("src/templates/single-post.js")
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                            slug
                        }
                    }
                }
            }
        }
    `).then(response => {
        if(response.errors) {
            return Promise.reject(response.errors)
        }
        const posts = response.data.allMarkdownRemark.edges
        posts.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: singlePostTemplate,
                context: {
                    slug: node.frontmatter.slug
                }
            })
        })
    })
}