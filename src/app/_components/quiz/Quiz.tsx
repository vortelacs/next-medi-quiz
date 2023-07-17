// components/Quiz.tsx
import { ChangeEvent, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface Question {
  question: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  isTrue: boolean;
}

const Quiz = () => {
  // Your Quiz component logic here...
};

export default Quiz;