import {Component} from "react";
import {NavbarItem} from "./NavbarItem";

type NavbarState = {
    activeItem: string;
}

class Navbar extends Component<{}, NavbarState> {

    activeItem = (item: string) => {
        if (this.state.activeItem) {
            document.getElementById(this.state.activeItem)!.classList.remove('active')
        }
        this.setState({activeItem: item}, () => {
            document.getElementById(this.state.activeItem)!.classList.add('active')
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavbarItem itemName="Home" link="/" itemClicked={this.activeItem}></NavbarItem>
                    <NavbarItem itemName="About" link="/about" itemClicked={this.activeItem}></NavbarItem>
                    <NavbarItem itemName="Education" link="/education" itemClicked={this.activeItem}></NavbarItem>
                    <NavbarItem itemName="Skills" link="/skills" itemClicked={this.activeItem}></NavbarItem>
                    <NavbarItem itemName="Contact" link="/contact" itemClicked={this.activeItem}></NavbarItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar
