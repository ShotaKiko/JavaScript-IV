// CODE here for your Lambda Classes


class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instrAttr){
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
}

class Student extends Person {
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(){
        return [this.favSubjects];
    }

    PRAssignment(subject){
        return `${this.name} has submitted a pull request for ${subject}.`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class Project_Manager extends Instructor {
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @ channel standy times!`
    }

    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`
    }
}