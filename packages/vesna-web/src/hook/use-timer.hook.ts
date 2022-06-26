import {useState, useRef, useEffect} from 'react';

export function useTimer(startTime = 0, defaultIsActive = false) {
  const [timer, setTimer] = useState(startTime);
  const countRef = useRef<any>(null);

  const [isActive, setIsActive] = useState(defaultIsActive);
  const [isPaused, setIsPaused] = useState(!defaultIsActive);

  useEffect(() => {
    if (defaultIsActive) {
      handleStart();
    }
  }, []);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
}
