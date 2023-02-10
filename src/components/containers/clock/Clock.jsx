import { useState, useEffect } from 'react';
import { refreshClock } from '@api/dateHelper';
import { StyledClock } from './Clock.styles';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(refreshClock(setDate), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <StyledClock>{date.toLocaleTimeString()}</StyledClock>;
};
