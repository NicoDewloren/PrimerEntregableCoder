let nombre_del_producto;
let precio_del_producto = 0;
let suma_total = 0;
let cantidad_productos = prompt("Ingrese cuantos productos quiere sumar");
for (
  let producto_numero = 1;
  producto_numero <= cantidad_productos;
  producto_numero++
) {
  nombre_del_producto = prompt("Ingrese el nombre del producto");
  precio_del_producto = prompt("Ingrese el precio del producto");

  switch (nombre_del_producto) {
    case "":
      alert("ERRROR! NO INGRESO EL NOMBRE DEL PRODUCTO!");
      nombre_del_producto = prompt("Por favor, ingrese el nombre del producto");
      break;
    case null:
      alert("ERRROR! NO INGRESO EL NOMBRE DEL PRODUCTO!");
      nombre_del_producto = prompt("Por favor, ingrese el nombre del producto");
      break;
  }
  switch (precio_del_producto) {
    case "":
      alert("ERRROR! NO INGRESO EL PRECIO DEL PRODUCTO!");
      precio_del_producto = prompt("Por favor, ingrese el precio del producto");
      break;

    case null:
      alert("ERRROR! NO INGRESO EL PRECIO DEL PRODUCTO!");
      precio_del_producto = prompt("Por favor, ingrese el precio del producto");
      break;
  }
  precio_del_producto = parseInt(precio_del_producto);

  suma_total += precio_del_producto;

  let mensaje =
    "El producto ingresado es: " +
    nombre_del_producto +
    "." +
    "\n" +
    "Tiene un valor de: " +
    precio_del_producto +
    "$";
  console.log(mensaje);
  alert(mensaje);
}

let mensaje = "El total de sus productos es : " + suma_total + "$";
console.log(mensaje);
alert(mensaje);
