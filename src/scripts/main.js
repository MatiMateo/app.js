import {productos} from './productos.js'

document.addEventListener('DOMContentLoaded', () => { traerProductos()})
document.addEventListener('DOMContentLoaded', () => { renderizarCarrito()})

// Interfaz
const contenedorTarjProd = document.getElementById('contenedorCatalogo')
const traerProductos = async() => {
    try{
        const response = await fetch('./productos.json');
        const prods = await response.json();
        contenedorTarjProd.innerHTML = ''
        prods.forEach( producto => {
            const prod = document.createElement('div');
            prod.classList.add('w-[100%]');
            prod.innerHTML = `<div id="tarjProducto" class= flex font-sans bg-white rounded-lg shadow-lg">
                                    <div class="relative flex-none w-48">
                                        <img src="${producto.img}" alt="Imagen"
                                            class="producto--image absolute inset-0 object-cover w-full h-full" loading="lazy" />
                                    </div>
                                    <form class="flex-auto p-6">
                                        <div class="flex flex-wrap">
                                            <h1 class="producto--name flex-auto text-lg font-semibold text-slate-900">
                                                ${producto.name}
                                            </h1>
                                            <div class="producto--price text-lg font-semibold text-slate-500">
                                                $${producto.price}
                                            </div>
                                            <div class="producto--despcription flex-none w-full mt-2 text-sm font-medium text-slate-700">
                                                ${producto.description}
                                            </div>
                                        </div>
                                        <div class="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">
                                            <div class="flex space-x-2 text-sm">
                                                <label>
                                                    <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                                                    <div
                                                        class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                        XS
                                                    </div>
                                                </label>
                                                <label>
                                                    <input class="sr-only peer" name="size" type="radio" value="s" />
                                                    <div
                                                        class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                        S
                                                    </div>
                                                </label>
                                                <label>
                                                    <input class="sr-only peer" name="size" type="radio" value="m" />
                                                    <div
                                                        class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                        M
                                                    </div>
                                                </label>
                                                <label>
                                                    <input class="sr-only peer" name="size" type="radio" value="l" />
                                                    <div
                                                        class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                        L
                                                    </div>
                                                </label>
                                                <label>
                                                    <input class="sr-only peer" name="size" type="radio" value="xl" />
                                                    <div
                                                        class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                        XL
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="flex mb-6 space-x-4 text-sm font-medium">
                                            <div class="flex flex-auto space-x-4">
                                                <button id="${producto.id}" class="addToShoppingCart h-10 px-6 font-semibold text-white bg-black border rounded-md"
                                                    type="button">
                                                    Al Carrito
                                                </button>
                                            </div>
                                            <button
                                                class="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200"
                                                type="button" aria-label="Like">
                                                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p class="text-sm text-slate-700">
                                            Envíos a todo el país.
                                        </p>
                                    </form>
                                </div>`
            contenedorTarjProd.appendChild(prod);
            const btnAlCarrito = document.getElementById(producto.id)
            btnAlCarrito.addEventListener('click', agregarAlCarrito) 
        })
    } catch (error) {
        console.log(error);
    }
}

// Ver y ocultar Categorías
const contenedorCategorias = document.getElementById('contenedorCategorias')
const buscadorCategorias = document.getElementById('categorias')
const catgs = document.createElement('div')
const verCategorias = () => {
    catgs.classList.add('mb-2','border-t-2','border-b-2','border-b-gray-400','border-t-gray-400','text-center','text-gray-400', 'block')
    catgs.innerHTML = `1-Camperas, 2-Gorros, 3-Jeans, 4-Remeras, 5-Sweaters, 6-Tops`
    contenedorCategorias.appendChild(catgs)
}
const ocultarCategorias = () => catgs.remove()
buscadorCategorias.addEventListener('mouseover', verCategorias)
buscadorCategorias.addEventListener('mouseout', ocultarCategorias)

