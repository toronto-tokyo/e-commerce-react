interface IGetTokensReturn {
  accessToken: string | null;
  refreshToken: string | null;
}

const getTokens = (): IGetTokensReturn => {
  return {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
};

export default getTokens;
