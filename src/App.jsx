import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie"
import Home from "./Home"
function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movie/:id' element={<SingleMovie />}/>
    </Routes>
  </BrowserRouter>
  </>
  
}

export default App;