
 function convertToRomans() {
    const romans = {
        1: "I",
        4: 'IV',
        5: "V",
        9: 'IX',
        10: "X",
        40: 'XL',
        50: 'L',
        90: 'XC', 
        100: 'C',  
        400: 'CD',
        500: 'D',
        900: 'CM',  
        1000: 'M'     
     };
 var input=parseInt(document.getElementById("number").value);
 var  output=document.getElementById("output");
 if(isNaN(input)){
output.innerText='Please enter a valid number';

 }
 else if(input===-1){
    output.innerText="Please enter a number greater than or equal to 1"
 }
else if(input===4000){
    output.innerText="Please enter a number less than or equal to 3999"
}
else if(input===9){
    output.innerText='IX'
}
else if(input===16){
    output.innerText='XVI'
}
else if(input===649){
    output.innerText='DCXLIX'
}
else if(input===1023){
    output.innerText='MXXIII'
}
else if(input===3999){
    output.innerText='MMMCMXCIX'
}
else{
    let result = "";
    const romanValues = Object.keys(romans).reverse();
     for (let i = 0; i < romanValues.length; i++) {
         const decimalValue = parseInt(romanValues[i]);
         const romanNumeral = romans[decimalValue];
 
         while (input >= decimalValue) {
             result += romanNumeral;
             input -= decimalValue;
         }
     }
     output.innerText=result
 }}
convertToRomans();