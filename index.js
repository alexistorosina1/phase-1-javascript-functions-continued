// code your solution here
function saturdayFun(sat = "roller-skate") {
    return `This Saturday, I want to ${sat}!`
}
saturdayFun();

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork();

function wrapAdjective() {
    return function () {
        return `You are `
    }    
}