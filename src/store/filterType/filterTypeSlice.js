import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PMOClient } from "../../helpers/client";

export const getMainSections = createAsyncThunk(
  "filterType/getMainSections",
  async (rejectWithValue) => {
    try {
      const response = await PMOClient.get("/main-sections");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.esponse?.data);
    }
  }
);

export const getStatuses = createAsyncThunk(
  "filterType/getStatuses",
  async (rejectWithValue) => {
    try {
      const response = await PMOClient.get("/statuses");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.esponse?.data);
    }
  }
);

export const getContractClassifications = createAsyncThunk(
  "filterType/getContractClassifications",
  async (rejectWithValue) => {
    try {
      const response = await PMOClient.get("/contract-classifications");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.esponse?.data);
    }
  }
);

const filterTypeSlice = createSlice({
  name: "filterType",
  initialState: {
    loading: false,
    mainSections: [],
    statuses: [],
    contractClassifications: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMainSections.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMainSections.fulfilled, (state, action) => {
        state.loading = false;
        state.mainSections = action.payload;
      })
      .addCase(getMainSections.rejected, (state, action) => {
        state.error = action.error?.message;
      })
      .addCase(getStatuses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStatuses.fulfilled, (state, action) => {
        state.loading = false;
        state.statuses = action.payload;
      })
      .addCase(getStatuses.rejected, (state, action) => {
        state.error = action.error?.message;
      })
      .addCase(getContractClassifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContractClassifications.fulfilled, (state, action) => {
        state.loading = false;
        state.contractClassifications = action.payload;
      })
      .addCase(getContractClassifications.rejected, (state, action) => {
        state.error = action.error?.message;
      });
  },
});
export default filterTypeSlice.reducer;
