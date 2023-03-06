 import React, {Component} from 'react'
 import Carousel from 'react-bootstrap/Carousel';
 import CarouselBox from '../Components/CarouselBox';
 import { Container, CardGroup, Card,  } from 'react-bootstrap'
 import pavel from '../Assets/pavel.png';
 import  Galina from '../Assets/Galina.png'; 
  import SergMi from '../Assets/SergMi.png';
 import "../App.css";



export default class About extends Component {


	render() {

return (


//<CarouselBox />

	<>
     <Container>

     <h2 className="text-center m-4">


     <h2 className="text-primary">Наша команда
     </h2>
     </h2>
      

    <CardGroup className="m-4">
    

    <Card  bg="info" border="primary">
    <Card.Title> <h2 className="text-center m-4">Павел Шелков</h2>  </Card.Title>
    <Card.Img variant="top" src={pavel}/>
    <Card.Text>Родился в 1965 г., выпускник МГРИ(1987) по специальности
    "Поиск и разведка алмазов и драгоценных камней", работал в ЦНИИГРИ, 
    различных венчурных геологоразведочных компаниях, успешно занимался 
    поиском алмазов на Дальнем Востоке. С 2019 г. Главных геолог и Генеральный
    директор Группы компаний "Алмазы Заполярья"</Card.Text>
  
     </Card>





    <Card bg="info" border="primary">
    <Card.Title> <h2 className="text-center m-4">Сергей Митюхин</h2>  </Card.Title>
    <Card.Img variant="top" src={SergMi}/>
    <Card.Text> Консультант-эксперт по развитию проектов в Республике Саха (Якутии).
          1994 -2000 гг.- Главный геолог ОАО «Алроса-Нюрба»,
          2000-2010 гг. - Главный геолог АК «АЛРОСА»,
          2011 -2017 гг. -Директор по развитию проектов в Африке АК «АЛРОСА». </Card.Text>
    </Card>

    

    <Card bg="info" border="primary">
    <Card.Title> <h2 className="text-center m-4">Галина Криулина</h2>  </Card.Title>
    <Card.Img variant="top" src={Galina}/>
    <Card.Text>Геммолог, Работала в отделе определения качества 
    сырья в АЛРОСа, выпускник МГРИ</Card.Text>
    </Card>


    </CardGroup>
  
       	

 


     </Container>


	</>
 

	)



	}
}