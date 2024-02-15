export interface ISignInCustomerParams {
  email: string;
  password: string;
}

const signInCustomer = async ({ email, password }: ISignInCustomerParams) => {
  const link = `${process.env.REACT_APP_CTP_API_URL}/${process.env.REACT_APP_CTP_PROJECT_KEY}/me/login`;
  const response = await fetch(link, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
};

export default signInCustomer;
