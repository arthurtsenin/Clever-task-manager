import { useTheme } from '../../context/ThemeContext';
import { StyledPage } from './HomePage.styles';
import { CalendarList } from '../../components/containers/calendarList/CalendarList';

export const HomePage = () => {
  const theme = useTheme();
  return (
    <StyledPage style={theme.changeTheme}>
      <CalendarList />
    </StyledPage>
  );
};
