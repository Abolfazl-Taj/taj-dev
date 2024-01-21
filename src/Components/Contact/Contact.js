import './Contact.css';
import ContactList from './ContactList';
import Phone from "../../Assets/Pic/Phone.png"
import Email from "../../Assets/Pic/Email.png"
import loc from "../../Assets/Pic/loc.png"
import { useState } from 'react';
import Nav from '../NavBar/Nav';
function Contact(){
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
  let  Contacts = [
        {img :Phone  , des:"+989225361236"  , id:'1'},
        {img : Email , des:"Abolfazl.Taj.Web@gmail.com"  ,id:'2'},
        {img : loc , des:"Iran,Tehran, Pardise" , id:'3'}
    ]
    return(
        <>
        <Nav darkMode={darkMode} navbar={navbar}></Nav>
        <div className="Contact" data-aos="zoom-in"   data-aos-duration="500">
            <div className={darkMode === true ? "midle darker" : "midle"}>
            <button className="HamMenu" onClick={ClickHandeler} >
            <i class="fa-solid fa-bars" ></i>
            </button>
                <div className={darkMode === true ? "contact-keeper darker-Count" : "contact-keeper"}>

                 {
                 Contacts.map(Contact => <ContactList key={Contact.id} darkMode={darkMode}  {...Contact} ></ContactList>)
                 }






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
export default Contact
