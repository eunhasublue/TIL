import React, { useState } from "react";

const Dialog = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>open</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          <h1>{props.title}</h1>
          <h5>{props.descirption}</h5>
          <button onClick={() => setIsOpen(false)}>ok</button>
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "lightgray",
          }}
        />
      )}
    </>
  );
};

export default Dialog;
