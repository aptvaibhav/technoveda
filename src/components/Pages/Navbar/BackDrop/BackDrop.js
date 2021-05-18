import React from 'react';

import '../BackDrop/BackDrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;