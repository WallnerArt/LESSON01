import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type Ingredient = 'bread' | 'cheese' | 'salami';

interface IQuote {
  sentence: string;
  character: {
    name: string;
    slug: string;
    house: {
      name: string;
      slug: string;
    };
  };
}

interface InitialSandwichStateRTK {
  ingredients: Ingredient[];
  quote: IQuote | null;
  status: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: InitialSandwichStateRTK = {
  ingredients: [],
  quote: null,
  status: 'idle',
};

export const fetchQuote = createAsyncThunk<IQuote>('sandwich/fetchQuote', async () => {
  const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
  const data = await response.json();
  return data;
});

const sandwichSlice = createSlice({
  name: 'sandwich',
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<Ingredient>) {
      state.ingredients.push(action.payload);
    },
    deleteAllIngredients(state) {
      state.ingredients = [];
    },
    deleteLastIngredient(state) {
      state.ingredients.pop();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action: PayloadAction<IQuote>) => {
        state.status = 'success';
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { addIngredient, deleteAllIngredients, deleteLastIngredient } = sandwichSlice.actions;

export default sandwichSlice.reducer;