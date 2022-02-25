import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../Store/cart-context";
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItem = (
        cartCtx.items.reduce((sum , item) =>{
            return sum + item.amount
        }, 0)
        
    );

    const btnClasses = `${styles.btnClasses} ${ btnIsHighLighted && styles.bump}`;
    useEffect(()=> {
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () =>{
            clearTimeout(timer);
        };
    }, [cartCtx.items]);
    return(
        <>
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItem}</span>
        </button>
        </>
    );
}

export default HeaderCartButton;