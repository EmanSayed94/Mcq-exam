import { Button, Typography, Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store/store";
import { resetQuiz } from "../../store/quizSlice";
import styles from "./result.module.css";

const { Title, Text } = Typography;

const ResultCard = () => {
 const dispatch=useDispatch<AppDispatch>();
  const { score, questions,studentName } = useSelector((state: RootState) => state.quiz);
  const totalQuestions = questions.length;

  const scorePercentage = (score / totalQuestions) * 100;

  const getPerformanceMessage = () => {
    if (scorePercentage === 100) {
      return { message: "Perfect!", color: "#52c41a" };
    } else if (scorePercentage >= 75) {
      return { message: "Great Job!", color: "#722ed1" };
    } else if (scorePercentage >= 50) {
      return { message: "Good Effort!", color: "#fa541c" };
    } else {
      return { message: "Keep Trying!", color: "#f5222d" };
    }
  };

  const { message, color } = getPerformanceMessage();

  return (
    <div className={styles.result}>
          <Title level={2} color="danger" style={{ color: color }}>
          {studentName}, {message} 
          </Title>

          <Badge
            count={`${score} / ${totalQuestions}`}
            style={{
              backgroundColor: color,
              fontSize: "18px",
              padding: "20px 20px",
              borderRadius: "10px",
              display:'flex',
              alignItems:'center'
            }}
          />
          <Text >
            You answered {score} out of {totalQuestions} questions correctly!
          </Text>

          <Button
            type="primary"
            className={styles['try-again']}
            onClick={() => dispatch(resetQuiz())}
          >
            Try Again
          </Button>

    </div>
  );
};

export default ResultCard;
