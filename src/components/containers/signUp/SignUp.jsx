import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Loader } from '@containers/loader/Loader';
import { FormContainer } from '@views/formContainer/FormContainer';
import { Form } from '@views/form/Form';
import { Input } from '@views/input/Input';
import { PrimaryButton } from '@views/button/PrimaryButton';
import { showSuccessSignUp } from '@views/toasts/showSuccessSignUp';
import { showErrorSignUp } from '@views/toasts/showErrorSignUp';
import { UserAuth } from '@context/AuthContext';
import { formOptions } from '@constants/formShemaOptions';
import { useTheme } from '@context/ThemeContext';
import { routes } from '@constants/routes';
import Typography from '@mui/material/Typography';

export const SignUp = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { createUser } = UserAuth();
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
      await createUser(data.email, data.password);
      setIsLoading(false);
      showSuccessSignUp();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      showErrorSignUp(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader theme={theme} loading={isLoading} />;
  }

  return (
    <>
      <FormContainer align="center">
        <Typography component="h2" variant="h3">
          Sign up for a free account
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
          <PrimaryButton type="submit">Sign Up</PrimaryButton>
          <Typography component="p" variant="h5" mt={2}>
            Already have an account? <Link to={routes.SIGN_IN}>Sign in.</Link>
          </Typography>
        </Form>
      </FormContainer>
    </>
  );
};
