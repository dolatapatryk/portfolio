import {FunctionComponent} from "react";
import {EducationItem, EducationItemInfo} from "../components/EducationItem";

const myEducation: Array<EducationItemInfo> = [
    {
        university: 'Adam Mickiewicz University',
        degree: 'M.Eng in Computer Science',
        from: 'March 2020',
        to: 'September 2021',
        faculty: 'Faculty of Mathematics and Computer Science',
        speciality: 'System Security'
    },
    {
        university: 'Poznan University of Technology',
        degree: 'B.Eng in Computer Science',
        from: 'October 2016',
        to: 'February 2020',
        faculty: 'Faculty of Computing'
    }
]

export const Education: FunctionComponent = () =>
    <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        {myEducation.map(university => {
            return <EducationItem key={university.university} university={university.university}
                                  degree={university.degree} from={university.from} to={university.to}
                                  faculty={university.faculty} speciality={university.speciality}/>
        })}
    </div>
