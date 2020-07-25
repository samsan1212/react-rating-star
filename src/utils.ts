import { ColourTheme } from "..";

export function RangeArray(len: number) {
    return Array.apply(null, new Array(len)).map((n, index) => index);
}

export function toColourTheme(val: Partial<ColourTheme>): ColourTheme {
    return {
        stroke: val.stroke ?? "#FF9A01",
        mask: val.mask ?? "#FFCA28",
        rear: val.rear ?? "#EBEBEB"
    }
}

export function toOffsets(rating: number, scorePerStar: number) {
    const starArray = [];
    const numOfFullStar = Math.floor(rating / scorePerStar);
    const remainder = rating % scorePerStar;
    for (var i = 0; i < numOfFullStar; i++) {
        starArray.push(1);
    }
    starArray.push(remainder);
    return starArray;
}