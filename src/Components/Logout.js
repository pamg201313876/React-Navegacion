import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Data/Auth'

export const Logout = () => {

    const auth = useAuth()
    const navigate = useNavigate();

    const logout = () => {
        console.log("Saliendo...")
        auth.logout()
        navigate('/')
    }

    return (
        <>
            <hi>Logout</hi>

            <form onSubmit={logout} >
                <label>
                    Seguro que quieres salir?
                </label>
                <button type="submit" >Aceptar</button>
            </form>
        </>
    )
}
