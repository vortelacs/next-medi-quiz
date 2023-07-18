'use client'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

interface QuizResultFormProps {
    quizResult: QuizResult;
  }

const ResultForm = ()=> {

    const[quizResults, setQuizResults] = useState<QuizResult[]>([])

    useEffect(() => {
    
        const token = Cookies.get('token');
        const userId  = Cookies.get('userId');
        fetch('http://localhost:8080/results/all', {
            method : 'POST',
            headers: {
            'Authorization': `Bearer ${token}`
          },
            body: JSON.stringify({
            userId : userId,
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setQuizResults(data))
        .catch(error => {
          console.error('Error:', error);
          <p>Something went wrong</p>
        });
      }, []);

      const QuizResultForm: React.FC<{quizResult: QuizResult}> = ({quizResult}) => {
        return (
          <div>
            <h1>Quiz Results for User {quizResult.userId}</h1>
            {quizResult.responses.map((response, index) => (
              <div key={index}>
                <h2>Question {index + 1}</h2>
                <p>Selected Answers: {response.selectedAnswerTexts.join(', ')}</p>
                <p>{response.isCorrect ? 'Correct' : 'Incorrect'}</p>
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
              quizResults.map((quizResult, index) => (
                <QuizResultForm key={index} quizResult={quizResult} />
              ))
            )}
          </main>
        </div>
      );
}

export default ResultForm