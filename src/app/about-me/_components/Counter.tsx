"use client";

import { useState } from "react";

const Counter = () => {
  const databaseUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div className="grid">
      {count}
      <button onClick={increment}>+</button>
      <span>{databaseUrl}</span>
    </div>
  );
};

export default Counter;
