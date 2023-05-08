// function addTwoNumbers(a,b) {
//     a = 45
//     return a + b
// }

// console.log(addTwoNumbers(8,5))

let todayDates = new Date()
// console.log(todayDates.getHours(4))
todayDates.setHours(20)
console.log(todayDates.getHours())
function greeting(name) {
    if (todayDates.getHours() >= 4 && todayDates.getHours() < 12){
        return `Good Morning ${name}`
    } else if (todayDates.getHours() >= 12 && todayDates.getHours() < 17){
        return `Good Afternoon ${name}`
    } else if (todayDates.getHours() >= 17 && todayDates.getHours() < 20){
        return `Good Evening ${name}`
    } else{
        return `Good Night ${name}`
    }

}

console.log(greeting("Jeremiah"))