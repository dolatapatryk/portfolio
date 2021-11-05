import {Component} from "react";
import {NavbarItem, NavbarItemInfo} from "./NavbarItem";

type NavbarState = {
    activeItem: string;
}

class Navbar extends Component<{}, NavbarState> {
    state: NavbarState = {
        activeItem: ''
    }
    private items: Array<NavbarItemInfo> = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Experience', link: '/experience'},
        {name: 'Education', link: '/education'},
        {name: 'Skills', link: '/skills'},
        {name: 'Contact', link: '/contact'}
    ]

    render() {
        return (
            <nav>
                <ul>
                    {this.items.map(item => <NavbarItem key={item.name} name={item.name} link={item.link}/>)}
                </ul>
            </nav>
        )
    }
}

export default Navbar
