import React, { Component } from 'react';
import Card from '../molecules/MoleculeCard';
import '../assets/styles/organisms/cardRow.scss';
/**
 * MoleculeCard dataformat example
 *
 * {
 *   src: Imagesource,
 *   alt: Image alt text,
 *   text: Card text headerline,
 *   info: Card description
 * }
 */

class OrganismCardRow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			destinations: []
		};
	}

	componentDidMount() {
		fetch("/data/destinations.json")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						destinations: result.data
					});
				},

				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { error, isLoaded, destinations } = this.state;

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<article className="card-grid">
					<section className="card-row">
						{destinations.map((item, index) => (
							<div className="card-column">
								<Card key={index} src={item.src} alt={item.alt} text={item.text} info={item.info} />
							</div>
						))}
					</section>
				</article>
			);
		}
	}
}


export default OrganismCardRow;