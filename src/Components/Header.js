 import React, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from './logo193.png'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Routes } from 'react-router-dom';

import Home from '../Pages/Home'
import About from '../Pages/About'





 export default class Header extends Component{

render() {


 return (

 	<>
<Navbar collapseOnSelect expand="md"
bg="primary" variant="dark">



<Container>
<Navbar.Brand href="/">
<img
    src={logo}
    height="30"
    width="30"
    className="d-inline-block align-top"
    alt="logo"
    />  Siberia Diamonds

</Navbar.Brand>


<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">

<Nav.Link href="/">На главную</Nav.Link>
  <Nav.Link href="/About">О нас</Nav.Link>
  <Nav.Link href="/Exploration">Активы</Nav.Link> 
  <Nav.Link href="/Exploration">Инвесторам</Nav.Link>
  <Nav.Link href="/Exploration">Пресса</Nav.Link>  



</Nav>
</Navbar.Collapse>


</Container>
</Navbar>


<Router>
    <Routes>

<Route exact path="/" element={<Home/>} /> 
<Route exact path="/about" element={<About/>} /> 

   </Routes>
</Router>



</>




 	)




}










 }