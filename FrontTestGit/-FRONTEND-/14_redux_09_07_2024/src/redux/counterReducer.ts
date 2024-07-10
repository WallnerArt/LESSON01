interface CounterState {
    value: number;
  }
  
  const initialState: CounterState = {
    value: 0,
  };
  
  const counterReducer = (state = initialState, action: { type: string; payload?: number }): CounterState => {
    switch (action.type) {
      case 'counter/increment':
        return { ...state, value: state.value + 1 };
      case 'counter/decrement':
        return { ...state, value: state.value - 1 };
      case 'counter/incrementByAmount':
        return { ...state, value: state.value + (action.payload || 0) };
      case 'counter/decrementByAmount':
        return { ...state, value: state.value - (action.payload || 0) };
      default:
        return state;
    }
  };
  
  export default counterReducer;