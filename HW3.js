// Task 1 v1, Task 2 v1, Task 7 v1


const Emploee = function ({id, name, surname, salary, workExperience, isPrivileges, gender}) {
    this.id = id
    this.name = name
    this.surname = surname
    this.salary = salary
    this.workExperience = workExperience
    this.isPrivileges = isPrivileges
    this.gender = gender

    Object.defineProperty(this, 'fullInfo', {

            get: function () {
                let result = ''
                for (let key in this) {
                        result += ` ${key} - ${this[key]},`
                }
                return result.slice(0, -1)
            },

            set: function ({id, name, surname, salary, workExperience, isPrivileges, gender}) {

                if (id !== undefined) {
                    this.id = id
                }
                if (name !== undefined) {
                    this.name = name
                }
                if (surname !== undefined) {
                    this.surname = surname
                }
                if (salary !== undefined) {
                    this.salary = salary
                }
                if (workExperience !== undefined) {
                    this.workExperience = workExperience
                }
                if (isPrivileges !== undefined) {
                    this.isPrivileges = isPrivileges
                }
                if (gender !== undefined) {
                    this.gender = gender
                }

            }


    })

}


const employeeObj = new Emploee(emplyeeArr[2])



Emploee.prototype.getFullName = function (){
        return `${this.surname} ${this.name}`
}

employeeObj.fullInfo = {id: 2342, email: 'etewttw', salary: 0, name: 'Andrey', surname: 'Makarov', eyeColor: 'Brown'}

 console.log(employeeObj)



// Task 1 v2, Task 2 v2, Task 7 v2


class Emploee1{
    constructor({id, name, surname, salary, workExperience, isPrivileges, gender}) {
        this.id = id
        this.name = name
        this.surname = surname
        this.salary = salary
        this.workExperience = workExperience
        this.isPrivileges = isPrivileges
        this.gender = gender
    }

    getFullName = function (){
        return `${this.surname} ${this.name}`
    }

    get fullInfo(){
        let result = ''

        for(let key in this){
            result += ` ${key} - ${this[key]},`
        }
        return result.slice(0, -1)
    }

    set fullInfo({id, name, surname, salary, workExperience, isPrivileges, gender}) {

        if (id !== undefined) {
            this.id = id
        }
        if (name !== undefined) {
            this.name = name
        }
        if (surname !== undefined) {
            this.surname = surname
        }
        if (salary !== undefined) {
            this.salary = salary
        }
        if (workExperience !== undefined) {
            this.workExperience = workExperience
        }
        if (isPrivileges !== undefined) {
            this.isPrivileges = isPrivileges
        }
        if (gender !== undefined) {
            this.gender = gender
        }

    }
}

const employeeObj1 = new Emploee1(emplyeeArr[2])

console.log(employeeObj1)
console.log(employeeObj1.getFullName())


// Task 3


let createEmployesFromArr = (arr) => {
        let res = []
        for(let k = 0; k < arr.length; k++){
            res[res.length] = new Emploee(arr[k])
        }
        return res
}

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)

    console.log(emplyeeConstructArr)


// Task 4


const getFullNamesFromArr = (arr) => {
    let namesAndSurnames = []
    for(let k = 0; k < arr.length; k++){
       namesAndSurnames[namesAndSurnames.length] = arr[k].name +' '+ arr[k].surname
    }

return namesAndSurnames
}

console.log(getFullNamesFromArr(emplyeeConstructArr))


// Task 5


const getMiddleSalary = (arr) => {
    let middleOfSalary = 0

    for(let k = 0; k < arr.length; k++){
        middleOfSalary += arr[k].salary
    }
    return Math.floor(middleOfSalary / arr.length)
    }

    console.log('The middle of salary is: ' + getMiddleSalary(emplyeeConstructArr))


     // Task 6

const getRandomEmployee = (arr) => {
    let newArr = []

    for(let k = 1; k < arr.length + 1; k++){
        newArr[k] = arr[k - 1]
    }

    let randomIndex = Math.floor(Math.random() * (newArr.length - 1) + 1)
    return newArr[randomIndex]
}

console.log(getRandomEmployee(emplyeeConstructArr))




     // Task 7

const employeeObj2 = new Emploee1(emplyeeArr[0])


employeeObj2.fullInfo = {email: 'etewttw', salary: 0, name: 'Andrey', surname: 'Petrov', eyeColor: 'Brown', id: 16}


console.log(employeeObj2)
