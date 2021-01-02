import React, {useState} from "react";

import styles from './ClientInfoSection.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {validate} from "../../utils/form-validation";
import {clearCartAC, setPromoAC} from "../../redux/cart-reducer";
import {useHistory} from "react-router-dom";

export const ClientInfoSection = () => {

    const {
        container, title, forms, formItem, formItemInput, formItemLabel,
        phonePrefix, phoneRest, addressList, formItemInputSmall, addressListItem,
        formItemInputComments, typeOfPayment, paymentTitle, paymentList, paymentListItem,
        checkout, checkoutContainer, totalContainer, totalSum, totalTitle,
        section, select, promoContainer,
    } = styles;

    const sum = useSelector(state => state.carts.sum);
    const dispatch = useDispatch();
    const history = useHistory();

    const [promo, setPromo] = useState('');

    const onHandlePromo = (e) => {
        const newPromo = e.target.value;
        setPromo(newPromo);
        if (newPromo === 'pizza10') {
            dispatch(setPromoAC())
        }
    }

    const formik = useFormik({
        initialValues: {
            clientName: '',
            phoneNumber: '',
            streetName: '',
            houseNumber: '',
            flatNumber: '',
            entranceNumber: '',
            floorNumber: '',
            intercomPass: '',
            payment: '',
            comments: '',
        },
        validate,
        onSubmit: values => {
            alert('Ваш заказ принят!');
            dispatch(clearCartAC());
            history.push('/');
        },
    });

    return (
        <section className={section} id={"clientInfo"}>
            <div className={container}>
                <h2 className={title}>Адрес доставки</h2>
                <form className={forms} onSubmit={formik.handleSubmit}>
                    <div className={formItem}>
                        <label htmlFor="clientName" className={formItemLabel}>Ваше имя</label>
                        <input
                            id={'clientName'}
                            name="clientName"
                            type="text"
                            className={formItemInput}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.clientName ? <div>{formik.errors.clientName}</div> : null}
                    </div>
                    <div className={formItem}>
                        <label htmlFor="phoneNumber" className={formItemLabel}>Ваш мобильный телефон</label>
                        <input tabIndex="-1" type="tel" name="phonePrefix" className={phonePrefix}
                               value="+375" readOnly={true}/>
                        <input
                            id={'phoneNumber'}
                            name={'phoneNumber'}
                            type="tel"
                            className={phoneRest}
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                        />
                        {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
                    </div>
                    <div className={formItem}>
                        <ul className={addressList}>
                            <li className={addressListItem}>
                                <label htmlFor="streetName" className={formItemLabel}>Улица</label>
                                <input
                                    id={'streetName'}
                                    name={'streetName'}
                                    type="text"
                                    className={formItemInput}
                                    onChange={formik.handleChange}
                                    value={formik.values.streetName}
                                />
                                {formik.errors.streetName ? <div>{formik.errors.streetName}</div> : null}
                            </li>
                            <li className={addressListItem}>
                                <label htmlFor="houseNumber" className={formItemLabel}>Дом</label>
                                <input
                                    id={'houseNumber'}
                                    name={'houseNumber'}
                                    type={'number'}
                                    min={1}
                                    step={1}
                                    max={1000}
                                    className={formItemInputSmall}
                                    onChange={formik.handleChange}
                                    value={formik.values.houseNumber}
                                />
                            </li>
                            <li className={addressListItem}>
                                <label htmlFor="flatNumber" className={formItemLabel}>Квартира</label>
                                <input
                                    id={'flatNumber'}
                                    name={'flatNumber'}
                                    type={'number'}
                                    min={1}
                                    step={1}
                                    max={1000}
                                    className={formItemInputSmall}
                                    onChange={formik.handleChange}
                                    value={formik.values.flatNumber}
                                />
                            </li>
                            <li className={addressListItem}>
                                <label htmlFor="entranceNumber" className={formItemLabel}>Подъезд</label>
                                <input
                                    id={'entranceNumber'}
                                    name={'entranceNumber'}
                                    type={'number'}
                                    min={1}
                                    step={1}
                                    max={20}
                                    className={formItemInputSmall}
                                    onChange={formik.handleChange}
                                    value={formik.values.entranceNumber}
                                />
                            </li>
                            <li className={addressListItem}>
                                <label htmlFor="floorNumber" className={formItemLabel}>Этаж</label>
                                <input
                                    id={'floorNumber'}
                                    name={'floorNumber'}
                                    type={'number'}
                                    min={1}
                                    step={1}
                                    max={30}
                                    className={formItemInputSmall}
                                    onChange={formik.handleChange}
                                    value={formik.values.floorNumber}
                                />
                            </li>
                            <li>
                                <label htmlFor="intercomPass" className={formItemLabel}>Домофон</label>
                                <input
                                    id={'intercomPass'}
                                    name={'intercomPass'}
                                    type="text"
                                    className={formItemInputSmall}
                                    onChange={formik.handleChange}
                                    value={formik.values.intercomPass}
                                />
                                {formik.errors.intercomPass ? <div>{formik.errors.intercomPass}</div> : null}
                            </li>
                        </ul>

                    </div>
                    <div className={formItem}>
                        <label htmlFor="comments" className={formItemLabel}>Комментарии к заказу</label>
                        <input
                            id={'comments'}
                            name={'comments'}
                            type="text"
                            className={formItemInputComments}
                            onChange={formik.handleChange}
                            value={formik.values.comments}
                        />
                        {formik.errors.comments ? <div>{formik.errors.comments}</div> : null}
                    </div>
                    <div className={typeOfPayment}>
                        <h3 className={paymentTitle}>Способ оплаты</h3>
                        <ul className={paymentList}>
                            <li className={paymentListItem}>
                                <select
                                    id="payment"
                                    name="payment"
                                    placeholder="Выбрать способ оплаты"
                                    value={formik.values.payment}
                                    onChange={formik.handleChange}
                                    className={select}
                                >
                                    <option value="Наличными">Наличными</option>
                                    <option value="Картой">Картой</option>
                                    <option value="Онлайн">Онлайн</option>
                                    <option value="Халва">Халва</option>
                                </select>
                            </li>
                            <li className={promoContainer}>
                                <label htmlFor="promoCode" className={formItemLabel}>Промокод</label>
                                <input
                                    id={'promoCode'}
                                    name={'promoCode'}
                                    type={'text'}
                                    className={formItemInput}
                                    onChange={onHandlePromo}
                                    value={promo}
                                />
                            </li>
                        </ul>
                    </div>
                    <p className={totalContainer}>
                    <span className={totalTitle}>
                        Итого: <span className={totalSum}>{+parseFloat(sum).toFixed(2)}</span>
                    </span>
                    </p>
                    <p className={checkoutContainer}>
                        <button className={checkout} type={'submit'}>Отправить></button>
                    </p>
                </form>
            </div>
        </section>
    )
}
