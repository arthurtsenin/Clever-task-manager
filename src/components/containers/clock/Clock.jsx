import { useState, useEffect } from 'react';
import { StyledClock } from './Clock.styles';
import { refreshClock } from '@Api/dateHelper';

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
