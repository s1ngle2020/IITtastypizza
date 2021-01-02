export const validate = values => {
    const errors = {};
    if (!values.clientName) {
        errors.clientName = 'Required';
    } else if (values.clientName.length > 50) {
        errors.clientName = 'Имя должно быть короче 50 символов!';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
    } else if (values.phoneNumber.length > 20) {
        errors.phoneNumber = 'Номер телефона должен быть короче 20 цифр!';
    } else if (!/^\+?(0|[1-9]\d*)$/i.test(values.phoneNumber)) {
        errors.phoneNumber = 'Номер телефона должен содержать только цифры!!';
    }

    if (!values.streetName) {
        errors.streetName = 'Required';
    } else if (values.streetName.length > 50) {
        errors.clientName = 'Название улицы должно быть короче 50 символов!';
    }

    if (values.intercomPass.length > 10) {
        errors.intercomPass = 'Номер или пароль от домофона должен быть короче 10 символов!';
    }

    return errors;
};
