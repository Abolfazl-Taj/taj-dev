import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import NotFound from './Components/404/404';




function App() {
  return (
      
      <BrowserRouter>
       <Routes>
        <Route   path='/'   element={<Home></Home>} />
        <Route   path='/Interdouce'   element={<About></About>}  />
        <Route   path='/Contact'   element={<Contact></Contact>} />
        <Route   path='/Skills'   element={<Skills></Skills>} />
        <Route   path='*'   element={<NotFound></NotFound>} />

       </Routes>
      </BrowserRouter>
      
  );
}

export default App;
