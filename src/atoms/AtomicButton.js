import React, { Component, useState } from 'react';

function AtomicButton(props) {
    return (
        <button className="button" style={props.style} onClick={props.handleClick}>
            {props.text}
        </button>
    );
}

export default AtomicButton;
