import './Header.css'
import useDialog from '../../Services/Hooks/useDialog'

const Header = () => {
    const { openDialog } = useDialog(<LoginModal />)

    return (
        <div className="header">
            <p>Mon super header</p>
            <button className="header__button" onClick={() => openDialog()}>
                Connexion
            </button>
        </div>
    )
}

export default Header
