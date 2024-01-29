import { UseFormRegisterReturn } from 'react-hook-form';

interface IAuthInputBlockProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export default IAuthInputBlockProps;
