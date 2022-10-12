import './Header.css'

const Header = () => {
    const handleClick = () => alert('coucou')

    return (
        <div className="header">
            <p>Mon super header</p>
            <button className="header__button" onClick={() => handleClick()}>
                Connexion
            </button>
        </div>
    )
}

export default Header
