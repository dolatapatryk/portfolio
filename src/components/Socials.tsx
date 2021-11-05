import {FunctionComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconName} from "@fortawesome/free-brands-svg-icons";

type SocialMedia = {
    href: string;
    name: IconName;
}

const mySocials: Array<SocialMedia> = [
    {name: 'github', href: 'https://github.com/dolatapatryk'},
    {name: 'instagram', href: 'https://instagram.com/patrykdolata'},
    {name: 'facebook', href: 'https://www.facebook.com/dolata.patryk1'},
    {name: 'linkedin', href: 'https://linkedin.com/in/patryk-dolata-711829175/'}
]

export const Socials: FunctionComponent = () =>
    <div className="social">
        {mySocials.map(social => {
            return <a key={social.name} href={social.href} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={['fab', social.name]}/>
            </a>
        })}
    </div>
