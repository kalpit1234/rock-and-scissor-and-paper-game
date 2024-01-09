// console.log("kalpit");
// a=4;
// b=6;

// console.log(a**b);

// a=5;
// b=4;

// console.log("a--",a--)
// console.log(a)
//== and === ,, == checks the two vlaue comparsion and === also checks the two vlaue but in strict manner nad it also checks the datattype of two no.

// a=5;
// b=5
// console.log(a===b);
//logical and menas both the statement has to be true
// a=5;
// b=9;
// let cond1=a<b;
// let cond2=a<b;
//  console.log(cond1 && cond2);


// a=6;
// b=6;
// let cond1=a<b;
// let cond2=a===b;
// console.log("cond1||cond2",cond1||cond2);


// let color;
// if(mode=="dark-mode"){
//     color="Black";
// }
// const a=prompt("Enter the even and odd values");
// if(a%2===0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


// let mode="dark";
// let color;
// if(mode=="dark"){
//     color="blue";
// }
// else if(mode=="light"){
//     color="green";
// }
// else if(mode=="dimenish"){
//     color="red";
// }
// else{
//     color="byy"
// }
// console.log(color)



// let age=alert("Enter the age according to the condition");
// let result=age>=12?"adult":"not adullt";

// console.log(result);


// for(let i=0;i<=5;i++){
//     console.log("kalpit is great");
// }
// console.log("kalpit is goat");



// let sum=0;
// let n=prompt("Enter the number")
// for(let i=1;i<=n;i++){
//     console.log(i);
// }


// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let name="kalpitmathur";
// let size=0;
// for(let i of name){
//     console.log(i);
//     size++;
// }
// console.log("size of string is",size);


// let students={
//     name:"kalpit",
//     class:"9th",
//     lived:"jaipur",
//     citizenship:"india"
// };
// for(let i in students){
//     console.log(i,":",students[i]);
// }
// let name="kalpit";
// for(let i of name){
//     console.log(i);
// }
///for-of we an identify chararcter-by char value.
///for-in we can identify key value pairs in javascript.


// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }  
// }

// let valueset=45;
// let a=prompt("Enter the corrected value");
// if(a==valueset){
//     console.log("well done ");
// }
// else{
//     while(a!=valueset){
//         prompt("again pllzz");
//     }
// // }
// let student={
//     name:"kalpit",
//     height:154,
//     age:21,
//     personal:'information'
// };
// console.log(`name of student is ${student.name} and height is ${student.height} and age is ${student.age} and personal is ${student.personal}`);
// let name="apana college";
// console.log(name.replace("college","apanm"));


// let user=prompt("Enter the username\n");
// console.log(`@${user}${user.length}`);

// let marks=[45,78,66,89,90];
// marks[2]=99
// console.log(marks);
// let str="heelo";//str is immutable it does not change in javascript
// str[2]='y';
// console.log(str);

// let marks = [45, 78, 66, 89, 90];
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// let student={
//     name:"kalpit"
// };
// for(let i in student){
//     console.log(i,student[i]);
// }

// let name=["kalpit","pulkit","bhavya","paapp"];
// for(let i of name){
//     console.log(i.toUpperCase());
// }
// let arr=[85,97,44,37,76,60];
// let avg=0;
// for(let i=0;i<arr.length;i++){
//     avg+=(arr[i])/arr.length;
// }
// console.log(avg);




// let arr=[85,97,44,37,76,60];
// let avg=0;
// for(let i of arr){
//     avg+=i;
// }
// let totalavg=avg/arr.length;
// console.log(totalavg);

