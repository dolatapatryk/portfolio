import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home} from "./contents/Home";
import {About} from "./contents/About";
import {Education} from "./contents/Education";
import {Skills} from "./contents/Skills";
import {Contact} from "./contents/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
