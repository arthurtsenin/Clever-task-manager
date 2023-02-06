import { useEffect, useState, useRef } from 'react';
import { CalendarItem } from '../calendarItem/CalendarItem';
import { ToDoList } from '../../todo/toDoList/ToDoList';
import { dateFormat } from '../../../constants/dateFormat';
import { buildCalendar } from '../../../utils/buildCalendar';
import { UserTodo } from '../../../context/TodoContext';
import moment from 'moment';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CalendarContainer, Date, InfoContainer, Tasks, CompletedTasks } from './Calendar.styles';

export const TasksByDay = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  let [week, setWeek] = useState(1);
  const scrollRef = useRef();
  const { todos } = UserTodo();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const onScroll = () => {
      if (
        Math.trunc((el.scrollLeft / el.scrollWidth) * 100) > 60 &&
        Math.trunc((el.scrollLeft / el.scrollWidth) * 100) < 70
      ) {
        setWeek((prev) => prev + 1);
      }
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setCalendar(buildCalendar(value, week));
  }, [week]);

  return (
    <>
      <InfoContainer>
        <div>
          <Date>Current date: {moment().format(dateFormat)}</Date>
          <Date>Choosen date: {value.format(dateFormat)}</Date>
        </div>
        <div>
          <Tasks>Tasks: {todos.length}</Tasks>
          <CompletedTasks>
            Completed Tasks: {todos.filter((todo) => todo.completed === true).length}
          </CompletedTasks>
        </div>
      </InfoContainer>

      <CalendarContainer ref={scrollRef}>
        {calendar.map((day, index) => {
          return (
            <CalendarItem
              className={
                day.isSame(moment(), 'day') ? 'current' : value.isSame(day, 'day') ? 'chosen' : ''
              }
              key={index}
              day={day}
              weekDay={day.format('dddd')}
              monthNumber={day.format('D')}
              month={day.format('MMMM')}
              onClick={() => setValue(day)}
            />
          );
        })}
      </CalendarContainer>
      <ToDoList chosenDate={value} />
    </>
  );
};
