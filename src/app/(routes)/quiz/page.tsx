"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const Quiz = () => {
  const springServerUrl = process.env.NEXT_PUBLIC_SPRING_SERVER_URL;
  const QuestionForm = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[][]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const router = useRouter();
    const token = Cookies.get("token");
    const [error, setError] = useState(null);

    useEffect(() => {
      const token = Cookies.get("token");

      fetch(`${springServerUrl}/quiz/quick`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setQuestions(data))
        .catch((error) => {
          console.error("Error:", error);
          <p>Something went wrong</p>;
        });
    }, []);

    const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSelectedAnswers((prev) => {
        const currentAnswers = prev[currentQuestionIndex] || [];
        return [
          ...prev.slice(0, currentQuestionIndex),
          currentAnswers.includes(value)
            ? currentAnswers.filter((answer) => answer !== value)
            : [...currentAnswers, value],
          ...prev.slice(currentQuestionIndex + 1),
        ];
      });
    };

    const handleNextQuestion = () => {
      setCurrentQuestionIndex((prev) => prev + 1);
    };

    const handlePreviousQuestion = () => {
      setCurrentQuestionIndex((prev) => prev - 1);
    };

    if (questions.length === 0) {
      return <div>Loading...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const handleQuizSubmit = () => {
      const userId = Cookies.get("userId");
      fetch("${springServerUrl}/results/save", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId, // replace with the actual user ID
          responses: selectedAnswers.map((answerTexts, index) => ({
            questionId: questions[index].id,
            selectedAnswerTexts: answerTexts,
            isCorrect: null, // replace with the actual correctness if available
          })),
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // TODO remove log
          console.log("Quiz submitted successfully:", data);
          router.push("/quiz/result"); // redirect to a success page
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    return (
      <section>
        <div className="w-screen bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-50">
              Quiz Question
            </h2>
            <p className="mb-4 text-gray-100">
              {currentQuestionIndex + 1}. {currentQuestion.question}
            </p>
            <div className="space-y-2">
              {currentQuestion.answers.map((answer, index) => (
                <label
                  key={index}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="quiz"
                    value={answer.text}
                    checked={
                      selectedAnswers[currentQuestionIndex]?.includes(
                        answer.text
                      ) || false
                    }
                    onChange={handleAnswerChange}
                  />
                  <span className="ml-2">{answer.text}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between">
              {currentQuestionIndex == 0 ? (
                <button
                  className="mt-4 w-1/3 border-solid py-2 text-white"
                  disabled
                >
                  Previous Question
                </button>
              ) : (
                <button
                  className="mt-4  w-1/3 border-solid py-2   text-white  rounded hover:bg-gray-200 hover:text-gray-800 "
                  onClick={handlePreviousQuestion}
                >
                  Previous Question
                </button>
              )}

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  className="mt-4 w-1/3 py-2 text-white bg-blue-500 rounded hover:bg-blue-400 hover:border-white hover:border-2"
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="mt-4 w-1/3 py-2 text-white bg-green-500 rounded hover:bg-green-400"
                  onClick={handleQuizSubmit}
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
      <main className="flex  px-2 md:px-20 items-center">
        <QuestionForm></QuestionForm>
      </main>
    </div>
  );
};

export default Quiz;
