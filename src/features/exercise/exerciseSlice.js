import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllExercises,
  getBodyPartExercises,
  getNameExercises,
} from "./exerciseAPI";

const initialState = {
  exercises: [],
  status: "",
  error: "",
};

export const fetchAllExercises = createAsyncThunk(
  "exercises/fetchAll",
  async () => {
    const response = await getAllExercises();
    return response.data;
  }
);

export const fetchBodyPartExercises = createAsyncThunk(
  "exercises/bodyPart",
  async (bodyPart) => {
    const response = await getBodyPartExercises(bodyPart);
    return response.data;
  }
);

export const fetchNameExercises = createAsyncThunk(
  "exercises/name",
  async (bodyPart) => {
    const response = await getNameExercises(bodyPart);
    return response.data;
  }
);

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllExercises.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllExercises.fulfilled, (state, action) => {
        state.status = "idle";
        state.exercises = action.payload;
      })
      .addCase(fetchAllExercises.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchBodyPartExercises.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBodyPartExercises.fulfilled, (state, action) => {
        state.status = "idle";
        state.exercises = action.payload;
      })
      .addCase(fetchBodyPartExercises.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchNameExercises.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNameExercises.fulfilled, (state, action) => {
        state.status = "idle";
        state.exercises = action.payload;
      })
      .addCase(fetchNameExercises.rejected, (state, action) => {
        state.status = "failed";
        console.log(action);
      });
  },
});

export default exerciseSlice.reducer;
