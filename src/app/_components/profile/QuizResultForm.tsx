const QuizResultList: React.FC<{ quizResult: QuizResult }> = ({
  quizResult,
}) => {
  return (
    <>
      {quizResult.responses === undefined ||
      quizResult.responses.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div className="flex">
          {quizResult.responses.map((response, index) => (
            <div key={index} className="px-2">
              <h2>Question {index + 1}</h2>
              <div className="flex space-x-2">
                <p>
                  Selected Answers: {response.selectedAnswerTexts.join(", ")}
                </p>
                <p>{response.isCorrect ? "✅" : "❌"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const QuizResultForm: React.FC<{ quizResults: QuizResult[] }> = ({
  quizResults,
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        {!quizResults || quizResults.length === 0 ? (
          <p>No quiz results found.</p>
        ) : (
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Your quiz results
            </h1>
            {quizResults.map((quizResult, index) => (
              <div
                key={index}
                className="border-white border-2 my-2 p-2 rounded"
              >
                <QuizResultList quizResult={quizResult} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizResultForm;
