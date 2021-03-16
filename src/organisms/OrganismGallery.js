import React, { Component } from 'react';
import AtomicImage from '../atoms/AtomicImage';
import '../assets/styles/organisms/gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';
// import components 

class OrganismGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            images: [
                "/images/gallery/Khao_sok_natinonal_park_thailand.jpg",
                "/images/gallery/geysers_del_tatio_chile.jpg",
                "/images/gallery/ocean_sailing.jpg"
            ],
            slideIndex: 0,
        };
    }

    slideLeft = () => {
        console.log('venstre');
        const nextIndex = this.state.slideIndex - 1;
        if (nextIndex < 0) {
            this.setState({
                slideIndex: this.state.images.length - 1
            });
        } else {
            this.setState({
                slideIndex: nextIndex
            });
        }
    }

    slideRight = () => {
        console.log('højre');
        this.setState({
            slideIndex: (this.state.slideIndex + 1) % this.state.images.length
        });
    }

    render() {
        const { images } = this.state;
        return (
            <section className="image-gallery">
                <button className="image-gallery__left" onClick={this.slideLeft}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <AtomicImage key={this.state.slideIndex} src={images[this.state.slideIndex]} alt={this.slideIndex} />
                <button className="image-gallery__right" onClick={this.slideRight}><FontAwesomeIcon icon={faAngleRight} /></button>
            </section>
        )
    }
}


export default OrganismGallery;