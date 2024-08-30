document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: 'roro', precio: 1000 },
        { id: 2, nombre: 'Tmamani', precio: 500 },
        { id: 3, nombre: 'quincho', precio: 150 }
    ];
    
    const carrito = [];

    function mostrarProductos() {
        const listaProductos = document.getElementById('lista-productos');
        listaProductos.innerHTML = '';
        
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <p>${producto.nombre} - S/${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            listaProductos.appendChild(div);
        });
    }

    function mostrarCarrito() {
        const listaCarrito = document.getElementById('lista-carrito');
        listaCarrito.innerHTML = '';
        
        if (carrito.length === 0) {
            listaCarrito.innerHTML = '<p>El carrito está vacío.</p>';
            return;
        }
        
        carrito.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item-carrito');
            div.innerHTML = `
                <p>${item.nombre} - Cantidad: ${item.cantidad} - $${item.precio * item.cantidad}</p>
            `;
            listaCarrito.appendChild(div);
        });

        const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
        listaCarrito.appendChild(totalDiv);
    }

    window.agregarAlCarrito = (id) => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            const itemEnCarrito = carrito.find(item => item.id === id);
            if (itemEnCarrito) {
                itemEnCarrito.cantidad += 1;
            } else {
                carrito.push({ ...producto, cantidad: 1 });
            }
            mostrarCarrito();
        }
    }

    document.getElementById('comprar').addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('El carrito está vacío.');
            return;
        }
        alert('Compra realizada con éxito.');
        carrito.length = 0; // Vaciar carrito
        mostrarCarrito();
    });

    mostrarProductos();
});