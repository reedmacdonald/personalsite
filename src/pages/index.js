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
        <p>
        <SansWrapper>I am a Front End Developer who has worked for <Popup words='This was my dream job at the time and a very satisfying tenure.'>Scholly, Inc</Popup> and <Popup words='A necessary, enlightening experience. Also, unfortunately, a short one.'>Age of Learning</Popup> where I've written code in <Popup words='One of the greatest inventions ever, right up there with the lightbulb and the wheel (and gaining quickly on the wheel)'>React</Popup>, React Native, and vanilla JavaScript. During these experiences I worked extensively on <a target="_blank" href="https://myscholly.com">landing</a> pages as well as <a target="_blank" href="https://search.myscholly.com">web</a> and mobile applications. I also frequently build side-projects with my <Popup words={`This was OutOfCharacter.io, which did worse than I hoped but better than I could've expected. You can watch the demo on my portfolio which is linked below.`}>favorite</Popup> one gaining 1,700 unique visitors. Some tools I've used frequently are <Popup words={`My preference is to use React Context but I'm not going to argue about it`}>Redux</Popup>, SCSS, Wordpress, Netlify, and <Popup words={'Such as this site!'}>Gatsby.</Popup></SansWrapper>
        </p>
        <p>
        <SansWrapper>Prior to software engineering I graduated from UCLA with a Political Science degree and interned for my State Senator as well as Congressman Alan Lowenthal and Senator <Popup words={`Definitely the biggest name on my resume, I brag about this a lot`}>Dianne Feinstein</Popup>. Despite having moved on career-wise, I really enjoyed my time in politics and try to stay engaged as much as I can.</SansWrapper>
        </p>
        <p><SansWrapper>During my free time I like to play <Popup words={`Albeit not very well`}>chess</Popup>, do <Popup words={`Well not since pre-pandemic, but I think I can still 'Yes, and' hopefully`}>improv</Popup>, and watch
          Bayern <Popup words={`I'm writing this hours after Germany got eliminated from the Euros (it's been a rough day)`}>Munich</Popup> soccer.</SansWrapper>
          </p>
        <p>
          <SansWrapper>Here are some links to my accounts:</SansWrapper>
        </p>

        <p>
          <a target="_blank" href="https://www.linkedin.com/in/reed-macdonald/">
            LinkedIn
        </a>{" "}

          <a target="_blank" href={MyResume}>
            Resume
        </a>{" "}
          <a target="_blank" href="https://github.com/reedmacdonald">
            GitHub
        </a>{" "}
          <Link to="/portfolio" >
            Portfolio
        </Link>{" "}
        <a target="_blank" href="https://twitter.com/macdonald_reed">
            Twitter
        </a>{" "}
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
