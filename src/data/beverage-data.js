import cocaCola1L from '../assets/images/beverages/cocaCola1L.jpg';
import cocaColaHalfL from '../assets/images/beverages/cocaColaHalfL.jpg';
import cocaColaVanilla1L from '../assets/images/beverages/cocaColaVanilla1L.jpg';
import cocaColaVanillaHalfL from '../assets/images/beverages/cocaColaVanillaHalfL.jpg';
import cocaColaZeroHalfL from '../assets/images/beverages/cocaColaZeroHalfL.jpg';
import fantaOrage1L from '../assets/images/beverages/fantaOrage1L.jpg';
import fantaOrangeHalfL from '../assets/images/beverages/fantaOrangeHalfL.jpg';
import spriteHalfL from '../assets/images/beverages/spriteHalfL.jpg';
import mineralWaterBorjomiThreeQuarterL from '../assets/images/beverages/mineralWaterBorjomiThreeQuaterL.jpg';
import burnQuaterL from '../assets/images/beverages/burnQuaterL.jpg';
import burnAppleKiwi from '../assets/images/beverages/burnAppleKiwi.jpg';

const liter = '1 л';
const halfLiter = '0,5 л';
const threeQuartersLiter = '0,75 л';
const quarterLiter = '0,25 л';

export const beverageData = [
    {
        name: 'Coca-Cola',
        volume: liter,
        price: 2.80,
        photo: cocaCola1L,
    },
    {
        name: 'Coca-Cola',
        volume: halfLiter,
        price: 2.10,
        photo: cocaColaHalfL,
    },
    {
        name: 'Coca-Cola Vanilla',
        volume: liter,
        price: 2.80,
        photo: cocaColaVanilla1L,
    },
    {
        name: 'Coca-Cola Vanilla',
        volume: halfLiter,
        price: 2.10,
        photo: cocaColaVanillaHalfL,
    },
    {
        name: 'Coca-Cola Zero',
        volume: halfLiter,
        price: 2.10,
        photo: cocaColaZeroHalfL,
    },
    {
        name: 'Fanta Апельсин',
        volume: liter,
        price: 2.80,
        photo: fantaOrage1L,
    },
    {
        name: 'Fanta Апельсин',
        volume: halfLiter,
        price: 2.10,
        photo: fantaOrangeHalfL,
    },
    {
        name: 'Sprite',
        volume: halfLiter,
        price: 2.10,
        photo: spriteHalfL,
    },
    {
        name: 'Вода минеральная «Боржоми»',
        volume: threeQuartersLiter,
        price: 2.90,
        photo: mineralWaterBorjomiThreeQuarterL,
    },
    {
        name: 'Burn',
        volume: quarterLiter,
        price: 3.20,
        photo: burnQuaterL,
    },
    {
        name: 'Burn Яблоко Киви',
        volume: quarterLiter,
        price: 3.20,
        photo: burnAppleKiwi,
    },
]
