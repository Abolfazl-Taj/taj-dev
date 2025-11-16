import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Skills from '../Pages/Skills/Skills';
import NotFound from '../Pages/404/404';


export let  Masir = [
    {path:'/' , element:<Home></Home>},
    {path:'/Interdouce' , element:<About></About>},
    {path:'/Contact' , element:<Contact></Contact>},
    {path:'/Skills' , element:<Skills></Skills>},
    {path:'/*' , element:<NotFound></NotFound>},
]