"use client";

import { useState } from "react";

type Question = {
  question: string | null;
  answer: string | null;
};

export default function LoveQuiz({
  questions,
}: {
  questions: Question[];
}) {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [showAnswer, setShowAnswer] = useState("");
  const [finished, setFinished] = useState(false);

  const activeQuestions = questions.filter(
    (item) => item.question && item.answer
  );

  if (activeQuestions.length === 0) {
    return null;
  }

  const checkAnswer = () => {
    const correctAnswer =
      activeQuestions[current].answer?.trim().toLowerCase();

    const givenAnswer = userAnswer.trim().toLowerCase();

    if (givenAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
      setResult("Correct! ❤️");
    } else {
      setResult("Wrong answer 😅");
    }
     setShowAnswer(activeQuestions[current].answer || "");
  };

  const nextQuestion = () => {
    setResult("");
    setUserAnswer("");

    if (current + 1 < activeQuestions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="mt-8 rounded-3xl bg-white/70 p-6 text-left shadow-sm">
      <h2 className="text-center text-2xl font-bold">
        Love Quiz ❤️
      </h2>

      {!finished ? (
        <>
          <p className="mt-6 text-sm font-semibold opacity-60">
            Question {current + 1} of {activeQuestions.length}
          </p>

          <p className="mt-3 text-lg font-semibold">
            {activeQuestions[current].question}
          </p>

          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="mt-5 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none focus:border-[#e85d75]"
          />

          {result && (
  <div className="mt-4 text-center">
    <p className="text-lg font-bold">
      {result}
    </p>

    <p className="mt-2 text-sm font-semibold opacity-70">
      Correct answer: {showAnswer}
    </p>
  </div>
)}

          {!result ? (
            <button
              onClick={checkAnswer}
              disabled={!userAnswer.trim()}
              className="mt-5 w-full rounded-full bg-[#e85d75] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-50"
            >
              Check Answer ❤️
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="mt-5 w-full rounded-full bg-[#e85d75] px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              {current + 1 === activeQuestions.length
                ? "See Result 💕"
                : "Next Question ➜"}
            </button>
          )}
        </>
      ) : (
        <div className="mt-6 text-center">
          <p className="text-3xl font-bold">
            {score}/{activeQuestions.length} ❤️
          </p>

          {score === activeQuestions.length ? (
            <p className="mt-4 text-lg font-semibold">
              You know each other so well! 🥰💕
            </p>
          ) : (
            <p className="mt-4 text-lg font-semibold">
              Nice try! ❤️
            </p>
          )}
          <div className="mt-6 rounded-2xl bg-white/70 p-5 text-left">
  <p className="font-bold">Correct Answers 💕</p>

  {activeQuestions.map((item, index) => (
    <p key={index} className="mt-3">
      <span className="font-semibold">
        {index + 1}. 
      </span>
      {item.answer}
    </p>
  ))}
</div>
        </div>
      )}
    </div>
  );
}