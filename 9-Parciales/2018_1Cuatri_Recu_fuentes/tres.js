function mostrar()
{
    var precio;
    var x_desc;
    var p_desc;
    var p_iva;
    var pcondesc;
    var p_final;
    precio = prompt("Precio");
    x_desc = prompt("Porcentaje de descuento");
    p_desc = precio * (x_desc / 100);
    p_iva = precio * 0.21;
    pcondesc = precio - p_desc;
    p_final = pcondesc + p_iva;
    alert("Descuento: " + p_desc + ". Precio con el descuento: " + pcondesc + ". IVA: " + p_iva + ".");
    document.getElementById("").value = p_final;
}
