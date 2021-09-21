import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Image } from "react-bootstrap"

export default ({ data }) => {
  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume">
        &nbsp;
        <a href="../../resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
          />
        </a>
      </PageTitle>
      <hr></hr>
      <br></br>
      <br></br>
      <Container className="resume-container-desktop">
        <div className="resume-item">
          <Image
            roundedCircle
            width="250"
            height="300"
            fluid
            src={`../../icons/cropped.png`}
            alt={"profile-photo"}
          />
          <div className="resume-item-text">
            <h2>Freelance developer</h2>
            <div>
              <div className="resume-item-text-customers">
                <p>Clients:</p>
                <div>
                  <a href="https://www.druid.fi">
                    <Image
                      width="75"
                      height="75"
                      fluid
                      src={`../../icons/druidlogo.png`}
                      alt={"profile-photo"}
                    />
                  </a>
                  <a href="https://www.vedia.fi/">
                    <Image
                      width="75"
                      height="75"
                      fluid
                      src={`../../icons/vedialogo.png`}
                      alt={"profile-photo"}
                    />
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <p className="resume-stack">{`Stack:
            JavaScript | React | Node | Express | Next | SCSS`}</p>
          </div>
        </div>
        <div className="resume-item">
          <div className="resume-item-text">
            <h2>Senior Consultant</h2>
            <div>
              <h4>Digitalent Finland</h4>
            </div>
            <p>Full-stack Developer, Scrum Master @KPMG Finland</p>
            <p className="resume-stack">{`Stack:
            JavaScript | React | TypeScript | PuppeteerE2E | Python | Scrum Master`}</p>
          </div>
          <Image
            roundedCircle
            width="250"
            height="300"
            fluid
            src={`../../icons/digitalentlogo.png`}
            alt={"profile-photo"}
          />
        </div>
        <div className="resume-item">
          <Image
            roundedCircle
            width="250"
            height="300"
            fluid
            src={`../../icons/tilastokeskuslogo.png`}
            alt={"profile-photo"}
          />
          <div className="resume-item-text">
            <h2></h2>
            <h2>Application Specialist</h2>
            <div>
              <h4>Statistics Finland</h4>
            </div>
            <p>Full-stack development and cloud development</p>
            <p className="resume-stack">{`Stack:
            JavaScript | Next | Python | Django | Azure | Node | GraphCMS | Contentful | Cypress | Jasmine`}</p>
          </div>
        </div>
      </Container>
      <Container className="resume-container-mobile">
        <div className="resume-item">
          <Image
            roundedCircle
            width="250"
            height="300"
            fluid
            src={`../../icons/cropped.jpg`}
            alt={"profile-photo"}
          />
          <div className="resume-item-text">
            <h2>Freelance developer</h2>
            <div>
              <div className="resume-item-text-customers">
                <p>Clients:</p>
                <div>
                  <a href="https://www.druid.fi">
                    <Image
                      width="75"
                      height="75"
                      fluid
                      src={`../../icons/druidlogo.png`}
                      alt={"profile-photo"}
                    />
                  </a>
                  <a href="https://www.vedia.fi/">
                    <Image
                      width="75"
                      height="75"
                      fluid
                      src={`../../icons/vedialogo.png`}
                      alt={"profile-photo"}
                    />
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <p className="resume-stack">{`Stack:
            JavaScript | React | Node | Express | Next | SCSS`}</p>
          </div>
        </div>
        <div className="resume-item">
          <Image
            roundedCircle
            width="250"
            height="300"
            fluid
            src={`../../icons/digitalentlogo.png`}
            alt={"profile-photo"}
          />
          <div className="resume-item-text">
            <h2>Senior Consultant</h2>
            <div>
              <h4>Digitalent Finland</h4>
            </div>
            <p>Full-stack Developer, Scrum Master @KPMG Finland</p>
            <p className="resume-stack">{`Stack:
            JavaScript | React | TypeScript | PuppeteerE2E | Python | Scrum Master`}</p>
          </div>
        </div>
        <div className="resume-item">
          <Image
            roundedCircle
            width="250"
            height="300"
            fluid
            src={`../../icons/tilastokeskuslogo.png`}
            alt={"profile-photo"}
          />
          <div className="resume-item-text">
            <h2></h2>
            <h2>Application Specialist</h2>
            <div>
              <h4>Statistics Finland</h4>
            </div>
            <p>Full-stack development and cloud development</p>
            <p className="resume-stack">{`Stack:
            JavaScript | Next | Python | Django | Azure | Node | GraphCMS | Contentful | Cypress | Jasmine`}</p>
          </div>
        </div>
      </Container>
    </PageLayout >
  )
}
