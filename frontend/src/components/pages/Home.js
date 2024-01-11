// src/components/pages/Home.js

import React from 'react'
import Links from '../ui/Links'

const Home = () => {
  return (
    <div className="container marketing">
      <Links />
      <hr className="featurette-divider"></hr>
      <div className="row featurette ">
        {/* First Featurette */}
        <div className="col-md-7">
          <h2 className="featurette-heading">About Me</h2>
          <p className="lead paragraph-margin">
            I am a senior enrolled in the accelerated BS/MS Computer and
            Information Science program at SUNY Polytechnic Institute, Utica,
            NY. As an undergraduate assistant under the mentorship of William
            Confer, and my studies at SUNY Poly, I've had the opportunity to
            develop a well-rounded understanding of computer science principles.
          </p>

          <p className="lead paragraph-margin">
            My passion for technology extends across various domains, with a
            particular focus on computer architecture, web development, AI, and
            the Internet of Things. Whether it's designing efficient systems,
            creating dynamic and user-friendly websites, or exploring the
            endless possibilities of AI, I thrive on the dynamic challenges
            posed by the rapidly evolving field of computer science.
          </p>

          <p className="lead">
            Currently, on track to graduate with a bachelor's degree in December
            2024 and a master's in December 2025, I am actively seeking a Summer
            2024 position in computer science to further apply and expand my
            knowledge. My hands-on experience, combined with a solid academic
            foundation, equips me to contribute effectively to innovative
            projects.
          </p>
        </div>
        <div className="col-md-5 mt-4">
          <img
            className="img-fluid mx-auto"
            src={require('../../pictures/Slava_pfp.jpg').default}
            width="500"
            height="500"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>PFP</title>
        </div>
      </div>
    </div>
  )
}

export default Home
