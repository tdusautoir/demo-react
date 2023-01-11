import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  const removeCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter">
        <h1>Compteur</h1>
        <p className={count > 5 ? 'count-too-high' : ''}>{count}</p>
        <div className='flex'>
            <button disabled={count === 0} onClick={removeCount}>-</button>
            <button disabled={count === 10} onClick={addCount}>+</button>
        </div>
        {count > 5 && (
            <div className='warning-message'>Le compteur est trop élevé.</div>
        )}
    </div>
  );
}

export default Counter;