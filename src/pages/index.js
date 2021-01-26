import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/page.css"
import { SansWrapper } from "../components/funkysans"
import MyResume from "../components/MacDonald_Resume.pdf"
import idk from "../images/youGotThisCropped.jpg"
import Popup from "../components/popup"
import FloatIn from '../components/FloatIn'
import Bane from '../images/Bane.jpg'
import Breakfast from '../images/Breakfast.jpg'
import CrackMyselfUp from '../images/CrackMyselfUpFinal.jpg'
import Embarrass from '../images/Embarrass.jpg'
import Godzilla from '../images/Godzilla.jpg'
import Picture from '../images/Picture.jpg'
import WhiteHouse from '../images/WhiteHouse.jpg'
import Zombies from '../images/Zombies.jpg'
const array = [idk, Breakfast, CrackMyselfUp, Embarrass, Godzilla, Picture, WhiteHouse, Zombies]

const IndexPage = () => {
  const index = React.useRef(0)
  const [render, rerender] = React.useState(0)
  React.useEffect(() => {
    setInterval(() => {
      if (index.current == array.length - 1) {
        index.current = 0
      } else {
        index.current = index.current + 1
      }
      rerender(index.current)
    }, 5000)
  }, [])
  return (
    < Layout >
      <SEO title="ReedMacDonald" />
      <div className="holderDiv">
        <br />
        <h3 className="header"><FloatIn>Reed Paul MacDonald</FloatIn></h3>
        <h3 className="subHeader">Front End Developer in Los Angeles</h3>
        <p style={{ textAlign: "center" }}>
          <SansWrapper>I am an engineer at Scholly, Inc. where I primarily work on their {''}</SansWrapper>
          <Popup words='this is one of my favorite words'>flagship</Popup>
          <SansWrapper> product {''}</SansWrapper><i><a href='https://search.myscholly.com' target='_blank'>Search</a></i>
          {' '} <SansWrapper> while also running their landing pages and occassionally working on their secondary web-apps and their iOS app. During my spare time I've been exploring static site generators, learning other non-React frameworks, and writing more with React Native. I've also worked with Python and PHP and am a Photoshop hobbiest.{''}</SansWrapper>
        </p>
        <p>
          <SansWrapper>Prior to becoming a professional programmer, I graduated from UCLA in 2018 with a degree in {''}</SansWrapper>
          <Popup words='The social contract is my jam'>Political</Popup>{' '}
          <SansWrapper>Science while working as a basketball {''}</SansWrapper>
          <Popup words='I miss this'>writer</Popup>
          <SansWrapper>, radio {''}</SansWrapper>
          <Popup words='I really miss this'>host</Popup>
          <SansWrapper>, and copy {''}</SansWrapper><Popup words={`I don\'t really miss this at all actually, this is site is probably filled with bad grammar.`}>editor</Popup>
          <SansWrapper>. I also completed four internships including ones for Senator Dianne Feinstein, Congressman Alan Lowenthal, and the Los Angeles World Affairs {''}</SansWrapper><Popup words='This is not a secret society that runs the world, much to my disappointment'>Council</Popup><SansWrapper>.{''}</SansWrapper>
        </p>
        <p><SansWrapper>During my free time I like to play chess, do improv{''}</SansWrapper><SansWrapper>, and watch {''}</SansWrapper>
          <Popup words='Currently sitting atop the Bundesliga standings!'>Bayern</Popup><SansWrapper> Munich soccer.{''}</SansWrapper></p>
        <p>
          <SansWrapper>Here are some links to my accounts:{''}</SansWrapper>
        </p>

        <p>
          <a target="_blank" href="https://www.linkedin.com/in/reed-macdonald/">
            LinkedIn
        </a>{" "}
          <a target="_blank" href="https://twitter.com/macdonald_reed">
            Twitter
        </a>{" "}
          <a target="_blank" href="https://instagram.com/reed.macdonald">
            Instagram
        </a>{" "}
          <a target="_blank" href={MyResume}>
            Resume
        </a>{" "}
          <a target="_blank" href="https://github.com/reedmacdonald">
            GitHub
        </a>
        </p>

        <br />
        <div style={{ textAlign: "center" }}>
          <img style={{ maxWidth: "300px" }} src={array[render]} />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <small>This page was made with Gatsby and deployed with Netlify</small>
        </div>
      </div>
    </Layout >)
}

export default IndexPage
