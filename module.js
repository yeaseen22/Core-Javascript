const KiranaStore = (
    function () {
        let itemCount = 0;
        const godown = []

        return {
            add(name) {
                itemCount++;
                godown.push(name)
                return 'person stocked item: ' + name
            },

            count() {
                return itemCount
            },
            list() {
                return godown.slice()
            }
        }
    }
)()

// console.log(KiranaStore.add('10 Tea Pack '));
// console.log(KiranaStore.add('ginger 10 packs'));
// console.log('list of item', KiranaStore.list());
// console.log('count: ', KiranaStore.count());


// console.log('Direct godown', typeof KiranaStore.godown);
// console.log('Direct godown', typeof KiranaStore.itemCount);

const (AccountBook(){
    const records = []
    let accessLog = []

    function logAccess(action) {
        accessLog.push('' + new Date().slice(0, 10) + ' ' + action)
    }

    function store(doc) {
        logAccess('Stored', doc)
        records.push(doc)
    }

    function retrieve(index) {
        logAccess('retreved index', index)
        return records[index] || "Not Found"
    }

    function recordCount() {
        return recordCount.length
    }

    function getAccessLog() {
        return accessLog.slice()
    }

    return {
        store,
        retrieve,
        count: recordCount,
        log: getAccessLog
    }
}) ()

AccountBook.store("sugar 2kg");
AccountBook.store("Rice 5kg")

// console.log('Retrieve', AccountBook.retrieve(0));
// console.log('Count: ', AccountBook.count);
// console.log('Log Length ', AccountBook.log().length);
// console.log('show me the typeof log access', AccountBook.logAccess());


//#region what is namespace, namespace object

// simulation of module

const SharmaMart = {}
SharmaMart.Inventory = (
    function () {
        function unitPrice(totalPrice, quantity) {
            return totalPrice / quantity
        }

        function totalWight(weightPerItem, quantity) {
            return weightPerItem * quantity
        }

        return {

            // export {unitPrice, totalWight}
            unitPrice, totalWight
        }
    }
)()


// basic dependency injection

SharmaMart.BillingCalculator(
    function (Inv) {
        function buikDiscount(pricePerKg, Kgs) {
            const totalWeight = Inv.totalWeight(pricePerKg, Kgs)

            return (totalWeight * 0.95).toFixed(1), 'after 5%'
        }

        return { buikDiscount }
    }
)(SharmaMart.Inventory)