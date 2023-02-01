import React from 'react'
import { useAuth } from '../Data/Auth'


export const ProfilePage = () => {

  const auth = useAuth();

  return (
    <div>Welcome {auth.user.username} </div>

  )

}
