import logo from './logo.svg';
import './App.css';
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './Topbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Card from './Card';
import Table from './Table';
import User from './User';
import Selectuser from './Selectuser';
import { useContext } from 'react';
import { UserContext } from './Usercontext';
import Mobile from './Mobile';
import Gas from './Gas';
import Broadband from './Broadband';
import Financial from './Financial';
import Others from './Others';
import Login from './Login';
import Portal from './Portal';



function App() {

  return (
    <BrowserRouter>   
    
         <Routes>
         <Route path='/' element={<Login/>}/>

         <Route path='/portal' element={<Portal/>}>
        <Route path='dashboard/:uId' element={<Dashboard/>}></Route>
        <Route path='tables' element={<Table/>}></Route>
        <Route path='users' element={<User/>}></Route>
        <Route path='select' element={<Selectuser/>}></Route>
        <Route path='mobile' element={<Mobile/>}></Route>
        <Route path='gas' element={<Gas/>}></Route>
        <Route path='broadband' element={<Broadband/>}></Route>
        <Route path='financial' element={<Financial/>}></Route>
        <Route path='others' element={<Others/>}></Route>     
</Route>


       </Routes>
          
            
    </BrowserRouter>

  );
}

export default App;
