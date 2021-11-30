// ---------------Task 1---------------- 
//----------1-----------
// let arr=[
//     {
//         name:"Tucson",
//         brend:"Hyundai",
//         date:new Date('2008-12-01'),
//         color:"red",
//         capacity:7
//     },
//     {
//         name:"Teana",
//         brend:"Nissan",
//         date:new Date('2013-01-02'),
//         color:"red",
//         capacity:5
//     }
// ]

// arr.forEach(element =>{
//     console.log(element);
// })
//-------------------------------
// let car = arr.find(ar => ar.brend === "Nissan");
// console.log(car);
//-------------------------------------------
// let redCars = arr.filter(car => car.color === "red");
// console.log(redCars);
//----------------------------
// let carsProperties = arr.map(x => {
//     let properties = {
//       capacity: x.capacity,
//       size: "large"
//     };
//     if (x.capacity <= 7){
//       properties['size'] = "medium";
//     }
//     if (x.capacity <= 5){
//       properties['size'] = "small";
//     }
//     return properties;
//    });
//    console.log(carsProperties);
//---------------------------------------

// console.log(arr.every(x => x.capacity > 5));
// console.log(arr.some(x=>x.capacity>5));
//------------------------------------
//------------Task2------------
class Student{
    constructor(Id,name,surname,age){
        this.Id=Id;
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
   
}


class Group{
    constructor(id,GroupName,studentCount){
        this.id=id;
        this.GroupName=GroupName;
        this.studentCount=studentCount;
        this.arr=[]
    }
    
    addStudent(student){
        
        var fullUser=Object.assign(this,student)
        if((this.arr.length<this.studentCount)){
            var a= this.arr.findIndex(x => x.Id ===student.Id)
            if(a<0){
            this.arr.push(fullUser)
            
            }
            else{
                console.log("Duzgun id girin");
            }
        }
        else{
            console.log("telebe sayi coxdur");
        }
    }
} 
let user2=new Student(2,"Resul","Rustemli",25)
let user3=new Student(2,"Resul","Rustemli",25)
let user4=new Student(4,"Resul","Rustemli",25)


let grup=new Group(1,"P",3)
grup.addStudent(user2);
grup.addStudent(user3)
grup.addStudent(user4)
console.log(grup.arr)
