import {FunctionComponent} from "react";
import {Link} from "react-router-dom";

type NavbarItemProps = {
    link: string;
    itemName: string;
    itemClicked: any;
}

export const NavbarItem: FunctionComponent<NavbarItemProps> = (props: NavbarItemProps) =>
    <li id={props.itemName}>
        <Link to={props.link} onClick={props.itemClicked.bind(this, props.itemName)}>
            {props.itemName}
        </Link>
    </li>
