let input = prompt("Nhập vào 1 mảng: ");
let str = input.split("");
var element = 0;
var check = str.length-1;
while(element < str.length){
    while(element < check){
        if(str[element] === str[check]){
            check ++;
        }else{
            check = 1;
        }
    }
    check = str.length - 1;
    element ++;
}
console.log(str);





