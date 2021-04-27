import React from 'react'
import "react-bootstrap";
import '../components/style.css';




function Explorez(props) {
  return( props.explor.map(el=>

    <div>
        
<div className="part1">
    <img className="imgpart1"  src={el.imge} />

    <h4 className="ml-2">{el.name}</h4>

</div>

    </div>)
   )

 }

export default Explorez




