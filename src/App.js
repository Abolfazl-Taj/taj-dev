import {useRoutes } from 'react-router-dom';
import './App.css';
import { Masir } from './Assets/Routes';


function App() {
  let routes = useRoutes(Masir)
  return routes
}



export default App;
