import AtomicImage from '../atoms/AtomicImage';
/*import '../assets/styles/molecules/cardDestinations.scss';*/

function MoleculeCard(props) {
    return (
        <section class="dest-card">
            <AtomicImage src={props.src} alt={props.alt} />
            <Headerline text={props.text} />
            <Breadcrumb info={props.info} />
        </section>
    );
}

function Headerline(props) {
    return (
        <h2>{props.text}</h2>
    );
}

function Breadcrumb(props) {
    return (
        <p>{props.info}</p>
    );
}

export default MoleculeCard;