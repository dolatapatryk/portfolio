import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

export type NavbarItemInfo = {
    name: string;
    link: string;
}

export const NavbarItem: FunctionComponent<NavbarItemInfo> = (props: NavbarItemInfo) =>
    <li id={props.name}>
        <NavLink to={props.link}>
            {props.name}
        </NavLink>
    </li>
