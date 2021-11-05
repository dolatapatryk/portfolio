import {FunctionComponent} from "react";
import ReactTypingEffect from 'react-typing-effect';
import picture from '../img/pic.jpeg'
import {Socials} from "./Socials";

export const Home: FunctionComponent = () =>
    <div className="condiv home">
        <img src={picture} className="picture" alt=""/>
        <ReactTypingEffect className="typingEffect" text={['xdd', 'sadasd']} speed={100} eraseDelay={700}/>
        <Socials />
    </div>
