import { useTheme } from '../../context/ThemeContext';
import { StyledPage } from './HomePage.styled';
import { TasksByDay } from '../../components/calendar/calendarList/Calendar';

export const HomePage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <TasksByDay />
    </StyledPage>
  );
};
