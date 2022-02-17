import React from 'react';

import MealsSummary from './MealsSummary';
import AvilableMeals from './AvilableMeals';

const Meals = props =>{
    return(
        <>
            <MealsSummary />
            <AvilableMeals />
        </>
    );
}

export default Meals;