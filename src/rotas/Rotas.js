import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import RotasProtegidas from './rotasProtegidas.js';

const Rota = ()=>{
    return(
    <BrowserRouter>
    <Routes>
 
      <Route path='/login' element={<RotasProtegidas><Login/></RotasProtegidas> }/>
      <Route path='/register' element={<RotasProtegidas><Register/></RotasProtegidas> }/>
      <Route path='/' element={<RotasProtegidas><h1>DEU CERTOOO</h1></RotasProtegidas>}/>

    </Routes>
    </BrowserRouter>
    )
}

export default Rota