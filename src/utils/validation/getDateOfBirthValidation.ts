import calculateBirthDateFromAge from 'utils/calculateBirthDateFromAge';
import * as yup from 'yup';

const getDateOfBirthValidation = () =>
  yup
    .string()
    .required('Please enter date of birth')
    .test('age', 'You must be 13 or older', (dateOfBirth) => {
      return new Date(dateOfBirth) <= calculateBirthDateFromAge(13);
    })
    .test('age', 'You cannot be older then 150 YO', (dateOfBirth) => {
      return new Date(dateOfBirth) >= calculateBirthDateFromAge(150);
    });

export default getDateOfBirthValidation;
