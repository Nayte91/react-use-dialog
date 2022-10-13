const useModal = ({ content }) => {
    const openModal = () => {
        console.log('open modal !' + content)
    }

    const closeModal = () => {
        console.log('close modal!')
    }

    return {
        openModal,
        closeModal,
    }
}

export default useModal
