import React, { Component } from 'react';
import AtomicImage from '../atoms/AtomicImage';

// import components 

class OrganismGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            images: [
                "",
                "",
                "",

            ],
            slideIndex: 0,
        };
    }

    slideLeft = () => {
        const nextIndex = slideIndex - 1;
        if (nextIndex < 0) {
            setState({
                slideIndex: images.length - 1
            });
        } else {
            this.setState({
                slideIndex: nextIndex
            })
        }
    }

    slideRight = () => {
        this.setState({
            slideIndex: (slideIndex + 1) % images.length
        });
    }

    render() {
        const { error, isLoaded, images } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section className="image-gallery">
                    <button onClick={slideLeft}>{"<"}</button>
                    <AtomicImage src={this.state.images[slideIndex]} alt={this.slideIndex} />
                    <button onClick={sliderRight}>{">"}</button>
                </section>
           )
        }
    }
}


export default OrganismGallery;