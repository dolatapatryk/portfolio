import {FunctionComponent} from "react";
import {EducationItem} from "../components/EducationItem";

export const Education: FunctionComponent = () =>
    <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <EducationItem university="Adam Mickiewicz University" title="Master" from="March 2020" to="September 2021"/>
        <EducationItem university="Poznan University of Technology" title="Bachelor" from="October 2016"
                       to="February 2020"/>
    </div>
