import spicyChili from '../assets/images/pizza/spicyChili.jpg';
import countryFourSeasons from '../assets/images/pizza/countryFourSeasons.jpg';
import dorblueChicken from '../assets/images/pizza/dorblueChicken.jpg';
import philadelphia from '../assets/images/pizza/philadelphia.jpg';
import fourCheeses from '../assets/images/pizza/fourCheeses.jpg';
import pizzaFox from '../assets/images/pizza/pizzaFox.jpg';
import meat from '../assets/images/pizza/meat.jpg';
import fourSeasons from '../assets/images/pizza/fourSeasons.jpg';
import mushroomChicken from '../assets/images/pizza/mushroomChicken.jpg';
import cheeseburgerPizza from '../assets/images/pizza/cheeseburgerPizza.jpg';
import ukrainian from '../assets/images/pizza/ukrainian.jpg';
import italian from '../assets/images/pizza/italian.jpg';
import pepperoni from '../assets/images/pizza/pepperoni.jpg';
import vegetarian from '../assets/images/pizza/vegetarian.jpg';
import porkTastySauce from '../assets/images/pizza/porkTastySauce.jpg';


const bigWeight = '0,8-0,9 кг';
const smallWeight = '0,6-0,7 кг';

export const pizzaData = [
    {
        name: 'Острая чили',
        bigPrice: 24.50,
        bigWeight,
        smallPrice: 18.90,
        smallWeight,
        description: 'острый перец халапеньо, чесночный соус, сладкий соус чили, пепперони, грудинка (свинина), свежий болгарский перец, сыр моцарелла, перец кайенский',
        photo: spicyChili,
    },
    {
        name: 'Кантри четыре сезона',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 18.90,
        smallWeight,
        description: 'грибной соус, буженина (свинина), грудинка (свинина), маринованные опята, сыр фета, сыр дорблю, сыр моцарелла, базилик',
        photo: countryFourSeasons,
    },
    {
        name: 'Цыпленок дорблю',
        bigPrice: 24.50,
        bigWeight,
        smallPrice: 18.90,
        smallWeight,
        description: 'сырный соус,филе цыпленка, сыр дорблю, сыр моцарелла, базилик',
        photo: dorblueChicken,
    },
    {
        name: 'Филадельфия',
        bigPrice: 24.50,
        bigWeight,
        smallPrice: 18.90,
        smallWeight,
        description: 'пицца-соус, филе лосося слабосоленое, сыр фета, лимон, свежие томаты, сыр моцарелла, базилик',
        photo: philadelphia,
    },
    {
        name: 'Четыре сыра',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'сырный соус, сливочный сыр, сыр фета, сыр дорблю, сыр моцарелла, базилик',
        photo: fourCheeses,
    },
    {
        name: 'Пицца лисицца',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'пицца-соус, ветчина, пепперони, свежие шампиньоны, свежий болгарский перец, свежие томаты, сыр моцарелла, базилик',
        photo: pizzaFox,
    },
    {
        name: 'Мясная',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'пицца-соус, пепперони, ветчина, фарш (говядина), грудинка (свинина), сыр моцарелла, базили',
        photo: meat,
    },
    {
        name: 'Четыре сезона',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'чесночный соус, пепперони, ветчина, свежие шампиньоны, филе цыпленка, сыр моцарелла, базилик',
        photo: fourSeasons,
    },
    {
        name: 'Грибной цыпленок',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'американский соус ранч, филе цыпленка, ветчина, свежие шампиньоны, сыр фета, сладкий горчичный соус, сыр моцарелла, базилик',
        photo: mushroomChicken,
    },
    {
        name: 'Чизбургер пицца',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'сырный соус, грудинка (свинина), фарш (говядина), свежие томаты, соленые огурцы, свежий лук, сыр моцарелла, кунжут, базилик',
        photo: cheeseburgerPizza,
    },
    {
        name: 'Украинская',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'чесночный соус, грудинка (свинина), ветчина, свежий лук, соленые огурцы, сладкий горчичный соус, сыр моцарелла, базилик',
        photo: ukrainian,
    },
    {
        name: 'Итальянская',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'пицца-соус, пепперони, свежие шампиньоны, грудинка (свинина), маслины, сыр моцарелла, базилик',
        photo: italian,
    },
    {
        name: 'Пепперони',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'пицца-соус, пепперони, сыр моцарелла, базилик',
        photo: pepperoni,
    },
    {
        name: 'Вегетарианская',
        bigPrice: 21.90,
        bigWeight,
        smallPrice: 16.90,
        smallWeight,
        description: 'пицца-соус, томаты полусушеные маринованные, свежие шампиньоны, свежий болгарский перец, сыр фета, маслины, сыр моцарелла, базилик',
        photo: vegetarian,
    },
    {
        name: 'Буженина и тейсти-соус',
        bigPrice: 18.90,
        bigWeight,
        smallPrice: 14.90,
        smallWeight,
        description: 'соус гриль, буженина (свинина), соленые огурцы, сыр моцарелла, базилик',
        photo: porkTastySauce,
    },
];
