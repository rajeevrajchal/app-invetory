"use client";

import AuthService from "@/api/services/auth.service";
import { LOGIN_TYPE } from "@/api/types/auth.type";
import { user_info_key, user_token_key } from "@/constant/ls-key";
import { USER } from "@/model/user.model";
import AppRoute from "@/routes/route.constant";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import useCookies from "../utils/use-cookies";

interface UseAuthProps {
  loading: boolean;
  isLoggedIn: boolean;
  loginUser: USER;

  google: {
    mutate: () => void;
    isPending: boolean;
  };
  login: {
    mutate: (payload: LOGIN_TYPE) => void;
    isPending: boolean;
  };
  logout: {
    mutate: () => void;
    isPending: boolean;
  };
}

const authContext = createContext<UseAuthProps>({} as UseAuthProps);
const { Provider } = authContext;

const useAuthData = () => {
  const { clearStorage, getStorageData, removeStorageData } = useCookies();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [loginUser, setLoginUser] = useState<USER>({} as USER);

  const google = useMutation({
    mutationFn: () => AuthService.google(),
    onSuccess: async (data: any) => {
      router.replace(data?.redirect_url);
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to login");
    },
  });

  const login = useMutation({
    mutationFn: (payload: LOGIN_TYPE) => AuthService.login(payload),
    onSuccess: async (data: any) => {
      clearStorage();
      setIsLoggedIn(true);
      setLoginUser(data?.user);
      router.refresh();
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to login");
    },
  });

  const logout = useMutation({
    mutationFn: () => AuthService.logout(),
    onSuccess: async () => {
      clearStorage();
      setLoginUser({} as USER);
      setIsLoggedIn(false);
      router.replace(AppRoute.login);
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to logout");
    },
  });

  const checkAuthentication = async () => {
    setLoading(true);
    const tokenFromLS = await getStorageData(user_token_key);
    const userFromLS = await getStorageData(user_info_key);
    if (tokenFromLS && userFromLS) {
      setIsLoggedIn(true);
      setLoginUser(JSON.parse(userFromLS));
    } else {
      setIsLoggedIn(false);
      setLoginUser({} as USER);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    isLoggedIn,
    loginUser,

    login: login,
    google: google,
    logout: logout,
  };
};

export function AuthProvider({ children }: { children: ReactElement }) {
  const data = useAuthData();
  return <Provider value={data}>{children}</Provider>;
}

const useAuth = () => useContext(authContext);

export default useAuth;
