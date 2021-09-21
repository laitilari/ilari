import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { graphql } from "gatsby"
import { SEO } from "../utils"
import ThemeContext from "../utils/theme"

export default ({ data }) => {
  const { dark } = useContext(ThemeContext)

  const { author, occupation, designations } = data.site.siteMetadata

  return (
    <PageLayout>
      <SEO title="About Me" />
      <Container>
        <Image
          rounded
          width={`${window.screen.availWidth > 525 ? 400 : 200}`}
          height={`${window.screen.availWidth > 525 ? 540 : 270}`}
          src={`../../icons/profiili.jpg`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify-center">
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
            Experience in public and private sectors as developer in
            versatile roles.
          </p>
          <p>
            I studied computer science in University of Helsinki and Aalto
            University, Finland.
          </p>
        </article>
      </Container>
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
