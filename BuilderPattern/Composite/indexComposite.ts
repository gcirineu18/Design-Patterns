

import { MealBox } from "../Composite/meal-box";
import { Rice, Beans, Meat, Beverage, Dessert } from "../Composite/meals"

// Implementando o Design Pattern Composite

const rice = new Rice('Arroz', 5 );
const beans = new Beans('Feijão', 8 );
const meat = new Meat('Carne', 25 );
const beve = new Beverage('Coca', 3 );
const dessert = new Dessert('Pudim', 13 );

const mealBox = new MealBox();

mealBox.add(rice, beans, meat, beve, dessert);

console.log(mealBox );
console.log('Preço total:' + mealBox.getPrice());