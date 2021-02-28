import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/page.css'
import FloatIn from '../components/FloatIn'
import styled from 'styled-components'
const Card = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding:15px;
border-radius:14px;
background-color:rgba(221,253,219,255);
transition-duration:800ms;
margin:20px auto;
box-shadow: 10px 10px 7px 0px rgba(0,0,0,0.13);
@media only screen and (max-width: 700px) {
    grid-template-columns:1fr;
}
:hover{
  transform:translate(0,-10px)
}
.left *{
text-align:left;
place-items:center;
}
.right *{
text-align:right;
place-items:center;
}
.videoHolder{
  display:grid;
  place-items:center;
  width:100%;
}
#code{
margin-bottom:0;
}
`

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h3 className="header"><FloatIn>Portfolio</FloatIn></h3>
    <div>
      <Card>
        <div className='left'>
          <p style={{ fontWeight: 'bold' }}>
            <a href="https://reeds-movie-and-tv-app.io" target="_black">Movie App</a>
          </p>
          <p className='description'>
            This is a movie app where you find movies and drag cards to show others if you've watched and liked them. It's a React app with Redux and styled components. I used Firebase and Netlify for the backend and deployment, respectively.
        </p>
          <p id='code'><a target='_blank' href='https://github.com/reedmacdonald/generic-movie-app'>Code</a></p>
        </div>
        <div className='videoHolder'>
          <Video src={"https://www.youtube.com/embed/u2l0GrDsp_w"} />
        </div>
      </Card>
      <Card>
        <div className='videoHolder'>
          <Video src={"https://www.youtube.com/embed/nhNJlGzTHEQ"} />
        </div>
        <div className='right'>
          <p style={{ fontWeight: 'bold' }}><a href='https://outofcharacter.io' target='_blank'>OutOfCharacter.io</a></p>
          <p className='description'>
            This is another React App with Firebase in the back. I made it at the beginning of the pandemic to try to make Zoom calls more fun. It's really just an improv game that can be played online. It got 1,700 unique users at one point which is cool, so it was definitely my most popular app.
        </p>
          <p id='code'><a target='_blank' href="https://github.com/reedmacdonald/OutOfCharacter">Code</a></p>
        </div>
      </Card>
      <Card>
        <div className='left'>
          <p style={{ fontWeight: 'bold' }}>
            <a href='https://la-hop.firebaseapp.com/' target='_blank'>LA-HOP Outreach Portal</a></p>
          <p className='description'>
            This is a mobile-first app I made with a team at a hack-a-thon in 2019. It's a create-react-app with Firebase in the back (I really need to expand my horizons). It isn't anything particularly special, but it won all three awards at the hack-a-thon, giving me an undefeated hack-a-thon record.
        </p>
          <p id='code'><a target='_blank' href='https://github.com/reedmacdonald/LA-HOP'>Code</a></p>
        </div>
        <div className='videoHolder'>
          <Video src={"https://www.youtube.com/embed/FYeZby_Q6vk"} />
        </div>
      </Card>
      <p className='holderDiv' style={{ fontFamily: 'American Typewriter' }}><Link to='/' ><p>Home</p></Link></p>
    </div>
    <small>Note: I made five or six projects prior to getting my first developer job in 2019, and while I was proud of what I did at the time, I would do them completely differently now so I don't think they're a good representation of who I am as a developer. But, if you want to see them, feel free to ask.</small>
  </Layout>
)

export default SecondPage

const Video = ({ src }) => {
  return (<iframe width="360" height="215" style={{ display: "block" }} src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
}
