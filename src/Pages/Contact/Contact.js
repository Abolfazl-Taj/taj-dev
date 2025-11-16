import './Contact.css';
import ContactList from './ContactList';
import Phone from "../../Assets/Pic/Phone.png"
import Email from "../../Assets/Pic/Email.png"
import loc from "../../Assets/Pic/loc.png"
import { useState } from 'react';
import Continer from '../../Components/Continer';
function Contact(){
  let  Contacts = [
        {img :Phone  , des:"+989225361236"  , id:'1'},
        {img : Email , des:"Abolfazl.Taj.Web@gmail.com"  ,id:'2'},
        {img : loc , des:"Iran,Tehran, Pardise" , id:'3'}
    ]
    return(
        <Continer>
            <div className='flex w-full justify-around items-center flex-1'>
                 {Contacts.map(Contact => <ContactList key={Contact.id}   {...Contact} ></ContactList>)}
                    </div>
        </Continer>
    )
}
export default Contact
