import { useState, useEffect } from 'react';
import { StyledClock } from './Clock.styles';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <StyledClock>{date.toLocaleTimeString()}</StyledClock>;
};
