import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllQuestions();
  }, []);

  const getAllQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:4000/questions");
      setQuestions(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="table-container">
          {loading ? (
            <p>Loading questions...</p>
          ) : questions && questions.length > 0 ? (
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <th scope="col">Question</th>
                  <th scope="col">Options</th>
                  <th scope="col">Correct Option</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question) => (
                  <tr key={question.id}>
                    <th scope="row">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                    </th>
                    <td>{question.questionText}</td>
                    <td>
                      <ul>
                        {question.answerOptions &&
                          question.answerOptions.map((option, index) => (
                            <li key={index}>{option.answerText}</li>
                          ))}
                      </ul>
                    </td>
                    <td>
                      {(question.answerOptions &&
                        question.answerOptions.find(
                          (option) => option.isCorrect
                        )?.answerText) ||
                        ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No questions found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
