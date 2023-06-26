let peliculas=JSON.parse(localStorage.getItem("peliculas"));
if(!peliculas){  localStorage.setItem("peliculas",JSON.stringify([]));}

const mostrarPeliculas=(categoria)=>{
    var peliculasHTML="";
    peliculas=JSON.parse(localStorage.getItem("peliculas"))
    let i=1;
    if(categoria=="0"){
        peliculas.map(pelicula=>{       
            if(i%2==1){peliculasHTML+=`<div class="row W-50">`}
            peliculasHTML+=`<div class="col">
                            <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                <img src="img.png" width="100%">
                                <p><b>${pelicula.nombre.toUpperCase()}</b></p>
                                <p><b>$${pelicula.precio}</b></p>
                                <button class="btn btn-primary" onclick="comprarPelicula(${i})">Comprar</button>
                            </div>
                            </div>`
            if(i%2==0){peliculasHTML+=`</div>`}
            i++;
        })
        }else{
            peliculas.map(pelicula=>{                
                if(categoria==pelicula.categoria){
                    if(i%2==1){peliculasHTML+=`<div class="row W-50">`}
                peliculasHTML+=`<div class="col">
                                <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                    <img src="img.png" width="100%">
                                    <p><b>${pelicula.nombre.toUpperCase()}</b></p>
                                    <p><b>$${pelicula.precio}</b></p>
                                    <button class="btn btn-primary" onclick="comprarPelicula(${i})">Comprar</button>
                                </div>
                                </div>`                          
                    if(i%2==0){peliculasHTML+=`</div>`}
                    i++;
                }                
            })
        }
    document.querySelector("#listPeliculas").innerHTML=peliculasHTML;
}
const mostrarCategorias=()=>{
    var categoriasHTML="";
    categorias=JSON.parse(localStorage.getItem("categorias"))
    categoriasHTML+=`<option value="0">TODAS</option>`; 
    categorias.map(categoria=>{
        categoriasHTML+=`<option value="${categoria.nombre}">${categoria.nombre}</option>`;        
    })
    document.querySelector("#categoria").innerHTML=categoriasHTML;
}

