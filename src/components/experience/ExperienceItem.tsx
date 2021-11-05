import {FunctionComponent} from "react";
import {ExperienceItemInfo} from "../../data/ExperienceInfo";

export const ExperienceItem: FunctionComponent<ExperienceItemInfo> = (props: ExperienceItemInfo) =>
    <div className="card-item">
        <div>
            <h3>{props.position}</h3>
            <h4>{props.company} ({props.companyType})</h4>
            <h5>{props.companyType}</h5>
            <hr/>
            <h4>{props.description}</h4>
            <h4>{props.technologies.join(', ')}</h4>
            <h4>{props.from} - {props.to}</h4>
        </div>
    </div>
