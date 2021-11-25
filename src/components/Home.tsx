import {FunctionComponent} from "react";
import ReactTypingEffect from 'react-typing-effect';
import picture from '../img/pic.jpeg'
import {Socials} from "./Socials";

export const Home: FunctionComponent = () =>
    <div className="container home">
        <img src={picture} className="picture" alt="Me"/>
        <span className="typing-effect">Patryk Dolata</span>
        <ReactTypingEffect className="typing-effect" text={['Software Engineer']} speed={100}
                           eraseDelay={700}/>
        <Socials/>
    </div>
