import * as yup from 'yup';

import getConfirmPasswordValidation from 'utils/validation/getConfirmPasswordValidation';
import getDateOfBirthValidation from 'utils/validation/getDateOfBirthValidation';
import getEmailValidation from 'utils/validation/getEmailValidation';
import getFirstNameValidation from 'utils/validation/getFirstNameValidation';
import getLastNameValidation from 'utils/validation/getLastNameValidation';
import getPasswordValidation from 'utils/validation/getPasswordValidation';

const schema = yup.object({
  email: getEmailValidation(),
  password: getPasswordValidation(),
  confirmPassword: getConfirmPasswordValidation(),
  firstName: getFirstNameValidation(),
  lastName: getLastNameValidation(),
  dateOfBirth: getDateOfBirthValidation(),
});

export default schema;
