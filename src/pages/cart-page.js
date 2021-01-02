import React from "react";
import {Footer} from "../components/footer/Footer";
import {CartSection} from '../components/CartSection/CartSection';
import {ClientInfoSection} from "../components/ClientInfoSection/ClientInfoSection";
import {CartHeader} from "../components/cartHeader/CartHeader";

export const CartPage = () => {
    return (
        <>
            <CartHeader/>
            <CartSection/>
            <ClientInfoSection/>
            <Footer/>
        </>
    )
}
