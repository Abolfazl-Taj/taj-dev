import './Contact.css';
import ContactList from './ContactList';
import Phone from "../../Assets/Pic/Phone.png"
import Email from "../../Assets/Pic/Email.png"
import loc from "../../Assets/Pic/loc.png"
import { useState } from 'react';
import Nav from '../NavBar/Nav';
function Contact(){
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
        <Nav navbar={navbar}></Nav>
        <div className="Contact" data-aos="zoom-in"   data-aos-duration="500">
            <div className="midle">
            <button className="HamMenu" onClick={ClickHandeler} >
            <i class="fa-solid fa-bars" ></i>
            </button>
                <div className="contact-keeper">

                 {
                 Contacts.map(Contact => <ContactList key={Contact.id}  {...Contact} ></ContactList>)
                 }






                 </div>
            </div>
        </div>
        </>
    )
}
export default Contact
