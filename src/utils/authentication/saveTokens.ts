interface ISaveTokensParams {
  accessToken: string;
  refreshToken: string;
}

const saveTokens = ({ accessToken, refreshToken }: ISaveTokensParams) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export default saveTokens;
