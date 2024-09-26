// src/App.tsx
import { useEffect } from "react";
import { Spin, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import StudentForm from "./components/StudentForm";
import Question from "./components/Question";
import Results from "./components/results";
import { AppDispatch, RootState } from "./store/store";
import { fetchQuestions } from "./store/quizThunk";
import 'antd/dist/reset.css';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { studentName, currentQuestionIndex, questions, loading, error } = useSelector(
    (state: RootState) => state.quiz
  );

  useEffect(() => {    
    if (studentName && questions.length === 0) {
      dispatch(fetchQuestions()); 
    }
  }, [studentName, dispatch, questions.length]);

  if (!studentName) {
    return <StudentForm />;
  }

  if (loading) {
    return <Spin size="small" style={{display:'block'}} />;
  }

  if (error) {
    return <Typography.Text type="danger">{error}</Typography.Text>;
  }

  if (currentQuestionIndex < questions?.length) {
    return <Question />;
  }

  return <Results />;
};

export default App;
