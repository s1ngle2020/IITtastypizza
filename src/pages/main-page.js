import React from "react";
import {Navigation} from "../components/navigation/Navigation";
import {MainPhotos} from "../components/mainPhotos/MainPhotos";
import {Main} from "../components/main/Main";
import {Footer} from "../components/footer/Footer";

export const MainPage = () => {
    return (
        <>
            <Navigation/>
            <MainPhotos/>
            <Main/>
            <Footer/>
        </>
    )
}
