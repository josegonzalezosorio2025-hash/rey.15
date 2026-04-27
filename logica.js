let numero1=document.getElementById("numero1")
let numero2=document.getElementById("numero2")
let cantidad=document.getElementById("cantidad")
let boton=document.getElementById("boton")
let n=0
let n1
let n2

boton.addEventListener("click", suma)

function suma(){
   n1=Number(numero1.value)
   n2=Number(numero2.value)

n=n1+n2

cantidad.textContent=n

}