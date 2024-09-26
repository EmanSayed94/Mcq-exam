import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { setStudentName } from "../../store/quizSlice";
import { AppDispatch } from "../../store/store";


const StudentForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onFinish = (values: { name: string }) => {
    dispatch(setStudentName(values.name));
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Enter your name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="">
          Start Exam
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentForm;
