

    // Task 1


    function makeCounter() {
        let currentCount = 0

        return function(n) {
            return  currentCount += n
        }
    }

    const counter = makeCounter()

    console.log(counter(1))
    console.log(counter(6))
    console.log(counter(8))
    console.log(counter(7))
    console.log(counter(4))


    // Task 2


    function updateArr () {
        let currentArr = []

        return function(n) {
            if(n === undefined){
                currentArr = []
                return currentArr
            } else {
                currentArr[currentArr.length] = n
                return currentArr
            }
        }
    }

    const getUpdatedArr = updateArr()

    console.log(getUpdatedArr(1))
    console.log(getUpdatedArr(3))
    console.log(getUpdatedArr({name: 'Vasya'}))
    console.log(getUpdatedArr())
    console.log(getUpdatedArr(1))
    console.log(getUpdatedArr(5))
    console.log(getUpdatedArr('Petrov'))
    console.log(getUpdatedArr())
    console.log(getUpdatedArr(2))
    console.log(getUpdatedArr(89))


    // Task 3


    function time() {
        let first = 0
        return function () {
            if (first === 0) {
                first = Date.now()
                return console.log("Enabled")
            } else {
                return Math.floor(((Date.now() - first) / 1000))
            }
        }
    }

    let getTime = time()

    getTime()


    // Task 4


    const timer = (time) => {

        let timerSeconds = time,
            minutes,
            seconds

        let idd = setInterval(function () {

            minutes = Math.floor(timerSeconds / 60)
            seconds = timerSeconds % 60


            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            console.log(minutes + ":" + seconds)

            if (--timerSeconds < 0) {
                console.log('Timer End')
                clearInterval(idd)
            }
        }, 1000)
    }


    timer(65)