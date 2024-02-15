import * as yup from 'yup';

const getEmailValidation = () =>
  yup
    .string()
    .required('Email is required field')
    .matches(
      /^\S(?:.*\S)?$/,
      'Email address must not contain leading or trailing whitespace'
    )
    .matches(
      /^\S+@\S+$/,
      'Email address must contain an "@" symbol separating local part and domain   name'
    )
    .matches(
      /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
      'Email address must contain a domain name (e.g., example.com)'
    );

export default getEmailValidation;
