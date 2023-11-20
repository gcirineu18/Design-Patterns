
import { MainDishBuilder } from "./builder/classes/main-dish-builder";
import { MealBox } from "./Composite/meal-box";

const mainDish = new MainDishBuilder();

mainDish.makeMeal().makeBeverage().makeDessert();



console.log(mainDish.getMeal());
// Porque getMeal() é do tipo MealBox
// é possível retornar getPrice()
console.log(mainDish.getMeal().getPrice());

mainDish.reset();
const meal2 = mainDish.makeBeverage().getMeal();
console.log(meal2);
console.log(meal2.getPrice());