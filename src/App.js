import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Meals from './Components/Meals/Meals';
import CartContextProvider from './Store/CartProvider';

function App() {

  const[cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
     setCartIsShow(false);
  }

  return (
    <CartContextProvider>
      { cartIsShow && <Cart onClose={hideCartHandler}/>}
     <Header onCartClick={showCartHandler}/>
     <main>
       <Meals />
     </main>
    </CartContextProvider>
  );
}

export default App;
