import Nav from '../NavBar/Nav';
import './Project.css';
import Slider from './Sliders/Swiper';
function Project (){

  return(
      <>
    <Nav></Nav>

    <div className="Project" data-aos="zoom-in"   data-aos-duration="500">
     <div className="midlam">

      <Slider></Slider>


     </div>
    </div>
    </>
  )

}


export default Project