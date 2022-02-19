import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Meals from './Components/Meals/Meals';

function App() {

  const[cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
     setCartIsShow(false);
  }

  return (
    <>
    { cartIsShow && <Cart onClose={hideCartHandler}/>}
     <Header onCartClick={showCartHandler}/>
     <main>
       <Meals />
     </main>
    </>
  );
}

export default App;
