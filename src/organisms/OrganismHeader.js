import React, { Component } from 'react';
import MoleculeNav from '../molecules/MoleculeNav';

class OrganismHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menuItems: [
				{
					href: '/',
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
			<header id="menu-header">
				<MoleculeNav menuItems={this.state.menuItems} />
			</header>
		)
	}
}

export default OrganismHeader;