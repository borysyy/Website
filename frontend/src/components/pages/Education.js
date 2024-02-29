// src/components/pages/Education.js
import React from 'react'

const Education = () => {
  return (
    <div className="container marketing">
      <div className="row featurette ">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Suny Polytechnic Institute - Aug 2021 - Dec 2025.{' '}
            <span className="text-muted">
              BS/MS in Computer and Information Science
            </span>
          </h2>
          <ul className="lead">
            <li>
              Currently on track to finish my Bachelor’s in Computer Science by
              Fall 2024
            </li>
            <li>
              Then on track to finish my Master’s in Computer Science by Fall
              2025
            </li>
          </ul>
        </div>
        <div className="col-md-5 mt-5">
          <img
            className="img-fluid mx-auto"
            src={require('../../pictures/Poly_pfp.png').default}
            width="300"
            height="300"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>Poly Logo</title>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Relevant Courses </h2>
          <ul className="lead">
            <li>NCS-205: Intro. to Linux</li>
            <li>MAT-115: Finite Mathematics</li>
            <li>MAT-151: Calculus 1</li>
            <li>MAT-152: Calculus 2</li>
            <li>CS-220: Computer Organization</li>
            <li>CS-240: Data Structures and Algorithms - C++</li>
            <li>CS-249: Object-Oriented Programming - Java</li>
            <li>CS-330: Operating Systems and Networking</li>
            <li>CS-350: Information and Knowledge Management - SQL</li>
            <li>CS-370: Software Engineering - C++, Tiny Graphics Library</li>
            <li>CS-431: Principles of Programming Languages - C++/Prolog</li>
            <li>CS-441: Computer Systems Architecture - C++</li>
            <li>CS-518: Prompt Software Engineering - C++/Python/ChatGPT</li>
            <li>CS-521: Operating Systems</li>
            <li>CS-548: Image Generation and Translation - Python</li>
          </ul>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="img-fluid mx-auto"
            src={require('../../pictures/Classes_pfp.jpg').default}
            width="500"
            height="500"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>Classes</title>
        </div>
      </div>
    </div>
  )
}

export default Education
