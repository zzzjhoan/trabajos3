let btnEvaluar=document.querySelector("#evaluar")
btnEvaluar.onclick=()=>{
  var correctas=[1,1,1,1,1,3,4,2,1,4,];
  var aciertos=0;
  for(i=1; i<=5; i++){
   let r1=document.querySelector("#p" +i+ "r1");
   let r2=document.querySelector("#p" +i+ "r2");
   let r3=document.querySelector("#p"+i+"r3");
  let r4=document.querySelector("#p" +i+ "r4");
  if(!r1.checked && !r2.checked && !r3.checked && !r4.checked  ){
    Swal.fire({  icon:'error',title:'Error', text:'Falta Seleccionar respuesta', foot:'Quiz' });
      return;
    }
    var correcta=document.querySelector("#p"+i+"r"+correctas[i-1]);
    if(correcta.checked){
      aciertos++;
    }
    if(aciertos>=3){
      Swal.fire({  icon:'success',title:'Aprobado', text:'Calificacion'+(aciertos*2), foot:'Quiz' });
    }else{
      Swal.fire({icon:'error',title:'No aprobado',text:'Calificacion'+(aciertos*2),footer:'Quiz'});
    }
  
    }
  }
  let btnBorrar=document.querySelector("#borrar");
btnBorrar.onclick=()=>{
  for(i=1; i<=10 ;i++){
    document.querySelector("#p"+i+"r1").checked=false;
    document.querySelector("#p"+i+"r2").checked=false;
    document.querySelector("#p"+i+"r3").checked=false;
    document.querySelector("#p"+i+"r4").checked=false;
    
  }
}