import { UseFormRegisterReturn } from 'react-hook-form';

export interface IAuthInputProps {
  id: string;
  type: string;
  register: UseFormRegisterReturn;
  isInputValid: boolean;
}

export interface IUseAuthInput {
  type: string;
}
