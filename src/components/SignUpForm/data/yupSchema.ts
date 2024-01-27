import getPasswordErrMessage from 'utils/getPasswordErrMessage';
import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .required('Email is required field')
    .email('Invalid format, example:  example@email.com'),
  password: yup
    .string()
    .required('Please enter a password')
    .matches(/^(?=.*[A-Z]).*$/, getPasswordErrMessage('uppercase'))
    .matches(/^(?=.*[a-z]).*$/, getPasswordErrMessage('lowercase'))
    .matches(/^(?=.*\d).*$/, getPasswordErrMessage('number'))
    .min(8, 'Password must have at least 8 characters'),
  firstName: yup
    .string()
    .required('Please enter a first name')
    .matches(/^[a-zA-Z]+$/, 'Should not contain special characters or numbers'),
  lastName: yup
    .string()
    .required('Please enter a last name')
    .matches(/^[a-zA-Z]+$/, 'Should not contain special characters or numbers'),
});

export default schema;
