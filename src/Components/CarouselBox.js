import React, { Component } from 'react'
 
import Carousel from 'react-bootstrap/Carousel';
 
 
import fo1 from '../Assets/fo1.jpg';
import fo2 from '../Assets/fo2.jpg';
import fo3 from '../Assets/fo3.jpg';
import fo4 from '../Assets/fo4.jpg';
import fo5 from '../Assets/fo5.jpg';
import fo6 from '../Assets/fo6.jpg';
 





export default class CarouselBox extends Component {


	render() {

return (


<Carousel>

<Carousel.Item>
<img
className="d-block w-100"
src={ fo1 } 
alt="fo1"/> 
<Carousel.Caption>  
 


 </Carousel.Caption>
</Carousel.Item>


 
 
 
 
<Carousel.Item>
<img
className="d-block w-100"
src={ fo2 } 
alt="fo2"/>
 
 <Carousel.Caption >  

 
<p><font size="20" color="white" face="serif"><b>Входим в первую тройку</b></font></p>
<p><font size="20" color="white" face="serif"><b>компаний в России</b></font></p>
<p><font size="20" color="white" face="serif"><b>по запасам алмазов</b></font></p>
   


</Carousel.Caption>
</Carousel.Item>




<Carousel.Item>
<img
className="d-block w-100"
src={ fo3 } 
alt="fo3"/>
<Carousel.Caption>  
<p><font size="20" color="white" face="serif"><b>20 млн карат-огромный потенциал</b></font></p>
<p><font size="20" color="white" face="serif"><b>4 млрд долларов</b></font></p>
</Carousel.Caption>  
</Carousel.Item>





<Carousel.Item>
<img
className="d-block w-100"
src={ fo4 } 
alt="fo4"/>

<Carousel.Caption>  
<p><font size="20" color="white" face="serif"><b>Якутия  Карелия</b></font></p>
<p><font size="20" color="white" face="serif"><b>Мурманская область Архангельская область</b></font></p>
</Carousel.Caption>  
</Carousel.Item>


<Carousel.Item>
<img
className="d-block w-100"
src={ fo5 } 
alt="fo5"/>
<Carousel.Caption>  
<p><font size="20" color="white" face="serif"><b>16 лицензионных участков</b></font></p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img
className="d-block w-100"
src={ fo6 } 
alt="fo6"/>
<Carousel.Caption>  
<p><font size="20" color="white" face="serif"><b>8 кимберлитовых трубок, 5 россыпей</b></font></p>
 </Carousel.Caption>  
</Carousel.Item>



</Carousel> 

	)



	}



}
