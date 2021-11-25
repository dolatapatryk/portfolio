import {FunctionComponent} from "react";
import {ExperienceItemInfo} from "../../data/ExperienceInfo";

export const ExperienceItem: FunctionComponent<ExperienceItemInfo> = (props: ExperienceItemInfo) =>
    <div className="card-item">
        <div>
            <h3>{props.position}</h3>
            <h4>{props.company}</h4>
            <h5>{props.companyType}</h5>
            <h5>{props.from} - {props.to}</h5>
            <hr/>
            <h4 className="normal-font-weight">{props.description}</h4>
            <h4>Technologies: <h4 className="normal-font-weight">{props.technologies.join(' / ')}</h4></h4>
            {props.projects && <div>
                <h4>Projects:</h4>
                <ul className={"project-list"}>
                    {props.projects.map(project => {
                        return <li>
                            <span className={"font-weight-bold"}>{project.company}</span>
                            <h4 className={"normal-font-weight"}>{project.description}</h4>
                        </li>
                    })}
                </ul>
            </div>}
        </div>
    </div>
