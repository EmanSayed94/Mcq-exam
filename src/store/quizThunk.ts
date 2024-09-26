// src/store/quizThunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import  shuffle  from "../utils/shuttle";

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async () => {
    const response = await axios.get("https://66f4206b77b5e88970986c0d.mockapi.io/questions");

    const questions = response.data.map((q: any) => ({
      ...q,
      answers: shuffle([q.correctAnswer, ...q.incorrectAnswers]),
    }));
    return shuffle(questions); 
  }
);
