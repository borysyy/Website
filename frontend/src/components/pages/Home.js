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
            As a senior in the accelerated BS/MS Computer and Information
            Science program at SUNY Polytechnic Institute, I am passionate about
            learning and applying computer science principles across various
            domains. I am on track to graduate with a bachelor's degree in
            December 2024 and a master's in December 2025, and I am eager to
            pursue a summer 2024 position in computer science that will
            challenge and enhance my skills and knowledge.
          </p>

          <p className="lead paragraph-margin">
            Since September 2023, I have been working as a research assistant
            under the mentorship of Dr. William Confer, designing, developing,
            and testing a web-based infrastructure for a unique programming
            competition model. I have been utilizing frameworks like Bootstrap
            and React, tools like Node and Bash, and GitHub for version control.
            I have also been developing Docker images for running code files.
            Through this experience, I have gained valuable exposure to web
            development, project management, and collaboration. Additionally, I
            have a strong interest and proficiency in Linux, computer
            architecture, and operating systems, which are my favorite topics in
            computer science. I hope to make a future career out of them and
            contribute to innovative projects in these fields.
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
