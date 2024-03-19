import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "fstnumber" },
    { message: "Enter Second Number", type: "number", name: "sndnumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multipilication",
            "Division",
            "Modulus",
            "Exponentiation",
        ],
    },
]);
// console.log(answer);
// conditional statments
if (answer.operator === "Addition") {
    console.log(answer.fstnumber + answer.sndnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.fstnumber - answer.sndnumber);
}
else if (answer.operator === "Multipilication") {
    console.log(answer.fstnumber * answer.sndnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.fstnumber / answer.sndnumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.fstnumber % answer.sndnumber);
}
else if (answer.operator === "Exponentiation") {
    console.log(answer.fstnumber ** answer.sndnumber);
}
else {
    console.log("Select valid operation");
}
