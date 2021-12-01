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
    constructor(GroupName,studentCount,arr=[]){
        
        this.GroupName=GroupName;
        this.studentCount=studentCount;
        this.arr=arr
    }
    
    
    addStudent(student){
        
        if((this.arr.length<this.studentCount)){

            

            var a=this.arr.find(x=>x.Id===student.Id) 
            if(a==undefined){
            this.arr.push(student)
            
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
const user2=new Student(2,"Resul","Rustemli",25)
const user3=new Student(2,"Resul","Rustemli",25)
const user4=new Student(3,"Resul","Rustemli",25)


const grup=new Group("P",3)
grup.addStudent(user2);
grup.addStudent(user3)
grup.addStudent(user4)
console.log(grup.arr)
