const para = document.querySelector('#paara');
para.innerText = "hello sir ! I am khaista rahman from pakistan swat";

const newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
newbtn.style.color = "black";
newbtn.style.backgroundColor = "white";

para.after(newbtn);
console.log("hello sir! i am shahid zada");


