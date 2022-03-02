class Person{
    constructor(firstName, lastName, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person{
   constructor(firstName, lastName, age, address, subjects, academy){
       super(firstName, lastName, age, address);
       this.subjects = subjects;
       this.academy = academy;
   }
   static checkStudentStudiesSubject(studentObject, subject){
       if((studentObject.subjects.filter(subj => subject.toUpperCase() == subj.toUpperCase()))!=""){ 
           console.log(`Student ${studentObject.fullName()} studies the subject "${subject}"`)
       }
       else {console.log(`Student ${studentObject.fullName()} does not study the subject "${subject}"`)}  
   }
}

let student1 = new Student("Marko", "Markovski", 23, "Kole Nedelkovski", ["HTML", "Css", "JavaScript", "C#"], "SEDC")
console.log(student1.fullName());
Student.checkStudentStudiesSubject(student1, "HTML");
Student.checkStudentStudiesSubject(student1, "c#");
Student.checkStudentStudiesSubject(student1, "C++");
let student2 = new Student("Darko", "Darkovski", 18, "Leninova", ["C++", "NodeJS", "SQL", "Python"], "Semos");
console.log(student2.fullName());
Student.checkStudentStudiesSubject(student2, "HTML");
Student.checkStudentStudiesSubject(student2, "SqL");
Student.checkStudentStudiesSubject(student2, "R");
Student.checkStudentStudiesSubject(student2, "NodeJS");


