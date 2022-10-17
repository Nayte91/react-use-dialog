import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import ModalStructure from './ModalStructure'

const useDialog = (title, content) => {
    const ref = createRef()

    const openDialog = async () => {
        let dialogsNode = createRoot(document.getElementById('dialogs'))
        
        await dialogsNode.render(
            <ModalStructure ref={ref} title={title}>
                {content}
            </ModalStructure>
        )

        ref.current.showModal()
    }

    return {
        openDialog
    }
}

export default useDialog
