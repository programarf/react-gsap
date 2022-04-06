import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import './App.css';

function Box({ children }) {
  return <div className="box">{children}</div>;
}

function Container({ children }) {
  return <div><Box>Nested Box</Box></div>;
}

function App() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {

    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    gsap.to(q(".box"), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, []);

  return (
    <div className="App" ref={el}>
      <Box>Box</Box>
      <Container />
      <Box>Box</Box>
    </div>
  );
}

export default App;
