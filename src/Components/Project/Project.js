import Nav from '../NavBar/Nav';
import { useState } from 'react';
import './Project.css';
import Slider from './Sliders/Swiper';
function Project (){
  let  [navbar , setNavbar] = useState(false)
  const ClickHandeler = ()=>{
      if(navbar === false){
          setNavbar(true)
      }
      else{
          setNavbar(false)
      }
   }
  return(
      <>
        <Nav navbar={navbar}></Nav>
        <button className="HamMenu" onClick={ClickHandeler} >
            <i class="fa-solid fa-bars" ></i>
            </button>
    <div className="Project" data-aos="zoom-in"   data-aos-duration="500">
     <div className="midlami">

      <Slider></Slider>


     </div>
    </div>
    </>
  )

}


export default Project