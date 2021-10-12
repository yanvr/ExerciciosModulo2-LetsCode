
let addition = (x, y) => x + y;
let subtraction = (x, y) => x - y;
let multiplication = (x, y) => x * y;
let division = (x, y) => y === 0 ? 'Impossible to divide by zero' : x / y;


operatorHandler = {
    '+': addition,
    '-': subtraction,
    '*': multiplication,
    '/': division,
}


const getResult = (x, signal, y) => 
                    operatorHandler[signal] ?
                        operatorHandler[signal](x, y) : 
                        'Invalid operator';


const clearArray = () => [];


const calculatorModule =  (() => {
    
    let _calculator = [];
    let _expressions = new Map(); 

    const enter = value => _calculator = [..._calculator, value];

    const equals = () => {
        const [previousNumber, operator, currentNumber ] = _calculator;
        const result = getResult(previousNumber, operator, currentNumber)
        _expressions.set(`${previousNumber} ${operator} ${currentNumber}`, result);
        _calculator = clearArray();
        return result;
    }

    const list = () => _expressions;

    const reset = () => {
        _calculator = clearArray();
        _expressions.clear();
    }

    return {
        enter,
        equals,
        list,
        reset,
    }
})()

