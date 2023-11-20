import { MealBuilder } from "../builder/interfaces/meal-builder";
import { MealComposite } from "./meal-composite";


// Composite

export class MealBox implements MealComposite{

private readonly _children: MealComposite[] = [];

    getPrice(): number {
       
        return this._children.reduce((sum, meal)=> sum + meal.getPrice(), 0);
    }

    // três pntos indica que a função pode ter n parâmetros
    add(...meal: MealComposite[]): void{
           meal.forEach((item)=> this._children.push(item));
    }

}