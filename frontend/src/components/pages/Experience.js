import React from 'react'

const Experience = () => {
  return (
    <div className="container marketing">
      <div className="row featurette ">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Undergraduate Assistant - Sep 2023 - Present.{' '}
            <span className="text-muted">
              SUNY Polytechnic Institute - Utica, NY
            </span>
          </h2>
          <ul className="lead">
            <li>
              Designing, developing, and testing a web-based infrastructure for
              a unique programming competition model developed by Dr. Confer to
              support local, remote, and "after-play" competitions.
            </li>

            <li>
              Docker Containerization: Developing a Docker image optimized for
              running code files, including C++ (cpp) files, submitted on a
              competition website. The system operates as follows: When a user
              submits a code file, it initiates a Docker container, transfers
              the code file to the container, compiles and executes it, and
              finally, transmits the output back to the webpage.
            </li>

            <li>
              Web Development: Utilizing frameworks like Bootstrap and React was
              instrumental. Overcoming initial hurdles with these frameworks
              proved enlightening as I discovered their power in optimizing the
              website's responsiveness and enhancing the overall user
              experience. Integrating Bootstrap for streamlined design and React
              for dynamic components significantly bolstered the website's
              functionality.
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
          <h2 className="featurette-heading">
            Sales Associate - Nov 2019 - Aug 2023.{' '}
            <span className="text-muted">
              Marshalls and Homegoods - Fairmount, NY
            </span>
          </h2>
          <ul className="lead">
            <li>Ensure customer satisfaction through customer service.</li>

            <li>Organize and put out shipment.</li>

            <li>Cashiering</li>
          </ul>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="img-fluid mx-auto"
            src={require('../../pictures/Experience/Marshalls_pfp.png').default}
            width="500"
            height="500"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>Marshalls Logo</title>
        </div>
      </div>
    </div>
  )
}

export default Experience
