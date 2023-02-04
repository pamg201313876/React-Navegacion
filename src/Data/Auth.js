import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const adminList = ['Irisval', "RetaxMaster", 'Paublo']

const AuthContext = React.createContext();
const auth = {};

function AuthProvider({ children }) {

    const navigate = useNavigate();
    const [user, setUser] = React.useState(null)

    const login = ({ username }) => {
        let isAdmin = adminList.find(admin => admin === username)
        setUser({username, isAdmin })       
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


function AuthRoute({children}) {   

    const authx = useAuth();

    if (!authx.user) {
        return <Navigate to="/login" />;
    }

    return children;
}


export {
    AuthProvider,
    AuthRoute,
    useAuth
};