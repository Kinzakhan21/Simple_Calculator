#! /usr/bin/env node
import inquirer from "inquirer";
// 8rinting a Wellcome  Message
console.log("\n\tWelcome To \'Kinza\' - CLI Simple calculator\n");
const answer = await inquirer.prompt([
    { message: "Entr your first number", type: "number", name: "firstNumber" },
    { message: "Entr your second number", type: "number", name: "secondNumber" },
    { message: "select one of operator to perform action ",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIFICATIOM", "DIVISION"],
    },
]);
//IF CONDITIONAL STATENEBT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIFICATIOM") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "Please select valid operator";
}
