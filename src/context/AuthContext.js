// src/context/AuthContext.js
import { createContext, useState, useEffect, useMemo,useCallback } from 'react';
import PropTypes from "prop-types";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    // Function to save user data and tokens
    const login = useCallback((userData, tokenData) => {
        setUser(userData);
        setAccessToken(tokenData.access_token);
        // Optionally, store in localStorage
        localStorage.setItem('accessToken', tokenData.access_token);
        localStorage.setItem("userData", userData)
    },[]);

    const logout = useCallback(() => {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem("userData")

    },[]);

    const signup = useCallback((userData) => {
        setUser(userData);
        // Optionally, store in localStorage
        localStorage.setItem("userData", userData)
    },[])
    useEffect(() => {
        // Load token from localStorage if needed
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setAccessToken(storedToken);
        }
        const userData = localStorage.getItem('userData')
        if(userData) {
            setUser(userData)
        }
    }, []);

    const authContextValue = useMemo(() => ({
        user,
        accessToken,
        login,
        logout,
        signup,
    }), [user, accessToken, login, logout, signup]);


    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
