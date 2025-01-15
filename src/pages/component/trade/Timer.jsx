import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { loaderGif } from "../../../assets/images";

const Timer = ({ poolStatus, isMobile }) => {
  const [timeLeft, setTimeLeft] = useState(0); // Track dynamic countdown
  const [progress, setProgress] = useState(100); // Progress for the circular bar
  const [color, setColor] = useState("#FF832B"); // Progress bar color
  const [isLoading, setIsLoading] = useState(false); // Loader state

  useEffect(() => {
    if (!poolStatus?.time) return;

    const totalTimeInMinutes = parseInt(poolStatus?.time.split(":")[1]?.split(" ")[0]) || 0;
    const clampedTime = Math.max(0, totalTimeInMinutes - 5); // Prevent negatives

    // Set the initial timeLeft for both statuses
    if (poolStatus?.status === "Betting Started" || poolStatus?.status === "Observing Price") {
      setTimeLeft(clampedTime * 60); // Convert to seconds for countdown
    } else {
      setTimeLeft(0);
    }
  }, [poolStatus]);

  useEffect(() => {
    let timerInterval;

    if (timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const updatedTime = prevTime - 1;
          if (updatedTime <= 0) {
            clearInterval(timerInterval);
            return 0;
          }
          return updatedTime;
        });
        setProgress((prevProgress) => (timeLeft > 0 ? (timeLeft / (timeLeft + 1)) * 100 : 0)); // Update progress
      }, 1000);
    } else if (timeLeft === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(100);
      }, 2000);
    }

    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  useEffect(() => {
    // Change color based on remaining time
    if (timeLeft > 20 * 60) {
      setColor("#8ad603");
    } else if (timeLeft > 10 * 60) {
      setColor("rgb(234, 132, 78)");
    } else if (timeLeft > 5 * 60) {
      setColor("rgb(234, 132, 78)");
    } else {
      setColor("rgb(224, 46, 43)");
    }
  }, [timeLeft]);

  const formattedTime = timeLeft > 0
  ? `${String(Math.floor(timeLeft / 3600)).padStart(2, "0")}:${String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0")}`
  : "00:00";

  return (
    <div aria-label="Countdown timer">
      {(poolStatus?.status === "Betting Started" || poolStatus?.status === "Observing Price") ? (
        <div>
          {isLoading ? (
            <div className="position-relative">
              <div className="loader_gif">
                <img src={loaderGif} className="opacity-4" alt="Loading..." />
              </div>
            </div>
          ) : (
            <CircularProgressbar
              className="progressBar"
              value={progress}
              text={formattedTime}
              styles={buildStyles({
                textColor: color,
                pathColor: color,
                trailColor: "#d6d6d6",
                textSize: "20px",
              })}
              strokeWidth={4}
            />
          )}
        </div>
      ) : (
        <span className="sec">-</span>
      )}
      {!isMobile && (
        <span className="sec" style={{color:'#fff'}}>{poolStatus?.status}</span>
      )}
    </div>
  );
};

export default Timer;
