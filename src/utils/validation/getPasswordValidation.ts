import * as yup from 'yup';

const getPasswordValidation = () =>
  yup
    .string()
    .required('Please enter a password')
    .matches(
      /^(?=.*[A-Z]).*$/,
      `Your password must have at least 1 uppercase character`
    )
    .matches(
      /^(?=.*[a-z]).*$/,
      `Your password must have at least 1 lowercase character`
    )
    .matches(
      /^(?=.*\d).*$/,
      `Your password must have at least 1 number character`
    )
    .matches(
      /^\S(?:.*\S)?$/,
      'Password must not contain leading or trailing whitespace'
    )
    .min(8, 'Password must have at least 8 characters');

export default getPasswordValidation;
