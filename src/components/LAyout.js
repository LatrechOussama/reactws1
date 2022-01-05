import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

const LAyout = props => {
    return (
        <div>
         <Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</Container>   
        </div>
    )
}



export default LAyout
