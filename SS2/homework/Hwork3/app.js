let input = prompt("Nhập vào 1 mảng: ");
let arr = input.split(',').map(function(item){
return Number(item);
});
var element = 0;
var check = arr.length-1;
while(element < arr.length){
    while(element < check){
        if(arr[element] === arr[check]){
            arr.splice(check, 1);
            check --;
        }else{
            check --;
        }
    }
    check = arr.length - 1;
    element ++;
}
console.log(arr);