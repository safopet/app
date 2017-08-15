import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
import { VendingMachineService } from './vending-machine.service';
import { Coin } from './coin';

class FakeLocalStorageService {
    clear():void { 
        this.map.clear(); 
    }

    get(key: string, defaultValue?: any): any {
        if (!this.map.has(key)) {
            return this.set(key, defaultValue);
        } else {
            return JSON.parse(this.map[key]);
        }
    }

    set (key: string, value: any): any {
        this.map.set(key, JSON.stringify(value));
        return value;
    }

    private map: Map<string, string> = new Map<string, string>();
}

function getTotal(coins: Coin[]) {
    var x = 0;
    for (let c of coins){
        x += c.totalAmount;
    }
    return x;
}

describe('VendingMachineService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            { provide: LocalStorageService, useClass: FakeLocalStorageService},
            VendingMachineService
        ]
    }));

    it('should be initialized properly', () => {
        const service : VendingMachineService = TestBed.get(VendingMachineService);
        
        expect(service.userPocket.length).toBe(4);
        expect(getTotal(service.userPocket)).toBe(320);
        
        expect(service.machinePocket.length).toBe(4);
        expect(getTotal(service.machinePocket)).toBe(1800);
        
        expect(service.products.length).toBe(4);
        expect(service.pendingAmount).toBe(0);
    });

    it(`should be get user's money`, () => {
        // given
        const service : VendingMachineService = TestBed.get(VendingMachineService);

        // when
        service.pushCoin(service.userPocket[1]); // (2)
        service.pushCoin(service.userPocket[3]); // (10)

        // Then
        expect(service.pendingAmount).toBe(12);
        expect(getTotal(service.userPocket)).toBe(308);
        expect(getTotal(service.machinePocket)).toBe(1812);
    });

    it(`should take user's money only if he has it`, () => {
        // given
        const service : VendingMachineService = TestBed.get(VendingMachineService);

        // when
        for(let i = 0; i < 1000; i++) {
            service.pushCoin(service.userPocket[0]); // (1)
        }

        // Then
        expect(service.pendingAmount).toBe(10);
        expect(getTotal(service.userPocket)).toBe(310);
        expect(getTotal(service.machinePocket)).toBe(1810);
    });
    
    it(`should return change`, () => {
        // given
        const service : VendingMachineService = TestBed.get(VendingMachineService);
        service.userPocket[0].count = 0;
        service.userPocket[1].count = 0;
        service.userPocket[2].count = 0;
        service.userPocket[3].count = 0;

        service.machinePocket[0].count = 10; // = 10
        service.machinePocket[1].count = 10; // = 20
        service.machinePocket[2].count = 10; // = 50
        service.machinePocket[3].count = 1;  // = 10

        (service as any).pendingAmountValue = 28;

        // when
        let result = service.getChange();

        // Then
        expect(result).toBe(true);

        expect(service.pendingAmount).toBe(0);
        expect(getTotal(service.userPocket)).toBe(28);
        expect(getTotal(service.machinePocket)).toBe(90 - 28);

        expect(service.userPocket[0].count).toBe(1); // (1)
        expect(service.userPocket[1].count).toBe(1); // (2)
        expect(service.userPocket[2].count).toBe(3); // (5)
        expect(service.userPocket[3].count).toBe(1); // (10)
    });

    it(`should not return change if no money for cahnge`, () => {
        // given
        const service : VendingMachineService = TestBed.get(VendingMachineService);
        service.userPocket[0].count = 0;
        service.userPocket[1].count = 0;
        service.userPocket[2].count = 0;
        service.userPocket[3].count = 0;

        service.machinePocket[0].count = 1; // = 1
        service.machinePocket[1].count = 1; // = 2
        service.machinePocket[2].count = 1; // = 5
        service.machinePocket[3].count = 1;  // = 10


        (service as any).pendingAmountValue = 28;

        // when
        let result = service.getChange();

        // Then
        expect(result).toBe(false);
        expect(service.pendingAmount).toBe(28);
        expect(getTotal(service.userPocket)).toBe(0);
        expect(getTotal(service.machinePocket)).toBe(18);
    });

    it(`should sell product`, () => {
        // given
        const service : VendingMachineService = TestBed.get(VendingMachineService);
        (service as any).pendingAmountValue = 28;

        // when
        let result = service.getProduct(21);

        // Then
        expect(result).toBe(true);
        expect(service.pendingAmount).toBe(7);        
        expect(service.products[2].count).toBe(19);
    });

    it(`should not sell product if not enough money`, () => {
        // given
        const service : VendingMachineService = TestBed.get(VendingMachineService);
        (service as any).pendingAmountValue = 28;

        // when
        let result = service.getProduct(35);

        // Then
        expect(result).toBe(false);
        expect(service.pendingAmount).toBe(28);        
        expect(service.products[3].count).toBe(15);
    });

    it(`should not sell product if not have any products`, () => {
        // given
        const service : VendingMachineService = TestBed.get(VendingMachineService);
        (service as any).pendingAmountValue = 28;
        service.products[1].count = 0;

        // when
        let result = service.getProduct(18);

        // Then
        expect(result).toBe(false);
        expect(service.pendingAmount).toBe(28);        
        expect(service.products[1].count).toBe(0);
    });
});