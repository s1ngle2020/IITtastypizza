import React from "react";

import {PizzaSection} from "../PizzaSection/PizzaSection";
import {SnacksSection} from '../SnacksSection/SnacksSection';
import {SauceSection} from "../SauceSection/SauceSection";
import {BeverageSection} from "../BeveragesSection/BeverageSection";

export const Main = () => {
    return (
        <main>
            <PizzaSection/>
            <SnacksSection/>
            <SauceSection/>
            <BeverageSection/>
        </main>
    )
}
