import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state , action) =>{
    if(action.type === "ADD"){
        let updatedItems;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const exsistingCartItem = state.items[existingCartItemIndex];
        if(exsistingCartItem){
            const updatedItem = {
               ...exsistingCartItem , amount: exsistingCartItem.amount + action.item.amount
           }

           updatedItems = [...state.items];
           updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        
        const updateTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        }
    }
    if(action.type ===  "REMOVE"){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if(existingItem.amount > 1 ){
            const updatedItem = { ...existingItem, amount:existingItem.amount-1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        }
    }
    return defaultCartState;
}

const CartContextProvider = props =>{
    const [ cartState, dispachCartAction ] = useReducer( cartReducer , defaultCartState );

    const addItemToCartHandler = item =>{
        dispachCartAction({
            type:"ADD",
            item: item
        })
    }

    const removeItemFromHandler = id =>{
        dispachCartAction({
            type:"REMOVE",
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler,
    }

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;