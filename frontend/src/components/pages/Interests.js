import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

      <div className="row justify-content-center">
        <div className="col-lg-3 mb-2">
          <Card className="cards mx-auto">
            <Card.Img
              variant="top"
              src={require('../../pictures/PC_Build.jpg').default}
            />
            <Card.Body>
              <Card.Title>PC Building</Card.Title>
              <Card.Text>Where my love for computer science started</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>

          </Card>
        </div>
        <div className="col-lg-3 mb-2">
          <Card className="cards mx-auto">
            <Card.Img variant="top" src={require('../../pictures/Linux.png').default} />
            <Card.Body>
              <Card.Title>Linux</Card.Title>
              <Card.Text>
              My favorite Operating System
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 mb-2">
          <Card className="cards mx-auto">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Interests;
