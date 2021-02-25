import React, { Component } from 'react';
import AtomicButton from '../atoms/AtomicButton';
import OrganismSlider from '../organisms/OrganismSlider';
import OrganismCardRow from '../organisms/OrganismCardRow';

class PageGallery extends Component {
    
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
            <section className="pageGallery">
                <OrganismSlider></OrganismSlider>
                <OrganismCardRow></OrganismCardRow>
            </section>
        );
    }
}

export default PageGallery;

