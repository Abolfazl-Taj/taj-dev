import './Contact.css';
import ContactList from './ContactList';
import Phone from "../../Assets/Pic/Phone.png"
import Email from "../../Assets/Pic/Email.png"
import loc from "../../Assets/Pic/loc.png"

import Nav from '../NavBar/Nav';
function Contact(){
  let  Contacts = [
        {img :Phone  , des:"+98 09225361236"  , id:'1'},
        {img : Email , des:"Abolfazl.Taj.Web@gmail.com"  ,id:'2'},
        {img : loc , des:"Iran,Tehran, Pardise" , id:'3'}
    ]
    return(
        <>
        <Nav></Nav>
        <div className="Contact" data-aos="zoom-in"   data-aos-duration="500">
            <div className="midle">
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
