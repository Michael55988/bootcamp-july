// exercice 1

//  answer:   I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)




// exercice 2
// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'


function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser
    return `you'r full name is ${first} ${last}`
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));





//  exercice 3

const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);
console.log(usersArray);


const updatedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsersArray);





// exercice 4

//  answer:  the type is an object







// exercice 5
// the constructor that will successfully extend the Dog class is the option number 4.


class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };




//   exercice 6

// 1

// [2] === [2]  true
// {} === {}    error



// 2

// object2.number → 4
// object3.number → 4
// object4.number → 5






// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white




class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    sound(noise) {
      return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  
  const cow = new Mammal('Micheline', 'cow', 'brown');
  console.log(cow.sound('Moooo'));
