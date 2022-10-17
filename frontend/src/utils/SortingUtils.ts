import {Currency} from "../types/Currency";

export function shuffle(array: Currency[]) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function sortCurrencies(sort: string, currencies: Currency[]): Currency[] {
    switch (sort) {
        case 'name':
        case 'code':
            return [...currencies].sort((a, b) => a[sort].localeCompare(b[sort]))
        case 'random':
            return shuffle([...currencies]);
        default:
            return currencies;
    }
}
