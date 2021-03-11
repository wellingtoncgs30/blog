import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
    return(
        <Layout pageTitle="Sobre nós">
            <SEO title="Sobre nós"></SEO>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed leo libero. Curabitur quis urna pharetra, pellentesque leo sed, dignissim lacus. Nulla blandit molestie ornare. Nunc sagittis tellus eget tellus dictum facilisis. Morbi ultrices, nunc molestie pretium cursus, diam nulla maximus leo, in dictum metus erat quis nisi. Curabitur odio turpis, pellentesque suscipit finibus eget, tempor at metus. Aenean hendrerit, dui sed malesuada dictum, nisi dui mattis orci, auctor feugiat nunc tellus sit amet nibh. Nullam vehicula dolor et massa rhoncus, commodo pellentesque risus aliquam. </p>
        </Layout>
    )
}