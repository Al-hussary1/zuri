//Inputing Arithmetic parameters
const num1 = parseFloat(prompt("Enter the first number: " ));
const arithmetic_operator = prompt("Select the required operator: (+, -, *, /)");
const num2 = parseFloat(prompt("Enter the second number: "));

// Operation 
let result = 0;
if (isNaN(num1) || isNaN(num2)){
    alert('Wrong input! Try again');
}
else {
    if(arithmetic_operator == '+'){
        result = num1 + num2;
    }
    else if(arithmetic_operator == '-'){
        result = num1 - num2;
    }
    else if(arithmetic_operator == '*'){
        result = num1 * num2;
    }
    else if(arithmetic_operator == '/'){
        result = num1 / num2;
    }
    alert(num1 + ' ' + arithmetic_operator + ' ' + num2 + '= '+ result); 
}