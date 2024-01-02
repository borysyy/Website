// src/components/pages/Home.js

import React from 'react'

const Home = () => {
  return (
    <div className="container marketing">
      <div class="row mt-4 ">
        <div class="col-lg-4">
          <img
            src={require('../../pictures/Github_pfp.png').default}
            width="140"
            height="140"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>Placeholder</title>

          <h2>GitHub</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://getbootstrap.com/docs/5.0/examples/carousel/#"
            >
              View details »
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <img
            src={require('../../pictures/Linkedin_pfp.png').default}
            width="140"
            height="140"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2>Linkedin</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p>
            <a
              class="btn btn-secondary"
            >
              View details »
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <img
            src={require('../../pictures/Linkedin_pfp.png').default}
            width="140"
            height="140"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2>Resume</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://getbootstrap.com/docs/5.0/examples/carousel/#"
            >
              View details »
            </a>
          </p>
        </div>
      </div>

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
