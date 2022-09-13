import React from "react";

type NameTagProps ={
  name: string;
}
const NameTag = ({name}:NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

// box
type BoxProps = {children: React.ReactNode}
const Box = ({children}: BoxProps) => {
  return (
    <section style={{padding: "1em", border:"5px solid purple"}}>
      {children}
    </section>
  )
}

function Application(){
  return (
    <>
      <NameTag name="Nika"/>
      <Box>
        <h1>hello</h1>
      </Box>
    </>
  )
}
export default Application;