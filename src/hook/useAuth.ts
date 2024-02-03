import AuthContext from 'context/AuthContext/AuthContext';
import { useContext } from 'react';

const useAuth = () => useContext(AuthContext);

export default useAuth;
