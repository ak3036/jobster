import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/testingRegister', user);
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  'login/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/testingRegister');
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;
