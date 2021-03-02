import React, { Component } from 'react';

/* style imports */
import '../assets/styles/pages/pageactivities.scss';

/* component imports */
import Testimonial from '../molecules/MoleculeTestimonial';


class PageActivities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerline: 'Cruises - a great form of travel',
            description1: 'Cruises are a popular way to travel, and once you have tried a cruise, you understand why -' +
            'on a cruise you can relax and let all experiences come to you.On board there is no stress.Only good food, fun activities,' +
                'entertainment and time to enjoy the view of the sea and the changing landscapes that the ship sails past',
            description2: 'On various cruises, a landing is included in the journey. Here you get the opportunity to experience the destination up close and feel the local atmosphere.' +
            'Here it is also an obvious opportunity to buy local products or special souvenirs to take home.Enjoy an adventurous form of travel that gives you space to relax and be pampered.'

        };
    }

    render() {
        return (
            <article id="page-activities">
                <div className="content-grid">
                    <div className="content-grid__column">

                    </div>
                    <div className="content-grid__column">
                        <Testimonial header={this.state.headerline} text={this.state.description1}></Testimonial>
                        <Testimonial text={this.state.description2}></Testimonial>
                    </div>
                </div>
            </article>
        );
    }
}


export default PageActivities;