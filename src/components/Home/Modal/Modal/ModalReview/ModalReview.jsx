import React from 'react'
import { useForm } from 'react-hook-form'
import { ModalContext } from '../../ModalContext'
import './ModalReview.scss'

export const ModalReview = () => {
    const { closeModal } = React.useContext(ModalContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    async function onSubmit(data) {
        reset()
        const response = await sendData(serializeForm(data))
        if (response.ok) {
            let result = await response.json()
            alert(result.message)
            closeModal()
        } else {
            alert('Код ошибки: ' + response.status)
        }
    }

    function serializeForm(formNode) {
        let formData = new FormData()

        formData.append('name', formNode.name)
        formData.append('message', formNode.message)
        return formData
    }

    async function sendData(data) {
        return await fetch('send_mail.php', {
            method: 'POST',
            body: data,
        })
    }

    return (
        <div className="modal__review">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal__review_input">
                    <input
                        {...register('name', {
                            required: 'Имя обязательно',
                        })}
                        placeholder="Имя"
                    />
                    {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
                </div>
                <div className="modal__review_input message-box" style={{ height: '100px' }}>
                    <input
                        {...register('message', {
                            required: 'Сообщение обязательно',
                        })}
                        placeholder="Сообщение"
                    />
                    {errors.message && <div style={{ color: 'red' }}>{errors.message.message}</div>}
                </div>
                <button className="modal__review_button">Отправить</button>
            </form>
        </div>
    )
}
