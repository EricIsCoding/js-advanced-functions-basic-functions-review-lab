// Your code here
  
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  
  let mondayWork = (activity="go to the office") =>{
    return `This Monday, I will ${activity}.`
  }
  
  let wrapAdjective = (style="*")  => {
    return (adjective="special") => {
      return `You are ${style}${adjective}${style}!`
    }
  }
  
  const Calculator = {
    add: (a,b) => {
      return a + b;
    },
    subtract: (a,b) => {
      return a - b
    },
    multiply: (a,b) => {
      return a * b
    },
    divide: (a,b) => {
      return a / b;
    }
  }
  
  let actionApplyer = (start, array) => {
    let int = start
  
    for (let i = 0; i < array.length; i++ ){
      int = array[i](int)
    }
  
    return int
  }