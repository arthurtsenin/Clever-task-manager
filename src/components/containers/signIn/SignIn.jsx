import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Loader } from '@containers/loader/Loader';
import { FormContainer } from '@views/formContainer/FormContainer';
import { Form } from '@views/form/Form';
import { Input } from '@views/input/Input';
import { PrimaryButton } from '@views/button/PrimaryButton';
import { showSuccessSignIn } from '@views/toasts/showSuccessSignIn';
import { showErrorSignIn } from '@views/toasts/showErrorSignIn';
import { formOptions } from '@constants/formShemaOptions';
import { UserAuth } from '@context/AuthContext';
import Typography from '@mui/material/Typography';
import { useTheme } from '@context/ThemeContext';

export const SignIn = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = UserAuth();
  const theme = useTheme();

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
      setIsLoading(false);
      showSuccessSignIn();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      showErrorSignIn(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader theme={theme} loading={isLoading} />;
  }

  return (
    <>
      <FormContainer style={{ height: '100%' }} align="center">
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
