import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

export type NavbarItemInfo = {
    name: string;
    link: string;
}

type NavbarItemProps = NavbarItemInfo & { itemClicked: any }

export const NavbarItem: FunctionComponent<NavbarItemProps> = (props: NavbarItemProps) =>
    <li id={props.name}>
        <NavLink to={props.link} onClick={props.itemClicked.bind(this, props.name)}>
            {props.name}
        </NavLink>
    </li>
