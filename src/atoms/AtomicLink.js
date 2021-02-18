import React, { Component, useState } from 'react';

function AtomicLink(props) {
    return (
        <a className="button" href={props.href} style={props.style} onClick={props.handleClick}>
            {props.text}
        </a>
    );
}

export default AtomicLink;