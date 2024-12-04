import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { loaderGif } from "../../../assets/images";
const Timer = ({poolStatus,isMobile}) => {
console.log("🚀 ~ Timer ~ poolStatus:", poolStatus?.time)
// console.log("🚀 ~ Timer ~ poolStatus:", (poolStatus.time.split(':')[1].split(" ")[0])-5)

    const [timeLeft, setTimeLeft] = useState(15); 
    const [progress, setProgress] = useState(0); 
    const [color, setColor] = useState("#8ad603"); 
    const [isLoading, setIsLoading] = useState(false); 
  
    // useEffect(() => {
    //   let timerInterval;
  
    //   if (!isLoading) {
    //     timerInterval = setInterval(() => {
    //       setTimeLeft((prevTime) => {
    //         if (prevTime > 0) {
    //           return prevTime - 1;
    //         } else {
    //           clearInterval(timerInterval);
    //           return 0;
    //         }
    //       });
    //       setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 100 / 15 : 100));
    //     }, 1000);
    //   }
  
    //   return () => clearInterval(timerInterval);
    // }, [isLoading]);
  
    useEffect(() => {
      // Change color based on time left
      if (timeLeft > 10) {
        setColor("#8ad603");
      } else if (timeLeft > 5) {
        setColor("rgb(234, 132, 78)");
      } else {
        setColor("rgb(224, 46, 43)");
      }
  
      // Restart progress bar
      if (timeLeft === 0) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setTimeLeft(15);
          setProgress(0);
        }, 2000); 
      }
    }, [timeLeft]);


  const timeInMinutes = parseInt(poolStatus?.time?.split(':')[1]?.split(" ")[0]);
  const clampedTime = Math.max(0, timeInMinutes - 5); // ensure the time does not go negative

    return (
        <>
            <div aria-label="Countdown timer" >
                <div 
                  >
                    {isLoading ? (
                       <div className="position-relative">
                         <div className="loader_gif">
                            <img src={loaderGif} 
                            className="opacity-4" alt="loader gif" />
                        </div>
                       </div>
                    ) : (
                        <>
                            <CircularProgressbar
                                className="progressBar"
                                value={clampedTime}
                                text={clampedTime}
                                styles={buildStyles({
                                    textColor: color,
                                    pathColor: color,
                                    trailColor: "#d6d6d6",
                                    textSize: "20px",
                                })}
                                strokeWidth= {4}
                            />

                        </>
                    )}
                </div>
           
            </div>
          {!isMobile &&  <span className="sec" > {poolStatus?.status}</span>}
        </>
    )
}

export default Timer