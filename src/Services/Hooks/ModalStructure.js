import React from 'react'
import ReactDOM from 'react-dom'

const ModalStructure = ({ isShowing, hide, anchor = null, children }) =>
    isShowing &&
    ReactDOM.createPortal(
        <dialog className="modal">
            <header className="modal__header">
                <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    onClick={hide}
                >
                    <span>&times;</span>
                </button>
            </header>
            <main className="modal__main">{children}</main>
        </dialog>,
        anchor || document.body
    )

export default ModalStructure
