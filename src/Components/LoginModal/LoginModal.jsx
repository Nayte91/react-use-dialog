import React from 'react'

const LoginModal = () => {
    const handleClick = () => alert('coucou')

    return (
        <form>
            <label>
                Adresse email
                <input type="email" />
            </label>
            <label>
                Mot de passe
                <input type="password" />
            </label>
            <button onClick={() => handleClick()}>Connexion</button>
        </form>
    )
}

export default LoginModal
