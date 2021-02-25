import AtomicImage from '../atoms/AtomicImage';
import '../assets/styles/molecules/card.scss';

function MoleculeCard(props) {
    return (
        <section class="card">
            <AtomicImage src={props.src} alt={props.alt} />
            <Headerline className="textCenter" text={props.text} />
            <Breadcrumb className="textLeft" info={props.info} />
        </section>
    );
}

/**
 * MoleculeCard data format example
 * 
 * {
 *   src: Imagesource,
 *   alt: Image alt text,
 *   text: Card text headerline
 * }
 */


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