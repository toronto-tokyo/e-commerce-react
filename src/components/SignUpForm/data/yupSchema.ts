import calculateBirthDateFromAge from 'utils/calculateBirthDateFromAge';
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
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  firstName: yup
    .string()
    .required('Please enter a first name')
    .matches(/^[a-zA-Z]+$/, 'Should not contain special characters or numbers'),
  lastName: yup
    .string()
    .required('Please enter a last name')
    .matches(/^[a-zA-Z]+$/, 'Should not contain special characters or numbers'),
  dateOfBirth: yup
    .string()
    .required('Please enter date of birth')
    .test('age', 'You must be 13 or older', (dateOfBirth) => {
      return new Date(dateOfBirth) <= calculateBirthDateFromAge(13);
    })
    .test('age', 'You cannot be older then 150 YO', (dateOfBirth) => {
      return new Date(dateOfBirth) >= calculateBirthDateFromAge(150);
    }),
});

export default schema;
