import AtomicImage from './atoms/AtomicImage';

function MoleculeCard(props) {
    return (
        <section class="gallerypage-card">
            <AtomicImage src={this.props.src} alt={this.props.alt} />
        </section>
    );
}


export default MoleculeCard;