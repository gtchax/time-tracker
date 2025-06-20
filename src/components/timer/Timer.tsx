import { formatTime } from "../../lib/utils";
import "./Timer.css";
import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <>
      <header>
        <h1 className="text-center">Time Tracker</h1>
      </header>
      <section>
        <div className="circle">
          <span className="time">{formatTime(seconds)}</span>
        </div>
        <div className="flex">
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </section>
    </>
  );
};

export default Timer;
