import getCustomer from './getCustomer';
import getTokens from './getTokens';

const isCustomerLoggedIn = async () => {
  const { accessToken, refreshToken } = getTokens();
  if (!accessToken || !refreshToken) {
    return false;
  }
  try {
    const customer = await getCustomer();
    return !!customer;
  } catch (e) {
    console.log(e);
  }
};

export default isCustomerLoggedIn;
