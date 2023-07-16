'use client'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

interface Question {
    question: string;
    answers: string[];
  }

const Quiz = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    // const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questions = [
      {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"]
      },
      {
        question: "What is the capital of England?",
        answers: ["Paris", "London", "Berlin", "Madrid"]
      },
      {
        question: "What is the capital of Germany?",
        answers: ["Paris", "London", "Berlin", "Madrid"]
      },
      {
        question: "What is the capital of Spain?",
        answers: ["Paris", "London", "Berlin", "Madrid"]
      }
    ];

    // useEffect(() => {
    //     const token = Cookies.get('token');
      
    //     fetch('http://localhost:8080/quiz/quick', {
    //       headers: {
    //         'Authorization': `Bearer ${token}`
    //       }
    //     })
    //       .then(response => response.json())
    //       .then(data => setQuestions(data));
    //   }, []);

  
      const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedAnswers(prev =>
          prev.includes(value)
            ? prev.filter(answer => answer !== value)
            : [...prev, value]
        );
      };

      const handleNextQuestion = () => {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswers([]);
      };
    
      if (questions.length === 0) {
        return <div>Loading...</div>;
      }
    
      const currentQuestion = questions[currentQuestionIndex];
    const QuestionForm = () => {

        return (
                <section>
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h2 className="mb-4 text-xl font-bold text-gray-50">Quiz Question</h2>
                      <p className="mb-4 text-gray-100">{currentQuestion.question}</p>
                      <div className="space-y-2">
                        {currentQuestion.answers.map(answer => (
                          <label key={answer} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <input
                              type="checkbox"
                              className="form-checkbox"
                              name="quiz"
                              value={answer}
                              checked={selectedAnswers.includes(answer)}
                              onChange={handleAnswerChange}
                            />
                            <span className="ml-2">{answer}</span>
                          </label>
                        ))}
                      </div>
                      <button
                        className="mt-4 w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-400"
                        onClick={handleNextQuestion}
                      >
                        Next Question
                      </button>
                    </div>
                  </div>
                </section>
          );
        }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
            <main className="flex px-2 md:px-20 items-center">
            <QuestionForm></QuestionForm>
            </main>
         </div>
    )
}

export default Quiz