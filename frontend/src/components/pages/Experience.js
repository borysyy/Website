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
              Docker Containerization: Developed a Docker image optimized for
              running code files, including C++, C, Python, and Java files.
              These files are submitted on a competition website. The system
              operates as follows: When a user submits a code file, it initiates
              a Docker container, transfers the code file to the container,
              compiles and executes it, and finally, transmits the output back
              to the webpage.
            </li>

            <li>
              Bash Scripting: Developed a bash script integrated within Docker
              containers to execute user code efficiently. The script detects
              the language of the user's program by its extension, compiles if
              necessary, runs the program, and redirects any stdout and stderr
              to a text file. The file content is then transmitted back to the
              server and stored in a database under the respective player and
              team. The player receives their program's output alongside their
              team's output on their screen.
            </li>

            <li>
              Web Development: By leveraging Bootstrap's extensive library of
              pre-built components and responsive grid system, I ensured that
              websites not only look great but also perform flawlessly across
              various devices and screen sizes. 
              In bridging the gap between frontend and backend development, I relied on tools like EJS
              (Embedded JavaScript) to streamline the process. EJS facilitates
              the dynamic generation of HTML content, allowing for seamless
              integration of server-side logic with client-side presentation.
              This not only enhances development efficiency but also ensures a
              smoother user experience.
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
            <li>Ensure customer satisfaction through customer service</li>

            <li>Cashiering</li>

            <li>Organizing and displaying shipments</li>
          </ul>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="img-fluid mx-auto"
            src={require('../../pictures/Marshalls_pfp.png').default}
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
