import { ActionCounter } from './counterAction';

// 2. а) Типизация State
export interface InitialCounterState {
    value: number;
}

// b) Инициализация State 
const initialState: InitialCounterState = {
    value: 0
}

// c) Описание работы Reducer (как State должен меняться в зависимости от Action)
export default function counterReducer(state = initialState, action: ActionCounter) {
    switch (action.type) {
        // case 'counter/minus':
        //     return { ...state, value: state.value - 1 }
        // case 'counter/plus':
        //     return { ...state, value: state.value + 1 }
        // case 'counter/minus10':
        //     return { ...state, value: state.value - 10 }
        // case 'counter/plus10':
        //     return { ...state, value: state.value + 10 }
        case 'counter/changeX':
            return { ...state, value: state.value + action.payload }
        default:
            return state
    }
}
