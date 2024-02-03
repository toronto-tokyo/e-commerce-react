import * as yup from 'yup';

const getConfirmPasswordValidation = () =>
  yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match');

export default getConfirmPasswordValidation;
