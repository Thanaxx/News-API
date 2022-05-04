import React from 'react'
import {AboutWrap, AboutDetails, AboutImage} from './AboutStyle'

function About() {
  return (
    <>
      <AboutWrap data-aos="zoom-in">
        <AboutDetails>
          <h2>About NewsBreak</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit reprehenderit mollitia aut officia, laudantium sint optio amet rerum, recusandae distinctio dicta ipsam nesciunt nobis sit error quisquam, minus cum veritatis. Sit nam sint expedita tempora. Eaque possimus vero ratione amet.</p>
        </AboutDetails>

        <AboutImage>
          <img src="/images/about.png" alt="" />
        </AboutImage>
      </AboutWrap>
    </>
  )
}

export default About