import React from 'react'
import Nav from './component/Nav';
import { BrowserRouter  , Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Image from './component/Image';
import Login from './component/Login';
import Sign from './component/Sign';
import Footer from './component/Footer'



function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/image' element={<Image/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Sign' element={<Sign/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;

