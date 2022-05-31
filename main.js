

// console.log(typeof document.getElementById('title'));
// let title = document.getElementById('title');
// let list = document.getElementsByTagName('ul');
// let items = document.getElementsByClassName('item')
// let inp = document.getElementsByName('inp-name')
// console.log(inp);

// let title = document.querySelector('#title')
// let list = document.querySelectorAll('ul');
// let items = document.querySelectorAll('.item')
// let inp = document.querySelectorAll('[name="inp-name"]')
// console.log(inp);

// console.log(list);

// console.log(title);
// console.log(items);

// let items = document.getElementsByClassName('item')
// let items2 = document.querySelectorAll('.item')
// let list = document.getElementsByTagName('ul')
// list[0].innerHTML += '<li class="item">New elem</li>'
// console.log(list);
// for (let i = 0; i < items.length; i++){
//     console.log(items2[i]);
    
// }

// console.log(items);
// console.log(items2);

// let example = document.getElementById('hello')
// // console.log(example.innerHTML);
// example.innerText = 'new data'
// console.log(example.innerText);

// let blocks = document.getElementsByName('div')
// console.log(blocks);

// let inp = document.getElementsByName('phone')
// console.log(inp);

// let btn = document.querySelector('#btn')
// let blocks = document.querySelectorAll('.blocks')
// let blocks2 = document.querySelectorAll('div')
// let inp = document.querySelectorAll('[name="phone"]')
// console.log(btn);
// console.log(blocks);
// console.log(blocks2);
// console.log(inp);


// let container = document.getElementById('container');
// // console.log(container);
// container.innerText = 'hello'
// container.innerHTML = "<h1>hgsdvfbsjdfmsd</h1>"
// container.style.fontSize = '24px'
// console.log(document.body);
// document.body.style.background = "black"



// let container = document.getElementById('container');
// for(let i = 1; i <= 10; i++){
//     let block = document.createElement("div")
//     block.style.width = "100px"
//     block.style.height = "100px"
//     block.style.backgroundColor = "green"
//     block.style.margin = "10px"
//     container.append(block)
// }



let blocks1 = document.querySelectorAll(".blocks")
//! NodeList - static - один раз обращается к элементам и больше не следит за ними
let blocks2 = document.getElementsByClassName("blocks")
//! HTMLCollection - dinamic - постоянно следит за элементами и видит изменения
blocks1[0].remove()
console.log(blocks1)
console.log(blocks2)

let inp = document.getElementById('inp')
console.log(inp);
inp.setAttribute("placeholder", "search...")
inp.classList.add('newClass')
inp.classList.add('newClass2')     //добавляет
inp.classList.remove('newClass')  //удаляет
inp.classList.toggle('new-class3')  //удаляет если есть, добавляет, если нет (классы)

