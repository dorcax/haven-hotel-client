import { Role, type AuthState } from '@/api/api.type';
import { useAuthState } from '@/api/data/auth';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';



const UseAuthComplete = () => {
  const auth = useAuthState();
  const navigate = useNavigate();

  return useCallback(async (loginPromise: Promise<AuthState>) => {
    const res = await loginPromise;

    console.log("Logging in now3333:", res);

    auth.set(res);

    if (res.role === Role.GUEST) navigate('/dashboard', { replace: true });
    else navigate('/', { replace: true });

    return res;
  }, [auth, navigate]);
};

export default UseAuthComplete