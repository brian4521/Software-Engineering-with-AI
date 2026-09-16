
import "./App.css";
import { useCounterStore } from "./store";

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state)=>state.increment);
  const decrement = useCounterStore((state)=>state.decrement); 
  return (
  <>
    <h1>Count: {count}</h1> 
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>  
  </>
  )
  
};

export default App;