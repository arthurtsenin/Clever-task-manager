import { useState } from 'react';
import { Clock } from '@Containers/clock/Clock';
import { ErrorLogOut } from '@Views/toasts/ErrorLogOut';
import { UserAuth } from '@Context/AuthContext';
import { useTheme } from '@Context/ThemeContext';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import LogoutIcon from '@mui/icons-material/Logout';
import { HeaderContainer, UserInfo, Email, Button } from './Header.styles';

export const Header = () => {
  const { user, logout } = UserAuth();
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      localStorage.removeItem('user');
    } catch (err) {
      setError(err.message);
      ErrorLogOut(error);
    }
  };

  return (
    <HeaderContainer theme={theme}>
      <Typography component="h2" variant="h6">
        Task manager
      </Typography>
      <UserInfo>
        <Switch
          checked={theme.changeTheme.type === 'dark'}
          color="default"
          onChange={theme.toggleTheme}
        />
        <Clock />
        {user && (
          <>
            <Email>User Email: {user?.email}</Email>
            <Button onClick={handleLogout}>
              <LogoutIcon mr={5} />
              Logout
            </Button>
          </>
        )}
      </UserInfo>
    </HeaderContainer>
  );
};
