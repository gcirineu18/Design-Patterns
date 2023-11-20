import { ShoppingOrderState } from "./shopping-order-state";


export class ShoppingOrder {

    // this é o objeto do pedido que irá para dentro de todos os estados
    private state: ShoppingOrderState = new OrderPending(this);
}