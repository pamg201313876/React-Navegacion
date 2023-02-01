import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Data/Auth'

export const Login = () => {

    const navigate = useNavigate();
    const { user, login, logout } = useAuth();
    const [username, setUsername] = React.useState("")


    const logearse = () => {
        login({ username })
        navigate('/profile')
    }

    if (user) {
        return <Navigate to="profile" />;
    }

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={logearse} >
                <label>
                    Username
                </label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit" >Aceptar</button>
            </form>
        </>
    )
}
