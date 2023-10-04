import './About.css';
import Nav from '../NavBar/Nav';
import mypic from '../../Assets/Pic/Mypic.jpg'
function About(){
    return(
        <>
        <Nav></Nav>
        <div className='About'   data-aos="zoom-in"   data-aos-duration="500"> 
            <div className="midle">
                <img src={mypic} alt="" className='mypic' />
                <p className="about-des">
                    <h1>              Welcome To My Site, I am Abolfazl Taj. <br /> Jr Web Developer <br />
              (Actually I Am Better From That One Kinda Senior We Can Say) <br />
             Well ,   I Begin My Journey Since 6-7 Motnes Ago  I Start Learning Html , Css And Animation
                 Making With Them After After That I Begin To Learn Js With Most Potential & Interest , Beffor That I was Learning Tailwind Css    
                 Now I Am 18 Years And Now I learning ReactJs And Its Very Faboules , About Me Im Creative, Smart,Thoughtful And I Handle Your Project Very Ez! <br />
                   Beffor I Forget I Learn Every Thing In Self-Taught With Youtube Not Institute <br /> I Hope You Enojy To Read My History. <br />
                   Love You All ❤</h1>


                </p>
            </div>
        </div>


        </>
    )
}
export default About