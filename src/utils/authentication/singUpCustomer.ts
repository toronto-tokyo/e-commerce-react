import getTokens from './getTokens';

interface ISignUpCustomerProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

const signUpCustomer = async (customerData: ISignUpCustomerProps) => {
  const link = `${process.env.REACT_APP_CTP_API_URL}/${process.env.REACT_APP_CTP_PROJECT_KEY}/me/signup`;

  const response = await fetch(link, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getTokens().accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData),
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
};

export default signUpCustomer;
