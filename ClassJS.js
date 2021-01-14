class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
          first,
          last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(this.name.first);
        console.log(`Hi! I'm ${this.name.first}`);

    }
    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
    

                

}
let han = new Person ('Han', 'Solo', 25, 'male',['Smuggling']);
han.greeting();

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);


leia.farewell();

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests); // Now 'this' is initialized by calling the parent constructor.
  
      // subject and grade are specific to Teacher
      this.subject = subject;
      this.grade = grade;
    }
}


let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics',3);
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
console.log(snape.age) // 58
console.log(snape.subject) // Dark arts

class TeacherGetSet extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        this._subject = subject;
        this.grade = grade;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;

    }
}

let snape2 = new TeacherGetSet('Severus2', 'Snape', 58, 'male', ['Potions'], 'Dark arts2', 5);
// Check the default value
console.log(snape2.subject) // Returns "Dark arts"

// Change the value
snape2.subject = "Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape2.subject) // Returns "Balloon animals"
