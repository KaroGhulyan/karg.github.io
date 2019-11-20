class GotService {
    constructor() {
        this._ApiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) { //հուշում ենք որ ներսում ինչ որ ասինխոր պահ կա
        const res = await fetch(url); //հենց ֆեչը ստանա պատտասխան նոր մտնի res-ի մեջ

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`)//մշակում ենք սխալը ռես-ից հետո
        }

        const sum = await res.json(); // .json-ը վերադարձնում է պռոմիս ,դրա համար այստեղ նույնպես պետք ա օգտագործենք await

        return sum;
    }
    // getAllCharacters() {
    //     return this.getResource(`${this._ApiBase}/characters?page=5&pageSize=10`);//սերվեռը բոլոր պերսոնաժների տվյալննեչը չի տրամադրում դրա համար մենք փոփոխում ենք մեր URL ?page=5
    // }

    async getAllCharacters() {
        const res = await this.getResource(`${this._ApiBase}/characters?page=5&pageSize=10`);//ներքևի ֆունկցիան
        return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const character = await this.getResource(`${this._ApiBase}/characters/${id}`);//սերվեռը բոլոր պերսոնաժների տվյալննեչը չի տրամադրում դրա համար մենք փոփոխում ենք մեր URL ?page=5
        return this._transformCharacter(character);
    }
    async getAllHouses() {
        const houses = await this.getResource(`${this._ApiBase}/houses`);
        return this._transformHouse(houses);

    }
    async getHouse(id) {
        const home = await this.getResource(`${this._ApiBase}/houses/${id}`);//սերվեռը բոլոր պերսոնաժների տվյալննեչը չի տրամադրում դրա համար մենք փոփոխում ենք մեր URL ?page=5
        return this._transformHouse(home);

    }
    async getAllBooks() {
        // await return this.getResource(`${this._ApiBase}//books`);
    }
    async getBook(id) {
        // await return this.getResource(`${this._ApiBase}//books/${id}`);//սերվեռը բոլոր պերսոնաժների տվյալննեչը չի տրամադրում դրա համար մենք փոփոխում ենք մեր URL ?page=5
    }
    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }
    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
        }
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            relased: book.relased,


        }
    }

}
const got = new GotService();
got.getAllCharacters()
    .then(res => res.forEach(element => {
        console.log(element.name);
    }));
got.getCharacter(130)
    .then(res => console.log(res));

got.getAllHouses()
    .then(res => console.log(res));

export default GotService;