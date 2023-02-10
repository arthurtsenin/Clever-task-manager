import { useTheme } from '@context/ThemeContext';
import { CalendarList } from '@containers/calendarList/CalendarList';
import { StyledPage } from './HomePage.styles';

export const HomePage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <CalendarList />
    </StyledPage>
  );
};
