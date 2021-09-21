import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { graphql } from "gatsby"
import { SEO } from "../utils"
export default ({ data }) => {
  const { author, occupation, designations } = data.site.siteMetadata

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About me" />
      <Container>
        <Image
          rounded
          width="400"
          height="540"
          src={`../../icons/profiili.jpg`}
          alt={author}
        />
        <article className="about-article w-75 m-auto pt-2 text-justify-center">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="mt-4 pt-2">
            I am a&nbsp;
            {occupation} with 4-5 years of work experience.
          </p>
          <p>
            Experience in public and private sectors as developer in versatile
            roles.
          </p>
          <p>
            I studied computer science in University of Helsinki and Aalto
            University, Finland.
          </p>
          <p>
            Currently working as a freelance contractor. Contact me via{" "}
            <a href="/">home page</a> links!
          </p>
        </article>
      </Container>
      <br></br>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
