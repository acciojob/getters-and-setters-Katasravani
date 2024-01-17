class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return this.name;
  }

  set age(age) {
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Example usage
const student = new Student("John", 20);
const teacher = new Teacher("Professor Smith", 35);

student.study(); // Output: John is studying.
teacher.teach(); // Output: Professor Smith is teaching.
