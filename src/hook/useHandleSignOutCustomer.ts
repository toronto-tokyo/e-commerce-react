import useAuth from 'hook/useAuth';
import { useNavigate } from 'react-router-dom';
import removeTokens from 'utils/authentication/removeTokens';

const useHandleSignOutCustomer = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  return () => {
    removeTokens();
    setIsLoggedIn(false);
    navigate('/');
  };
};

export default useHandleSignOutCustomer;
