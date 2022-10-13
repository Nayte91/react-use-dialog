import { createRef } from 'react'
import { render } from 'react-dom'
import ModalStructure from './ModalStructure'

const useDialog = (title, content) => {
    const ref = createRef()
    const openDialog = () => {
        render(
            <ModalStructure ref={ref} title={title}>
                {content}
            </ModalStructure>,
            document.getElementById('toto')
        )
        ref.current.showModal()
    }

    return {
        openDialog,
    }
}

export default useDialog
