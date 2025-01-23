import { createContext, useContext, useMemo, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  password?:string
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email: string, password: string) => {
    // Mock login - in real app, this would be an API call
    const mockUser: User = {
      id: 1,
      name: "Root",
      email: email,
      password:password,
      avatar: "https://avatars.githubusercontent.com/u/1",
    };
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = useMemo(() => ({
    user,
    login,
    logout,
    isAuthenticated: !!user
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
