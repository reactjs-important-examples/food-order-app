import React from 'react';
import Header from './Components/Layout/Header';
import MealsSummary from './Components/Meals/MealsSummary';
import Meals from './Components/Meals/Meals';

function App() {
  return (
    <>
     <Header />
     <main>
       <Meals />
     </main>
    </>
  );
}

export default App;
