// Script moved from product_listing.html
const products = [
    { name: "Street Puffer", price: 3500, img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1974&auto=format&fit=crop" },
    { name: "Denim Rebel", price: 2200, img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" },
    { name: "Neon Windbreaker", price: 1800, img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Leather Classic", price: 5500, img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1990&auto=format&fit=crop" },
    { name: "Varsity Blue", price: 4000, img: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=2073&auto=format&fit=crop" },
    { name: "Camo Utility", price: 3200, img: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2070&auto=format&fit=crop" },
    { name: "Cyber Parka", price: 6499, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop" },
    { name: "Tech Trench", price: 8999, img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1974&auto=format&fit=crop" }
];

const container = document.getElementById('productList');

for(let i = 0; i < products.length; i++) {
    container.innerHTML += `
        <div class="card">
            <img src="${products[i].img}" alt="${products[i].name}">
            <h3>${products[i].name}</h3>
            <p>₹ ${products[i].price}</p>
            <button onclick="alert('Added to Cart')">Add</button>
        </div>
    `;
}
