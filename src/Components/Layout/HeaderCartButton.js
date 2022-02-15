import React from "react";

import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return(
        <>
        <button className={styles.btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>0</span>
        </button>
        </>
    );
}

export default HeaderCartButton;