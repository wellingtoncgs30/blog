import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Opa! Algo errado aconteceu!">
    <SEO title="404: Não encontrado" />
    <p>O conteúdo que você procura não existe!.</p>
    <Link to="/" className="btn btn-primary">Voltar para a página inicial</Link>
  </Layout>
)

export default NotFoundPage
