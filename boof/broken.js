class Student {
    // When running the application in the web server the username is Admin and the password is Dunb0yn3 
        constructor (name, age, course){ // we must use course here as class is a reserved word
        
                    this.name = name; // This will set the name of the student
                    this.age = parseInt(age); // This will set the age of the student
                    this.course = course; // This will set course name of the student
                    { console.log("error")}
        }
        
        
        rightAge() {
        
            if (this.age >>= 18) {
                
                var n = parseInt(this.age + 2)
              return   "you are the right age,The Password is Password1234 "  
            
            } else {
                 console.log("you are too young")
            }
        }
    
            }
        
        var student = new Student("Liam", 20, "Software")
        console.log(student.rightAge())