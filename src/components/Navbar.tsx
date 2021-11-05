import {Component} from "react";
import {NavbarItem} from "./NavbarItem";

type NavbarState = {
    activeItem: string;
}

class Navbar extends Component<{}, NavbarState> {
    state: NavbarState = {
        activeItem: ''
    }

    activeItem = (item: string) => {
        console.log(item);
        if (this.state.activeItem) {
            document.getElementById(this.state.activeItem)!.classList.remove('active');
        }
        this.setState({activeItem: item}, () => {
            console.log('elem', document.getElementById(this.state.activeItem));
            document.getElementById(this.state.activeItem)!.classList.add('active');
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavbarItem itemName="Home" link="/" itemClicked={this.activeItem}/>
                    <NavbarItem itemName="About" link="/about" itemClicked={this.activeItem}/>
                    <NavbarItem itemName="Education" link="/education" itemClicked={this.activeItem}/>
                    <NavbarItem itemName="Skills" link="/skills" itemClicked={this.activeItem}/>
                    <NavbarItem itemName="Contact" link="/contact" itemClicked={this.activeItem}/>
                </ul>
            </nav>
        )
    }
}

export default Navbar
