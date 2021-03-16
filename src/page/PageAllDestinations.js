import React, { Component } from 'react';
import OrganismDestinations from '../organisms/OrganismDestinations';
import '../assets/styles/organisms/cardDestinations.scss';

class PageAllDestinations extends Component {

    constructor(props) {
        super(props);
        }

    render() {
        return (
            <section>
                <h1>All Destinaltions</h1>
                <OrganismDestinations />
            </section>
        );
    }
}

export default PageAllDestinations;