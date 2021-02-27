import React from 'react';

function AtomicImage(props) {
    return <img src={props.src} alt={props.alt} style={props.style} />;
}

export default AtomicImage;