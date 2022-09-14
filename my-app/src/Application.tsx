import React from "react";
import {useState} from 'react'
import {questions} from './questions'
import Question from "./Question";


const Application = () => {
  return (
    <main>
      {questions.map(quest => (
        <Question question={quest.question} answer={quest.answer} key={quest.id} />
      ))}
    </main>
  )
}
export default Application;
