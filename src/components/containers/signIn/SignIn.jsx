import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Loader } from '@Containers/loader/Loader';
import { FormContainer } from '@Views/formContainer/FormContainer';
import { Form } from '@Views/form/Form';
import { Input } from '@Views/input/Input';
import { PrimaryButton } from '@Views/button/PrimaryButton';
import { SuccessSignIn } from '@Views/toasts/SuccessSignIn';
import { ErrorSignIn } from '@Views/toasts/ErrorSignIn';
import { formOptions } from '@Constants/formShemaOptions';
import { UserAuth } from '@Context/AuthContext';
import Typography from '@mui/material/Typography';

export const SignIn = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = UserAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    setError('');
    setIsLoading(true);
    try {
      await signIn(data.email, data.password);
      await localStorage.setItem('user', JSON.stringify(data.email));
      setIsLoading(false);
      SuccessSignIn();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      ErrorSignIn(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  return (
    <>
      <FormContainer align="center">
        <Typography component="h2" variant="h3">
          Sign in to your account
        </Typography>
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
          <PrimaryButton type="submit">Sign In</PrimaryButton>
          <Typography component="p" variant="h5" mt={2}>
            Dont have an account yet? <Link to="/signup">Sign up.</Link>
          </Typography>
        </Form>
      </FormContainer>
    </>
  );
};
