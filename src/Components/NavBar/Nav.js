import './Nav.css';
import { NavLink } from 'react-router-dom';
function Nav(){
    return(
        <div className='nav'>
          <NavLink to='/' className="links">Home</NavLink>
          <NavLink to='/Interdouce' className="links">Intrdouce </NavLink>
          <NavLink to='/Contact' className="links">Contact</NavLink>
          <NavLink to='/Skills' className="links">Skills</NavLink>

        </div>
    )
}
export default Nav