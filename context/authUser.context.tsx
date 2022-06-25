import { createContext, ReactNode, useContext } from 'react';
import InAuthUser from '@/models/inAuthUser';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

interface InAuthUserContext {
  authUser: InAuthUser | null;
  /** 로그인 여부가 진행중인지 체크 */
  loading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
}

const AuthUserContext = createContext<InAuthUserContext>({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => ({ user: null, credential: null }),
  signOut: () => {},
});

export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const auth = useFirebaseAuth();
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
};

export const useAuth = () => useContext(AuthUserContext);
