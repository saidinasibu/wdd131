document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const productList = [
    "Super Blender 3000",
    "Eco Kettle",
    "Smartwatch Pro",
    "Wireless Charger",
    "Noise Cancelling Headphones"
];

const productSelect = document.getElementById("product");

productList.forEach(product => {
    const option = document.createElement("option");
    option.value = product.toLowerCase().replace(/ /g, "-");
    option.textContent = product;
    productSelect.appendChild(option);
});