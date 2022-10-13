import { useRef } from 'react'
import ModalStructure from '../../Services/Hooks/ModalStructure'
import LoginModal from '../LoginModal/LoginModal'
import './Header.css'

const Header = () => {
    const ref = useRef(null)
    const handleClick = () => {
        ref.current.showModal()
    }

    return (
        <>
            <div className="header">
                <p>Mon super header</p>
                <button
                    className="header__button"
                    onClick={() => handleClick()}
                >
                    Connexion
                </button>
            </div>

            <ModalStructure ref={ref}>
                <LoginModal />
            </ModalStructure>
        </>
    )
}

export default Header
