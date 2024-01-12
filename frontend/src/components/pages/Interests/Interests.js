import React from 'react'
import Cards from '../..//ui/Interests/Cards'

const Interests = () => {
  return (
    <div>
      <div className="interests-header px-3 py-3 mx-auto text-center">
        <h1 className="display-4">My hobbies</h1>
        <p className="lead">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default Interests
