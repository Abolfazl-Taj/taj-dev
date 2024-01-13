import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Skills from '../Components/Skills/Skills';
import Project from '../Components/Project/Project'
import NotFound from '../Components/404/404';


export let  Masir = [
    {path:'taj-dev/' , element:<Home></Home>},
    {path:'taj-dev/Interdouce' , element:<About></About>},
    {path:'taj-dev/Contact' , element:<Contact></Contact>},
    {path:'taj-dev/Skills' , element:<Skills></Skills>},
    {path:'taj-dev/Projects' , element:<Project></Project>},
    {path:'taj-dev/*' , element:<NotFound></NotFound>},
]