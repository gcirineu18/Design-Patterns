
import { MealComposite } from "./meal-composite";


export abstract class AbstractMeal implements MealComposite{
    constructor(private name: string, private price: number){}

    getPrice(): number {
        return this.price;
    }
}