//Boton Buscar y Filtrar
const filtrarProds = (category) => {
    const prodFiltrados = productos.filter(Element => Element.id == category)
    prodFiltrados.forEach( producto => {
        contenedorTarjProd.innerHTML = ``;
        const prod = document.createElement('div');
        prod.classList.add('w-[100%]');
        prod.innerHTML = `<div class="flex font-sans bg-white rounded-lg shadow-lg">
                            <div class="relative flex-none w-48">
                                <img src="${producto.img}" alt="Imagen"
                                    class="absolute inset-0 object-cover w-full h-full" loading="lazy" />
                            </div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                    <h1 class="flex-auto text-lg font-semibold text-slate-900">
                                        ${producto.name}
                                    </h1>
                                    <div class="text-lg font-semibold text-slate-500">
                                        $${producto.price}
                                    </div>
                                    <div class="flex-none w-full mt-2 text-sm font-medium text-slate-700">
                                        ${producto.description}
                                    </div>
                                </div>
                                <div class="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">
                                    <div class="flex space-x-2 text-sm">
                                        <label>
                                            <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                                            <div
                                                class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                XS
                                            </div>
                                        </label>
                                        <label>
                                            <input class="sr-only peer" name="size" type="radio" value="s" />
                                            <div
                                                class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                S
                                            </div>
                                        </label>
                                        <label>
                                            <input class="sr-only peer" name="size" type="radio" value="m" />
                                            <div
                                                class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                M
                                            </div>
                                        </label>
                                        <label>
                                            <input class="sr-only peer" name="size" type="radio" value="l" />
                                            <div
                                                class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                L
                                            </div>
                                        </label>
                                        <label>
                                            <input class="sr-only peer" name="size" type="radio" value="xl" />
                                            <div
                                                class="flex items-center justify-center rounded-lg w-9 h-9 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                                XL
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="flex mb-6 space-x-4 text-sm font-medium">
                                    <div class="flex flex-auto space-x-4">
                                        <button id="${producto.id}" class="addToShoppingCart h-10 px-6 font-semibold text-white bg-black border rounded-md"
                                            type="button">
                                            Al Carrito
                                        </button>
                                    </div>
                                    <button
                                        class="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200"
                                        type="button" aria-label="Like">
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                </div>
                                <p class="text-sm text-slate-700">
                                    Envíos a todo el país.
                                </p>
                            </form>
                            </div>`
        contenedorTarjProd.appendChild(prod);
        let btnAlCarrito = document.getElementById(producto.id)
        btnAlCarrito.addEventListener('click', agregarAlCarrito)
    })
}
const btnBuscar = document.getElementById('btnBuscar')
btnBuscar.addEventListener('click', (e) => {
    const category = document.getElementById('categorias').value;
    if (category != 0) {
    filtrarProds(category)
}else {
    traerProductos();
}
    e.preventDefault();
})

// Carrito Lateral

const btnCarrito = document.getElementById('btnCarrito')
const contenedorCarrito = document.getElementById('contenedorCarrito')
const ocultarCarrito = document.getElementById('ocultarCarrito')
const verCarrito = (e) => {
    btnCarrito.classList.replace('block', 'hidden')
    contenedorCarrito.classList.replace('hidden', 'block')
    e.preventDefault()
    
}
btnCarrito.addEventListener('click', verCarrito)
const cerrarCarrito = (e) => {
    btnCarrito.classList.replace('hidden', 'block')
    contenedorCarrito.classList.replace('block', 'hidden')
    e.preventDefault()
}
ocultarCarrito.addEventListener('click', cerrarCarrito)

let carrito
const carritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))   
}

const productosEnCarrito = document.getElementById('productoEnCarrito')


const agregarAlCarrito = (e) => {
    const producto = productos.find(element => element.id === parseInt(e.target.id))
    const verifprodEnCarrito = carrito.find(element => element.id == producto.id)
    const productoEnCarrito = carrito.find(element => element.id === producto.id)
    if (producto.stock <= 0 || verifprodEnCarrito != undefined && productoEnCarrito.cantidad >= producto.stock) {
       return Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `No nos quedan en stock ${producto.name} por el momento`,
            showConfirmButton: false,
            timer: 2000
          })
    } else if(carrito.some(element => element.id === producto.id)) {
        productoEnCarrito.cantidad++
        renderizarCarrito()
    } else {
        carrito.push(producto)
        carrito.find(element => element.id === producto.id).cantidad++
        
    productosEnCarrito.innerHTML = ''
        const prodEnCarrito = document.createElement('div')
        prodEnCarrito.classList.add('flex', 'h-24', 'w-full', 'items-center', 'border-t-2', 'border-b-2', 'border-t-gray-500', 'border-b-gray-500', 'mb-2')
        prodEnCarrito.setAttribute('id', 'prodEnCarrito')
        prodEnCarrito.innerHTML =
        `<div class="w-1/5 h-full">
            <img src="${producto.img}" alt="campera-verde" class="px-1 py-1 object-cover w-full h-full rounded-lg">
        </div>
        <div class="flex flex-col px-1 py-2 w-3/8">
            <div class="text-lg font-semibold">
                <h1>${producto.name}</h1>
            </div>
            <div class="text-sm font-semibold">
                <h2>${producto.description}</h2>
            </div>
            <div class="text-lg font-semibold">
                <h1>$${producto.price}</h1>
            </div>
        </div>
        <div id="cantidadProducto" class="flex w-1/5 items-center justify-center py-2 px-1">
            <div id="cantidadProducto" class="flex justify-center items-centerw-14 h-8 text-center px-1 py-1 font-semibold">${producto.cantidad}</div>
        </div>
        <div class="flex w-1/5 justify-center items-center">
            <button id="quitarProducto" name="${producto.id}" class="flex items-center justify-center w-16 h-8 left-3 top-2 bg-blue-800 rounded-full text-gray-200 font-bold text-center">Quitar</button>
        </div>
        <div class="flex w-1/5 justify-center items-center py-2 px-1">
            <div id="subtotal" class="precioSubtotal flex justify-center items-centerw-14 h-8 text-center px-1 py-1 font-semibold">$${producto.price*producto.cantidad}</div>
        </div>`
            productosEnCarrito.appendChild(prodEnCarrito)
            renderizarCarrito()
    }
    carritoStorage()
    
}

