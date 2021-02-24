import React, { Component } from 'react';
import AtomicButton from '../atoms/AtomicButton';
import OrganismSlider from '../organisms/OrganismSlider';

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
            <OrganismSlider></OrganismSlider>
        );
    }
}

export default PageGallery;

