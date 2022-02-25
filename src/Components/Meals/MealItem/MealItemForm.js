import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = props =>{
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 1 ){
            setAmountIsValid(false);
        }
        props.onAddCart(enteredAmountNumber);
    }

    return(
        <>
        <form onSubmit={submitHandler} className={styles.form}>
            <Input 
                ref={amountInputRef}
                lable='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            { !amountIsValid && <p>Please enter a amount between (1-5). </p> }
        </form>
        </>
    );
}

export default MealItemForm;