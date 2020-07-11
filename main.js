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
            this.isHealthy = true
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
            console.log("Not enough room!")
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