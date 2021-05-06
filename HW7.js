

    // Task 1


    const searchCandidatesByPhoneNumber = phone => {
        let condidateArr1 = [...condidateArr]

        let result = []

        let tester = phone.
        replace('(', '\\(').  /* экранируем спец. символы \\, потому что строковые кавычки уберут один символ */
        replace(')', '\\)').
        replace('+', '\\+')

            for (let tel in condidateArr1) {
                if (condidateArr1[tel].phone.match(tester)) {
                    result.push(condidateArr1[tel])
                }
            }

        return result
    }

    console.log(searchCandidatesByPhoneNumber('+1 (841)'))


  /*  /(\+1|1)\s?\(?\d{2,3}\)?((\-|\s)?\d{2,3})((\-|\s)?\d{2,4})/g
      /(\+1?)(\(?\d{2,9}\)?[\\s]?)?[\d\-\s]/g
     пробовал еще эти варианты, вместо replace, но должный эффект был лишь частично достигнут)
   */


    // Task 2



    const getCandidateById = id => {
        let condidateArr2 = [...condidateArr]


        for (let index in condidateArr2) {
            if (condidateArr2[index]._id === id) {

                condidateArr2[index].registered = condidateArr2[index].registered.
                    split(/[\\\D]/).
                    splice(0,3).
                    reverse().
                    join().
                    replace(/,/g, '/')

                return condidateArr2[index]
            }

        }
    }


    console.log(getCandidateById('5e216bc974f733e90b7fd618'))


    // Task 3


    const sortCandidatesArr = sortBy => {
        let condidateArr3 = [...condidateArr]

        for (let index in condidateArr3) {
            condidateArr3[index].balance = condidateArr3[index].balance.
            split(/[\\\D]/).
            splice(1,3).
            join().
            replace(/\,{1}/,'').
            replace(',','.')
        }

            let result = condidateArr3.sort((a,b) => {

            if(sortBy === 'asc') return a.balance - b.balance
            if(sortBy === 'desc') return b.balance - a.balance
            if(sortBy === null) return condidateArr3
        })

        for(let cash in result){
            result[cash].balance = `${result[cash].balance.replace(/^\d/g, `$${result[cash].balance[0]},`)}`
        }

        return result
    }

    console.log(sortCandidatesArr('desc'))


    // Task 4


    const getEyeColorMap = () => {
        let condidateArr4 = [...condidateArr]
        let sortedObject = {}


            condidateArr4.forEach((value, i) => {
            let testColor = condidateArr4[i].eyeColor
            testColor in sortedObject ? sortedObject[testColor].push(condidateArr[i]):sortedObject[testColor] = []

            })

        return sortedObject
    }

    console.log(getEyeColorMap())

