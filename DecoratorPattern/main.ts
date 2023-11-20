import { ProductDecoratorCustom } from "./product/product-custom-decorator";
import { ProductDecorator } from "./product/product-decorator";
import { ProductDecoratorStamp } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";


const tShirt = new TShirt('camisa', 90.00);

const tShirt_stamp = new ProductDecoratorStamp(tShirt);

const customTshirt = new ProductDecoratorCustom(tShirt_stamp);

console.log(tShirt.getPrice());
console.log(tShirt_stamp.getName());
console.log(customTshirt.getName(), ": ", customTshirt.getPrice());
