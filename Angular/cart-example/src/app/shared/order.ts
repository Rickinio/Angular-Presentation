export class Order {
    id: number = 1;
    date: Date = new Date();
    items: OrderItem[] = [];
    get totalItems(){
        let sum = 0;
        this.items.map(i => sum = i.quantity + sum);
        return sum;
    }
    get totalAmount(){
        let sum = 0;
        this.items.map(i => sum = sum + i.quantity * i.price);
        return sum;
    }
}

export class OrderItem {
    discId: number;
    band: string;
    quantity: number;
    price: number
}