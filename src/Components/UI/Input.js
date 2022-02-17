import React, { useRef } from 'react';

import styles from './Input.module.css';

const Input = React.forwardRef( (props , ref) =>{
    const inputRef = useRef();

    const activate = () =>{
        inputRef.current.focus();
    }

    return(
        <div className={styles.input}>
            <label htmlFor={props.id} >Amount</label>
            <input {...props.input}/>
        </div>
    );
});

export default Input;