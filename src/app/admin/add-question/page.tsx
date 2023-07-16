'use client'
import React,{useState} from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const AddQuestion = () => {

    const [questionTitle, setQuestionTitle] = useState("");
    const [answers, setAnswers] = useState<Array<{ text: string, isCorrect: boolean }>>([]);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
  
    const handleAddAnswer = () => {
      setAnswers(prev => [...prev, { text: "", isCorrect: false }]);
    };
  
    const handleAnswerChange = (index: number, text: string, isCorrect: boolean) => {
      setAnswers(prev => prev.map((answer, i) => i === index ? { text, isCorrect } : answer));
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Here you can send the question to the backend
      console.log({ questionTitle, answers, category, difficulty });
    };

    const AddQuestionForm = () => {
        return(
    <section className="">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form onSubmit={handleSubmit}>
        <label 
        className="text-2xl"
        >
          Question Title:
          <input type="text" 
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={questionTitle} onChange={e => setQuestionTitle(e.target.value)} />
        </label>

        {answers.map((answer, index) => (
          <div key={index}>
            <label>
              Answer {index + 1}:
              <input
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" value={answer.text} onChange={e => handleAnswerChange(index, e.target.value, answer.isCorrect)} />
            </label>
            <label>
              Is Correct:
              <input type="checkbox" required checked={answer.isCorrect} onChange={e => handleAnswerChange(index, answer.text, e.target.checked)} />
            </label>
          </div>
        ))}

        {answers.length < 6 && <button type="button" onClick={handleAddAnswer}>Add Answer</button>}

        <label>
          Category:
          <input 
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </label>

        <label>
          Difficulty:
          <select 
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>


            </div>
            </div>
            </section>
            )
}


    return (
        <div className="flex flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
        <main className="flex px-2 md:px-20 items-center">
          {
            <AddQuestionForm></AddQuestionForm>
          }
        </main>
        </div>
      )
}

export default AddQuestion



