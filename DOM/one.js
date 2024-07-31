
// document.getElementById;
// document.getElementsByClassName;
// document.getElementsByName;
// document.getElementsByTagName;
// document.getElementsByTagNameNS;
// document.getAttribute();// this is use for know the class name .
// document.setAttribute();// this is use for set class or change class name .
// // this is the simple methods but we always use this .
// document.querySelector();
// document.querySelectorAll();

//=====================================================

let item = document.querySelector('.heading');// select by class name .
item.style.color = "green";


let item2 = document.querySelector('#shahid');// select by id name .
item2.style.color = 'red'

let item3 = document.querySelector("p");// select by tag name .
item3.style.color = 'pink'


// if we want to select all tags and apply same color or same background we use this . and also apply forEach loop.

let allitems = document.querySelectorAll("h1");// intersting and very important thing in DOM . 
allitems.forEach( (item) => {
    item.style.color = 'black'
    item.style.backgroundColor = "white"
    item.style.padding = "20px";
    item.style.fontSize = '52px'
})

//============================================================


let para = document.querySelector("p");
para.innerHTML = "i am iron man"// if we use this innnerHTML in console this will be give us all content of html with tags.but still that can be change the text of paragraph

let para2 = document.querySelector('p');
para2.innerText = "i am thor"// if we use this innnerText in console this will be give us only visible text of this content without tags . but still that can be change the text of paragraph.

let para3 = document.querySelector('p');
para3.innerContent = "i am thanos"// if we use this innnerContent in console this will be give us  invisible text of this content without tags .

//===============================================================

let btn = document.querySelector('button');
btn.setAttribute("id" , "baton");// if a without class or id this will be add class or id with name .

