import {FunctionComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {mySocials} from "../data/SocialMediaInfo";

export const Socials: FunctionComponent = () =>
    <div className="social">
        {mySocials.map(social => {
            return <a key={social.name} href={social.href} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={['fab', social.name]}/>
            </a>
        })}
    </div>
