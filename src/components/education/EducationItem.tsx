import {FunctionComponent} from "react";
import {EducationItemInfo} from "../../data/EducationInfo";

export const EducationItem: FunctionComponent<EducationItemInfo> = (props: EducationItemInfo) =>
    <div className="education-item">
        <div>
            <h3>{props.degree}</h3>
            {props.speciality && <h5>{props.speciality}</h5>}
            <hr/>
            <h4>{props.university}</h4>
            <h4>{props.faculty}</h4>
            <h4>{props.from} - {props.to}</h4>
        </div>
    </div>
