import {FunctionComponent} from "react";
import {EducationItem} from "./EducationItem";
import {myEducation} from "../../data/EducationInfo";

export const Education: FunctionComponent = () =>
    <div className="container">
        <h1 className="subtopic">My Education</h1>
        {myEducation.map(university => {
            return <EducationItem key={university.university} university={university.university}
                                  degree={university.degree} from={university.from} to={university.to}
                                  faculty={university.faculty} speciality={university.speciality}/>
        })}
    </div>
