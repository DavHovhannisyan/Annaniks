import React, {Dispatch, FC, MouseEvent, SetStateAction} from 'react';
import {useTranslation} from "next-i18next";
import {useForm, Controller} from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../styles/ModalContactUs.module.css'


interface FormValues {
    firstName: string
    lastName: string
    emailAddress: string
    phoneNumber: string
    message: string
};

interface IProps {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}

const CustomModal: FC<IProps> = ({showModal, setShowModal}) => {
    const {t} = useTranslation('common');
    const {register, control, handleSubmit, formState: {errors}} = useForm<FormValues>({mode: 'all'});

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });
    const handleCloseModal = (e: MouseEvent) => {
        e.stopPropagation()
        setShowModal(false)
    }
    return (
        <div>
            <div onClick={handleCloseModal} className={styles.modal}>
                <div onClick={(event)=> event.stopPropagation()} className={styles.modal__content} >
                    <div className={styles.contact_us_modal}>
                        <div className={styles.contact_us_modal_block}>
                            <h2 className={styles.contact_us_modal_title}>{t('common:contactUsModalInfo:title')}</h2>
                            <form onSubmit={onSubmit} className={styles.contact_us_modal_form}>
                                <div className={styles.modal_flex_content}>
                                    <div className={styles.modal_row_content}>
                                        <div className={styles.modal_input_block}>
                                            <label className={styles.contact_us_modal_form_label} htmlFor="fName">
                                                <h4>{t('common:contactUsModalInfo:firstName')}</h4>
                                                <input
                                                    style={errors.firstName?.message ? {border: '1px solid #ff7e61'} : {}} {...register("firstName", {
                                                        required: t(`common:contactUsModalInfo:error:firstName`)
                                                    }
                                                )}
                                                    placeholder={t('common:contactUsModalInfo:firstName')}
                                                    className={styles.contact_us_modal_form_input} id='fName'
                                                    type="text"/>
                                            </label>
                                            {errors.firstName?.message &&
                                                <span className={styles.errors_span}>{errors.firstName?.message}</span>}

                                        </div>
                                        <div className={styles.modal_input_block}>
                                            <label className={styles.contact_us_modal_form_label} htmlFor="lName">
                                                <h4>{t('common:contactUsModalInfo:lastName')}</h4>
                                                <input
                                                    style={errors.lastName?.message ? {border: '1px solid #ff7e61'} : {}}
                                                    {...register('lastName', {
                                                        required: 'Required'
                                                    })}
                                                    placeholder={t('common:contactUsModalInfo:lastName')}
                                                    className={styles.contact_us_modal_form_input} id='lName'
                                                    type="text"/>
                                                {errors.lastName?.message &&
                                                    <span
                                                        className={styles.errors_span}>{errors.lastName?.message}</span>}

                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.modal_row_content}>
                                        <div className={styles.modal_input_block}>
                                            <label className={styles.contact_us_modal_form_label} htmlFor="email">
                                                <h4>{t('common:contactUsModalInfo:emailAddres')}</h4>
                                                <input
                                                    style={errors.emailAddress?.message ? {border: '1px solid #ff7e61'} : {}} {...register('emailAddress', {
                                                    required: 'sadsa'
                                                })}
                                                    placeholder={t('common:contactUsModalInfo:emailAddres')}
                                                    className={styles.contact_us_modal_form_input} id='email'
                                                    type="text"/>
                                                {errors.emailAddress?.message &&
                                                    <span
                                                        className={styles.errors_span}>{errors.emailAddress?.message}</span>}

                                            </label>
                                        </div>
                                        <div className={styles.modal_input_block}>
                                            <label className={styles.contact_us_modal_form_label} htmlFor="phone">
                                                <h4>{t('common:contactUsModalInfo:phoneNumber')}</h4>
                                                <Controller
                                                    control={control}
                                                    name="phoneNumber"
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: t('common:contactUsModalInfo:error:phoneNumber')
                                                        },
                                                        pattern: {
                                                            value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                                            message: t('common:contactUsModalInfo:error:phoneNumber')
                                                        }
                                                    }}
                                                    render={({field}) => <PhoneInput
                                                        inputClass={styles.contact_us_modal_form_input_phone}
                                                        inputStyle={errors.phoneNumber?.message ? {border: '1px solid #ff7e61'} : {}}
                                                        buttonStyle={errors.phoneNumber?.message ? {border: '1px solid #ff7e61'} : {}}
                                                        buttonClass={styles.dropdownClass}
                                                        enableAreaCodeStretch
                                                        country={'us'}
                                                        {...field}

                                                    />}
                                                />
                                                {errors.phoneNumber?.message &&
                                                    <span
                                                        className={styles.errors_span}>{errors.phoneNumber?.message}</span>}
                                            </label>

                                        </div>
                                    </div>
                                </div>
                                <div className={styles.modal_textarea_block}>
                                    <label className={styles.contact_us_modal_form_label} htmlFor="message">
                                        <h4>{t('common:contactUsModalInfo:message')}</h4>
                                        <textarea style={errors.message?.message ? {border: '1px solid #ff7e61'} : {}}
                                                  {...register('message', {
                                                      required: "Required"
                                                  })} placeholder={t('common:contactUsModalInfo:message')}
                                                  className={styles.contact_us_modal_form_textarea} id='message'/>
                                        {errors.emailAddress?.message &&
                                            <span style={{color: "#ff7e61"}}
                                                  className={styles.errors_span}>{errors.message?.message}</span>}
                                    </label>
                                </div>
                                <div className={styles.modal_button_block}>
                                    <button
                                        className={styles.modal_button}>{t('common:contactUsModalInfo:buttonText')}</button>
                                </div>
                            </form>
                            <button onClick={handleCloseModal} className={styles.modal_button_modal_close}><CloseIcon/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;