import React from 'react';
import { Navigate } from 'react-router-dom';


const AuthContext = React.createContext();

const auth = {};

function AuthProvider({ children }) {

    const [user, setUser] = React.useState(null)

    const login = ({ username }) => {
        setUser(username)
    }

    const logout = () => {
        setUser(null)
    }

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth} >
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}


function AuthRoute(children) {   

    if (!auth.user) {
        return <Navigate to="/login" />
    }

    return children;
}


export {
    AuthProvider,
    AuthRoute,
    useAuth
};