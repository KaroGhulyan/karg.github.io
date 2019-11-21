class GotService {
    async getResource(url) { //հուշում ենք որ ներսում ինչ որ ասինխոր պահ կա
        const res = await fetch(url); //հենց ֆեչը ստանա պատտասխան նոր մտնի res-ի մեջ

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`)//մշակում ենք սխալը ռես-ից հետո
        }

        const sum = await res.json(); // .json-ը վերադարձնում է պռոմիս ,դրա համար այստեղ նույնպես պետք ա օգտագործենք await

        return sum;
    }
    getAllCharacters() {
        return this.getResource("https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10");//սերվեռը բոլոր պերսոնաժների տվյալննեչը չի տրամադրում դրա համար մենք փոփոխում ենք մեր URL ?page=5
    }
}
const got = new GotService();
got.getAllCharacters()
    .then(res => console.log(res));


// getResource("https://jsonplaceholder.typicode.com/posts/1000")//եթե վերջի մեկը փոխենք անկապ թվի կբերի սխա; օր՝ 1000
//     .then(res => console.log('Succses', res))
//     .catch(error => console.error(error));


