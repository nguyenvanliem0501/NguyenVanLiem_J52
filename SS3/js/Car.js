export class Car extends Vehicle {
    static wheels = 4;
    about() {
        // super.about(); // ghi đè
        console.log(`Phuong tien ${this.name} chay voi toc do ${this.speed}`);
    }

    static aboutCar() {
        console.log('Day la xe hoi. xe hoi ra doi nam 2010');
    }

    get info() {
        return ` 
        Day la xe hoi. Ten cua no la ${this.name}.
        No chay voi toc do la ${this.speed}. 
        No duoc san xua boi hang ${this.brand}`
    }

    set preferedSpeed(preferedSpeed){
        if(isNaN(preferedSpeed)){ // neu khong phai la so => la chu
            console.log("Nhap vao 1 so");
        }else{
            this.speed = preferedSpeed;
        }
    }
}