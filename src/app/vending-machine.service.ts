import { Injectable } from '@angular/core';
import { Coin, push, merge } from './coin';
import { Product } from './product';

@Injectable()
export class VendingMachineService {
    
    userPocket: Coin[] = [
        new Coin(1, '', 1, 10),
        new Coin(2, '', 2, 30),
        new Coin(5, '', 5, 20),
        new Coin(10, '', 10, 15),
    ];

    machinePocket: Coin[] = [
        new Coin(1, '', 1, 100),
        new Coin(2, '', 2, 100),
        new Coin(5, '', 5, 100),
        new Coin(10, '', 10, 100),
    ];

    products: Product[] = [
        new Product(13, 'Чай', 13, 10),
        new Product(18, 'Кофе', 18, 20),
        new Product(21, 'Кофе с молоком', 21, 20),
        new Product(35, 'Сок', 35, 15),
    ];

    get pendingAmount(): number {
        return this.pendingAmountValue;
    }

    pushCoin(coin: Coin): void {
        this.userPocket.find(p => p.id == coin.id).count--;
        this.pendingAmountValue += coin.amount;
        push(this.machinePocket, coin.id);
    }

    getProduct(id: number): boolean {
        var product = this.products.find(p => p.id == id);
        if (this.pendingAmount < product.price || product.count < 1) {
            return false;
        }
        product.count--;
        this.pendingAmountValue -= product.price;

        return true;
    }

    getChange(): boolean {
        var changeAmount = this.pendingAmountValue;
        var change: Coin[] = [];
        for(let coin of this.machinePocket.sort((a,b) => b.amount - a.amount)) {
            let x = Math.min(coin.count,  Math.trunc(changeAmount / coin.amount));
            if (x > 0) {                
                let changeCoin = new Coin(coin.id, coin.title, coin.amount, x);
                change.push(changeCoin);
                coin.count -= x;
                changeAmount -=  changeCoin.totalAmount;
                if (changeAmount == 0) {
                    break;
                }
            }
        }
        merge(this.userPocket, change);
        this.pendingAmountValue = changeAmount;

        return this.pendingAmountValue == 0;
    }

    private pendingAmountValue: number = 0;
}