import useAuth from 'hook/useAuth';
import useHandleSignOutCustomer from 'hook/useHandleSignOutCustomer';

const useHeader = () => {
  const { isLoggedIn } = useAuth();
  const handleSignOut = useHandleSignOutCustomer();

  return {
    isLoggedIn,
    handleSignOut,
  };
};

export default useHeader;
