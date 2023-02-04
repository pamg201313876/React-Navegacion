import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../Data/Auth';
import blogdata from '../Data/BlogData'


export const BlogPost = ({ }) => {

    const { slug } = useParams();
    const auth = useAuth()
    const navigation = useNavigate();
    const blogpost = blogdata.find(post => post.slug === slug);
    const isAbleToDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;


    const returnToBlog = () => {
        navigation('/blog')

    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>

            {isAbleToDelete && (
                <button>Eliminar blog</button>
            )}
        </>
    )
}
