const save=()=>{
  let k= document.querySelector("#key").value;
  let v= document.querySelector("#value").value;
  localStorage.setItem(k,v);
}
const limpiar=()=>{
  localStorage.clear();
}