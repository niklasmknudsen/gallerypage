import React, { Component } from 'react';
import OrganismDestinations from '../organisms/OrganismDestinations';
import '../assets/styles/organisms/cardDestinations.scss';
import OrganismHeader from '../organisms/OrganismHeader';
import OrganismFooter from '../organisms/OrganismFooter';


class PageAllDestinations extends Component {

    constructor(props) {
        super(props);
        }

    render() {
        return (
            <article id="page-destinations">
                <OrganismHeader />
                <OrganismDestinations />
                <OrganismFooter />
            </article>
        );
    }
}

export default PageAllDestinations;