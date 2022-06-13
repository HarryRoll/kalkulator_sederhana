const numbers = document.querySelectorAll(".number");

let prevNumber ='';
let calculationOperator = '';
let currentNumber ='0';

numbers.forEach((number)=>{
	number.addEventListener("click", () =>{
	inputNumber(event.target.value);
	updateScreen(currentNumber);
	})
});

const screen = document.querySelector('.screen');

const updateScreen = (number) =>{
	screen.value=number;
}

const inputNumber = (number) =>{
	if(currentNumber === '0'){
		currentNumber = number;
	}
	else{
		currentNumber += number;
	}
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
	operator.addEventListener("click", (event) =>{
	inputOperator(event.target.value);
	})
});

const inputOperator = (operator) => {
	if(calculationOperator === ''){
	prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber ='0';
}

const equal = document.querySelector(".equal");

equal.addEventListener("click", () =>{
	calculate();
	updateScreen(currentNumber);
});

const calculate = () => {
	let result = '';
	switch(calculationOperator){
		case'+':
		result = parseFloat(prevNumber) + parseFloat(currentNumber);
		break;
		case'-':
		result = parseFloat(prevNumber) - parseFloat(currentNumber);
		break;
		case'*':
		result = parseFloat(prevNumber) * parseFloat(currentNumber);
		break;
		case'/':
		result = parseFloat(prevNumber) / parseFloat(currentNumber);
		break;
		default:
		return;
	}
	currentNumber = result;
	calculationOperator='';
}

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
	clearAll()
	updateScreen(currentNumber)
});

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
};

inputDecimal = (dot) => {
	if(currentNumber.includes('.')){
		return;
	}
	currentNumber += dot;
}

const decimal = document.querySelector('.desimal');

decimal.addEventListener("click", (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
});