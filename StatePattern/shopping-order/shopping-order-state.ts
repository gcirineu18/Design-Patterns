
export interface ShoppingOrderState{

    getName(): string;
    approvedPayment(): void;
    rejectPayment(): void;
    waitPayment():void;
    shipOrder():void;
}