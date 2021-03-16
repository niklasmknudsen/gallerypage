import React, { Component } from 'react';
import '.././App.scss';
import '.././assets/styles/organisms/slider.scss';
import OrganismHeader from '../organisms/OrganismHeader';
import AtomicButton from '../atoms/AtomicButton';
import OrganismSlider from '../organisms/OrganismSlider';
import OrganismCardRow from '../organisms/OrganismCardRow';

class PageHome extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: 'Atomic Button',
            backgroundColor: `#` + 191919,
            color: 'white'
        };
        this.styledButton = { backgroundColor: this.state.backgroundColor, color: this.state.color };
    }

    handleClick = (event) => {
        console.log('klikker');
    }

    render() {
        return (
            <article id="page-home">
                <OrganismHeader />
                <OrganismSlider></OrganismSlider>
                <OrganismCardRow></OrganismCardRow>
            </article>
        );
    }
}

export default PageHome;

