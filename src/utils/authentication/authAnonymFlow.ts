import saveTokens from './saveTokens';
import { IAuthFlowData } from 'types/api';

const authAnonymFlow = async () => {
  const link = `${process.env.REACT_APP_CTP_AUTH_URL}/oauth/${process.env.REACT_APP_CTP_PROJECT_KEY}/anonymous/token?grant_type=client_credentials`;

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

    const anonymFlowData: IAuthFlowData = await response.json();

    saveTokens({
      accessToken: anonymFlowData.access_token,
      refreshToken: anonymFlowData.refresh_token,
    });
  } catch (e) {
    console.log(e);
  }
};

export default authAnonymFlow;
