import React from 'react'
import { useForm } from 'react-hook-form'
import { ModalContext } from '../../ModalContext'
import './ModalCalculate.scss'

export const ModalCalculate = () => {
    const { closeModal } = React.useContext(ModalContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    async function onSubmit(data) {
        closeModal()
        reset()
        const response = await sendData(serializeForm(data))
        if (response.ok) {
            let result = await response.json()
            alert(result.message)
            closeModal()
        } else {
            closeModal()
            // alert('Код ошибки: ' + response.status)
        }
    }

    function serializeForm(formNode) {
        let formData = new FormData()

        formData.append('name', formNode.name)
        formData.append('phone', formNode.phone)
        return formData
    }

    async function sendData(data) {
        return await fetch('send_mail.php', {
            method: 'POST',
            body: data,
        })
    }

    return (
        <div className="modal__calculate">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal__calculate_input">
                    <input
                        {...register('name', {
                            required: 'Имя обязательно',
                        })}
                        placeholder="Имя"
                    />
                    {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
                </div>
                <div className="modal__calculate_input">
                    <input
                        {...register('phone', {
                            required: 'Телефон обязательн',
                            pattern: {
                                value: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                                message: 'Введите корректный телефон',
                            },
                        })}
                        placeholder="Телефон"
                    />
                    {errors.phone && <div style={{ color: 'red' }}>{errors.phone.message}</div>}
                </div>
                <button className="modal__calculate_button">Отправить</button>
            </form>
        </div>
    )
}
