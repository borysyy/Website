import React from 'react'
import CSCards from '../../ui/Interests/CSCards'

const Interests = () => {
  return (
    <div>
      <div className="interests-header">
        <h1 className="display-4">My hobbies</h1>
        <p className="lead">
          Ranging from computer science related topics, to TV shows and movies.
        </p>
      </div>
      <div className="interests-header"
      >
        <h1 className="display-4">Computer science  </h1>
      </div>
      <div>
        <CSCards />
      </div>
    </div>
  )
}

export default Interests
