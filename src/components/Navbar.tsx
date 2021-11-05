import {Component} from "react";
import {NavbarItem} from "./NavbarItem";

class Navbar extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <NavbarItem itemName="Home" link="/"></NavbarItem>
                    <NavbarItem itemName="About" link="/about"></NavbarItem>
                    <NavbarItem itemName="Education" link="/education"></NavbarItem>
                    <NavbarItem itemName="Skills" link="/skills"></NavbarItem>
                    <NavbarItem itemName="Contact" link="/contact"></NavbarItem>
                </ul>
            </nav>
        )
    }
}
