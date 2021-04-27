import {Navbar,Button} from "react-bootstrap";
import React from 'react'
import  "../components/style.css";



function Navbart(){
  return(
    <div className="img-glob"> 
{/*-------------*/}
<div className="Container gftop">
<a className="_gf4ex9of" href="/covid-traveler" target="_blank" rel="noreferrer"><span className="_gf4ex9" >Accédez aux dernières informations sur les mesures prises par Airbnb face au COVID-19</span></a>

</div>

{/*-------------*/}
<Navbar>
  <Navbar.Brand href="#home"> <img className="logo" src="https://i.dlpng.com/static/png/515940_preview.png" /></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <a href="#login">Hébergements</a>
    <a href="#login">Expériences</a>
    <a href="#login">Expériences en ligne</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
{/*-------------*/}
<div className="butntop">
<h1 className="titretop">En pleine nature</h1>
<h6>Favoris sélectionnés par Airbnb.</h6>
<Button variant="dark">Trouver l'inspiration</Button>
</div>
{/*-------------*/}
    </div>
   )

 }

export default Navbart





