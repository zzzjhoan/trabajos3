var empleo=document.querySelector("#empleo")
var horas=document.querySelector("#horas")
var anti=document.querySelector("#anti")
//EVENTOS
empleo.onclick=()=>{calcular ()}
horas.oninput=()=>{calcular ()}
anti.oninput=()=>{calcular()}
//FUNCION CALCULAR
const calcular=()=>{
  document.querySelector("#vhoras").innerHTML=horas.value;
    document.querySelector("#vanti").innerHTML=anti.value;
    let e=empleo.value;
    let h=parseFloat(horas.value)
    let a=parseFloat(anti.value)
    let sxh=0;
    switch (e){
   case  "GERENTE" : sxh=200;break;
      case  "JEFE" : sxh=150;break;
         case  "CAJERO" : sxh=100;break;
         
    }
    let sb=0;
    let extra=0
    if (h>40) {
      sb=40*sxh; 
      extra=(h-40)*3*sxh;
      
    } else {
      sb=h*sxh;
      
    }
   let p=document.querySelector("#perce");
   p.innerHTML=`<table class="w-100">
   <tr>
   <td>Sueldo base</td>
   <td>$ ${sb.toFixed(2)}</td>
   </tr>   
   <tr>
   <td>antigüedad</td>
   <td>$ ${(a*200).toFixed(2)}</td>
   </tr>
      <tr>
      <td>estimulo</td>
      <td>$ ${(sb*0.02).toFixed(2)}</td>
      </tr>
      <tr>
      <td>canasta basica</td>
      <td>$ ${(sb*0.45).toFixed(2)}</td>
      </tr>
            <tr>
            <td>extra</td>
            <td>$ ${(extra).toFixed(2)}</td>
            </tr>
            <tr>
            <td class="bg-warning text-white h2">TOTAL DE PERCEPCIONES</td>
            <td class="h2">$ ${(sb+(sb*0.02)+(sb*0.045)+extra+(a*200)).toFixed(2)}</td>

   </table>
   `
   let d=document.querySelector("#dedu");
   d.innerHTML=`<table class="w-100">
   <tr>
   <td>ISR</td>
   <td>$ ${(sb*1.16).toFixed(2)}</td>
   </tr>   
   <tr>
   <td>salud</td>
   <td>$ ${(sb*0.0465).toFixed(2)}</td>
   </tr>
      <tr>
      <td>sindicato</td>
      <td>$ ${(sb*0.011).toFixed(2)}</td>
      </tr>
      <tr>
      <td>afore</td>
      <td>$ ${(sb*061).toFixed(2)}</td>
      </tr>
            <tr>
            <td>cap . ind</td>
            <td>$ ${(sb*0.014).toFixed(2)}</td>
            </tr>
            <tr>
            <td class="bg-warning text-while h2">total de deducciónes </td>
              <td class="h2">$ ${((sb*1.16)+(sb*0.0465)+(sb*0.01)+(sb*0.061)+(sb*0.014)).toFixed(2)}</td>
              <tr>
            </table>
            `
       let n=document.querySelector("#neto");
       n.innerHTML=`<table class="w-100"> 
       <tr>
       <td class="h1">$ ${((sb+(sb*0.02)+(sb*0.045)+extra+(a*200))-((sb*1.16)+(sb*0.0465)+(sb*0.465)+(sb*0.061)+(sb*0.014))).toFixed(2)}</td>0
       </tr>
       </table>
       `
}

   document.querySelector("#reset").onclick=()=>{
     empleo.value="GERENTE"
     horas.value=1;
     anti.value=1;
     calcular();
   }