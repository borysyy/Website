import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const CSCards = () => {
  return (
    <div className="cards-container">
      <div className="row">
        <div className="cards-column">
          <Card className="cards">
            <Card.Img
              variant="top"
              src={require('../../../pictures/Cards/PC_Build.jpg').default}
            />
            <Card.Body className="cards-body">
              <Card.Title>PC Building</Card.Title>
              <Card.Text>Where my love for computer science started</Card.Text>
              <Button variant="primary" className="mt-auto">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="cards-column">
          <Card className="cards">
            <Card.Img
              variant="top"
              src={require('../../../pictures/Cards/Linux.png').default}
            />
            <Card.Body className="cards-body">
              <Card.Title>Linux</Card.Title>
              <Card.Text>My favorite Operating System</Card.Text>
              <Button variant="primary" className="mt-auto">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CSCards
