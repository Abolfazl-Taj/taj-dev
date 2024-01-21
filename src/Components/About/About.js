import './About.css';
import { useState } from 'react';
import Nav from '../NavBar/Nav';
import mypic from '../../Assets/Pic/Mypic.jpg'
function About(){
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
        <Nav darkMode={darkMode} navbar={navbar}></Nav>
        <div className='About'   data-aos="zoom-in"   data-aos-duration="500"> 
            <div className={darkMode === true ? "midleam darker" : "midleam"}>
            <button className="HamMenu" onClick={ClickHandeler} >
            <i class="fa-solid fa-bars" ></i>
            </button>
                <img src={mypic} alt="" className='mypic' />
                <p className={darkMode === true ? "about-des dark-des" : "about-des"}>
                    <h1>              Welcome To My Site, I am Abolfazl Taj ,Sr Web Developer. <br />
             Well ,   I Begin My Journey Since 6-7 Motnes Ago  I Start Learning Html , Css And Animation
                 Making With Them After That I Begin To Learn Js With Most Potential & Interest , Beffor That I was Learning Tailwind Css    
                 Now I Am 18 Years And Now I learning ReactJs And Its Very Faboules , About Me Im Creative, Smart,Thoughtful And I Handle Your Project Very Ez! <br />
                   Beffor I Forget I Learn Every Thing In Self-Taught With Youtube Not Institute <br /> I Hope You Enojy To Read My History. <br />
                   Love You All ❤</h1>


                </p>
            </div>
            <button className='DarKModeBtn' onClick={DarkModeHandeler}>
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
export default About