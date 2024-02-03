import getEmailValidation from 'utils/validation/getEmailValidation';
import getPasswordValidation from 'utils/validation/getPasswordValidation';
import * as yup from 'yup';

const schema = yup.object({
  email: getEmailValidation(),
  password: getPasswordValidation(),
});

export default schema;
