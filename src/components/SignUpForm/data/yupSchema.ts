import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .required('Email is required field')
    .email('Invalid format, example:  example@email.com'),
});

export default schema;
