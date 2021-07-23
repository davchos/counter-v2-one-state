import "./css/Counter.css";

const Counter = ({ idx, states, setStates }) => {
  return (
    <div className="counter-container">
      <div className="counter-operation">
        <div>
          <span
            style={{
              visibility: states.counter[idx] <= 0 ? "hidden" : "visible",
              cursor: "pointer",
              fontSize: 20,
              fontWeight: "bold",
            }}
            onClick={() => {
              const previousState = { ...states };
              previousState.counter[idx]--;
              setStates(previousState);
            }}
          >
            -
          </span>
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            background: "blue",
            borderRadius: 5,
            width: 100,
            height: 100,
            textAlign: "center",
            verticalAlign: "center",
            paddingTop: 40,
            boxSizing: "border-box",
            color: "white",
          }}
        >
          {states.counter[idx]}
        </div>
        <div>
          <span
            style={{
              visibility: states.counter[idx] === 10 ? "hidden" : "visible",
              cursor: "pointer",
              fontSize: 20,
              fontWeight: "bold",
            }}
            onClick={() => {
              const previousState = { ...states };
              previousState.counter[idx]++;
              setStates(previousState);
            }}
          >
            +
          </span>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          const previousState = { ...states };
          previousState.counter[idx] = 0;
          setStates(previousState);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
