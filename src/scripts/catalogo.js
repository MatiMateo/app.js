class Producto {
    constructor(id, name, description, price, img, stock, cantidad, categoria) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.stock = stock;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}
const productos = [];
productos.push(new Producto(1,'Campera Verde', '100% canchera', 8500, './images/campera-verde.jpg', 5, 0, 'Camperas'));
productos.push(new Producto(2,'Gorros', '100% perfectos', 900, './images/gorro.jpg', 20, 0, 'Gorros'));
productos.push(new Producto(3,'Jean', '100% calce perfecto', 5400, './images/jean.jpg', 15, 0, 'Jeans'));
productos.push(new Producto(4,'Remera', '100% algodon', 1450, './images/remera-blanca.jpg', 20, 0, 'Remeras'));
productos.push(new Producto(5, 'Sweater', '100% abrigado', 4600, './images/sweater-verde.jpg', 8, 0, 'Sweaters'));
productos.push(new Producto(6, 'Top Floreado', '100% cómodo', 1890, './images/top-floreado.jpg', 15, 0, 'Tops'));
console.log(productos);
const carrito = [];
// Interfaz
const contenedorTarjProd = document.getElementById('contenedorCatalogo');
const tarjProducto = () => {
    contenedorTarjProd.innerHTML = ``;
    for(let producto of productos) {
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
                                        <button id="${producto.id}" class="h-10 px-6 font-semibold text-white bg-black border rounded-md"
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
    btnAlCarrito.addEventListener('click', () => agregarAlCarrito(producto))
    }
} 
tarjProducto(productos);

const contenedorCategorias = document.getElementById('contenedorCategorias')
const verCategorías = () => {
    const buscadorCategorías = document.getElementById('categorias')
    buscadorCategorías.addEventListener('mouseenter', () => {
        const catgs = document.createElement('div')
        catgs.classList.add('mb-2','border-t-2','border-b-2','border-b-gray-400','border-t-gray-400','text-center','text-gray-400')
        catgs.innerHTML = `1-Camperas, 2-Gorros, 3-Jeans, 4-Remeras, 5-Sweaters, 6-Tops`
        contenedorCategorias.appendChild(catgs)
        
    })
    buscadorCategorías.addEventListener('mouseout', () => {
        const catgs = document.createElement('div')
        catgs.innerHTML = ``
        contenedorCategorias.appendChild(catgs)
        
    })
}
verCategorías();
//Boton Buscar y Filtrar
const filtrarProds = (category) => {
    const prodFiltrados = productos.filter(Element => Element.id == category)
    contenedorTarjProd.innerHTML = ``;
    for(let producto of prodFiltrados) {
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
                                        <button id="${producto.id}" class="h-10 px-6 font-semibold text-white bg-black border rounded-md"
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
        btnAlCarrito.addEventListener('click', () => agregarAlCarrito(producto))
    }    

}
const btnBuscar = document.getElementById('btnBuscar')
btnBuscar.addEventListener('click', (e) => {
    const category = document.getElementById('categorias').value;
    if (category != 0) {
    filtrarProds(category)
}else {
    tarjProducto();
}
    e.preventDefault();
})