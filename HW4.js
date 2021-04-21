    //Task 1


class Student {
    constructor({name, surname, ratingPoint, schoolPoint}) {
        this.id = Student.id++
        this.name = name
        this.surname = surname
        this.ratingPoint = ratingPoint
        this.schoolPoint = schoolPoint
        this.isSelfPayment = null
        Student.listOfStudents[Student.listOfStudents.length] = this
        this.sortStudentsByRating()
    }
    static id = 1
    static listOfStudents = []


    sortStudentsByRating() {
        Student.listOfStudents.sort((a,b) => (b.ratingPoint - a.ratingPoint) || (b.schoolPoint - a.schoolPoint))
        for(let k = 0; k < Student.listOfStudents.length; k++) {
           if (k < 5 && Student.listOfStudents[k].ratingPoint >= 800) {
               Student.listOfStudents[k].isSelfPayment = false
           } else {
               Student.listOfStudents[k].isSelfPayment = true
           }
        }
    }

}

let createEnrolleesFromArr = (arr) => {
    let res = []
    for(let k = 0; k < arr.length; k++){
        res[res.length] = new Student(arr[k])
    }
    return res
}

const enrolleesConstructArr = createEnrolleesFromArr(studentArr)

console.log(Student.listOfStudents)



    //Task 2

class CustomString{
    constructor(string) {
        this.string = string
    }

    reverse(str){
        let result = ''
        this.string = result

        for (let i = str.length - 1; i >= 0; i--){
            result += str[i]
        }
        return result
    }

    ucFirst(str){
        let result = str[0].toUpperCase() + str.slice(1)
        this.string = result
        return result
    }

    ucWords(str){
        let result = ''

        for (let i = 0; i < str.length; i++ ) {
            if (str[i - 1] == false || str[i - 1] === undefined) {
                result += str[i].toUpperCase()
            } else {
                result += str[i]
            }
        }
        return result
    }


}

const myString = new CustomString()

console.log(myString.reverse('qwerty'))
console.log(myString.ucFirst('qwerty'))
console.log(myString.ucWords('qwerty qwerty qwerty qwerty'))


   // Task 3

   class Validator{
       constructor(email, domain, date, phone){
           this.email = email
           this.domain = domain
           this.date = date
           this.phone = phone
       }
       checkIsEmail(str){
           let check = /^([\w\-\.\_])+\@([A-Za-z])+\.([a-z]{2,3})$/
           let valid = check.test(str)
           if (valid){
               console.log('Email is correct')
              return this.email = str
           } else {
               console.log('Error Email')
               return this.email = null
           }
       }
       checkIsDomain(str){
           let check = /^([A-Za-z])+\.([a-z]{2,3})$/
           let valid = check.test(str)
           if(valid){
               console.log('Domain is correct')
               return this.domain = str
           } else {
               console.log('Error Domain')
               return this.domain = null
           }
       }
       checkIsDate(str){
           let check = /^([\d]{2})+\.([\d]{2})+\.([\d]{4})$/
           let valid = check.test(str)
           if(valid){
               console.log('Date is correct')
               return this.date = str
           } else {
               console.log('Error Date')
               return this.date = null
           }
       }

       checkIsPhone(str){
           let check = /^\+38\s\(([\d]{3})+\)\s([\d]{3})+\-([\d]{2})+\-([\d]{2})$/
           let valid = check.test(str)
           if(valid){
               console.log('Phone is correct')
               return this.phone = str
           } else {
               console.log('Error Phone')
               return this.phone = null
           }
       }

   }

   const validator = new Validator()

   validator.checkIsEmail('vasya.pupkin@mail.ru')
   validator.checkIsDomain('yandex.ru')
   validator.checkIsDate('15.04.2021')
   validator.checkIsPhone('+38 (067) 967-99-82')

   console.log(validator)
