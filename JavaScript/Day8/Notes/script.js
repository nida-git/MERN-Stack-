// this keyword

const student = {
    name: "Alex",
    eng: 95,
    math: 93, 
    phy: 97,
    getAvg(){
        let avg = ( this.eng + this.math + this.phy )/ 3
        console.log(`${this.name} got avarage marks: ${avg}`);
    }
}
student.getAvg()

// Bank account 

const account = {
holder: "Sarah",
balance: 5000,
deposit(amount) {
this.balance += amount;
console.log(`${this.holder} deposited $${amount}. New balance: $${this.balance}`);
}
};

account.deposit(5000)

const cart = {
    items: ["Apple", "Banana"],
    total: 2,
    additem(item){
        this.items.push(item)
        this.total = this.items.length
        console.log(`Added items are ${item} total is ${this.total}`);

    }
}

cart.additem("cherry")

// Try and catch

