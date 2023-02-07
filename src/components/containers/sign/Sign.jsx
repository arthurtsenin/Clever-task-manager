import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';
import { FormContainer } from '../../views/formContainer/FormContainer';
import { Form } from '../../views/form/Form';
import { Input } from '../../views/input/Input';
import { PrimaryButton } from '../../views/button/PrimaryButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader } from '../loader/Loader';
import { SCHEMA } from '../../../constants/formShema';
import Swal from 'sweetalert2';
import Typography from '@mui/material/Typography';

export const Sign = ({ isSign }) => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, createUser } = UserAuth();

  const formOptions = {
    mode: 'onBlur',
    resolver: yupResolver(SCHEMA),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    setError('');
    setIsLoading(true);
    try {
      isSign
        ? await signIn(data.email, data.password)
        : await createUser(data.email, data.password);
      await localStorage.setItem('user', JSON.stringify(data.email));
      setIsLoading(false);
      isSign
        ? Swal.fire({
            icon: 'success',
            title: 'Great!!! Let`s start ',
            showConfirmButton: false,
            timer: 1500,
          })
        : Swal.fire({
            icon: 'success',
            title: 'Great job!!! We are glad that you have chosen our app.',
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'orange',
            backdrop: `
           rgba(0,0,123,0.4)
           url("nyan-cat.gif")
           left top
           no-repeat
         `,
          });
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      isSign
        ? Swal.fire({
            icon: 'error',
            title: 'Oops... Incorrect data. Try again',
            text: `Error: ${error}`,
          })
        : Swal.fire({
            icon: 'error',
            title: 'Oops... We have problems with your registration. Try again',
            text: `Error: ${error}`,
          });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <FormContainer align="center">
          {isSign ? (
            <Typography component="h2" variant="h3">
              Sign in to your account
            </Typography>
          ) : (
            <Typography component="h2" variant="h3">
              Sign up for a free account
            </Typography>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              label="Email"
              error={!!errors.email}
              helperText={errors?.email?.message}
              {...register('email')}
            />
            <Input
              type="password"
              label="Password"
              error={!!errors.password}
              helperText={errors?.password?.message}
              {...register('password')}
            />
            {isSign ? (
              <>
                <PrimaryButton type="submit">Sign In</PrimaryButton>
                <Typography component="p" variant="h5" mt={2}>
                  Dont have an account yet? <Link to="/signup">Sign up.</Link>
                </Typography>
              </>
            ) : (
              <>
                <PrimaryButton type="submit">Sign Up</PrimaryButton>
                <Typography component="p" variant="h5" mt={2}>
                  Already have an account? <Link to="/">Sign in.</Link>
                </Typography>
              </>
            )}
          </Form>
        </FormContainer>
      )}
    </>
  );
};
