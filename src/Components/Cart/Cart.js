import React, { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';

import styles from './Cart.module.css';

const Cart = props =>{
    
    const ctx = [{id: 'c1' , name:'sushi' , amount: 2, price: 12.89}];

    const hasItems = ctx.length > 0;

    const cartItem = (
        <ul className={styles['cart-item']}>
        {
            ctx.map(item => 
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={null}
                    onAdd={null}
                    />)
        }   
        </ul>
    );

    return(
        <>
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$88.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                Close
                </button>
                { hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
        </>
    );
}

export default Cart;