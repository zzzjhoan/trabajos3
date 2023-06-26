let autos=JSON.parse(localStorage.getItem("autos"));
if (!autos){
  localStorage.setItem("autos",JSON.stringify([]))
}
var add = document.querySelector("#agregar")
add.onclick=()=>{
  let marca =document.querySelector("#marca").value;
let modelo =document.querySelector("#modelo").value;
let año =document.querySelector("#año").value;
let color =document.querySelector("#color").value;
if(marca.trim()===''||modelo.trim()===''||año.trim()===''||color.trim()===''){
  Swal.fire({
    icon:'error',
    title:'ERROR',
    text:'Campos vacios',
    footer:'CECYTEM 2023'
  })
  return;
  }
  let auto={marca,modelo,año,color}
autos.push(auto);
localStorage.setItem("autos",JSON.stringify(autos))
document.querySelector("#add").reset();
document.querySelector("#addModalAuto")
}
const mostrarAutos=()=>{
  var autosHTML="";
  autos=JSON.parse(localStorage.getItem("autos"))
  let i=1;
  autos.map(auto=> {
    autosHTML+=`<div class="card bg-white text-dark w-50 m-auto mb-2 p-4">
    <p><b>Marca: </b>${auto.marca}</p>
    <p><b>Modelo: </b>${auto.modelo}</p>
    <p><b>Año: </b>${auto.año}</p>
    <p><b>Color: </b>${auto.color}</p>
   <button class="btn btn-danger" onclick="eliminarAuto(${i})">eliminar</button>
    </div>`
 
})
document.querySelector("#listAutos").innerHTML=autosHTML;
}
const eliminarAuto=(id)=>{
  Swal.fire({
    title: 'Estas seguro de eliminar Auto?',
    showDenyButton: true,
    confirmButtonText: 'si',
    denyButtonText: `no`,
  }).then((result) => {
    if (result.isConfirmed){
      autos=JSON.parse(localStorage.getItem("autos"))
      let autos2=new Array();
      let i=1
      autos.map(auto=>{
        if(i!=id){
          autos2.push(auto)
        }
        i++;
    })
    localStorage.setItem("autos",JSON.stringify(autos2))
    mostrarAutos();
  }else if (result.isDenied){
    return;
  }
})
}