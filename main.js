class Traveler {
    constructor (name) {
        this.food = 1
        this.name = name
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if(this.food == 0) {
            this.isHealthy = false;
        } else {
            this.food--
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
        //console.log(this.capacity - this.passengers.length)
    }
    join(Traveler) {
        if(this.capacity - this.passengers.length == 0) {
            return "Not enough room!"
        } else {
        this.passengers.push(Traveler)
        //console.log(this.passengers)
        }
    }
    shouldQuarantine() {
        let unhealthy = this.passengers.filter(Traveler => Traveler.isHealthy == false)
        //console.log(unhealthy)
        if(unhealthy.length > 0) {
            return true
        } else { 
            return false
        }
    }
    totalFood() {
        let foodArray = this.passengers.map(Traveler => Traveler.food)
        //console.log(foodArray)
        let total = 0
        for(let i = 0;i < this.passengers.length; i++) {
            total += foodArray[i]
        }
        return total
    }
}


//test code

let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')

console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)