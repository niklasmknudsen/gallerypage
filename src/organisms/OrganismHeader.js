import React, { Component } from 'react';
import MoleculeNav from '../molecules/MoleculeNav';

class OrganismHeader extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<MoleculeNav menuItems={this.props.items} />
			</header>
		)
	}
}

export default OrganismHeader;