const getPasswordErrMessage = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export default getPasswordErrMessage;
