import { useState } from 'react';
import { Fragment } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import { useTheme } from '../../../context/ThemeContext';
import { HeaderContainer, UserInfo, Email, Button } from './Header.styles';
import { Clock } from '../clock/Clock';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';

export const Header = () => {
  const { user, logout } = UserAuth();
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      localStorage.setItem('user', JSON.stringify(null));
    } catch (err) {
      setError(err.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops... Something went wrong',
        text: `Error: ${error}`,
      });
    }
  };

  return (
    <HeaderContainer>
      <Typography component="h2" variant="h6">
        Task manager
      </Typography>
      <UserInfo>
        <Switch
          checked={theme.changeTheme.type === 'dark' ? true : false}
          color="default"
          onChange={theme.toggleTheme}
        />
        <Clock />
        {user ? (
          <Fragment>
            <Email>User Email: {user && user.email}</Email>
            <Button onClick={handleLogout}>
              <LogoutIcon mr={5} />
              Logout
            </Button>
          </Fragment>
        ) : null}
      </UserInfo>
    </HeaderContainer>
  );
};
