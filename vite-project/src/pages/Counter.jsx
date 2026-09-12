import React from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="">
      <h1>counter:{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Decrease
      </button>
      <Hello a="hello" b="world" />
    </div>
  );
};

export default Counter;
