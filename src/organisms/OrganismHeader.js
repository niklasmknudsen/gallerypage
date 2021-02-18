import MoleculeNav from '../molecules/MoleculeNav';
import AtomicLink from '../atoms/AtomicLink';
import React, { Component } from 'react';


class OrganismHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menuItems: [
				{
					href: "PageHome",
					text: "Home",
					style: {
						fontSize: 10 + 'px;',
						color: 'white;'
					}
				},
				{
					href: "PageGallery",
					text: "Gallery",
					style: {
						fontSize: 10 + 'px;',
						color: 'white;'
					}
				},
				{
					href: "PageInfo",
					text: "Info",
					style: {
						fontSize: 10 + 'px;',
						color: 'white;'
					}
				}
			]
		};
	}

	render() {

		return (
			<header>
				<MoleculeNav menuItems={this.state.menuItems} />
			</header>
		)

	}
}

export default OrganismHeader;