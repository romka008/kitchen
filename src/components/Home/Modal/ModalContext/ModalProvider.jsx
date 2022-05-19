import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { ModalContext } from './ModalContext'

export const ModalProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const openModal = (modalConfig) => {
        setModalContent(modalConfig)
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }

    const valueModalProvider = {
        openModal,
        closeModal,
    }

    return (
        <ModalContext.Provider value={valueModalProvider}>
            {modalOpen && <Modal {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}
