export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: number;
    items: OrderItem[] = [];
    get subTotal(){
        let sum = 0;
        this.items.map(b => sum += b.quantity * b.price);
        return sum;
    }

    get totalItems(){
        let sum = 0;
        this.items.map(b => sum += b.quantity);
        return sum;
    }
}

export class OrderItem {
    id: number;
    discId: number;
    band: string;
    quantity: number;
    price: number;
    get total(): number {
        return this.price * this.quantity;
    }
}