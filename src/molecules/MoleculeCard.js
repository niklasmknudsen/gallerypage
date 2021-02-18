import AtomicImage from './atoms/AtomicImage';

function MoleculeCard(props) {
    return (
        <section class="gallerypage-card">
            <AtomicImage src={this.props.src} alt={this.props.alt} />
            <Headerline className="textCenter" text={this.props.text} />
        </section>
    );
}


function Headerline(props) {
    return (
        <h2>{this.props.text}</h2>
    );
}

export default MoleculeCard;