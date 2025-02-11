import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseURL =
  "http://pmo-backend-env.eba-vcvkcsgg.us-east-2.elasticbeanstalk.com";
export const userLogin = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await baseURL.post("/api/authenticate", {
        email: userData.email,
        password: userData.password,
      });
      const token = response;
      return token;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userData: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
