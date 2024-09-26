
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestions } from "./quizThunk";

interface QuizState {
  studentName: string;
  questions: any[];
  currentQuestionIndex: number;
  score: number;
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  studentName: "",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  loading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setStudentName: (state, action: PayloadAction<string>) => {
      state.studentName = action.payload;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.questions = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch questions.";
      });
  },
});

export const { setStudentName, incrementScore, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
