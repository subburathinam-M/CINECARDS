    import { createContext, useContext, useState } from 'react';  // Make sure useContext is imported

    // Create the context
    export const AuthContext = createContext();

    // Create the provider component
    export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ 
        isAuthenticated, 
        user, 
        login, 
        logout 
        }}>
        {children}
        </AuthContext.Provider>
    );
    };

    // Custom hook to use the auth context
    export const useAuth = () => {
    return useContext(AuthContext);  // Now useContext is properly defined
    };