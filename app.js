// const object = {
//     message: 'Hello, World!',
//     logMessage() {              // Method to log the message
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage(), 1000);

// [1,2,3,4,5,6,7,999.8,9,100].reduce((max,el)=>{
//     if(max>el){
//         return max
//     }
//     else{
//         return el
//     }
// })


// let para=document.createElement('p');
// para.innerText="Hey I,am Red";
// document.querySelector("body").append(para);
// para.classList.add("red");
// console.dir(para);


// let heading=document.createElement("h3");
// heading.innerText="I am Blue";
// document.querySelector("body").append(heading);
// heading.classList.add("blue");

// let div=document.createElement("div");
// let heading1=document.createElement("h1");
// let para1=document.createElement("p");
// heading1.innerText="i am a div";
// para1.innerText="Mee too";
// div.appendChild(heading1);
// div.appendChild(para1);
// div.classList.add("bgc");
// document.querySelector("body").append(div);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum=(arr)=>{
//     let sum=0;
    
//     for(let i =0;i<arr.length;i++){
//         arr[i]=(arr[i])**2;
//         sum=sum+arr[i];
//     }
//     let avg=sum/(arr.length);
//     console.log(sum);
//     console.log(avg);
// }

let btn=document.querySelector("button");
function randomclr(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let random=randomclr();
    h3.innerText=random;
    let div=document.querySelector("div");
    div.style.backgroundColor=random;
    console.log(random);
});


