
// region player class
class Player {
    constructor(name,birthday,monthlySalary,noOfMonths){
        this.name = name;
        this.birthday = birthday;
        this.monthlySalary = monthlySalary;
        this.noOfMonths = noOfMonths;
    }

    calculate_Age(){
        const diff_ms = Date.now() - new Date(this.birthday).getTime();
        const age_dt = new Date(diff_ms)


        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    getSalary(){
        return (this.monthlySalary * this.noOfMonths).toLocaleString()
    }
}


const sakib = new Player('Sakib', `1987-03-24`, 120000, 12);
console.log(sakib.calculate_Age())
console.log(sakib.getSalary());
