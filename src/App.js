import './App.css';
import { useContext } from 'react';
import { countContext } from './context/CountContextProvider';

function App() {
  let {count, setCount} = useContext(countContext);

  function increment(){
    setCount(++count);
  }
  function decrement(){
    setCount(--count);
  }
  function reset(){
    setCount(0);
  }


  return (
    <div className="flex w-full h-screen justify-center items-center bg-yellow-300" >
      <div className="text-center bg-purple-600 py-10 px-16 rounded-xl text-yellow-200 font-extrabold text-2xl space-y-4">
        <button onClick={increment} className="text-4xl border px-4 py-2 rounded-2xl hover:bg-yellow-300 hover:text-purple-600 transtion-all duration-300">Increment</button>
        <p className="text-3xl">{count}</p>
        <button onClick={decrement} className="text-4xl border px-4 py-2 rounded-2xl hover:bg-yellow-300 hover:text-purple-600 transtion-all duration-300 ">Decrement</button>  
        <p><button onClick={reset} className="border-2 border-white px-10 py-2 rounded-2xl mt-10 hover:bg-white hover:text-purple-600 transition-all duration-200">reset</button></p>
      </div>
    </div>
  );
}

export default App;
