import { MealBuilder } from "../interfaces/meal-builder";

import { MealBox } from "../../Composite/meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "../../Composite/meals";

export class MainDishBuilder implements MealBuilder  {


    private _meal: MealBox = new MealBox();

reset(): this{
    this._meal = new MealBox();
    return this;
}

    makeMeal(): this {
        const rice = new Rice('Arroz', 5 );
        const beans = new Beans('Feijão', 8 );
        const meat = new Meat('Carne', 25 );
                
        this._meal.add(rice, beans, meat);
        return this;
    }

    makeBeverage(): this {
        const beve = new Beverage('Coca', 3 );
        this._meal.add(beve);
        return this;
    }
    makeDessert(): this {
        const dessert = new Dessert('Pudim', 13 );
        this._meal.add(dessert);
        return this;
    }

    getMeal(): MealBox{
        return this._meal;
    }
   

}