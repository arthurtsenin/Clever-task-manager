import { useState } from 'react';
import { StyledClock } from './Clock.styled';

export const Clock = () => {
  const [clock, setClock] = useState('');

  const showTime = async () => {
    const date = new Date();
    const hours = date.getHours();
    const hoursOuter = hours < 10 ? '0' + hours : hours;
    const minutes = date.getMinutes();
    const minutesOuter = minutes < 10 ? '0' + minutes : minutes;
    const seconds = date.getSeconds();
    const secondsOuter = seconds < 10 ? '0' + seconds : seconds;
    await setClock(`${hoursOuter}:${minutesOuter}:${secondsOuter}`);
  };
  setInterval(showTime);
  return <StyledClock>{clock}</StyledClock>;
};
