import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Skills from '../Components/Skills/Skills';
import Project from '../Components/Project/Project'
import NotFound from '../Components/404/404';


export let  Masir = [
    {path:'/' , element:<Home></Home>},
    {path:'/Interdouce' , element:<About></About>},
    {path:'/Contact' , element:<Contact></Contact>},
    {path:'/Skills' , element:<Skills></Skills>},
    {path:'/Projects' , element:<Project></Project>},
    {path:'/*' , element:<NotFound></NotFound>},
]