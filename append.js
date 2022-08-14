//1.where to be added
const listplace = document.getElementsByClassName('list');

//2.what to be added
const li = document.createElement('li');
li.innerText = 'greece';

//3.add the child
listplace[0].appendChild(li);

//1.where to be added
const mainContainer = document.getElementById('main-cont');

//2.what to b added
const sectionLast = document.createElement('section');
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

h1.innerText = "The companies I wanna work for";
li1.innerText = "Meta";
li2.innerText = "Amazon";
li3.innerText = "Apple";
li4.innerText = "Netflix";
li5.innerText = "Google";

//3.append the child
sectionLast.appendChild(h1);
sectionLast.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
mainContainer.appendChild(sectionLast);

//append sections and nodes directly
const lastNode = document.createElement('section');
lastNode.innerHTML = `
<h1>My hobbies</h1>
    <ul>
        <li>astrophography</li>
        <li>skyPhography</li>
        <li>drawing</li>
        <li>making things</li>
        <li>riding motorcycle</li>
        <li>riding cycle</li>
        <li>sky diving</li>
        <li>adventure tour</li>
    </ul>
`
mainContainer.appendChild(lastNode);