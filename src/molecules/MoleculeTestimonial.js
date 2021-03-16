import React from 'react';

function MoleculeTestimonial(props) {
    const header = props.header;

    if (header != null) {
        return (
            <section className="testimonial-content">
                <h3>{props.header}</h3>
                <p>{props.text}</p>
            </section>
        );
    } else {
        return <section className="testimonial-content"><p>{props.text}</p></section>;
    }
}

export default MoleculeTestimonial;