import React from "react";
import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './componants/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import './main'


function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/articles" element={<Articles />} />
    




    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App