import React, { Component } from 'react';
import MoleculeFooterCustomerService from '../molecules/MoleculeFooterCustomerService.js';
import '../assets/styles/organisms/footer.scss';

class OrganismFooter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			footerServiceLinks: [
				{
					href: '/about',
					text: 'About Us'
				},
				{
					href: '/contact',
					text: 'Contact Us'
				},
				{
					href: '/practical-info',
					text: 'Practical Information'
				},
				{
					href: '/general-terms',
					text: 'General Terms'
				},
				{
					href: '/gdpr',
					text: 'GDPR'
				}
			]
		}
	}

	render() {
		return (
			<footer className="footer">
				<MoleculeFooterCustomerService footerServiceLinks={this.state.footerServiceLinks} />
			</footer>
		)
	}
}

export default OrganismFooter;