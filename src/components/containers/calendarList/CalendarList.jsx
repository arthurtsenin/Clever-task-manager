import { useMemo, useState } from 'react';
import { CalendarItem } from '@Containers/calendarItem/CalendarItem';
import { ToDoList } from '@Containers/toDoList/ToDoList';
import { UserTodo } from '@Context/TodoContext';
import { buildCalendar, currentDay, choosenDay, initialDay } from '@Api/dateHelper';
import {
  CalendarContainer,
  Date,
  InfoContainer,
  Tasks,
  CompletedTasks,
} from './CalendarList.styles';

export const CalendarList = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(initialDay());
  const [week, setWeek] = useState(1);
  const { todos } = UserTodo();

  const onWheel = (e) => {
    if (e.deltaY == 0) return;
    e.currentTarget.scrollTo({
      left: e.currentTarget.scrollLeft + e.deltaY,
    });
  };

  const onScroll = (e) => {
    if (
      Math.trunc((e.target.scrollLeft / e.target.scrollWidth) * 100) > 60 &&
      Math.trunc((e.target.scrollLeft / e.target.scrollWidth) * 100) < 70
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
          <Date>Current date: {currentDay()}</Date>
          <Date>Choosen date: {choosenDay(value)}</Date>
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
