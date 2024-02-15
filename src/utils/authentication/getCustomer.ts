const getCustomer = async () => {
  const link = `${process.env.REACT_APP_CTP_API_URL}/${process.env.REACT_APP_CTP_PROJECT_KEY}/me`;
  const response = await fetch(link, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  if (!response.ok) {
    if (response.status === 403) return null;
    throw new Error(`${response.status}`);
  }

  const customerData = await response.json();
  return customerData;
};

export default getCustomer;
