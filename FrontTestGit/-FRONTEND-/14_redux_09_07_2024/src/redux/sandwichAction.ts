
// 1. Типизация Action (способ изменения глобального состояния)
export type ActionSandwich = 
| { type: 'sandwich/addIngredient', payload: 'bread' | 'cheese' | 'salami' }
| { type: 'sandwich/deleteAll' }
