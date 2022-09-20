import React, { FC, useState, useRef } from "react";

interface EventExampleProps {}

const EventExample: FC<EventExampleProps> = ({}) => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(inputRef.current?.value);
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) =>{
    console.log('DRAGG')
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) =>{
    e.preventDefault();
    setIsDrag(true)
  }
  const leaveDragHandler = (e: React.DragEvent<HTMLDivElement>) =>{
    e.preventDefault();
    setIsDrag(false)
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) =>{
    e.preventDefault();
    setIsDrag(false)
    console.log('dropped')
  }
  return (
    <div>
      <input onChange={changeHandler} value={value} type="text" placeholder="manageable"/>
      <input ref={inputRef} type="text" placeholder="unmanageable"/>
      <button onClick={clickHandler}>Click Me</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDragLeave={leaveDragHandler}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        style={{ width: 200, height: 200, background: isDrag ? "green" : 'red', marginTop: 15 }}
      ></div>
    </div>
  );
};

export default EventExample;
