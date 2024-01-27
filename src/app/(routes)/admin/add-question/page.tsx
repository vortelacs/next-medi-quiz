"use client";
import React, { useState } from "react";

const AddQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [answers, setAnswers] = useState<
    Array<{ text: string; isCorrect: boolean }>
  >([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleAddAnswer = () => {
    setAnswers((prev) => [
      ...prev,
      { id: Date.now(), text: "", isCorrect: false },
    ]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ questionTitle, answers, category, difficulty });
  };

  const handleAnswerChange = (
    index: number,
    text: string,
    isCorrect: boolean
  ) => {
    setAnswers((prev) =>
      prev.map((answer, i) => (i === index ? { text, isCorrect } : answer))
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
      <main className="flex px-2 md:px-20 items-center">
        <section className="">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 flex space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <label className="text-2xl">
                  Question:
                  <input
                    type="text"
                    className="border mt-2 border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    value={questionTitle}
                    onChange={(e) => setQuestionTitle(e.target.value)}
                  />
                </label>
                <p className="mt-4">Answers:</p>
                {answers.map((answer, index) => (
                  <div className="flex mt-4 " key={index}>
                    <label className="flex">
                      <p className="mr-2 place-self-center">{index + 1}:</p>
                      <input
                        className="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        value={answer.text}
                        onChange={(e) =>
                          handleAnswerChange(
                            index,
                            e.target.value,
                            answer.isCorrect
                          )
                        }
                      />
                    </label>
                    <label className="flex place-self-center ml-4">
                      <p>Correct</p>
                      <input
                        className="ml-3 rounded text-green-400 place-self-center focus:ring-green-500 unche"
                        type="checkbox"
                        required
                        checked={answer.isCorrect}
                        onChange={(e) =>
                          handleAnswerChange(
                            index,
                            answer.text,
                            e.target.checked
                          )
                        }
                      />
                    </label>
                  </div>
                ))}

                {answers.length < 6 && (
                  <button
                    type="button"
                    className="border my-2 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    onClick={handleAddAnswer}
                  >
                    Add Answer
                  </button>
                )}

                <label>
                  Category:
                  <input
                    className="border    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </label>

                <label>
                  Difficulty:
                  <select
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="">Select difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="rounded border-solid p-2 mt-4 border-gray-200 border-2  float-right text-gray-900 bg-gray-300  hover:bg-gray-700 hover:text-gray-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddQuestion;
