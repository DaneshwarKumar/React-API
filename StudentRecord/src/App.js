import './App.css';
import NavBar from './Components/NavBar';
import CloudBlitz from './Components/CloudBlitz';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
     <BrowserRouter>
           <NavBar />
           <Routes>
                 <Route path="/" element={ <CloudBlitz />} />
                 <Route path="/add"  element={<AddUser/>} />
                 <Route path="/all" element={<AllUser />} />
           </Routes>
     </BrowserRouter> 
  );
}


export default App;
