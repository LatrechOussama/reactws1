import React from 'react'
import { Card } from 'react-bootstrap'

const Bodybody = () => {
    return (
        <div>
         <>
  <Card>
    <Card.Img variant="top" src='src\images\images.jpg' />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="C:\Users\Oussama\Desktop\react1\src\images\images.jpg" />
  </Card>
</>   
        </div>
    )
}

export default Bodybody

