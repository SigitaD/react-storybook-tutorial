import React from 'react';

import './Input.css';

function Input(props) {
    const {size='small', ...rest} = props
    return (
    <input type='text' className={`input ${size}`} value={size} {...rest}></input>
    )
}

export default Input;