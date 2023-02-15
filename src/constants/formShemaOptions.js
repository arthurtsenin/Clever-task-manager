import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const SCHEMA = yup.object().shape({
  email: yup.string().required('Email is a required field').email('Invalid email format'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters'),
});

export const formOptions = {
  mode: 'onBlur',
  resolver: yupResolver(SCHEMA),
};
