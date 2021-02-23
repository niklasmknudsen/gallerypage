import React, { Component } from 'react';
import AtomicButton from '../atoms/AtomicButton';

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
        return <AtomicButton handleClick={this.handleClick.bind(this)} style={this.styledButton} text={this.state.text} />;
    }
}

export default PageGallery;

