import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Loader } from '@Containers/loader/Loader';
import { FormContainer } from '@Views/formContainer/FormContainer';
import { Form } from '@Views/form/Form';
import { Input } from '@Views/input/Input';
import { PrimaryButton } from '@Views/button/PrimaryButton';
import { SuccessSignUp } from '@Views/toasts/SuccessSignUp';
import { ErrorSignUp } from '@Views/toasts/ErrorSignUp';
import { UserAuth } from '@Context/AuthContext';
import { formOptions } from '@Constants/formShemaOptions';
import Typography from '@mui/material/Typography';

export const SignUp = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { createUser } = UserAuth();

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
      await localStorage.setItem('user', JSON.stringify(data.email));
      setIsLoading(false);
      SuccessSignUp();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      ErrorSignUp(error);
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
            Already have an account? <Link to="/">Sign in.</Link>
          </Typography>
        </Form>
      </FormContainer>
    </>
  );
};
