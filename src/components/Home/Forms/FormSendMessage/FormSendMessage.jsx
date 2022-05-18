import React from 'react'
import { SvgSelector } from '../../../SvgSelector/SvgSelector'
import './FormSendMessage.scss'
import { useForm } from 'react-hook-form'

export const FormSendMessage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    async function onSubmit(data) {
        alert(`Your name ${data.name}`)
        reset()
        const response = await sendData(serializeForm(data))
        if (response.ok) {
            let result = await response.json()
            alert(result.message)
        } else {
            alert('Код ошибки: ' + response.status)
        }
    }

    function serializeForm(formNode) {
        let formData = new FormData()

        formData.append('name', formNode.name)
        formData.append('email', formNode.email)
        formData.append('phone', formNode.phone)
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
        <div>
            <section className="page__section">
                <div className="container-form">
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                <div className="form__svg-wrapper">
                                    <SvgSelector id="location" />
                                </div>
                                <div className="topic">Адрес</div>
                                <div className="text-one">г. Белгород</div>
                                <div className="text-two">ул. Щорса д.45К</div>
                            </div>
                            <div className="phone details">
                                <div className="form__svg-wrapper">
                                    <SvgSelector id="phone" />
                                </div>
                                <div className="topic">Телефон</div>
                                <div className="text-one">8-903-642-00-75</div>
                            </div>
                            <div className="email details">
                                <div className="form__svg-wrapper">
                                    <SvgSelector id="email" />
                                </div>
                                <div className="topic">Email</div>
                                <div className="text-one">pluskuhni@yandex.ru</div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="topic-text">Отправьте нам сообщение</div>
                            <p>
                                Если у вас есть вопросы и предложения по сотрудничеству, заполните
                                форму ниже
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-box">
                                    <input
                                        {...register('name', {
                                            required: 'Имя обязательно для заполнения',
                                        })}
                                        placeholder="Имя"
                                    />
                                    {errors.name && (
                                        <div style={{ color: 'red' }}>{errors.name.message}</div>
                                    )}
                                </div>
                                <div className="input-box">
                                    <input
                                        {...register('email', {
                                            required: 'Email поля обязательно для заполнения',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                                message: 'Введите корректный email',
                                            },
                                        })}
                                        placeholder="Email"
                                    />
                                    {errors.email && (
                                        <div style={{ color: 'red' }}>{errors.email.message}</div>
                                    )}
                                </div>
                                <div className="input-box">
                                    <input
                                        {...register('phone', {
                                            required: 'Телефон обязательн для заполнения',
                                            pattern: {
                                                value: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                                                message: 'Введите корректный телефон',
                                            },
                                        })}
                                        placeholder="Телефон"
                                    />
                                    {errors.phone && (
                                        <div style={{ color: 'red' }}>{errors.phone.message}</div>
                                    )}
                                </div>
                                <div className="input-box message-box">
                                    <input {...register('message')} placeholder="Сообщение" />
                                    {errors.message && (
                                        <div style={{ color: 'red' }}>{errors.message.message}</div>
                                    )}
                                </div>
                                <button className="button" type="submit">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
