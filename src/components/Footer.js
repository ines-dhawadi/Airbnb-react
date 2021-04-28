import React from 'react'
import { Col,Row } from "react-bootstrap";
import  "../components/style.css";



function Footer(){
  return(
    <div>

        <footer className="footerfot">
        <Row>
    <Col  md={3}>
    <h4 className="_tfslnm">À propos</h4>
    <ul className="ulwon">
        <li className="_wmuyow"><a href="" className="_o06542u">Fonctionnement d'Airbnb</a></li>
        <li className="_wmuyow"><a href="" className="_o06542u">Newsroom</a></li>
    <li className="_wmuyow"><a href="" className="_o06542u">Investisseurs</a></li>
    <li className="_wmuyow"><a href="" className="_o06542u">Airbnb Plus</a></li>
    <li className="_wmuyow"><a href="" className="_o06542u">Airbnb Luxe</a></li>
    <li className="_wmuyow"><a rel="noopener noreferrer" target="_blank" href="" className="_o06542u">HotelTonight</a></li>
    <li className="_wmuyow"><a href="" className="_o06542u">Airbnb for Work</a></li>
    <li className="_wmuyow"><a target="_blank" href="" className="_o06542u">C'est possible, grâce aux hôtes</a></li>
    <li className="_wmuyow"><a href="" className="_o06542u">Carrières</a></li>
    <li className="_wmuyow"><a href="" className="_o06542u">Lettre des fondateurs</a></li>
    </ul>
    </Col>
    {/************** */}
    <Col  md={3}>
      xs=6 md=4
    </Col>
    <Col md={3}>
      xs=6 md=4
    </Col>
    <Col md={3}>
      xs=6 md=4
    </Col>
  </Row>
        </footer>
    </div>
   )

 }

export default Footer