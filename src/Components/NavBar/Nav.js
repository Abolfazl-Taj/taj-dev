import { useEffect , useState} from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
function Nav({navbar , darkMode}){
  let [isopen , setIsopen] = useState(false)
   useEffect(()=>{
      console.log(1)
   })
  useEffect(()=>{
    setIsopen(navbar)
  } , [navbar])
  const clickhandeler = ()=>{
    setIsopen(false)
  }
   if(darkMode === true){
    return(
      <div className={isopen=== true ? "nav open dark-nav" : "nav dark-nav"}>
        {isopen ===true && <button className='MenuClose' onClick={clickhandeler}> <i class="fa-solid fa-xmark"></i> </button>}
        
        
        <NavLink to='/' className="links">Home</NavLink>
        <NavLink to='/Interdouce' className="links">Intrdouce </NavLink>
        <NavLink to='/Contact' className="links">Contact</NavLink>
        <NavLink to='/Skills' className="links">Skills</NavLink>
        <NavLink to='/Projects' className="links">Projects</NavLink>
        <NavLink to='/Exampels' className="links">Exampels</NavLink>
      </div>
  )
   }else{
    return(
      <div className={isopen=== true ? "nav open" : "nav"}>
        {isopen ===true && <button className='MenuClose' onClick={clickhandeler}> <i class="fa-solid fa-xmark"></i> </button>}
        
        
        <NavLink to='/' className="links">Home</NavLink>
        <NavLink to='/Interdouce' className="links">Intrdouce </NavLink>
        <NavLink to='/Contact' className="links">Contact</NavLink>
        <NavLink to='/Skills' className="links">Skills</NavLink>
        <NavLink to='/Projects' className="links">Projects</NavLink>
        <NavLink to='/Exampels' className="links">Exampels</NavLink>
      </div>
  )
   }

}
export default Nav