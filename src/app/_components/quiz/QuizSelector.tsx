const QuizSelector = () => {
  return (
    <div className="w-full flex rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
      <div className="flex flex-col p-8">
        <div>
          <p className="py-2">Choose the number of questions:</p>
          <ul className="items-center w-full text-sm font-medium   border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
            <li className="w-full border-gray-600">
              <div className="flex">
                <input
                  required
                  hidden
                  id="10-question"
                  name="question-number-radio"
                  type="radio"
                  value={""}
                  className="hidden peer"
                />
                <label
                  htmlFor="10-question"
                  className="inline-flex items-center justify-between w-full p-5  border rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:text-blue-500 peer-checked:border-blue-600 text-gray-400 bg-gray-800 hover:bg-gray-700"
                >
                  <p className="ml-1">10</p>
                </label>
              </div>
            </li>
            <li className="w-full border-gray-600">
              <div className="flex items-center justify-evenly">
                <input
                  hidden
                  required
                  id="15-question"
                  name="question-number-radio"
                  type="radio"
                  className="hidden peer"
                  value={""}
                />
                <label
                  htmlFor="15-question"
                  className="inline-flex items-center justify-between w-full p-5  border rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:text-blue-500 peer-checked:border-blue-600 text-gray-400 bg-gray-800 hover:bg-gray-700"
                >
                  <p className="ml-1">15</p>
                </label>
              </div>
            </li>
            <li className="w-full   border-gray-600">
              <div className="flex items-center justify-evenly ">
                <input
                  hidden
                  id="20-question"
                  name="question-number-radio"
                  type="radio"
                  className="hidden peer"
                  value={""}
                />
                <label
                  htmlFor="20-question"
                  className="inline-flex items-center justify-between w-full p-5  border rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:text-blue-500 peer-checked:border-blue-600 text-gray-400 bg-gray-800 hover:bg-gray-700"
                >
                  <p className="ml-1">20</p>
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative mb-6 mt-10">
          <label htmlFor="labels-range-input" className="py-2">
            Difficulty
          </label>
          <input
            id="labels-range-input"
            type="range"
            min="1"
            max="3"
            className="w-full h-2 bg-gradient-to-r from-green-500 via-50% via-yellow-400 to-100% to-red-600 rounded-lg appearance-none cursor-pointercolor"
          />
          <span className="text-sm text-gray-400 absolute start-0 -bottom-6">
            Easy
          </span>
          <span className="text-sm text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            Medium
          </span>
          <span className="text-sm text-gray-400 absolute end-0 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            Hard
          </span>
        </div>

        <div className="mt-8">
          <button
            id="category-button"
            data-dropdown-toggle="category"
            className=" text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            type="button"
          >
            <p className="w-full flex pl-2 float-left">Category</p>
            <svg
              className="w-2.5 h-2.5 ms-3 flex float-right right-0"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="category"
            className="z-10 hidden w-48 divide-y  rounded-lg shadow bg-gray-700 divide-gray-600"
          >
            <ul
              className="p-3 space-y-1 text-sm text-gray-200"
              aria-labelledby="dropdownRadioBgHoverButton"
            >
              <li>
                <div className="flex items-center p-2 rounded  hover:bg-gray-600">
                  <input
                    id="default-radio-4"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                  />
                  <label
                    htmlFor="default-radio-4"
                    className="w-full ms-2 text-sm font-medium rounded text-gray-300"
                  >
                    General
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded  hover:bg-gray-600">
                  <input
                    id="default-radio-5"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600   focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                  />
                  <label
                    htmlFor="default-radio-5"
                    className="w-full ms-2 text-sm font-medium rounded text-gray-300"
                  >
                    Farmacology
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-600">
                  <input
                    id="default-radio-6"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600   focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                  />
                  <label
                    htmlFor="default-radio-6"
                    className="w-full ms-2 text-sm font-medium rounded text-gray-300"
                  >
                    Stomatology
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-4">
          <button className="rounded border-solid p-2 border-gray-200 border-2  float-right text-gray-900 bg-gray-300  hover:bg-gray-700 hover:text-gray-200">
            Start quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSelector;
