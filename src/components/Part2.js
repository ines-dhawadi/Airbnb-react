
import React from 'react'
import "react-bootstrap";
import '../components/style.css';

function Partt(props) {
    return( props.tt.map(el=>
  
      <div>
          
  <div className="part2">
      <img className="imgpart2"  src={el.imgp} />
  
      <h4 className="ml-2">{el.desc}</h4>
  
  </div>
  
      </div>)
     )
  
   }
  
  export default Partt