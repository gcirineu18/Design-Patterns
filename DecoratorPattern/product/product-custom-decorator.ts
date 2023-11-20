
import { ProductDecorator } from "./product-decorator"

export class ProductDecoratorCustom extends ProductDecorator{


    getName(): string {
        return this.product.getName() + " Personalizada";
    }
    getPrice():number{
      return  this.product.getPrice()+67.50;
    }

}