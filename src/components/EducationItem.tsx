import {FunctionComponent} from "react";

type EducationItemProps = {
    university: string;
    title: string;
    from: string;
    to: string;
}

export const EducationItem: FunctionComponent<EducationItemProps> = (props: EducationItemProps) =>
    <div className="education-item">
        <div className="compdet">
            <h3>{props.title}</h3>
            <h4 className="secondtext">{props.university}</h4>
            <h4 className="secondtext">{props.from} - {props.to}</h4>
        </div>
    </div>
