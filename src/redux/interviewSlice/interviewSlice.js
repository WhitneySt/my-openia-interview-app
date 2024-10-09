import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { analyzeInterviewResponse } from "../../services/openiaService";

// Acción asíncrona para analizar la respuesta
export const analyzeAnswer = createAsyncThunk(
  'interview/analyzeAnswer',
  async ({ question, response }) => {
    const feedback = await analyzeInterviewResponse(question, response);
    return feedback;
  }
);

// Definición del slice
const interviewSlice = createSlice({
  name: 'interview',
  initialState: {
    feedback: {
      claridad: '',
      relevancia: '',
      formalidad: '',
      sugerencias: '',
    },
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(analyzeAnswer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(analyzeAnswer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedback = action.payload;
      })
      .addCase(analyzeAnswer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default interviewSlice.reducer;
