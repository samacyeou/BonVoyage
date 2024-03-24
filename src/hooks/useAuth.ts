import { User } from '@/@types/type';
import { userInfoData } from '@/api/accountApi/accountApi';
import { useSession } from 'next-auth/react';
import React, {
  DependencyList,
  EffectCallback,
  useContext,
  useEffect,
} from 'react';
import useSessionStorage from './useSessionStorage';

export interface UserContextProps {
  userInfo: User;
  setUserInfo: (userInfo: any) => void;
}

const userContext = React.createContext<UserContextProps>({
  userInfo: {
    id: 0,
    email: '',
    nickname: '',
    profileImageUrl: '',
    createdAt: '',
    updatedAt: '',
  },
  setUserInfo: () => {},
});

export const UserContextProvider = userContext.Provider;

export default function useAuth(
  effect: EffectCallback,
  deps: DependencyList = [],
) {
  const { setUserInfo, userInfo } = useContext(userContext);
  const { data, status, update } = useSession();
  const [accessToken, setAccessToken] = useSessionStorage(
    'accessToken', // key for sessionStorage
    '', // 초기값
    true, // JSON 형태로 저장하지 않음
  );

  const getUserInfo = async () => {
    const userData = await userInfoData();
    if (userData) {
      setUserInfo({ profileImageUrl: userInfo.profileImageUrl, ...userData });
    }
  };

  useEffect(() => {
    if (accessToken) {
      return effect?.();
    }
  }, [accessToken, ...deps]);

  useEffect(() => {
    let currentToken = accessToken;
    if (!currentToken && data?.user) {
      const { user } = data;
      setUserInfo({
        email: user.email,
        nickname: user.name,
        profileImageUrl: user.image,
      });
      currentToken = (data as any).accessToken;
      if (currentToken) {
        setAccessToken(currentToken);
      }
    }
    if (currentToken) {
      getUserInfo();
    }
  }, [accessToken, data]);

  return {
    accessToken,
    setAccessToken,
    setUserInfo,
    userInfo,
    status: accessToken ? 'authenticated' : status,
  };
}
