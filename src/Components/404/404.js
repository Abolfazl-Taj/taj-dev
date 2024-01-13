import notaks from "../../Assets/Pic/Wellcome.png"
import './404.css'
import { Link } from 'react-router-dom';
function NotFound(){
    return(

        <>
      <div className="notfound">
        
            <img src={notaks} alt="" />
            <div className="Not-Found">
            <h1 className="not-header">Are U Ready To Visit My Site ?</h1>
            <Link to='/' className="links notb">Go Home</Link>
            </div>

</div>
    
    </>
        )
}
export default NotFound