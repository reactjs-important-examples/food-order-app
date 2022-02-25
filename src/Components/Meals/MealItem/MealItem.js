import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';
import CartContext from '../../../Store/cart-context';

const MealItem = props =>{
    const cartCtx = useContext(CartContext);
    const price = `$${props.meal.price.toFixed()}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            price: props.meal.price,
            amount: amount
        })
    }
    return(
        <>
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.meal.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddCart={addToCartHandler}/>
            </div>
        </li>
        </>
    );
}

export default MealItem;