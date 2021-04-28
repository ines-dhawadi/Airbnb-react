import React from 'react'
import { Card } from "react-bootstrap";




function Part4(props) {
  return(props.par.map(el=>
    <div>
        <Card style={{ width: '320px' }}>
  <Card.Img style={{ width: '320px' }} variant="top" src={el.imgd} />
  <Card.Body>
    <Card.Title>{el.titr}</Card.Title>
    <Card.Text>
      {el.info}
    </Card.Text>
    
  </Card.Body>
</Card>
    </div>)
   )

 }

export default Part4
