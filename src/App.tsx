import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home} from "./contents/Home";
import {About} from "./contents/About";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
