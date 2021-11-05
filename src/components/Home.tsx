import {FunctionComponent} from "react";
import ReactTypingEffect from 'react-typing-effect';
import picture from '../img/pic.jpeg'
import {Socials} from "./Socials";

export const Home: FunctionComponent = () =>
    <div className="container home">
        <img src={picture} className="picture" alt="Me"/>
        <ReactTypingEffect className="typing-effect" text={['xdd', 'sadasd']} speed={100} eraseDelay={700}/>
        <Socials />
    </div>
