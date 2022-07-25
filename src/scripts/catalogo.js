class Producto {
    constructor(name, description, price, img) {
        this.name = name,
        this.description = description;
        this.price = price;
        this.img = img;
    }
}

// Eventos del DOM
document.getElementById('formulario-producto').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const img = document.getElementById('img').value.toString().slice(12);//Imágenes para productos SÍ o Sí en carpeta images.
    const producto = new Producto(name, description, price, img);
    
    const catalogo = new Catalogo();
    catalogo.agregarProducto(producto);
    
    e.preventDefault();
})
// Interfaz
class Catalogo {
    agregarProducto (producto) {
        const contenedor = document.getElementById('contenedor');
        const prod = document.createElement('div');
        prod.classList.add('w-[100%]');
        prod.innerHTML = `<div class="flex font-sans bg-white rounded-lg shadow-lg">
                            <div class="relative flex-none w-48">
                                <img src="./images/${producto.img}" alt="Imagen"
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
                                        <button id="alCarrito" class="h-10 px-6 font-semibold text-white bg-black border rounded-md"
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
        contenedor.appendChild(prod);
    }   
}