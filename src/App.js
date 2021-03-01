import { render } from "react-dom";
import { Component } from "react";
// Imports components
import PageGallery from './page/PageGallery';
import OrganismHeader from './organisms/OrganismHeader';
import './App.scss';
import './assets/styles/organisms/slider.scss';
import OrganismFooter from "./organisms/OrganismFooter";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
			menuItems: [
				{
					href: '/home',
					style: "menu-item",
					text: 'Home'
				},
				{
					href: '/activities',
					style: "menu-item",
					text: 'Activities'
				},
				{
					href: '/destinations',
					style: "menu-item",
					text: 'Destinations'
				},
				{
					href: '/contact',
					style: "menu-item",
					text: 'Contact'
				},
				{
					href: '/about',
					style: "menu-item",
					text: 'About'
				}
			]
        }
	}

	render() {
		return (
			<main>
				<OrganismHeader items={this.state.menuItems} ></OrganismHeader>
				<PageGallery></PageGallery>
				<OrganismFooter />
			</main>
		);
    }
}

export default App;