let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
//let answer = window.prompt(weeklyExpenseQuestions[0])
//console.log(answer)
for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
} 

for(let j = 0; j < monthlyExpenseQuestions.length; j++){
  let answer = parseFloat(window.prompt(monthlyExpenseQuestions[j]))
  monthlyExpenses = monthlyExpenses + answer
}

for(let k = 0; k < annualExpenseQuestions.length; k++){
  let answer = parseFloat(window.prompt(annualExpenseQuestions[k]))
  annualExpenses = annualExpenses + answer
  }
