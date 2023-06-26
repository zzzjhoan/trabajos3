let peliculas=JSON.parse(localStorage.getItem("peliculas"));
if(!peliculas){  localStorage.setItem("peliculas",JSON.stringify([]));}
var add=document.querySelector("#agregar")
add.onclick=()=>{
    //RECOPILA DATOS
    let nombre=document.querySelector("#nombre").value;
    let precio=document.querySelector("#precio").value;
    let categoria=document.querySelector("#categoria").value;
    //VALIDAR DATOS
    if(nombre.trim()===''||precio.trim()===''||categoria.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'CAMPOS VACIOS',
            footer: 'TIENDITA CECYTO'
        })
        return;
    }
    let pelicula={nombre,precio, categoria}
    peliculas.push(pelicula);
    localStorage.setItem("peliculas",JSON.stringify(peliculas))
    document.querySelector("#formAdd").reset();
    document.querySelector("#addModalPelicula").click()
    mostrarPeliculas();
}

const mostrarPeliculas=()=>{
    var peliculasHTML="";
    peliculas=JSON.parse(localStorage.getItem("peliculas"))
    let i=1;
    peliculas.map(pelicula=>{
        peliculasHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4">
        <p><b>Nombre: </b>${pelicula.nombre}</p>
        <p><b>Precio: </b>$${pelicula.precio}</p>
        <p><b>Categoria: </b>${pelicula.categoria}</p>
        <button class="btn btn-danger" onclick="eliminarPelicula(${i})">Eliminar</button>
        </div>`
        
    })
    document.querySelector("#listPeliculas").innerHTML=peliculasHTML;
    mostrarCategorias();
}

const eliminarPelicula=(id)=>{
    Swal.fire({
        title: 'Estas seguro de eliminar pelicula?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
    }).then((result) => {
        if (result.isConfirmed) {
            peliculas=JSON.parse(localStorage.getItem("peliculas"))
            let peliculas2=new Array();
            let i=1
            peliculas.map(pelicula=>{
                if(i!=id){
                    peliculas2.push(pelicula)
                }
                i++;
            })
            localStorage.setItem("peliculas",JSON.stringify(peliculas2))
            mostrarPeliculas();         
        } else if (result.isDenied) {
            return;
        }
    })
}

const mostrarCategorias=()=>{
    var categoriasHTML="";
    categorias=JSON.parse(localStorage.getItem("categorias"))
    categorias.map(categoria=>{
        categoriasHTML+=`<option value="${categoria.nombre}">${categoria.nombre}</option>`;        
    })
    document.querySelector("#categoria").innerHTML=categoriasHTML;
}