
// Component
export abstract class ProductComponent{

    abstract getPrice(): number;

    add(_product: ProductComponent):void{ }

    remove(_product: ProductComponent):void{ }
}

// Leaf
export class ProductLeaf extends ProductComponent{

    constructor(public name:string, public price: number){
        super();
    }


    getPrice():number{
        return this.price;
    }
}


// Composite
export class ProductComposite extends ProductComponent{
    
    private children: ProductComponent[] = [];

    add(...products: ProductComponent[]):void{ 
       

        for( let product of products){
            this.children.push(product);
        }

        /**
         * poderia se fazer assim também:
         *  products.forEach((product) => this.children.push(product))
         */

        
    }

    remove(product: ProductComponent):void{

        const productIndex = this.children.indexOf(product);
        this.children.push(product);

        if(productIndex !== -1){
            this.children.splice(productIndex, 1);
        }

     }

     getPrice(): number {
         return this.children.reduce((sum,child) => sum +child.getPrice(),0)
     }

}

// Client

/**
 * é possível aninhar Composites de forma tal que poderia
 * colocar uma caixa dentro de uma caixa e assim por diante;
 */
const camiseta = new ProductLeaf('Camiseta', 40);

const bike = new ProductLeaf('Bicivleta', 300);

const notebook = new ProductLeaf('Notebook', 5879);

const productbox1 = new ProductComposite();

productbox1.add(camiseta, bike, notebook);

console.log(productbox1);
console.log(productbox1.getPrice(), ' Reais');

const tablet = new ProductLeaf('Tablet', 215);

const kindle = new ProductLeaf('Kindle', 537)


// ---------------- Aninhando Caixas -------------------
const productbox2 = new ProductComposite();

productbox2.add(tablet, kindle);

productbox1.add(productbox2);

console.log(productbox1);

console.log(productbox1.getPrice(), ' Reais');