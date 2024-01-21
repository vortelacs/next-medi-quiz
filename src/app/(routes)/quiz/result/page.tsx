"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface QuizResultFormProps {
  quizResult: QuizResult;
}

const ResultForm = () => {
  const springServerUrl = process.env.NEXT_PUBLIC_SPRING_SERVER_URL;
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const token = Cookies.get("token");
    const userId = Cookies.get("userId");

    console.log("Sending request to server...");
    console.log("User ID:", userId);
    console.log("Request Body:", JSON.stringify({ userId }));

    fetch(`${springServerUrl}/results/all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", // Set Content-Type to JSON
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId }), // Ensure this is a valid JSON object
    })
      .then((response) => {
        console.log("Response received.");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Quiz results received:", data);
        setQuizResults(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error as needed
      });
  }, []);

  const QuizResultForm: React.FC<{ quizResult: QuizResult }> = ({
    quizResult,
  }) => {
    return (
      <div className="flex">
        {quizResult.responses.map((response, index) => (
          <div key={index}>
            <h2>Question {index + 1}</h2>
            <p>Selected Answers: {response.selectedAnswerTexts.join(", ")}</p>
            <p>{response.isCorrect ? "Correct" : "Incorrect"}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
      <main className="flex  px-2 md:px-20 items-center">
        {!quizResults || quizResults.length === 0 ? (
          <p>No quiz results found.</p>
        ) : (
          <div>
            <h1>Your quiz results</h1>
            {quizResults.map((quizResult, index) => (
              <QuizResultForm key={index} quizResult={quizResult} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ResultForm;