// let arr=[250,645,300,900,50];
// for(let i=0;i<arr.length;i++){
//     base_value=arr[i]/100*10;
//     arr[i]=arr[i]-base_value;
//     console.log(`the final_value after offer is ${arr[i]}`);
//
/*array*/
//array methods:
//push end from delete
// let name=["kalpit","pulkit","chips","banna"];
// console.log(name.push("harsh"));
//pop//delete from the end
// let name=["kalpit","pulkit","chiku"]
// name.pop()
// console.log(name);
// tostring
// let name=["kalpit","ll","mmm"];
// console.log(name.toString());
//concat
// let name=["kalpit","pulkit","pappu","kp"];
// let kal=["kk","ii","ppp","t"];
// let ww=name.concat(kal);
// console.log(ww);
// console.log(name)
// let name=["kalpit","pulkit","pappu","kp"];
// console.log(name.slice(1,5));
// console.log(name);
//splice
// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.shift();
// console.log(arr);
// arr[2]=arr[2].delete();
// console.log(arr);
// function Sum(a,b){
//     let sum=a+b;
//     return sum;
// }
// let nam=Sum(2,3);
// console.log(nam);
// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.shift();
// console.log(arr);
// arr.splice(1,1,"ola");
// console.log(arr);
// arr.push("amazon");
// console.log(arr);




// let name="kalpitmathur";
// let size=0;
// for(let i of name){
//     console.log(i);
//     size++;
// }
// console.log(size);b

//basics of function
// function sum(a,b){
//     c=a+b;
//     return c;
// }
// b=sum(5,6);
// console.log(b);
// let sum=(a,b)=>{
//     c=a+b;
//     console.log(c);
// }
// sum(5,6);


// let mul=(a,b)=>{
//     c=a*b;
//     return c;
// }
// b=mul(5,6)
// console.log(b);


// let s=()=>{
//     console.log("hello world");
// }
// s();


// let vowel=(str)=>{
//     let count=0;
//     for(let i of str){
//         if(i=='a'||i=='e'||i==='i'||i==='o'||i==='u'){
//             count++;
//         }

//     }
//     console.log(count);
// }
// vowel("apnacollege");



// function myfun(){
//     console.log("kalpit is sexy")
// }
// function kaps(myfun){
//     return myfun;
// }

// //for each
// let arr=["kalpit","harsh","govind","mahadev","bolebaba"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });



// let square=[1,4,5];
// square.forEach(function double(val){
//         square=val*val;
//     console.log(square);
// });
//map
// let arr=[1,2,4];
// let newarr=arr.map(function val(val){
//     return val*val;
// });
// console.log(newarr)
//filter
// let arr=[1,2,43];
// let a=arr.filter(function even(val){
//     return val%2!=0
// })
// console.log(a);

//reduce

// let arr=[1,2,3,5];
// let average=arr.reduce(function perform(res,current){
//     return res+current;
// });
// console.log(average/2);


// let arr=[87,93,64,99,86];
// let newarr=arr.filter(function marks(val){
//     return val>90;
// })
// console.log(newarr);
// let n=prompt("enter the size of array\n");
// let arr=[];
// let sum=0;
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)
// let sums=arr.reduce(function add(res,current){
//     return res+current;
// })
// console.log(sums)
// let product=arr.reduce(function pro(res,curent){
//     return res*curent;
// })
// console.log(product);
// function checkarray(){
//     let n=[1,2];
//     if(Array.isArray(n)){
//         return true;
//     }
//     else{
//         return false;
//     }heading
// }
// let array=checkarray();
// console.log(array);
//if u want to check the array then use the function Array.isArray()

// is_array=function arr(input){
//     if(toString.call(input)==="[object Array]"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(is_array([122,444]));


// console.dir(document.body);
// let buttons=document.getElementById("button");
// console.dir(buttons);
// let heading=document.getElementsByClassName("myclass");
// console.dir(heading);
// console.log(heading);
// let parahas=document.getElementsByTagName("p");
// console.log(parahas);
// let first_para=document.querySelector("p");
// console.dir(first_para);//first paragraph return
// let all_paragraph=document.querySelectorAll("p");
// console.dir(all_paragraph);//queryselectorall returns nodelist.
// let classes=document.querySelector(".myclass");
// console.dir(classes);
// let a=document.querySelector("div");
// console.dir(a);
// let heading=document.querySelector("H1");
// console.log(heading);
// let heading=document.querySelector("h2");
// console.log(heading.innerText)
// heading.innerText=  heading.innerText + "apna college"
// console.log(heading.innerText)

