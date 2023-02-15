import { createContext, useContext, useState } from 'react';
import { getInitialDay } from '@api/dateHelper';

export const DateValueContext = createContext();

export const useDateValue = () => {
  return useContext(DateValueContext);
};

export const DateValueProvider = ({ children }) => {
  const [dateValue, setDateValue] = useState(getInitialDay());

  const changeDateValue = (dateValue) => {
    setDateValue(dateValue);
  };

  return (
    <DateValueContext.Provider
      value={{
        dateValue,
        changeDateValue,
      }}
    >
      {children}
    </DateValueContext.Provider>
  );
};
