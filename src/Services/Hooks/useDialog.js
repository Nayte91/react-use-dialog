import React from 'react'
import ReactDOM from 'react-dom'
import ModalStructure from './ModalStructure'

const useDialog = () => {
    const openDialog = () => {
        // return ReactDOM.createPortal(
        //     <ModalStructure>
        //         <p>Coucou</p>
        //     </ModalStructure>,
        //     document.body
        // )
    }

    const closeDialog = () => {
        console.log('close modal!')
    }

    return {
        openDialog,
        closeDialog,
    }
}

export default useDialog
