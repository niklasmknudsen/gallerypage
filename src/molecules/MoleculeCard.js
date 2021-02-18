import AtomicImage from './atoms/AtomicImage';

function MoleculeCard(props) {
    return (
        <section class="gallerypage-card">
            <AtomicImage src={this.props.src}  />
        </section>
    );
}


export default MoleculeCard;