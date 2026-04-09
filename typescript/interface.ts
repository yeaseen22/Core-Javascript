// anotation and inferance
let channelName = 'chai aur code'; // inferancing
let chaiFlavor: string = 'masal chai'; // anotation [ ]
chaiFlavor = 'Ginget tea'

// union and any
// union type
let subs: number | string = '1M';
let apiReqestStatus: 'pending' | 'error' | 'success' = 'pending';
apiReqestStatus = 'success';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';
airlineSeat = 'middle';

const orders = ['13', '13', '40', '28'];
let currentOrder; //its any type
for (let order in orders) {
    if (order === '28') {
        currentOrder = order;
        break
    }
}

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChat(order: ChaiOrder) {
    console.log(order);

}

function serveChai(order: ChaiOrder) {
    console.log(order);

}

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100
    milk = 50;
}

// type CupSize = 'small' | 'large'
interface CupSize { size: 'small' | 'large' }


class Chat implements CupSize {
    size: "small" | "large" = 'large'
}


// type Response = { ok: true } | { ok: false }
// class myRes implements Response {
//     ok: boolean = true;
// }

type TeaType = 'masala' | 'ginger' | 'lemon';

function orderChai(t: TeaType) {
    console.log(t)
}

type BaseChai = { teaLevels: number }
type Extra = { masala: number }

type MasalahChai = BaseChai & Extra;

const cup: MasalahChai = {
    teaLevels: 2,
    masala: 1
}

type User = {
    usnername: string;
    bio: string;
}

const u1: User = { username: 'hitesh' }
const u2: User = { username: 'hitesh', bio: 'easyshopingmall' }

type Config = {
    readonly appName: string;
    version: number;
}
const cfg: Config = {
    appName: 'easyshopping',
    version: 1
}

