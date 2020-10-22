// bai 1
// var arr = [1, 9, 4, 7, 5, 10];
// var a = [];
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2==0){
//        a.push(arr[i]);
//     }
// }
// let arr_1 = arr.sort(function (a,b) {
//     return a-b;
//  });
// let arr_2 = arr_1.filter(function (num){
//     return num%2 == 0;
// });
// console.log(arr_2);

//bai 2
// let x = Number(prompt("Nhập vào 1 số x"));
// function test1(x) {
//      return x == 0;
// } 
// console.log(test1(x));
// function test2(x) {
//     return (1-x);
// }
// console.log(test2(x));

let $yes = document.getElementById('yes');
let $no = document.getElementById('no');
let $answers = document.getElementById('answers');

// ghi đè hàm xử lý sự kiện onmouseenter
// $no.onmouseenter = function() {
//     alert('bbbb');
// }


// thêm hàm xử lý sự kiện mounseenter 
$no.addEventListener('mouseenter', function(){
    $answers.classList.toggle('reverse');
    // alert('Đồng ý rồi nhé !!!');
});


// làm thế nào để cái Không nhảy lung tung trên màn hình 
// positive : absolute 
// top : ...
// left: ....
//opacity:...

