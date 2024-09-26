import { useState } from "react";
import { Button, Radio, Form, Typography, Space, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { incrementScore, nextQuestion } from "../../store/quizSlice";
import { AppDispatch, RootState } from "../../store/store";
import styles from "./Question.module.css";

const { Title, Text } = Typography;

const Question = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { questions, currentQuestionIndex } = useSelector(
    (state: RootState) => state.quiz
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex] || {
    answers: [],
    qusetion: "",
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      message.error("Please select an answer before proceeding!");
    } else {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        dispatch(incrementScore());
      }
      dispatch(nextQuestion());
      setSelectedAnswer(null);
    }
  };

  return (
    <div>
      <Space direction="vertical" size="large" className={styles.container}>
        <Title level={3} >
          {`Question ${currentQuestionIndex + 1} of ${questions.length}`}
        </Title>

        <Text strong >{currentQuestion.question}</Text>

        <Form>
          <Radio.Group
            onChange={(e) => setSelectedAnswer(e.target.value)}
            value={selectedAnswer}
          >
            {currentQuestion.answers.map((answer: string) => (
              <Radio key={answer} value={answer} className={styles.choice}>
                {answer}
              </Radio>
            ))}
          </Radio.Group>
          <Button
            type="primary"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            Next
          </Button>
        </Form>
      </Space>
    </div>
  );
};

export default Question;
