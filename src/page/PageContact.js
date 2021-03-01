import React from 'react';
import '../assets/styles/pages/pagecontact.scss';
import '.././App.scss';
import OrganismHeader from '../organisms/OrganismHeader';

class PageContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }





    render() {
        return (
            <article id="page-contact">
                <OrganismHeader />
                <section className=""></section>
                <section className=""></section>
            </article>
        );
    };
}


export default PageContact;