// Stack(Primitive), Heap(Non-Primitive)
let myname="Xyz"
let anothername=myname
anothername="yxy"
console.log(anothername);
console.log(myname);

let userone={
    email: "qwertty@gmail.com",
    upi :"user@ybl"
}
let usertwo=userone
usertwo.email="zxcvbnm@gmail.com"
console.log(usertwo.email);
console.log(userone);


