import {FunctionComponent} from "react";
import {myExperience} from "../../data/ExperienceInfo";
import {ExperienceItem} from "./ExperienceItem";

export const Experience: FunctionComponent = () =>
    <div className="container">
        <h1 className="subtopic">Experience</h1>
        {myExperience.map(exp => <ExperienceItem key={exp.company} {...exp}/>)}
    </div>
