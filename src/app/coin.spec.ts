import { Coin, merge } from './coin';

describe('Testing Coin', () => {
    let coins1 : Coin[];
    let coins2 : Coin[];

    beforeEach(() => {
        coins1 = [ 
            new Coin(1, '', 1, 10), 
            new Coin(2, '', 2, 5) 
        ];
        coins2 = [ 
            new Coin(3, '', 3, 20),
            new Coin(2, '', 2, 15) 
        ];
    });

    it('should be copied', () => {
        // given
        let original = new Coin(3, '', 3, 20);

        // when
        let copied = original.copy();

        // then
        expect(copied).toEqual(new Coin(3, '', 3, 20));
    });

    it('should get copy with count = 1', () => {
        // given
        let original = new Coin(3, '', 3, 20);

        // when
        let one = original.one();

        // then
        expect(one).toEqual(new Coin(3, '', 3, 1));
    });

    it('list of Coin should be merged', () => {
        // when
        let result: Coin[] = merge(coins1, coins2);

        // Then
        expect(result)
            .toEqual([
                new Coin(1, '', 1, 10),
                new Coin(2, '', 2, 20),
                new Coin(3, '', 3, 20
            )]);
    });

    it('merge should not change original lists', () => {
        // when
        let result: Coin[] = merge(coins1, coins2);

        // Then
        expect(coins1)
            .toEqual([
                new Coin(1, '', 1, 10),
                new Coin(2, '', 2, 5)
            ]);
        expect(coins2)
            .toEqual([
                new Coin(3, '', 3, 20),
                new Coin(2, '', 2, 15)
            ]);
    });
});