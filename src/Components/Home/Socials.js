import './Socials.css'
function Socials({icon}){
    return(
        <button class="Btn">
 <span class="svgContainer">
    {icon}
 </span>
 <span class="BG"></span>
</button>
    )
}
export default Socials