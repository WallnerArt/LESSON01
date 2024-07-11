import { ActionSandwich } from './sandwichAction';

// 2. а) Типизация State
export interface InitialSandwichState {
    ingredients: string[];
}

// b) Инициализация State 
const initialState: InitialSandwichState = {
    ingredients: []
}

// c) Описание работы Reducer (как State должен меняться в зависимости от Action)
export default function sandwichReducer(state = initialState, action: ActionSandwich) {
    switch (action.type) {
        case 'sandwich/addIngredient':
            return { ...state, ingredients: [...state.ingredients, action.payload] }
        case 'sandwich/deleteAll':
            return { ...state, ingredients: [] }
        default:
            return state
    }
}
