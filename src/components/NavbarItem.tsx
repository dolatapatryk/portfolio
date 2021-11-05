import {FunctionComponent} from "react";
import {Link} from "react-router-dom";

type NavbarItemProps = {
    link: string;
    itemName: string;
}

export const NavbarItem: FunctionComponent<NavbarItemProps> = (props: NavbarItemProps) =>
    <li>
        <Link to={props.link}>
            {props.itemName}
        </Link>
    </li>
