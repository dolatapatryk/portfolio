import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Education} from "./components/education/Education";
import {Skills} from "./components/Skills";
import {Contact} from "./components/Contact";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Experience} from "./components/experience/Experience";

library.add(faGithub, faInstagram, faFacebook, faLinkedin)

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
