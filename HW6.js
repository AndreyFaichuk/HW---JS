

    // Task 1


    const arr = ['Vasya', 'Petya', 'Alexey']

    function removeUser(arr, index){
        let result = []

        for (let  i = 0; i < arr.length; i++){
            if(index !== i){
                result.push(arr[i])
            }
        }
        return console.log(result)
    }

    removeUser(arr, 1)


    // Task 2


    const obj1 = { name: 'Vasya', age: 1}

    const getAllKeys = (obj) => Object.keys(obj)

    console.log(getAllKeys(obj1))


    // Task 3


    const obj2 = { name: 'Vasya', age: 1}

    const getAllValues = (obj) => Object.values(obj)

    console.log(getAllValues(obj2))


    // Task 4


    const obj3 = {
        id: 3,
        name: 'Vasya'
    }

    const insertIntoarr = (obj, id) => {
       let index = condidateArr.findIndex(function(e){
           return e.index === id
       })
        return condidateArr.splice(index,0, obj)
    }

        insertIntoarr(obj3, 4)

        console.log(condidateArr)


    // Task 5


    class Condidate{
        constructor({address}) {
        this.address = address
    }

    get state(){
        let result = ''
        result = this.address.split(',').
        splice(2,1)
        return result.join()
    }
  }

  const condidate = new Condidate(condidateArr[3])

    console.log(condidate.state)


    // Task 6


    const getCompanyNames = () => {
       let newArr = condidateArr.map((index) => index.company)
        return newArr.filter((item, index) => newArr.indexOf(item) === index)
    }

    console.log(getCompanyNames())


    // Task 7


   const getUsersByYear = (year) => {
       let result = []
       let newArrByRegistered = condidateArr.map((index) => {
         if (index.registered.includes(year)){
             result.push(index._id)
         }
       })
        return result
   }

    console.log(getUsersByYear(2017))


    // Task 8


  const  getCondidatesByUnreadMsg = (msg) => {
      let result = []
      let regex = /\d+/g


      let fin = condidateArr.map(el => {
          if(el.greeting.match(regex) == msg){
              result.push(el)
          }
      })
      return result
}

    console.log(getCondidatesByUnreadMsg(1))


    // Task 9


const getCondidatesByGender = (gender) => {
    let finalArr = []

    let result = condidateArr.map(index => {
        if(index.gender === gender)
            finalArr.push(index)

    })
    return finalArr
}

    console.log(getCondidatesByGender('female'))


    // Task 10 custom join

    let arrOfWords = ['qwerty', 'qwerty']

    const customJoin = (arr, separator) => {
    let result = ''

    if(arr.length === 0) return 'arr is empty'
    if(separator === undefined) separator = ','
    if(separator == 0) separator = ''

        for (let k = 0; k < arr.length - 1; k++) {
            result += arr[k]
            result += separator
        }
        result += arr[arr.length - 1]

    return result

}
  let test = customJoin(arrOfWords, ', ')

    console.log(test)


    // Task 10 custom reduce


    let arrOfNumbers = [2,3,5,2]

    const customReduce = (arr, callback, accum) => {
            let ind = 0
            if (accum === undefined){
            accum  = arr[0]
            ind = 1
    }
        let action = accum
        for(let i = ind; i < arr.length; i++){
            accum = arr[i]
            action = callback(action, arr[i], i, arr)
        }
        return action
    }

    let test2 = customReduce(arrOfNumbers,(total, arr) => total * arr,4)

    console.log(test2)






