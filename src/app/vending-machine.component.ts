import { Component, OnInit } from '@angular/core';
import { VendingMachineService } from './vending-machine.service';
import { Product } from './product';
import { Coin } from './coin';

@Component({
	selector: 'vending-machine',
	templateUrl: 'vending-machine.component.html',
	styleUrls: ['vending-machine.component.css']
})

export class VendingMachineComponent implements OnInit {

	get products(): Product[] {
		return this.vendingMachineService.products;
	} 	
	
	get userPocket(): Coin[] {
		return this.vendingMachineService.userPocket.sort((a,b) => a.amount - b.amount);
	} 	

	get userAmount(): number {
		var x = 0;
		for (let c of this.vendingMachineService.userPocket){
			x += c.totalAmount;
		}
		return x;
	}
	
	get machinePocket(): Coin[] {
		return this.vendingMachineService.machinePocket.sort((a,b) => a.amount - b.amount);
	} 

	get machineAmount(): number {
		var x = 0;
		for (let c of this.vendingMachineService.machinePocket){
			x += c.totalAmount;
		}
		return x;
	}

	get pendingAmount(): number {
		return this.vendingMachineService.pendingAmount;
	} 

	message: string;

	constructor(private vendingMachineService: VendingMachineService) {
		this.message = this.defaultMessage;
	}

	ngOnInit() { }

	push(coin: Coin) {
		this.vendingMachineService.pushCoin(coin);
		this.message = this.defaultMessage;
	}

	change(): void {
		this.vendingMachineService.getChange();
		this.message = this.defaultMessage;
	}

	buy(product: Product) {
		if (!this.vendingMachineService.getProduct(product.id)) {
			this.message = 'Недостаточно денег';
		}
		else {
			this.message = 'Спасибо!';
		}
	}

	private defaultMessage: string = 'Добавте монет или выберите товар';
}