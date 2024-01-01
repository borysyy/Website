// src/components/pages/Home.js


import React from 'react'

const Home = () => {
  return (
    <div className="container marketing">
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
            will use in my future computer science position. The skills include
            multi-tasking, teamwork, time management, organization, and
            patience. Retail has taught me a lot personally, and it has given me
            skills that I will keep forever. My anticipated graduation date for
            my Bachelor’s is December 2024, and for my Master’s, December 2025.
            I want to get as much experience as possible before graduating from
            SUNY Poly.
          </p>
        </div>
        <div className="col-md-5 mt-4">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={require('../../pictures/pfp.JPG').default}
            width="500"
            height="500"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>Placeholder</title>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.{' '}
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>Placeholder</title>
        </div>
      </div>

      {/* Add more featurettes similarly */}
    </div>
  )
}

export default Home
