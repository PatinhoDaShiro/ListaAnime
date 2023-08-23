import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import RotasProtegidas from './RotasProtegidas.js';
import Home from '../pages/Home.js'
const Rota = ()=>{
    return(
    <BrowserRouter>
    <Routes>
 
      <Route path='/login' element={<RotasProtegidas><Login/></RotasProtegidas> }/>
      <Route path='/register' element={<RotasProtegidas><Register/></RotasProtegidas> }/>
      <Route path='/' element={<RotasProtegidas> <Home/> </RotasProtegidas>}/>

    </Routes>
    </BrowserRouter>
    )
}

export default Rota