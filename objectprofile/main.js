const users = [
    {
        name: "Alice Johnson",
        email: "alice@aol.com",
        image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Bob Smith",
        email: "bob@gmail.com",
        image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Charlie Brown",
        email: "charlie@msn.com",
        image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Diana Prince",
        email: "diana@yahoo.com",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
];

const userCardsContainer = document.getElementById("user-cards-container");

users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
        <img src="${user.image}" alt="${user.name}">
        <h2>${user.name}</h2>
        <p>${user.email}</p>
    `;

    userCardsContainer.appendChild(card);
});
