
function numberGenrator(mode) {
        return Math.floor(Math.random() * mode) + 1
}

function operator(numOne, numTwo, opType) {
        switch (opType) {
            case "X":
                return numOne * numTwo;
            case "+":
                return numOne + numTwo;
            case "/":
                return numOne / numTwo;
            case "-":
                return numOne - numTwo
            default:
                break;
        }
    }

export function OperationGenerator(mode, opType) {
        this.num2 = numberGenrator(mode)
        this.num1 = numberGenrator(mode) 
        this.resultat = operator(this.num1, this.num2, opType)
        if(opType === "-" || opType === '/')
        {
            while(this.num1 < this.num2){
            this.num1 = numberGenrator(mode)
            }
        }
        
}