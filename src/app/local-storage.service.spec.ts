import {LocalStorageService} from './local-storage.service';

describe('Testing of LocalStorageService', () => {
    let localStorageService: LocalStorageService;

    beforeEach(() => {
        localStorageService = new LocalStorageService();
    });

    it('LocalStorageService should get default data if it is clean', () => {
        // given
        localStorageService.clear();

        // when
        let items = localStorageService.get('items', [1,2,3,4,5]);

        // then
        expect(items).toEqual([1,2,3,4,5]);
    });

    it('LocalStorageService should get default string if it is clean', () => {
        // given
        localStorageService.clear();

        // when
        let items = localStorageService.get('text', 'just text');

        // then
        expect(items).toEqual('just text');
    });

    it('LocalStorageService should update data if it is clean', () => {
        // given
        localStorageService.clear();
        let text = localStorageService.set('text', 'just text');
        expect(text).toEqual('just text');

        // when
        localStorageService.set('text', 12345);
        let updated = localStorageService.get('text');

        // then
        expect(updated).toEqual(12345);
    });

    it('LocalStorageService should keep structures', () => {
        // given
        class Item {
            one: number;
            two: boolean;
            three: string;
        }

        let item = new Item();
        item.one = 1;
        item.two = true;
        item.three = '3';

        localStorageService.clear();
        localStorageService.set('x-item', item);
        
        // when
        let saved: Item = localStorageService.get('x-item');

        // then
        expect(saved.one).toEqual(1);
        expect(saved.two).toEqual(true);
        expect(saved.three).toEqual('3');
    });

});