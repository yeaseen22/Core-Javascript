/**
 * @param {Array} arr
 */


function generateID(arr){
    if(! arr.length === 0) return arr[arr.length - 1].id + 1;
    return 1;
}


/**
 * @property toddList
 * @method addItem
 * @method update
 * @method done
 * @method next
 * @method find
 * @method list
 */

class Todo {
    constructor(todolist=[]){
        this.todolist = todolist;
    }

    additem(text){
        const item = {
            text,
            id: generateID(this.todolist),
            created: new Date()
        }
        this.todolist.push(item);
    }

    update(id, text){
        for(let i=0; i < this.todolist.length; i++){
            if (this.todolist[i].id === id){
                this.todolist[i].text = text;
                break;
            }
        }
    }

    done(){
        return this.todolist.shift();
    }

    next() {
        this.todolist[0];
    }

    list(){
        return this.todolist;
    }

    find(term){
        const result = [];
        for(let i =0; i < this.todolist.length; i++){
            const item = this.todolist[i];
            if(item.text.toLowerCase().includes(term.toLowerCase())){
                result.push(item);
            }
        }
        return result;
    }
}



module.exports = Todo;
