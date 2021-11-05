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
        {name: 'Education', link: '/education'},
        {name: 'Skills', link: '/skills'},
        {name: 'Contact', link: '/contact'}
    ]

    activeItem = (item: string) => {
        if (this.state.activeItem) {
            document.getElementById(this.state.activeItem)!.classList.remove('active');
        }
        this.setState({activeItem: item}, () => {
            document.getElementById(this.state.activeItem)!.classList.add('active');
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    {this.items.map(item =>
                        <NavbarItem key={item.name} name={item.name} link={item.link} itemClicked={this.activeItem}/>)}
                </ul>
            </nav>
        )
    }
}

export default Navbar
