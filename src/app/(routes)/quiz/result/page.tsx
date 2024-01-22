"use client";
import Cookies from "js-cookie";
import { ChangeEvent, useEffect, useState } from "react";
import QuizResultForm from "@/app/_components/profile/QuizResultForm";
import Navbar from "@/app/_components/common/Navbar";

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
    <div className="relative  w-screen  min-h-screen bg-gradient-radial from-gray-600 to-gray-900">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <QuizResultForm quizResults={quizResults} />
      </div>
    </div>
  );
};

export default ResultForm;
