import React from "react"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          roundedCircle
          width="250"
          height="250"
          fluid
          src={`../../icons/cropped.jpg`}
          alt={"profile-photo"}
        />
        <Container className="py-0 my-0">
          <h1 className="home-name">
            <span className="first-name">Ilari</span>&nbsp;
            <span className="last-name">Laitinen</span>
          </h1>
          <p>
            <i>Software Engineer</i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.linkedin.com/in/ilari-laitinen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/laitilari/ilari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="mailto:iim.laitinen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}