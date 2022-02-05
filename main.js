const btnDOM=document.querySelector("#liveToastBtn")
const editDOM=document.querySelector("#task")
const ulDOM=document.querySelector("#list")

btnDOM.addEventListener('click',ekle)

function ekle() {
    if(editDOM.value!="") {
        console.log(editDOM.value)
        let diDOM=document.createElement("li")
        diDOM.innerHTML=editDOM.value
        ulDOM.appendChild(diDOM)
    }else{
        console.log("boş olamaz")
    }
    
}

