import React from 'react'
import {useState} from 'react'


type QuestionProps = {
    question: string;
    answer: string
  }
  
  function Question({question,answer}: QuestionProps) {
    const [isHidden, toggleHidden] = useState(true)

    return (
      <article className="question">
        <header>{question}</header>
        <p className="answer">
          <span className={isHidden?"blurred" : "visible"}>{answer}</span>
        </p>
        <footer>
          <button onClick={() => toggleHidden(!isHidden)}>Toggle Answer</button>
        </footer>
      </article>
    );
  }

export default Question