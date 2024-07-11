import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../reduxRTK/storeRTK';
import { addIngredient, deleteAll } from '../reduxRTK/sandwichSlice';

const Sandwich = () => {
    // Получаем данные из хранилища
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div>
            <h1>Choose ingredients for your sandwich:</h1>
            <p>Sandwich: {ingredients.join(', ')}</p>
            <div>
                <button onClick={() => dispatch(addIngredient('bread'))}>Add Bread</button>
                <button onClick={() => dispatch(addIngredient('cheese'))}>Add Cheese</button>
                <button onClick={() => dispatch(addIngredient('salami'))}>Add Salami</button>
                <button onClick={() => dispatch(deleteAll())}>Delete all ingredients</button>
            </div>
        </div>
    );
}

export default Sandwich;

