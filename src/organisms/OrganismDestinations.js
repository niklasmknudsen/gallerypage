import React, { Component } from 'react';
import Card from '../molecules/MoleculeCardDestinations';
/*import '../assets/styles/organisms/cardDestinations.scss';*/
/*import '../assets/styles/organisms/cardDestinations.scss';*/

class OrganismDestinations extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			destinations: []
		};
	}

	componentDidMount() {
		fetch("/data/allDestinations.json")
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
				<article className="pageAllDestinations">
					{destinations.map((item, index) => (
						<Card key={index} src={item.src} alt={item.alt} text={item.text} info={item.info} />
					))}
				</article>
			);
		}
	}
}


export default OrganismDestinations;