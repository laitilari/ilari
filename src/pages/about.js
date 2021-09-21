import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { SEO } from "../utils"
export default () => {
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
          alt={"ilari"}
        />
        <article className="about-article w-75 m-auto pt-2 text-justify-center">
          <p className="mt-4 pt-2">
            I am software engineer with 4-5 years of work experience.
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