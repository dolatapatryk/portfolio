import {FunctionComponent} from "react";
import {mySkills} from "../data/SkillsInfo";

export const Skills: FunctionComponent = () =>
    <div className="container skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
            {mySkills.map(section => {
                return <li>
                    <span className={"font-weight-bold"}>{section.name}</span>
                    <h4 className="normal-font-weight">{section.skills.join(' / ')}</h4>
                </li>
            })}
        </ul>
    </div>
