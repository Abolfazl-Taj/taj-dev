import notaks from "../../Assets/Pic/404.png"
import './404.css'
import { Link } from 'react-router-dom';
function NotFound(){
    return(

        <>
      <div className="notfound">
        
            <img src={notaks} alt="" />
            <h1 className="not-header">Not Found</h1>
            <Link to='/' className="links notb">Back Home</Link>

</div>
    
    </>
        )
}
export default NotFound