// heading=document.querySelectorAll(".box")
// let index=1;(
// for(let i of heading){
//     i.innerText=`unique text ${index}`;
//     index++;
// }
// let u=document.getElementById("id")
// console.dir(u.innerText)
// let ur=document.querySelectorAll("class")
// console.log(ur.innerText)
// let heading=document.querySelectorAll("div");
// for(let i of heading){
//     let classes=i.setAttribute("class","newclass");
//     console.log(classes)
// }

// let id=document.getElementById("para")
// console.log(id)
// let styles=id.style
// console.log(styles)

// let div=document.querySelector("div");(
// console.log(div)
// div.style.backgroundColor="blue"
// div.style.fontSize="20px"
// div.innerText="kalpit is great"
// let heading=document.querySelector("div");
// heading.style.fontSize="100px"
// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// console.log(newbtn);
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// document.querySelector("body").append(newbtn);
// let newbtn=document.createElement("button");
// newbtn.innerText="click me once again!"
// // console.log(newbtn);
// let p=document.querySelector("button\n");
// // console.log(p);
// p.after(newbtn)
// // p.classList.add("newclass")
// // newbtn.classList.add("hello")
// // newbtn.classList.add("color")\

// let div=document.querySelector("div");
// // div.onmouseover=(e)=>{
// //     console.log(e);
// //     console.log(e.type)
// //     console.log(e.target)
// // };
// div.addEventListener("click",(evt)=>{
//     console.log("kalpit is great!");
//     console.log(evt.target);
// })
// let btn2=document.createElement("button");
// btn2.innerText="click plz!"
// console.log(btn2)
// let b=document.querySelector("#kalpit");
// console.log(b);
// b.before(btn2);
// b.addEventListener("click",(evt)=>{
//     console.log("hello guys!")
// })
// btn2.addEventListener("click",(evt)=>{
// console.log("daisy shah!");
// console.log("hello bro!");
// console.log("3 rade film!");
// console.log(evt.target);
// })
// b.classList.add("newclass","harsh");
// btn2.classList.add("kaps");
// let g=document.createElement("button");
// g.innerText="clicks me plzz!"
// console.log(g);
// btn2.before(g);
// g.classList.add("newclass","harsh","kaps");
// let btn1=document.querySelector("#kalpit")
// let p=document.querySelector(".kalpit");
// let mode="light";
// btn1.addEventListener("click",()=>{
//     if(mode=="light"){
//         mode="dark";
//         document.querySelector("body").style.backgroundColor="black"
//         document.querySelector("p").classList.add("kalpit")
//     }
//     else{
//         mode="light"
//         document.querySelector("body").style.backgroundColor="white"
//         document.querySelector("p").classList.add("mohan")
//     }
//     console.log(mode);
// })
// let modes="light"


let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
let userscore=document.querySelector("#user-score");
let computerscore=document.querySelector("#comp-score");
let showwinner=(userwin,userchoice,computeruser)=>{
    if(userwin){
        console.log("you win!");
        msg.innerText=`You won ${userchoice} beats ${computeruser}`
        msg.style.backgroundColor="green"
        userscore.innerText++;

    }
    else{
        console.log("you lose");
        msg.innerText="You lose the game!"
        msg.style.backgroundColor="red"
        computerscore.innerText++;

    }
}
let draw=()=>{
    console.log("game was drawn!");
    msg.innerText="game was drawn!"
    msg.style.backgroundColor="#081b31"
}
let compuser=()=>{
    let options=["rock","paper","scissors"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
let playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    let computeruser=compuser();
    console.log("comp-user",computeruser);
    if(userchoice==computeruser){
        draw();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock"){
            userwin=computeruser==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=computeruser==="scissor"?false:true;
        }
        else{
            userwin=computeruser==="rock"?false:true;
        }
        showwinner(userwin,userchoice,computeruser);
    }
}

choice.forEach(choices=>{
    choices.addEventListener("click",()=>{
    const userchoice=choices.getAttribute("id");
    playgame(userchoice);

    })
});
