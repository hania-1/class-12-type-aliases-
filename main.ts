//TYPE ALIASES

type clginfo = { 
    name : string,
    rollno: number,
    status:boolean,
    cnic: number,
    batch:number,
}

let stdinfo1 : clginfo = {
name:'ahmad',
rollno:7,
status:false,
cnic:4004,
batch:1 
}

let stdinfo2 : clginfo = {
    name:'muhib',
    rollno:10,
    status:false,
    cnic:78,
    batch:2 
    }

type teacherinfo = {
    name:string,
    cnic:number,
    status:boolean,
    income:number
}

let teachinfo : teacherinfo = {
    name:'asharib',
    cnic:9988,
    status:false,
    income:29000
}


//INTERSECTION

type intersectedtype = clginfo & teacherinfo 

let mixinfo : intersectedtype = {
    name:"hania",
    cnic:777,
    status:false,
    batch:1,
    rollno:5,
    income:35000
}

//LITERAL TYPING

type Color = 'black' | 'grey' | 'brown'

let color : Color ;
color = "grey"
color = "brown"
color = "black"

//FRESH AND STALE OBJEST

interface User {
    name: string;
    age: number;
}

// Fresh Object

let freshUser: User = { name: "Alice", age: 30 }

// Stale Object

let temp = { name: "Charlie", age: 40, extra: false }

let staleUser: User = temp



//STRUCTURAL TYPING

interface bike {
    name:string,
    price:number
}

interface car {
    name:string,
    price:number
}

let Bike : bike = {
    name:'kawasaki',
    price:100000
}

let Car : car = {
    name:'supra',
    price:100000
}

Bike = Car 




















