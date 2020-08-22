import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/page.css"
import me from "../images/youGotThisCropped.jpg"
import { SansWrapper } from "../components/funkysans"
import MyResume from "../components/MacDonald_Resume_Netlify.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="ReedMacDonald" />
    <div className="holderDiv">
      <h3 className="header">Reed Paul MacDonald</h3>
      <h3 className="subHeader">Front End Developer in Los Angeles</h3>

      <p style={{ textAlign: "center" }}>
        <SansWrapper>
          I graduated UCLA with a Political Science degree in 2018 after having
          interned for Senator Dianne Feinstein, Congressman Alan Lowenthal (in
          Washington, DC), the Los Angeles World Affairs Council, and State
          Senator Tony Mendoza.{" "}
        </SansWrapper>
      </p>
      <p>
        <SansWrapper>
          Upon graduating, I worked for Variety Business Intelligence before
          going to General Assembly's Software Engineering Bootcamp. Since then,
          I've been working as a front end developer at Scholly Inc., primarily
          working with React and React Native.{" "}
        </SansWrapper>
      </p>
      <p>
        <SansWrapper>
          It has been a crazy past few years, but I've learned a lot and hope to
          continue to do so.{" "}
        </SansWrapper>
      </p>
      <p>Here are some links you may find helpful:</p>
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
      <div
        id="soTired"
        className="hjfghgkhjg"
        style={{
          marginBottom: `1.45rem`,

          display: "grid",
          //border: "5px solid red",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "1fr",
          gridColumnGap: "0px",
          gridRowGap: "0px",
          border: "5px solid blue",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "300px",
            gridArea: "1 / 2 / 2 / 3",
            border: "5px solid red",
          }}
        >
          <Image />
        </div>
      </div>
      <p>
        This page was made with Gatsby, deployed with Netlify and uses the{" "}
        <a href="https://codepen.io/reedmacdonald/pen/bGpNZKR">FunkySans!</a>{" "}
        component
      </p>
    </div>
  </Layout>
)

export default IndexPage
