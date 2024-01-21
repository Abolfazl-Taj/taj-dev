import Type from './type.js'
import Nav from '../NavBar/Nav';
import './Home.css';
import { useState } from 'react';
import Socials from './Socials'
function Home(){
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
    

    let socials = [
        {icon: <i class="fa-brands fa-instagram"></i>},
        {icon: <i class="fa-brands fa-telegram"></i>},
        {icon: <i class="fa-brands fa-linkedin"></i>},
        {icon: <i class="fa-brands fa-discord"></i>},
        {icon: <i class="fa-solid fa-envelope"></i>}
    ]

    return(
   
        <>
        <Nav  darkMode={darkMode} navbar={navbar}></Nav>
        <div className="home"   data-aos="zoom-in"   data-aos-duration="750">
         <div className={darkMode === true ? "midle darker" : "midle"}>
         <button className="HamMenu" onClick={ClickHandeler} >
            <i class="fa-solid fa-bars" ></i>
            </button>
          <h1 className="me" id='head'>
            <Type></Type>
          </h1>
          <div class="bg-[#111] rounded-2xl shadow-sm shadow-[#fff]  max-[320px]:w-[70%] ">
            <div class="group overflow-hidden relative  max-[320px]:w-[100%] after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#777]   after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-[#787878] before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-[#111] rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div class="z-10 flex flex-col items-center gap-2">
                <span class="text-slate-400 text-6xl font-bold">SR </span>
                <p class="text-gray-50">Frontend developer</p>
            </div>
            </div>
            </div>
            <div className="socials">
                {socials.map(icons => <Socials {...icons}  ></Socials> )}
            </div>




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

export default Home