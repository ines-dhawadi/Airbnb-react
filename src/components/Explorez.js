import React from 'react'
import {Row,Col} from "react-bootstrap";
import '../components/style.css';




function Explorez(props) {
  return( props.explor.map(el=>

    <div>
        
<div className="part1">
  <Row><Col md={1}> <img className="imgpart1"  src={el.imge} /></Col>
   <Col md={2}><h4 className="titrexp">{el.name}</h4>
</Col></Row>
  

    
</div>

    </div>)
   )

 }

export default Explorez




