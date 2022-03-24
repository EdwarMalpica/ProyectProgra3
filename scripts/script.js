console.log("script Cargado")

const productos =[
    {nombre: "Laptop Lenovo IdeaPad S145-14AST negra onix 14, AMD A4-Series 9125 4GB de RAM 500GB HDD, AMD Radeon R3 1366x768px", valor: "$2.414.306", urlImg:"img/pc1.webp"},
    {nombre: "Laptop Dell Inspiron 3505 gris 15.6\", AMD Ryzen 5 3450U 16GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 60 Hz", valor: "$2.361.270", urlImg:"img/pc2.webp"},
    {nombre: "Laptop Dell Inspiron 3505 gris 15.6\", AMD Ryzen 5 3450U 16GB de RAM 256GB SSD, AMD Radeon RX Vega 8 60 Hz 1366x768px", valor: "$983.200", urlImg:"img/pc3.webp"},
    {nombre: "Laptop HP 255 G7 gris 15.6\", AMD Athlon 3020E 8GB de RAM 1TB HDD, AMD Radeon RX Vega 3 1366x768px FreeDOS", valor: "$2.169.000", urlImg:"img/pc4.webp"},
    {nombre: "Laptop Dell Inspiron 3505 plata 15.6\", AMD Ryzen 5 3450U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 8 60 Hz 1366x768px", valor: "$2.169.000", urlImg:"img/pc5.webp"},
    {nombre: "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Plata", valor: "$2.169.000", urlImg:"img/pc6.webp"},
    {nombre: "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Oro", valor: "$52.169.000", urlImg:"img/pc7.webp"},
    {nombre: "Portatil Hp 245 G7 Amd 3020e 14 4gb 1 Tera Linux Negro", valor: "$2.169.000", urlImg:"img/pc8.webp"},
    {nombre: "Computador Portatil Asus X543 Core I5 - 256gb Ssd 8gb Ram", valor: "$2.169.000", urlImg:"img/pc9.webp"},
    {nombre: "Laptop HP 245 G7 negra 14\", AMD 3020E 8GB de RAM 1TB HDD, AMD Radeon RX Vega 3 1366x768px Windows 10 Home", valor: "$2.169.000", urlImg:"img/pc10.webp"},
    {nombre: "Laptop Dell Inspiron 3505 negra 15.6\", AMD Ryzen 5 3450U 12GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 60 Hz", valor: "$2.169.000", urlImg:"img/pc11.webp"},
];

const form_buscar = document.querySelector("#buscador");
const boton_buscar = document.querySelector("#boton_buscar");
var resultados_busqueda = document.querySelector("#div_resultados_row1")

const filtrar =()=>{
    var count = 0;
    resultados_busqueda.innerHTML = "";
    //console.log(form_buscar.value);
    const texto = form_buscar.value.toLowerCase();
    console.log(texto);
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        
        if(nombre.indexOf(texto) !== -1){
            resultados_busqueda.innerHTML += ` <div class=\"col-4 \"m p > <li onclick = \"alertaCompra()\"><img src=\"${producto.urlImg}\" alt="" class="slider_img">${producto.nombre}- <br><h2>valor: ${producto.valor}</h2></li></div>`;
        }

    }
    if(resultados_busqueda.innerHTML ==""){
        resultados_busqueda.innerHTML += `<li> Producto no encontrado</li>`;
    }
}

boton_buscar.addEventListener('click',filtrar);
form_buscar.addEventListener('keyup', filtrar);

filtrar();

function alertaCompra(){
    alert("Producto no disponible");
}