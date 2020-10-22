var a = [1, 2, 3, 4, 5];
var  x = Number(prompt("Nhap vao so x bat ki: "));
for(let i=0; i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        var check= Number(a[i] + a[j]);
        if(check == x){
            console.log(`(${i} , ${j})`);
        }else{
            console.log("Khong co gia tri");
        }
    }
}
