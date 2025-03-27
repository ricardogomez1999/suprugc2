import { FAQ } from "@/src/Types";
import React from "react";

type QuestionsProps = {
  question: FAQ;
};

export default function Questions({ question }: QuestionsProps) {
  return (
    <dl>
      <dt className="text-sm font-semibold">{question.question}</dt>
      <dd className="mt-4 text-sm/6 text-gray-600">{question.answer}</dd>
    </dl>
  );
}
