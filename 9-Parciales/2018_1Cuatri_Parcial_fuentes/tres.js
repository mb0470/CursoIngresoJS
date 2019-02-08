function mostrar()
{
    var precio;
    var p_descuento;
    var p_final;
    precio = prompt("Precio");
    precio = parseInt(precio);
    p_descuento = prompt("Porcentaje de descuento");
    p_descuento = parseInt(p_descuento);
    p_final = precio - precio * (p_descuento / 100);
    document.getElementById("elPrecioFinal").value = p_final;
}
