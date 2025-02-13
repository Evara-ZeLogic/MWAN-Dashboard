import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PMOClient } from "../../helpers/client";

export const countByMainSection = createAsyncThunk(
  "countedBy/countByMainSection",
  async (filterType, { rejectWithValue }) => {
    try {
      const response = await PMOClient.get(
        `/project/details/count-by-main-section${
          filterType.page ? `?page=${filterType.page}` : ""
        }${filterType.limit ? `&limit=${filterType.limit}` : ""}${
          filterType.statusId ? `&statusId=${filterType.statusId}` : ""
        }${filterType.startDate ? `&startDate=${filterType.startDate}` : ""}${
          filterType.endDate ? `&endDate=${filterType.endDate}` : ""
        }`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const countByStatus = createAsyncThunk(
  "countedBy/countByStatus",
  async (filterType, { rejectWithValue }) => {
    try {
      const response = await PMOClient.get(
        `/project/details/count-by-status${
          filterType.page ? `?page=${filterType.page}` : ""
        }${filterType.limit ? `&limit=${filterType.limit}` : ""}${
          filterType.statusId ? `&statusId=${filterType.statusId}` : ""
        }${filterType.startDate ? `&startDate=${filterType.startDate}` : ""}${
          filterType.endDate ? `&endDate=${filterType.endDate}` : ""
        }`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const countByStage = createAsyncThunk(
  "countedBy/countByStage",
  async (filterType, { rejectWithValue }) => {
    try {
      const response = await PMOClient.get(
        `/project/details/count-by-operational-model-stage${
          filterType.page ? `?page=${filterType.page}` : ""
        }${filterType.limit ? `&limit=${filterType.limit}` : ""}${
          filterType.statusId ? `&statusId=${filterType.statusId}` : ""
        }${filterType.startDate ? `&startDate=${filterType.startDate}` : ""}${
          filterType.endDate ? `&endDate=${filterType.endDate}` : ""
        }`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const countByStrategicObjective = createAsyncThunk(
  "countedBy/countByStrategicObjective",
  async (filterType, { rejectWithValue }) => {
    try {
      const response = await PMOClient.get(
        `/project/details/count-by-strategic-objective${
          filterType.page ? `?page=${filterType.page}` : ""
        }${filterType.limit ? `&limit=${filterType.limit}` : ""}${
          filterType.statusId ? `&statusId=${filterType.statusId}` : ""
        }${filterType.startDate ? `&startDate=${filterType.startDate}` : ""}${
          filterType.endDate ? `&endDate=${filterType.endDate}` : ""
        }`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
const countedBySlice = createSlice({
  name: "countedBy",
  initialState: {
    loading: false,
    mainSections: [],
    status: [],
    stages: [],
    strategicObjectives: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(countByMainSection.pending, (state) => {
        state.loading = true;
      })
      .addCase(countByMainSection.fulfilled, (state, action) => {
        state.loading = false;
        state.mainSections = action.payload;
      })
      .addCase(countByMainSection.rejected, (state, action) => {
        state.error = action.error?.message;
      })
      .addCase(countByStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(countByStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(countByStatus.rejected, (state, action) => {
        state.error = action.error?.message;
      })
      .addCase(countByStage.pending, (state) => {
        state.loading = true;
      })
      .addCase(countByStage.fulfilled, (state, action) => {
        state.loading = false;
        state.stages = action.payload;
      })
      .addCase(countByStage.rejected, (state, action) => {
        state.error = action.error?.message;
      })
      .addCase(countByStrategicObjective.pending, (state) => {
        state.loading = true;
      })
      .addCase(countByStrategicObjective.fulfilled, (state, action) => {
        state.loading = false;
        state.strategicObjectives = action.payload;
      })
      .addCase(countByStrategicObjective.rejected, (state, action) => {
        state.error = action.error?.message;
      });
  },
});

export default countedBySlice.reducer;
