/* const indice = 13
let soma = 0
let k = 0

function calcSoma(){
  while (k < indice ) {
      k++
      soma = soma + k
} 
}
calcSoma()
console.log(soma) */

//Inicio questão 2 - Fibonacci




function fibonacciFunction(i=1){
  i=parseInt(document.getElementById("fibonacci").value);
  let beforeLastNumber = 0
  let lastNumber = 1
  let sum 
  let number
  let allNumbers = []
  let count=3
  allNumbers.push(0,1)


  if (i <=2 && i >= 0) {
    i = i-1
    document.getElementById("result").innerHTML=`Este número pertence a sequência de fibonacci`
  } else if (i < 0) {
    document.getElementById("result").innerHTML=`Esse número é negativo então não é possível aplicar a sequência de fibonacci` 
  } else if (i == 3 || i == 5){
     while(count<=i){
      number = beforeLastNumber + lastNumber
      beforeLastNumber = lastNumber
      lastNumber = number
      allNumbers.push(number)
      count++
  } 
    document.getElementById("result").innerHTML= `${allNumbers},O número ${i} existe na sequência de fibonacci porém somente em sequências maiores`
  } else { 
      count=3
    while(count<=i){
      number = beforeLastNumber + lastNumber
      beforeLastNumber = lastNumber
      lastNumber = number
      allNumbers.push(number)
      count++
    } if (allNumbers.includes(i)) {
        document.getElementById("result").innerHTML= `${allNumbers},Este número pertence a sequência de fibonacci`
    } else {
        document.getElementById("result").innerHTML= `${allNumbers},Este número NÃO pertence a sequência de fibonacci`
    }
  }
}














 //QUESTÃO 5 - >    Escreva um programa que inverta os caracteres de um string.                        
                            
 function reverseString(stringToConvert){
  stringToConvert = document.getElementById("inputToReverse").value

  let dataToMove
  let newString=[]
  let count = 0
  

  const toReverse = Array.from(stringToConvert)
    while (count < stringToConvert.length ) {
      dataToMove = toReverse.pop()
      newString.push(dataToMove)
      count++
  };
    newString = newString.toString()
  for(count=0; count < newString.length; count++){
    newString = newString.replace(',','')
  };
  document.getElementById("inversionResult").innerHTML =`${newString}`
  
  
};

 

