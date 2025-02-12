import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PMOClient } from "../../helpers/client";

export const getAllProjects = createAsyncThunk(
  "pmoProjects/getAllProjects",
  async (filterType, { rejectWithValue }) => {
    try {
      const response = await PMOClient.get(
        `/project${filterType.page ? `?page=${filterType.page}` : ""}${
          filterType.limit ? `&limit=${filterType.limit}` : ""
        }${filterType.statusId ? `&statusId=${filterType.statusId}` : ""}${
          filterType.startDate ? `&startDate=${filterType.startDate}` : ""
        }${filterType.endDate ? `&endDate=${filterType.endDate}` : ""}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const getProjectSummary = createAsyncThunk(
  "pmoProjects/getProjectSummary",
  async (filterType, { rejectWithValue }) => {
    try {
      const response = await PMOClient.get(
        `/project/details/summary${
          filterType.page ? `?page=${filterType.page}` : ""
        }${filterType.limit ? `&limit=${filterType.limit}` : ""}${
          filterType.statusId ? `&statusId=${filterType.statusId}` : ""
        }${filterType.startDate ? `&startDate=${filterType.startDate}` : ""}${
          filterType.endDate ? `&endDate=${filterType.endDate}` : ""
        }`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const projectSlice = createSlice({
  name: "pmoProjects",
  initialState: {
    loading: false,
    projects: [],
    projectSummary: {},
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
      })
      .addCase(getProjectSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjectSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.projectSummary = action.payload;
      })
      .addCase(getProjectSummary.rejected, (state, action) => {
        state.error = action.error?.message;
      });
  },
});

export default projectSlice.reducer;
