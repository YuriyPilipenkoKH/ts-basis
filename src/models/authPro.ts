import { createContext, useState } from "react";

type User = string | null; // Define the User type

interface AuthContextType {
    user: User;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {}
});

export const AuthProvider = () => {
    const [user, setUser] = useState<User>(null);

    const login = (user: User) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    const contextValue: AuthContextType = {
        user,
        login,
        logout
    };


}   


