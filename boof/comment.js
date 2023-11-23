class Actor {
    constructor(actorName, city, filmType) {
        this.name = actorName;
        this.city = city;
        this.filmType = filmType
    }


    genre() {
      
        return "This actor is best known for " + this.filmType + " movies";
    }

    actorDetails () {


        return "This actor is called " +  this.name + " they are origionally from " + this.city;

    }
    
   
   

}

var actor = new Actor ("Liam", "Navan", "Action");
console.log(actor.genre())
console.log(actor.actorDetails())