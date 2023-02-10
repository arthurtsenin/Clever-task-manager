import { useMemo, useState } from 'react';
import { CalendarItem } from '@containers/calendarItem/CalendarItem';
import { ToDoList } from '@containers/toDoList/ToDoList';
import { UserTodo } from '@context/TodoContext';
import { getCurrentDay, getChoosenDay, getInitialDay } from '@api/dateHelper';
import { buildCalendar } from '@containers/calendarList/utils/calendarBuilder';
import { RANGE_NUMBERS } from '@constants/numbersForScroll';
import {
  CalendarContainer,
  Date,
  InfoContainer,
  Tasks,
  CompletedTasks,
} from './CalendarList.styles';

export const CalendarList = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(getInitialDay());
  const [week, setWeek] = useState(1);
  const { todos } = UserTodo();

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

  useMemo(() => setCalendar(buildCalendar(value, week)), [value, week]);

  const completedTasksLength = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  return (
    <>
      <InfoContainer>
        <div>
          <Date>Current date: {getCurrentDay()}</Date>
          <Date>Choosen date: {getChoosenDay(value)}</Date>
        </div>
        <div>
          <Tasks>Tasks: {todos.length}</Tasks>
          <CompletedTasks>Completed Tasks: {completedTasksLength}</CompletedTasks>
        </div>
      </InfoContainer>

      <CalendarContainer onWheel={onWheel} onScroll={onScroll}>
        {calendar.map((day) => {
          return <CalendarItem value={value} key={day} day={day} onClick={() => setValue(day)} />;
        })}
      </CalendarContainer>
      <ToDoList chosenDate={value} />
    </>
  );
};
