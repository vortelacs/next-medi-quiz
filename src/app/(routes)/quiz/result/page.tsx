"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import QuizResultForm from "@/app/_components/profile/QuizResultForm";

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
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId }),
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
      });
  }, []);

  return (
    <div className="flex w-screen flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
      <main className="flex  px-2 md:px-20 items-center"></main>
      <QuizResultForm quizResults={quizResults} />
    </div>
  );
};

export default ResultForm;
