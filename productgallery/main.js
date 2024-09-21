const products = [
    {
        name: "Product 1",
        price: "$29.99",
        description: "A great product that meets your needs.",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 2",
        price: "$49.99",
        description: "An even better product that you'll love.",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 3",
        price: "$19.99",
        description: "A budget-friendly product for everyone.",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 4",
        price: "$39.99",
        description: "A premium product with exceptional quality.",
        image: "https://via.placeholder.com/200"
    }
];

const productCardsContainer = document.getElementById("product-cards-container");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="price">${product.price}</p>
        <p>${product.description}</p>
    `;

    productCardsContainer.appendChild(card);
});
