import Nav from '../NavBar/Nav';
import { useState } from 'react';
import './Project.css';
import Slider from './Sliders/Swiper';
function Project (){
  let [darkMode , setDarkMode] = useState(false)
  const DarkModeHandeler = ()=>{
      if(darkMode === true){
          setDarkMode(false)
      }else{
          setDarkMode(true)
      }
  }
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
     <div className={darkMode === true ? "midlami dark-project" : "midlami"}>

      <Slider darkMode={darkMode}></Slider>


     </div>
     <button className='DarkmodeB' onClick={DarkModeHandeler}>
            {darkMode === false && (
            <i class="fa-solid fa-sun"></i>
            )}
            {darkMode === true && (
                <i class="fa-solid fa-moon"></i>
            )}
            
         
         </button>
    </div>
    </>
  )

}


export default Project