import './Skills.css';
import Nav from '../NavBar/Nav';
import { useState } from 'react';
function Skills(){
    let  [navbar , setNavbar] = useState(false)
    let [darkMode , setDarkMode] = useState(false)
    const DarkModeHandeler = ()=>{
        if(darkMode === true){
            setDarkMode(false)
        }else{
            setDarkMode(true)
        }
    }
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
         <div className="Skills" data-aos="zoom-in"   data-aos-duration="500"  >
            <div className={darkMode === true ? "midlam dark-Skill" : "midlam"}>
            <button className="HamMenu" onClick={ClickHandeler} >
            <i class="fa-solid fa-bars" ></i>
            </button>
            
<div className="skil">  <h1 className="skill-header">100%</h1>            <i class="fa-brands fa-html5">

<div className={darkMode === true ? "darsad1 dark-Skill" : "darsad1"}></div>

</i></div>
<div className="skil">   <h1 className="skill-header">100% & Tailwind</h1>          <i class="fa-brands fa-css3">

<div className={darkMode === true ? "darsad2 dark-Skill" : "darsad2"}></div>

</i></div>
<div className="skil"> <h1 className="skill-header">87%</h1>

<i class="fa-brands fa-js">

<div className={darkMode === true ? "darsad3 dark-Skill" : "darsad3"}></div>

</i></div>
<div className="skil">   <h1 className="skill-header">???%</h1>     <i class="fa-brands fa-react">

<div className={darkMode === true ? "darsad4 dark-Skill" : "darsad4"}></div>

</i></div>



     

            
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
export default Skills