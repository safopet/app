import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    clear():void { localStorage.clear(); }

    get(key: string, defaultValue?: any): any {
        let item = localStorage.getItem(key);
        if (item === null) {
            return this.set(key, defaultValue);
        }
        return JSON.parse(item);
    }

    set (key: string, value: any): any {
        localStorage.setItem(key, JSON.stringify(value));
        return value;
    }
}