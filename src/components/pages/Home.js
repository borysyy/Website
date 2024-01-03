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
          <p className="lead">
            I am an upcoming computer programmer in an accelerated BS/MS
            Computer and Information Science program at SUNY Polytechnic
            Institute in Utica, NY. I’m in my third year at SUNY Poly and
            currently working as an undergraduate assistant under Professor
            William Confer. I have four years of job experience at Marshalls and
            Homegoods in Fairmount, New York. I have acquired many skills that I
            will use in my future computer science position, including
            multi-tasking, teamwork, time management, organization, and
            patience. Retail has taught me a lot personally, and it has supplied
            me with experiences that I will keep forever. My anticipated
            graduation date for my Bachelor’s is December 2024, and for my
            Master’s, December 2025. I want to get as much experience as
            possible before graduating from SUNY Poly.
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
