import React, { useState } from "react";

export default function Hookscomponent() {
  const [count, setcount] = useState(0);
  function increase() {
    setcount(count + 1);
  }

  return (
    <div>
      <h1>Hookscomponent</h1>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
//component using function
