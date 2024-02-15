import * as yup from 'yup';

const getFirstNameValidation = () =>
  yup
    .string()
    .required('Please enter a first name')
    .matches(/^[a-zA-Z]+$/, 'Should not contain special characters or numbers');

export default getFirstNameValidation;
