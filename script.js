var bookaddBtn = document.querySelector('.pop-btn')
var showdow = document.querySelector(".backshodow-continer")
var bookadd = document.querySelector(".keynote")

// show the adding booksky ans removing

bookaddBtn.addEventListener("click",function(){
    showdow.style.display = 'block'
    bookadd.style.display = 'block'
})

var cencelbtn = document.querySelector('.cancel-btn')

cencelbtn.addEventListener('click',function(){
    showdow.style.display = 'none'
    bookadd.style.display = 'none'
})

// adding booksky notes

var bodyofthcontent = document.querySelector("body")
var addbtn =  document.querySelector(".add-btn")
var pagetitle = document.getElementById("title")
var pagetitleusername = document.getElementById("titleusername") 
var pagetitleofcontent = document.getElementById("titleofcontent") 

addbtn.addEventListener('click',function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute('class','outer-continer')
    div.innerHTML =`<div class="inner-continer">
    <h2>${pagetitle.value}</h2>
    <h3>${pagetitleusername.value}</h3>
    <p>${pagetitleofcontent.value}</p>
    <button class="delete" onclick='ans(event)' >delete</button>
    </div>`
    bodyofthcontent.append(div)

    showdow.style.display = 'none'
    bookadd.style.display = 'none'
})

function ans(event){
    event.target.parentElement.parentElement.remove()
}

