//? DEFININDO ITENS 
const sidebar = document.getElementById("left-sidebar");
const menuBtn = document.getElementById("menuBtn")
const overlay = document.getElementById("overlay")

//EVENTO DE CLIQUE NO BOTÃO DE MENU
menuBtn.onclick = ()=>{
    sidebar.classList.toggle('activate')
    overlay.classList.toggle('hidden')
};

overlay.onclick = ()=>{
    sidebar.classList.toggle('activate')
    overlay.classList.toggle('hidden')
}