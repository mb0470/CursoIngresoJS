
function mostrar()
{
    var base;
    var altura;
    var supf;
    var peri;
    base = parseInt(base);
    altura = parseInt(altura);
    base = prompt("Base");
    altura = prompt("Altura");
    supf = (base * altura) / 2;
    peri = base * 3;
    alert("Superficie: " + supf + ". Perímetro: " + peri + ".");
}
