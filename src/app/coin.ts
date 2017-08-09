export class Coin {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly amount: number,
        public count: number
    ) {
    }

    get totalAmount(): number {
        return this.amount * this.count;
    }
}

export function push(pocket: Coin[], coinId:number): Coin[] {
    let coin = pocket.find(c => c.id == coinId);
    coin.count++;
    return pocket;
}

export function merge(pocket: Coin[], coins: Coin[]): Coin[] {
    for(let c of coins) {
        let pocketCoin = pocket.find(p => p.id == c.id);
        pocketCoin.count += c.count;
    }
    return pocket;
}