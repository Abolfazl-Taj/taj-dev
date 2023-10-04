import './Contact.css';
function ContactList({img   , des}){
    return(
        <div className="contact">
        <img src={img} alt="" className="contact-img" />
        <h1 className="contact-des">{des}</h1>
     </div>
    )
}
export default ContactList;