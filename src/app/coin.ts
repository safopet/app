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

    one() : Coin {
        return new Coin(this.id, this.title, this.amount, 1);
    }
}

export function copy(c: Coin) : Coin {
    return new Coin(c.id, c.title, c.amount, c.count);
}


export function merge(pocket: Coin[], coins: Coin[]): Coin[] {
    let result: Coin[] = pocket.map(c => copy(c));

    for(let c of coins) {        
        let r = result.find(p => p.id == c.id);
        if (!r) {
            result.push(copy(c));
        } 
        else {
            r.count += c.count;
        }
    }
    return result;
}