import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialSandwichStateRTK {
  ingredients: string[];
}

const initialState: InitialSandwichStateRTK = {
  ingredients: []
};

const sandwichSlice = createSlice({
  name: 'sandwich',
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<string>) {
      state.ingredients.push(action.payload);
    },
    deleteAll(state) {
      state.ingredients = [];
    },
  },
});

export const { addIngredient, deleteAll } = sandwichSlice.actions;

export default sandwichSlice.reducer;