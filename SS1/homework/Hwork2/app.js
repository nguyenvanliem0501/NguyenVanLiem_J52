var a = [1, 2, 3, 4, 5];
let input = Number(prompt("Nhap vao so bat ki"));
for(let i=0; i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        var k = Number(a[i] + a[j]);
        if(k == input){
            console.log(`(${i} , ${j})`);
        }
    }
}
