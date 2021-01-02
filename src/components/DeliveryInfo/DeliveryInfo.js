import React from "react";

import styles from './DeliveryInfo.module.css';

import {Footer} from "../footer/Footer";

import visaLogoNew from '../../assets/images/payment/visaLogoNew.png';
import verifiedByVisa from '../../assets/images/payment/verifiedByVisa.png';
import mcardLogoNew from '../../assets/images/payment/mcardLogoNew.png';
import masterCardSecureCode from '../../assets/images/payment/masterCardSecureCode.png';
import maestroLogoNew from '../../assets/images/payment/maestroLogoNew.png';
import belkartLogo from '../../assets/images/payment/belkartLogo.png';
import bepaidLogo from '../../assets/images/payment/bepaidLogo.png';
import kartaPokupokLogo from '../../assets/images/payment/kartaPokupokLogo.png';
import halvaLogo from '../../assets/images/payment/halvaLogo.png';
import funLogo from '../../assets/images/payment/funLogo.jpg';
import magnitLogo from '../../assets/images/payment/magnitLogo.png';

export const DeliveryInfo = () => {
    const {
        footerSlogan, sloganTiming, sloganValue, sloganTerms, notes,
        paidList, paidListItem,
        details
    } = styles;
    return (
        <>
        <div className={footerSlogan}>
                <div className={sloganTiming}>
                    <span><strong className={sloganValue}>45минут</strong></span>
                    <br/>
                    <span>или пицца бесплатно</span>
                </div>
                <div className={sloganTerms}>
                    если мы не доставим заказ за 45 минут вы получите
                    одну пиццу из заказа бесплатно
                </div>
            </div>
            <div className={notes}>
                <p>Минимальная сумма заказа для доставки с понедельника по четверг с 12:00 до 16:00 составляет 9,90
                    рублей.&nbsp;В остальное время, предпраздничные и праздничные дни&nbsp;– 13,90 рублей</p>
            </div>
            <div>
                <details className={details}>
                    <summary>Карты, которые мы принимаем</summary>
                <ul className={paidList}>
                    <li className={paidListItem}><img src={visaLogoNew} alt="visa logo"/></li>
                    <li className={paidListItem}><img src={verifiedByVisa} alt="verified by visa logo"/></li>
                    <li className={paidListItem}><img src={mcardLogoNew} alt="mcard new logo"/></li>
                    <li className={paidListItem}><img src={masterCardSecureCode} alt="master card secure code logo"/>
                    </li>
                    <li className={paidListItem}><img src={maestroLogoNew} alt="maestro new logo"/></li>
                    <li className={paidListItem}><img src={belkartLogo} alt="belkart logo"/></li>
                    <li className={paidListItem}><img src={bepaidLogo} alt="bepaid logo"/></li>
                    <li className={paidListItem}><img src={kartaPokupokLogo} alt="karta pokupok logo"/></li>
                    <li className={paidListItem}><img src={halvaLogo} alt="halva logo"/></li>
                    <li className={paidListItem}><img src={funLogo} alt="fun logo"/></li>
                    <li className={paidListItem}><img src={magnitLogo} alt="magnit logo"/></li>
                </ul>
                </details>
            </div>
            <Footer />
        </>
    )
}