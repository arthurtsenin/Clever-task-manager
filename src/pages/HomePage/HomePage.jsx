import { useTheme } from '@Context/ThemeContext';
import { CalendarList } from '@Containers/calendarList/CalendarList';
import { StyledPage } from './HomePage.styles';

export const HomePage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <CalendarList />
    </StyledPage>
  );
};
