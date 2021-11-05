import {FunctionComponent} from "react";

const mySkills = ['Java', 'Kotlin', 'Typescript', 'Python', 'Spring', 'Angular', 'Microservices']

export const Skills: FunctionComponent = () =>
    <div className="container skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
            {mySkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    </div>
