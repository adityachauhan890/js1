// Stack(Primitive), Heap(Non-Primitive)
let myname="Xyz"
let anothername=myname
anothername="yxy"
//console.log(anothername);
//console.log(myname);

//let userone={
    //email: "qwertty@gmail.com",
   // upi :"user@ybl"
//}
//let usertwo=userone
//usertwo.email="zxcvbnm@gmail.com"
//console.log(usertwo.email);
//console.log(userone);
//console.log("Hello");
//const tinderuser ={}
//console.log(tinderuser);
const tinderuser = new Object()
tinderuser.id="xyz"
tinderuser.name="Sammy"
tinderuser.isLoggedIn=false
//console.log(tinderuser);
const regularuser={
    email:"asd@gail.com",
    fullname:{
        usersname:{
            firtsname:"hitesh",
            lastname:"choudhary"
        }
    }
    


}
//console.log(regularuser.fullname.usersname.firtsname);
const obj1={1:"a",2:"b"}
const obj2={3:"ab",4:"bc"}
const obj4={5:"cd",6:"ef"}
//const obj3= Object.assign({},obj1 , obj2, obj4)// obj1 , obj2 and obj4 are going inside {} as this is the target of all these
const obj3={...obj1,...obj2} // spreading obj1 and obj2
console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty(4));




