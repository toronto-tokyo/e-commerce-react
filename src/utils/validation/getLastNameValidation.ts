import * as yup from 'yup';

const getLastNameValidation = () =>
  yup
    .string()
    .required('Please enter a last name')
    .matches(/^[a-zA-Z]+$/, 'Should not contain special characters or numbers');

export default getLastNameValidation;
