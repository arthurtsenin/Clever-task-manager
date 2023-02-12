import { useMemo, useState, memo } from 'react';
import { CalendarItem } from '@containers/calendarItem/CalendarItem';
import { buildCalendar } from '@containers/calendar/utils/calendarBuilder';
import { CalendarInfo } from '@containers/calendarInfo/CalendarInfo';
import { RANGE_NUMBERS } from '@constants/numbersForScroll';
import { useDateValue } from '@context/DateValueContext';
import { CalendarContainer } from './Calendar.styles';

export const Calendar = memo(() => {
  const [calendar, setCalendar] = useState([]);
  const [week, setWeek] = useState(1);
  const { dateValue } = useDateValue();

  const onWheel = (e) => {
    if (!e.deltaY) return;
    e.currentTarget.scrollTo({
      left: e.currentTarget.scrollLeft + e.deltaY,
    });
  };

  const onScroll = (e) => {
    if (
      Math.trunc((e.target.scrollLeft / e.target.scrollWidth) * RANGE_NUMBERS.for_percent) >
        RANGE_NUMBERS.min &&
      Math.trunc((e.target.scrollLeft / e.target.scrollWidth) * RANGE_NUMBERS.for_percent) <
        RANGE_NUMBERS.max
    ) {
      setWeek((prev) => prev + 1);
    }
  };

  useMemo(() => setCalendar(buildCalendar(dateValue, week)), [dateValue, week]);

  const showCalendarItems = useMemo(
    () => calendar.map((day) => <CalendarItem key={day} day={day} />),
    [calendar]
  );

  return (
    <>
      <CalendarInfo />
      <CalendarContainer onWheel={onWheel} onScroll={onScroll}>
        {showCalendarItems}
      </CalendarContainer>
    </>
  );
});
