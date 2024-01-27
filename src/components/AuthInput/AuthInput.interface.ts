import { UseFormRegisterReturn } from 'react-hook-form';

interface IAuthInputProps {
  id: string;
  type: string;
  register: UseFormRegisterReturn;
  isInputValid: boolean;
}

export default IAuthInputProps;
