import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [active, setActive] = useState(false);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    let timeId;
    if (active) {
      timeId = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => prevMinute + 1);
            return 0;
          } else {
            return prevSecond + 1;
          }
        });
      }, 1000);
    } else {
      clearTimeout(timeId);
    }

    return () => clearTimeout(timeId);
  }, [active]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Stopwatch</h1>
        <h3>
          Time : {minute}:{second}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <button onClick={() => setActive(!active)}>
            {active ? "Stop" : "Start"}
          </button>

          <button
            onClick={() => {
              setSecond(0);
              setMinute(0);
              setActive(!active);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
