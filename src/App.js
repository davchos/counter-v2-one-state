import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [states, setStates] = useState({
    countNumber: 1,
    counter: [0],
  });
  const handleClick = () => {
    console.log(states);
    const previousState = { ...states };

    if (states.countNumber <= 4) {
      previousState.countNumber++;
      previousState.counter.push(0);
      setStates(previousState);
    }
  };
  return (
    <div className="main">
      <Header />
      <button
        style={{
          visibility: states.countNumber === 3 ? "hidden" : "visible",
        }}
        onClick={handleClick}
      >
        Add counter
      </button>
      <div className="counters">
        {states.counter.map((elem, index) => {
          return (
            <div key={index}>
              <Counter idx={index} states={states} setStates={setStates} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
