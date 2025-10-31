import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: () => void;
  logOut: () => void;
};

const authStorageKey = "auth-key";

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  logIn: () => {},
  logOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorageKey, jsonValue);
    } catch (error) {
      console.log("Error saving", error);
    }
  };

  const logIn = () => {
    setIsLoggedIn(true);
    storeAuthState({ isLoggedIn: true });
    router.replace("/");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    storeAuthState({ isLoggedIn: false });
    router.replace("/login");
  };

  useEffect(() => {
    //Simulate fetching auth state from storage

    const getAuthFromStorage = async () => {
      await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
      try {
        const value = await AsyncStorage.getItem(authStorageKey);
        if (value !== null) {
          const parsed = JSON.parse(value);
          setIsLoggedIn(parsed.isLoggedIn);
        }
      } catch (error) {
        console.log("Error fetching from storage", error);
      }
      setIsReady(true);
    };

    getAuthFromStorage();
  }, []);

  useEffect(() => {
    if (isReady) SplashScreen.hideAsync();
  }, [isReady]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isReady, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
