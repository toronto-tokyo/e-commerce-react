import saveTokens from './saveTokens';
import { IAuthFlowData } from 'types/api';

interface IAuthPasswordFlowParams {
  email: string;
  password: string;
}

const authPasswordFlow = async ({
  email,
  password,
}: IAuthPasswordFlowParams) => {
  const link = `${process.env.REACT_APP_CTP_AUTH_URL}/oauth/${process.env.REACT_APP_CTP_PROJECT_KEY}/customers/token?grant_type=password&username=${email}&password=${password}`;

  try {
    const response = await fetch(link, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${process.env.REACT_APP_CTP_CLIENT_ID}:${process.env.REACT_APP_CTP_CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      return false;
    }

    const passwordFlowData: IAuthFlowData = await response.json();

    saveTokens({
      accessToken: passwordFlowData.access_token,
      refreshToken: passwordFlowData.refresh_token,
    });
  } catch (e) {
    console.log(e);
  }
};

export default authPasswordFlow;
