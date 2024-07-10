export const increment = () => ({ type: 'counter/increment' });
export const decrement = () => ({ type: 'counter/decrement' });
export const incrementByAmount = (amount: number) => ({ type: 'counter/incrementByAmount', payload: amount });
export const decrementByAmount = (amount: number) => ({ type: 'counter/decrementByAmount', payload: amount });