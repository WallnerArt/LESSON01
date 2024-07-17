// src/redux/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

interface User {
  id: number;
  name: string;
  company: { name: string };
  phone: string;
  email: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
}

interface UserState {
  users: User[];
  selectedUser: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser: (state, action: PayloadAction<number>) => {
      state.selectedUser = state.users.find(user => user.id === action.payload) || null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Could not fetch users';
      });
  },
});

export const { selectUser } = userSlice.actions;

export default userSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectSelectedUser = (state: RootState) => state.users.selectedUser;