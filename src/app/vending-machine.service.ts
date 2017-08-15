import { Injectable } from '@angular/core';
import { Coin, merge, copy } from './coin';
import { Product } from './product';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class VendingMachineService {
    
    userPocket: Coin[] = [];

    machinePocket: Coin[] = [];

    products: Product[] = [];

    get pendingAmount(): number {
        return this.pendingAmountValue;
    }

    constructor(private localStorageService: LocalStorageService) {
        this.userPocket = this.localStorageService.get('user-pocket', [
            new Coin(1, '', 1, 10),
            new Coin(2, '', 2, 30),
            new Coin(5, '', 5, 20),
            new Coin(10, '', 10, 15),
        ]).map(c => copy(c));
        this.machinePocket = this.localStorageService.get('machine-pocket', [
            new Coin(1, '', 1, 100),
            new Coin(2, '', 2, 100),
            new Coin(5, '', 5, 100),
            new Coin(10, '', 10, 100),
        ]).map(c => copy(c));
        this.products = this.localStorageService.get('products', [
            new Product(13, 'Чай', 13, 10),
            new Product(18, 'Кофе', 18, 20),
            new Product(21, 'Кофе с молоком', 21, 20),
            new Product(35, 'Сок', 35, 15),
        ]).map(p => new Product(p.id, p.name, p.price, p.count));
        this.pendingAmountValue = this.localStorageService.get('pending-amount-value', 0);
    }

    pushCoin(coin: Coin): void {
        let userCoin = this.userPocket.find(p => p.id == coin.id);
        if (userCoin.count > 0) {
            userCoin.count--;
            this.pendingAmountValue += coin.amount;
            this.machinePocket = merge(this.machinePocket, [ coin.one() ]);
            this.localStorageService.set('user-pocket', this.userPocket);
            this.localStorageService.set('machine-pocket', this.machinePocket);
            this.localStorageService.set('pending-amount-value', this.pendingAmountValue);
        }
    }

    getProduct(id: number): boolean {
        var product = this.products.find(p => p.id == id);
        if (this.pendingAmount < product.price || product.count < 1) {
            return false;
        }
        product.count--;
        this.pendingAmountValue -= product.price;

        this.localStorageService.set('products', this.products);
        this.localStorageService.set('pending-amount-value', this.pendingAmountValue);

        return true;
    }

    getChange(): boolean {
        var changeAmount = this.pendingAmountValue;
        var change: Coin[] = [];

        var temp = JSON.stringify(this.machinePocket);

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
        if (changeAmount == 0) {
            this.userPocket = merge(this.userPocket, change);
            this.pendingAmountValue = changeAmount;

            this.localStorageService.set('user-pocket', this.userPocket);
            this.localStorageService.set('machine-pocket', this.machinePocket);
            this.localStorageService.set('pending-amount-value', this.pendingAmountValue);
            return true;
        } else {
            this.machinePocket = JSON.parse(temp).map(c => copy(c));
            return false;
        }
    }

    private pendingAmountValue: number;
}