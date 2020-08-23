import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/page.css"
import me from "../images/youGotThisCropped.jpg"
import { SansWrapper } from "../components/funkysans"
import MyResume from "../components/MacDonald_Resume_Netlify.pdf"
import idk from "../images/youGotThisCropped.jpg"
import Popup from "../components/popup"

const IndexPage = () => (
  <Layout>
    <SEO title="ReedMacDonald" />
    <div className="holderDiv">
      <br />
      <h3 className="header">Reed Paul MacDonald</h3>
      <h3 className="subHeader">Front End Developer in Los Angeles</h3>
      <p style={{ textAlign: "center" }}>
        <SansWrapper>I graduated UCLA with a {() => {}}</SansWrapper>
        <Popup words="Not going to say this was my best decision, lol">
          Political Science
        </Popup>{" "}
        <SansWrapper>
          degree in 2018 after having interned for {() => {}}
        </SansWrapper>
        <Popup
          words={
            <>
              This was in her LA District Office, though I did get to meet her{" "}
              <a>once</a>, which was cool
            </>
          }
        >
          Senator{" "}
        </Popup>
        <SansWrapper>
          Dianne Feinstein, Congressman Alan Lowenthal (in Washington, DC), the
          Los Angeles World Affairs Council, and State Senator Tony Mendoza.{" "}
        </SansWrapper>
      </p>
      <p>
        <SansWrapper>Upon graduating, I worked for {() => {}}</SansWrapper>
        <Popup words="Was in the same elevator as Michael B Jordan once here">
          Variety Business Intelligence
        </Popup>{" "}
        <SansWrapper>
          before going to General Assembly's Software Engineering Bootcamp.
          Since then, I've been working as a front end developer at{" "}
        </SansWrapper>
        <Popup words="Will forever be grateful to this company and the people here">
          Scholly
        </Popup>
        <SansWrapper>
          , primarily working with React and React Native.{" "}
        </SansWrapper>
      </p>
      <p>
        <SansWrapper>It has been a {() => {}}</SansWrapper>
        <Popup words={"Often very stressful, especially the job searches"}>
          crazy
        </Popup>{" "}
        <SansWrapper>
          past few years, but I've had a lot of {() => {}}
        </SansWrapper>
        <Popup words={"I took an improv class!"}>fun </Popup>
        <SansWrapper>
          and learned a lot and hope to continue to do so!{" "}
        </SansWrapper>
      </p>
      <p>
        <SansWrapper>Here are some links to my accounts:{() => {}}</SansWrapper>
      </p>
      <ul style={{ textAlign: "center", listStyleType: "none" }}>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/reed-macdonald/">
            LinkedIn
          </a>
        </li>
        <li>
          <a target="_blank" href="https://codepen.io/reedmacdonald">
            CodePen
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/macdonald_reed">
            Twitter
          </a>
        </li>
        <li>
          <a target="_blank" href="https://instagram.com/reed.macdonald">
            Instagram
          </a>
        </li>
        <li>
          <a target="_blank" href={MyResume}>
            Resume
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/reedmacdonald">
            GitHub
          </a>
        </li>
      </ul>
      <br />
      <div style={{ textAlign: "center" }}>
        <img style={{ maxWidth: "300px" }} src={idk} />
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <p>
          This page was made with Gatsby, deployed with Netlify and uses the{" "}
          <a
            target="_blank"
            href="https://codepen.io/reedmacdonald/pen/bGpNZKR"
          >
            FunkySans!
          </a>{" "}
          component
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
