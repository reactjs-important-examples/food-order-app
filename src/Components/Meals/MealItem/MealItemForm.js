import React from 'react';

import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = props =>{
    
    const submitHandler = props =>{

    }

    return(
        <>
        <form onSubmit={submitHandler} className={styles.form}>
            <Input 
                ref={null}
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
        </form>
        </>
    );
}

export default MealItemForm;