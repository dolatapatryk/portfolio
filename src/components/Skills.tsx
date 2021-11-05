import {FunctionComponent} from "react";

const mySkills = ['HTML', 'CSS', 'JS', 'PHP']

export const Skills: FunctionComponent = () =>
    <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
            {mySkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    </div>
