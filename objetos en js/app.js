const save=()=>{
let marca=document.querySelector("#marca").value;
let modelo=document.querySelector("#modelo").value;
let año=document.querySelector("#año").value;
let color=document.querySelector("#color").value;
let auto={marca,modelo,año,color}
localStorage.setItem("auto",JSON.stringify(auto));

const limpiar=()=>{
  localStorage.clear();
}
}