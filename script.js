function showSection(id) {
  document.querySelectorAll('.screen').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function addProduct() {
  const container = document.getElementById('product-area');
  const newProduct = document.createElement('div');
  newProduct.innerText = "🔧 New Product";
  container.appendChild(newProduct);
}
