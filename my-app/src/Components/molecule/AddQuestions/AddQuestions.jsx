import React from "react";
import "./AddQuestion.css";
import { useState } from "react";
import { postApi } from "../../../api/api";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Container,
} from "@mui/material";

const AddQuestions = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // question,
      // options: [option1, option2, option3, option4],
      // correctOption,
      id: uuidv4(),
      questionText: question,
      answerOptions: [
        {
          answerText: option1,
          isCorrect: correctOption === option1 ? true : false,
        },
        {
          answerText: option2,
          isCorrect: correctOption === option2 ? true : false,
        },
        {
          answerText: option3,
          isCorrect: correctOption === option3 ? true : false,
        },
        {
          answerText: option4,
          isCorrect: correctOption === option4 ? true : false,
        },
      ],
    };

    postData(formData);
    console.log("Form Data:", formData);
    setQuestion("");
    setAnswer("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectOption("");
  };

  function postData(formData) {
    postApi(formData);
  }

  return (
    <div className="form-container">
      <div className="form-background">
        <Container maxWidth="sm">
          <h1 style={{ textAlign: "center" }}>Add Questions</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Option 1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Option 2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Option 3"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Option 4"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Select Correct Option</InputLabel>
              <Select
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
              >
                <MenuItem value={option1}>Option 1</MenuItem>
                <MenuItem value={option2}>Option 2</MenuItem>
                <MenuItem value={option3}>Option 3</MenuItem>
                <MenuItem value={option4}>Option 4</MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                Add Question
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default AddQuestions;
