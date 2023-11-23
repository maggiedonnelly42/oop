class Vehicle {
    constructor(make, model, regYear) {
        this.make = make;
        this.model = model;
        this.regYear = regYear
    }

 

    getAge() {
        //Getter
        var regYear = 11
        var oldAge = this.oldAge
        return 2021 - "oldAge";
    }

    getDetails() {
        //Getter
        var year = 2003 + this.regYear
        return 2021 - this.regYear + "this is " + year;
    }
    
    checkTradeIn() {
        var age = this.regYear()
        if (age < 5) {

            return "trade in this car";
        } else {

            return "trade in this car";
        }
        
    }
   

}
var myCar =new Vehicle ("Ford", "Focus", 2019 )
console.log(myCar.getAge())