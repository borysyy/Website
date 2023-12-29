// src/components/pages/Home.js
import React from 'react'

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 border border-white">
          <h3 className="mt-2 display-4 text-center">About Me</h3>
          <p className="fs-4">
            I am an upcoming computer programmer in an accelerated BS/MS
            Computer and Information Science program at SUNY Polytechnic
            Institute in Utica, NY. I’m in my third year at SUNY Poly and
            currently working as an undergraduate assistant under Professor
            William Confer. I have four years of job experience at Marshalls and
            Homegoods in Fairmount, New York. I have acquired many skills that I
            will use in my future computer science position. The skills include
            multi-tasking, teamwork, time management, organization, and
            patience. Retail has taught me a lot personally, and it has given me
            skills that I will keep forever. My anticipated graduation date for
            my Bachelor’s is December 2024, and for my Master’s, December 2025.
            I want to get as much experience as possible before graduating from
            SUNY Poly.
          </p>
        </div>

        <div className="col">
          <img
            src={require('../../pictures/pfp.JPG').default}
            width="90%"
            height="100%"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
