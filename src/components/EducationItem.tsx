import {FunctionComponent} from "react";

export type EducationItemInfo = {
    university: string;
    degree: string;
    from: string;
    to: string;
    faculty: string;
    speciality?: string;
}

export const EducationItem: FunctionComponent<EducationItemInfo> = (props: EducationItemInfo) =>
    <div className="education-item">
        <div className="compdet">
            <h3>{props.degree}</h3>
            {props.speciality && <h5 className="secondtext">{props.speciality}</h5>}
            <hr/>
            <h4 className="secondtext">{props.university}</h4>
            <h4 className="secondtext">{props.faculty}</h4>
            <h4 className="secondtext">{props.from} - {props.to}</h4>
        </div>
    </div>
