import React, { forwardRef } from 'react'
import ReactDOM from 'react-dom'

const ModalStructure = forwardRef(
    ({ title, children, header = true, anchor = null }, ref) => {
        const closeDialog = async () => {
            await ref.current.close()
            
            document.getElementById('dialogs').removeChild(ref.current)
        }

        return ReactDOM.createPortal(
            <dialog className="modal" ref={ref}>
                {header && (
                    <header className="modal__header">
                        <button
                            type="button"
                            className="modal-close-button"
                            data-dismiss="modal"
                            onClick={() => closeDialog()}
                        >
                            <span>&times;</span>
                        </button>
                        <h1>{title}</h1>
                    </header>
                )}
                <main className="modal__main">{children}</main>
            </dialog>,
            anchor || document.body
        )
    }
)

export default ModalStructure
