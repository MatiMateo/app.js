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
class ProductoCarrito {
    constructor(id, name, description, price, img, cantidad) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.cantidad = cantidad;
    }
}
const productos = [];
productos.push(new Producto(1,'Campera Verde', '100% canchera', 8500, './images/campera-verde.jpg', 5, 0, 'Camperas'));
productos.push(new Producto(2,'Gorros', '100% perfectos', 900, './images/gorro.jpg', 20, 0, 'Gorros'));
productos.push(new Producto(3,'Jean', '100% calce perfecto', 5400, './images/jean.jpg', 15, 0, 'Jeans'));
productos.push(new Producto(4,'Remera', '100% algodon', 1450, './images/remera-blanca.jpg', 20, 0, 'Remeras'));
productos.push(new Producto(5, 'Sweater', '100% abrigado', 4600, './images/sweater-verde.jpg', 8, 0, 'Sweaters'));
productos.push(new Producto(6, 'Top Floreado', '100% cómodo', 1890, './images/top-floreado.jpg', 15, 0, 'Tops'));
export {productos}