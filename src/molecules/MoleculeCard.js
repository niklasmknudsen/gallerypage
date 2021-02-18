import AtomicImage from './atoms/AtomicImage';
import React from 'react';
function MoleculeCard(props) {
    return (
        <section class="gallerypage-card">
            <AtomicImage src={this.props.src} alt={this.props.alt} />
        </section>
    );
}


export default MoleculeCard;