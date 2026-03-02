import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const storedUser = localStorage.getItem('username');
        const storedToken = localStorage.getItem('token');
        if (storedToken && storedUser) {
            setUser(storedUser);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (userData, userToken) => {
        if (userToken) localStorage.setItem('token', userToken);
        const name = userData.name || userData.username;
        const id = userData.id || userData._id;

        if (name) localStorage.setItem('username', name);
        if (id) localStorage.setItem('userId', id);

        setToken(userToken);
        setUser(name);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
