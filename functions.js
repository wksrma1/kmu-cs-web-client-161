
console.log("hello homework3");


function stringToInt(input){

   var output=Number(input);

   return parseInt(output);
}



function maskNumber(input){
 
var mask_number="";

mask_number+=String(input);
 
mask_number=mask_number.substr(0,7);
 
mask_number+="****";
 
return mask_number;
}



function getAverage(input_array){

var sum=0;
for(var i=0;i<input_array.length;i++){
	sum+=input_array[i];
}
var avg=sum/input_array.length;

return avg; 
 
}



function isMultipleSeven(input){

if(input%7==0){
return true;
}
else{
return false;
}
}



function operation(operator, num1,num2){
 
if(operator==="add"){
return num1+num2;
}
else if(operator==="substract"){
return num1-num2;
}
else if(operator==="multiply"){
return num1*num2;
}
else if(operator==="divide"){
return num1/num2;
}
else{
console.log("Not Supported");
return undefined;
}
}



function triangleMtn(input){
        var output = '';
        for (var i = 0; i <= input; i++) {
            for (var j = 0; j < i; j++) {
                output += '*';
            }
            output += '\n';
        }
   console.log(output);
}
