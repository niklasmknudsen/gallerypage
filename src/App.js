import { render } from "react-dom";
import { Component } from "react";
// Imports components
import PageGallery from './page/PageGallery';
import OrganismHeader from './organisms/OrganismHeader';
import './App.scss';
import './assets/styles/organisms/slider.scss';

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
					href: '/create',
					style: "menu-item",
					text: 'Create gallery post'
				}
			]
        }
	}

	render() {
		return (
			<main>
				<OrganismHeader items={this.state.menuItems} ></OrganismHeader>
				<PageGallery></PageGallery>
			</main>
		);
    }
}

export default App;