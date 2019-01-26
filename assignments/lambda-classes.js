// CODE here for your Lambda Classes

//~~~~~~~~~~~~~~~~~Classes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
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
        // return [this.favSubjects];
        this.favSubjects.forEach(function(element){
            console.log(`One of the favorite subjects is ${element}.`)
        })
    }

    PRAssignment(student, subject){
        return `${this.name} has submitted a pull request for ${subject}.`
    }

    sprintChallenge(student, subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class Project_Manager extends Instructor {
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(pm, slackChannel){
        return `${this.name} announces to ${slackChannel}, @ channel standy times!`
    }

    debugsCode(pm, student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject.favSubjects[2]}.`
    }
}




//~~~~~~~~~~~~~~~~~~~Objects~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const gandalf = new Person ({
    name: 'Gandalf',
    age: 'approximately 2019 (according to google)',
    location: 'Middle-earth',
    gender: 'male'
})
console.log(gandalf.name)
console.log(gandalf.age)
console.log(gandalf.location)
console.log(gandalf.gender)
console.log(gandalf.speak())

const link = new Person ({
    name: 'Link',
    age: '18',
    location: 'Kakariko Village',
    gender: 'male'
})
console.log(link.name)
console.log(link.age)
console.log(link.location)
console.log(link.gender)
console.log(link.speak())

const campope = new Instructor ({
    name:'Cameron Pope',
    location:'Lambda',
    specialty: 'frontend',
    favLanguage: 'Javascript',
    catchPhrase: "Don't forget the homies"
})


const dan = new Instructor ({
    name:'Dan Frehner',
    location:'Lambda School',
    specialty: 'backend',
    favLanguage: 'Python',
    catchPhrase: "Don't forget the homies my homie"
})


const shota = new Student ({
    name: 'Shota',
    previousBackground: 'Biology',
    className: 'CSPT4',
    favSubjects: ['Javascript', 'Python', 'Classes', 'Inheritance']
})


const antishota = new Student ({
    name: 'Atohs',
    previousBackground: 'Chemistry',
    className: '4tpsc',
    favSubjects: ['terminal', 'inline', 'html', 'css']
})

const gannon = new Project_Manager({
    name: 'Gannon',
    gradClassName: 'FSW',
    favInstructor: 'Josh Knell',
})


const gandalfTheWhite = new Project_Manager ({
    name: 'Gandalf the White',
    gradClassName: 'Hogwarts(its a crossover hp lotr cinematic universe)',
    favInstructor: 'Sarumon'
})





//~~~~~~~~~~~~~~INSTRUCTOR TESTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('')

//~~~~~~~~~campope tests~~~~~~~~~~~~~~~~~~~~~~
console.log('')
console.log('~~~~~~~~~~~~~These are the tests for instructor Cam~~~~~~~~~~`')

console.log(`Specialty: ${campope.specialty}`)
console.log(`Favorite Language: ${campope.favLanguage}`)
console.log(`Catchphrase: ${campope.catchPhrase}`)


console.log(campope.demo('flexbox'))

let subjectOne = "implicit binding"
// console.log(shota.name)
console.log(campope.grade(shota, subjectOne))



//~~~~~~~~~dan ~~~~~~~~~~~~~~~~~~~~~~
console.log('')
console.log('~~~~~~~~~~~~~These are the tests for instructor Dan~~~~~~~~~~`')

console.log(`Specialty: ${dan.specialty}`)
console.log(`Favorite Language: ${dan.favLanguage}`)
console.log(`Catchphrase: ${dan.catchPhrase}`)


console.log(dan.demo('APIs'))

console.log(dan.grade(antishota,antishota.favSubjects[0]))




//~~~~~~~~~~~~~~~~~~~~~~STUDENT TESTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~Shota test~~~~~~~~~~~~~~~~~~~
console.log('')
console.log('~~~~~~~~~~~~~These are the tests for student Shota~~~~~~~~~~`')

console.log(`Previous backgroung: ${shota.previousBackground}`)
console.log(`Class name: ${shota.className}`)
console.log(`Favorite subjects: ${shota.favSubjects}`)


console.log(shota.listsSubjects())
console.log(shota.PRAssignment(this.name, shota.favSubjects[0]))
console.log(shota.sprintChallenge(this.name, shota.favSubjects[2]))
//~~~~~~~~~~~~~~~~~~~~~~~~~~`antiShota tests~~~~~~~~

console.log('')
console.log('~~~~~~~~~~~~~These are the tests for student antiShota~~~~~~~~~~`')
console.log(``)

console.log(`Previous backgroung: ${antishota.previousBackground}`)
console.log(`Class name: ${antishota.className}`)
console.log(`Favorite subjects: ${antishota.favSubjects}`)

console.log(antishota.listsSubjects())
console.log(antishota.PRAssignment(this.name, antishota.favSubjects[3]))
console.log(antishota.sprintChallenge(this.name, antishota.favSubjects[0]))

//~~~~~~~~~~~~~~~~~~~~~~PM TESTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('')
console.log('~~~~~~~~~~~~~These are the tests for project manager Gannon~~~~~~~~~~`')

console.log(`Graduating Class:${gannon.gradClassName}`)
console.log(`Favorite intstructor:${gannon.favInstructor}`)

console.log(gannon.standUp(this.name, 'webpt4-gannon'))
console.log(gannon.debugsCode(this.name, antishota, antishota))

console.log('')
console.log('~~~~~~~~~~~~~These are the tests for project manager Gandalf the White~~~~~~~~~~`')
console.log(`Graduating Class:${gandalfTheWhite.gradClassName}`)
console.log(`Favorite intstructor:${gandalfTheWhite.favInstructor}`)

let slackChannel2 = 'WEBPT 9-The Fellowship'
console.log(gandalfTheWhite.standUp(this.name, slackChannel2))
console.log(gandalfTheWhite.debugsCode(this.name, shota, shota))
