const elHeader = document.getElementById('main-header');
const elTitle = document.getElementById('header-title');
const elContainer = document.querySelector('.container');
const elMain = document.querySelector('#main');
const elText = document.querySelector('.title');
const elForm = document.querySelector('.form-inline');
const elInput = document.querySelector('.form-control');
const elButton = document.querySelector('.btn');
const elItem = document.querySelector('.title1');
const elItems = document.getElementById('items');
var li = document.getElementsByTagName("li");
var a = document.getElementsByTagName("a");

console.log(elHeader);
elHeader.classList = 'text-white p-4 mb-3';
elHeader.style.background = " linear-gradient(120deg, rgba(190, 33, 5, 0.633), rgba(190, 40, 35, 0.633), rgba(109, 44, 33, 0.633))"
elTitle.innerHTML = '<h1>Sarlavha</h1>';
elTitle.classList = 'title';

console.log(elMain);
elMain.classList = 'card card-body ';
elText.classList = 'title';
elText.innerHTML = "<h2>Smth qo'shish</h2>";
elForm.classList = 'form-inline  mb-3';
elInput.classList = 'form-control mr-2 mb-3';
elButton.innerHTML = 'topshirish';
elButton.classList = 'btn btn-danger';
elButton.style.background = " linear-gradient(120deg, rgba(190, 33, 5, 0.633), rgba(190, 40, 35, 0.633), rgba(109, 44, 33, 0.633))";
elButton.style.border = "none";

elItem.innerHTML = 'Elementlar';
elItem.classList = 'title1';
elItems.classList = 'list-group';

for (let i = 0; i < li.length; i++){
    li[i].style.background = " linear-gradient(120deg, rgba(190, 33, 5, 0.633), rgba(190, 40, 35, 0.633), rgba(109, 44, 33, 0.633))";
}
for (let i = 0; i < a.length; i++){
    a[i].style.textDecoration = "none";
    a[i].style.color = "white";
    a[i].innerHTML = 'Element'
}