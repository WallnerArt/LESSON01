import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../reduxRTK/storeRTK';
import { addIngredient, deleteAllIngredients, deleteLastIngredient, fetchQuote } from '../reduxRTK/sandwichSlice';

const Sandwich = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const status = useSelector((state: RootState) => state.sandwich.status);
    const quote = useSelector((state: RootState) => state.sandwich.quote);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div>
            <h1>Choose ingredients for your sandwich:</h1>
            <p>Sandwich: {ingredients.join(', ')}</p>
            <div>
                <button onClick={() => dispatch(addIngredient('bread'))}>Add Bread</button>
                <button onClick={() => dispatch(addIngredient('cheese'))}>Add Cheese</button>
                <button onClick={() => dispatch(addIngredient('salami'))}>Add Salami</button>
                <button onClick={() => dispatch(deleteLastIngredient())}>Delete last ingredient</button>
                <button onClick={() => dispatch(deleteAllIngredients())}>Delete all ingredients</button>
            </div>
            <div>
                <button onClick={() => dispatch(fetchQuote())}>Fetch Quote</button>
            </div>
            <div>
                {status === 'loading' && (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
                {status === 'success' && quote && <div>{quote.sentence}</div>}
                {status === 'error' && <div>Error</div>}
            </div>
        </div>
    );
};

export default Sandwich;