import './Skills.css';
import Nav from '../NavBar/Nav';
import { useState } from 'react';
function Skills(){
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
         <div className="Skills" data-aos="zoom-in"   data-aos-duration="500"  >
            <div className="midlam">
            <button className="HamMenu" onClick={ClickHandeler} >
            <i class="fa-solid fa-bars" ></i>
            </button>
            
<div className="skil">  <h1 className="skill-header">100%</h1>            <i class="fa-brands fa-html5">

<div className="darsad1"></div>

</i></div>
<div className="skil">   <h1 className="skill-header">100% & Tailwind</h1>          <i class="fa-brands fa-css3">

<div className="darsad2"></div>

</i></div>
<div className="skil"> <h1 className="skill-header">87%</h1>

<i class="fa-brands fa-js">

<div className="darsad3"></div>

</i></div>
<div className="skil">   <h1 className="skill-header">???%</h1>     <i class="fa-brands fa-react">

<div className="darsad4"></div>

</i></div>



     

            
            </div>
         </div>
        
        
        
        </>
    )
}
export default Skills