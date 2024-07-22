// code your solution here //
function saturdayFun(what= "roller-skate"){
    return `This Saturday, I want to ${what}!`
}
function mondayWork(where = "go to the office"){
    return `This Monday, I will ${where}.`
}
function wrapAdjective(flair = '*') {
    return function (adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`
    }
}

