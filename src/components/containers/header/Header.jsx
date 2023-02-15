import { useState } from 'react';
import { Clock } from '@containers/clock/Clock';
import { showErrorLogOut } from '@views/toasts/showErrorLogOut';
import { UserAuth } from '@context/AuthContext';
import { useTheme } from '@context/ThemeContext';
import { THEMES } from '@constants/themes';
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
    } catch (err) {
      setError(err.message);
      showErrorLogOut(error);
    }
  };

  return (
    <HeaderContainer theme={theme}>
      <Typography component="h2" variant="h6">
        Task manager
      </Typography>
      <UserInfo>
        <Switch
          checked={theme.changeTheme.type === THEMES.dark.type}
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
