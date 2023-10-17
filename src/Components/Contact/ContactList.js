import './Contact.css';
function ContactList({img   , des , darkMode}){
    return(
        <div className={darkMode === true ? "contact darker" : "contact"}>
        <img src={img} alt="" className={darkMode === true ? "contact-img darker" : "contact-img"} />
        <h1 className="contact-des">{des}</h1>
     </div>
    )
}
export default ContactList;