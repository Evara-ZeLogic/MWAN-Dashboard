import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PMOClient } from "../../helpers/client";
export const getAllProjects = createAsyncThunk(
  "projects/getAllProjects",
  async (filterType, { rejectWithValue }) => {
    try {
      const response = await PMOClient.get(
        `/project?page=1&limit=1&statusId=2&startDate=2025-01-29&endDate=2025-02-29`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const projectSlice = createSlice({
  initialState: {
    loading: false,
    projects: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.error = action.error?.message;
      });
  },
});

export default projectSlice.reducer;
