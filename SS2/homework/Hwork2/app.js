// Viết chương trình quản lý nhân sự cho công ty
class Company {
    name; // ten cong ty
    establishedDate; // ngay thanh lap
    country; // quoc gia
    businessType; // loai hinh kinh doanh
    employees; //  la 1 mang gom cac nhan vien

    constructor(name, establishedDate, country, businessType, employees){
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees;
    }

    showAllEmployees(){
        console.log(`${liem} \n ${hoangAnh}\n ${long} \n ${duy} \n ${binh}`);
    }

}
// let liem = new Employee('Van Liem', 20, 'male', 'bac giang');
// let hoangAnh = new Employee('Hoang Anh', 20, 'male', 'bac giang');
// let long = new Employee('Van Long', 20, 'male', 'Ha Tay');
// let duy = new Employee('Van Duy', 20, 'male', 'bac giang');
// let binh = new Employee('Van Binh', 20, 'male', 'bac giang');
// console.log(showAllEmployees);

class Employee {
    name;
    age;
    sex;
    address;

    constructor(name, age, sex, address){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }

    
}

class CEO extends Employee {
    strategy; //chiến lược kinh doanh

    constructor(name, age, sex, address, strategy){
        super(name, age, sex, address);
        this.strategy = strategy
    }

    // about(){
    //     console.log(`Ten ${name}, Tuoi ${age}, Gioi tinh ${sex}, Dia chi ${address}, Chien luoc ${this.strategy}`);
    // }

}
let ceo = new CEO('Van Liem', 20, 'Male', 'bac giang', 'Kinh doanh');
console.log(ceo);

class Manager extends  Employee {
    managementStyle; // phong cách quản lý

    constructor(name, age, sex, address, managementStyle){
        super(name, age, sex, address);
        this.managementStyle = managementStyle;
    }

}
 
class Staff extends Employee {
    experience; //số năm kinh nghiệm

    constructor(name, age, sex, address){
        super(name, age, sex, address);
        this.experience = experience;
    }

}