const renderizarCarrito = () => {
    productosEnCarrito.innerHTML = ''
    for (const producto of carrito) {
        const prodEnCarrito = document.createElement('div')
        prodEnCarrito.classList.add('flex', 'h-24', 'w-full', 'items-center', 'border-t-2', 'border-b-2', 'border-t-gray-500', 'border-b-gray-500', 'mb-2')
        prodEnCarrito.setAttribute('id', 'prodEnCarrito')
        prodEnCarrito.innerHTML =
            `<div class="w-1/5 h-full">
                <img src="${producto.img}" alt="campera-verde" class="px-1 py-1 object-cover w-full h-full rounded-lg">
            </div>
            <div class="flex flex-col px-1 py-2 w-3/8">
                <div class="text-lg font-semibold">
                <h1>${producto.name}</h1>
                </div>
                <div class="text-sm font-semibold">
                <h2>${producto.description}</h2>
            </div>
            <div class="text-lg font-semibold">
                <h1>$${producto.price}</h1>
            </div>
            </div>
            <div id="cantidadProducto" class="flex w-1/5 items-center justify-center py-2 px-1">
                <div id="cantidadProducto" class="flex justify-center items-centerw-14 h-8 text-center px-1 py-1 font-semibold">${producto.cantidad}</div>
            </div>
            <div class="flex w-1/5 justify-center items-center">
            <button id="quitarProducto" name="${producto.id}" class="flex items-center justify-center w-16 h-8 left-3 top-2 bg-blue-800 rounded-full text-gray-200 font-bold text-center">Quitar</button>
            </div>
            <div class="flex w-1/5 justify-center items-center py-2 px-1">
                <div id="subtotal" class="precioSubtotal flex justify-center items-centerw-14 h-8 text-center px-1 py-1 font-semibold">$${producto.price*producto.cantidad}</div>
            </div>`
            productosEnCarrito.appendChild(prodEnCarrito)
            
            
        }
        totalEnCarrito()
}


const totalEnCarrito = () => {
    let total = 0
    if (carrito.length != 0) {
        const subtotales = document.querySelectorAll('#subtotal')
        const totalCarrito = document.createElement('div')
        totalCarrito.classList.add('flex', 'h-24', 'w-full', 'items-center', 'border-t-2', 'border-b-2', 'border-t-gray-500', 'border-b-gray-500', 'mb-2')
        subtotales.forEach(precioProducto => { 
            const subtotalPrecioProducto = parseInt(precioProducto.textContent.replace('$',''))
            total = total + subtotalPrecioProducto
            totalCarrito.innerHTML = `
            <div class="flex w-1/2 items-center justify-center py-2 px-2">Total de su compra: <span class="font-semibold"> $${total}</span></div>
            <div class="flex w-1/2 justify-center items-center">
            <button id="generarLinkDePago" class="flex items-center justify-center w-24 h-8 left-3 top-2 bg-blue-800 rounded-full text-gray-200 font-bold text-center">Ir a Pagar</button>
            </div>
            `
        })
        productosEnCarrito.appendChild(totalCarrito)
}
}

productosEnCarrito.addEventListener('click', (e) => {
    if (e.target.id === 'quitarProducto') {
        const productoAQuitar = carrito.find(element => element.id == e.target.name)
        if (productoAQuitar.cantidad == 1) {
            const posicionEnCarrito = carrito.indexOf(productoAQuitar)
                carrito.splice(posicionEnCarrito, 1);
                e.target.parentElement.parentElement.remove()
                renderizarCarrito()
                carritoStorage()
        } else {
            productoAQuitar.cantidad--
            renderizarCarrito()
            carritoStorage()
        }
    }
    if (e.target.id === 'generarLinkDePago') {
        console.log('Boton para pagar');
    }
})

const validarCarrito = localStorage.getItem("carrito");

if (validarCarrito == null){
    carrito = []
 }else{
    carrito = JSON.parse(validarCarrito)
}

  
