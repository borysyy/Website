import React from 'react'
import Cards from '../../ui/Interests/Cards'

const Interests = () => {
  return (
    <div>
      <div className="interests-header">
        <h1 className="display-4">My hobbies</h1>
        <p className="lead">
          Ranging from computer science related topics, to TV shows and movies.
        </p>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default Interests
