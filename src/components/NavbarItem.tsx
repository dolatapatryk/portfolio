import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

type NavbarItemProps = {
    link: string;
    itemName: string;
    itemClicked: any;
}

export const NavbarItem: FunctionComponent<NavbarItemProps> = (props: NavbarItemProps) =>
    <li id={props.itemName}>
        <NavLink to={props.link} onClick={props.itemClicked.bind(this, props.itemName)}>
            {props.itemName}
        </NavLink>
    </li>
