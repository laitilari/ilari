import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"

export default () => {
    return (
        <PageLayout>
            <SEO title="Skills" />
            <PageTitle title="Skills">
            </PageTitle>
            <Container className="skill-container">
                <SkillCard filename="jslogo.png" title="JavaScript" />
                <SkillCard filename="reactlogo.png" title="React" />
                <SkillCard filename="nodelogo.png" title="Node" />
                <SkillCard filename="nextlogo.png" title="Next" />
                <SkillCard filename="pythonlogo.png" title="Python" />
                <SkillCard filename="djangologo.png" title="Django" />
                <SkillCard filename="azurelogo.png" title="Azure" />
                <SkillCard filename="sasslogo.png" title="SCSS" />
                <SkillCard filename="cypresslogo.jpeg" title="Cypress" />
                <SkillCard filename="graphcmslogo.jpg" title="GraphCMS" />
                <SkillCard filename="contentfullogo.png" title="Contentful" />
            </Container>
        </PageLayout >
    )
}

const SkillCard = ({ filename, title }) => {
    return (
        <div className="skill-card">
            <Image
                width="200"
                height="200"
                src={`../../icons/${filename}`}
                alt={title}
            />
            <p className="skill-title">{title}</p>
        </div>
    )
}
