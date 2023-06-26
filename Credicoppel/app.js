const preciosProductos = {
  tv: 8000,
  moto: 30000,
  sala: 50000,
  refri: 18000,
  lavadora: 25000
};

const selectProducto = document.querySelector('#select-producto');
const imagenProducto = document.querySelector('#imagen-producto');
const precioProducto = document.querySelector('#precio-producto');
const precioTotal = document.querySelector('#precio-total');
const sliderCantidad = document.querySelector('#slider-cantidad');
const cantidad = document.querySelector('#cantidad');
const checkboxPagos = document.querySelector('#checkbox-pagos');
const selectMeses = document.querySelector('#select-meses');
const precioPagos = document.querySelector('#precio-pagos');

const actualizarProducto = () => {
  const producto = selectProducto.value;
  imagenProducto.src = `images/${producto}.jpg`;
  precioProducto.textContent = preciosProductos[producto];
  precioTotal.textContent = preciosProductos[producto] * cantidad.textContent;
  calcularPagoMeses();
};

const actualizarCantidad = () => {
  cantidad.textContent = sliderCantidad.value;
  precioTotal.textContent = preciosProductos[selectProducto.value] * cantidad.textContent;
  calcularPagoMeses();
};

const calcularPagoMeses = () => {
  const producto = selectProducto.value;
  const precioTotal = preciosProductos[producto] * cantidad.textContent;
  const meses = parseInt(selectMeses.value);
  const pagosMeses = precioTotal / meses;
  precioPagos.textContent = checkboxPagos.checked ? pagosMeses.toFixed(2) : '';
};

window.onload = () => {
  actualizarProducto();
};

selectProducto.addEventListener('change', actualizarProducto);
sliderCantidad.addEventListener('input', actualizarCantidad);
checkboxPagos.addEventListener('change', calcularPagoMeses);
selectMeses.addEventListener('change', calcularPagoMeses);