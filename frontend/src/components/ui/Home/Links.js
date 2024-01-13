import React from 'react'
import ResumePdf from '../../../documents/resume.pdf'

const Links = () => {
  return (
    <div className="row mt-4 ">
      <div className="col-lg-4">
        <a
          href="https://github.com/borysyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require('../../../pictures/Home/Links/Github_pfp.png').default}
            width="140"
            height="140"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </a>
        <h2 className="link-headings">GitHub</h2>
      </div>
      <div className="col-lg-4">
        <a
          href="https://www.linkedin.com/in/yaroslavborysyuk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={
              require('../../../pictures/Home/Links/Linkedin_pfp.png').default
            }
            width="140"
            height="140"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </a>
        <h2 className="link-headings">LinkedIn</h2>
      </div>
      <div className="col-lg-4">
        <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
          <img
            src={require('../../../pictures/Home/Links/Resume_pfp.png').default}
            width="140"
            height="140"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </a>
        <h2 className="link-headings">Resume</h2>
      </div>
    </div>
  )
}

export default Links
