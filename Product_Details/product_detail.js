// Script moved from product_detail.html
function addToCartMain() {
    const size = document.getElementById('sizeSelector').value; 
    alert("The Cyber Bomber (" + size + ") added to your cart!");
}

const relatedItems = [
    { 
        name: "Street Puffer", 
        price: 3500, 
        img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1974&auto=format&fit=crop" 
    },
    { 
        name: "Denim Rebel", 
        price: 2200, 
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
        name: "Varsity Blue", 
        price: 4000, 
        img: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=2073&auto=format&fit=crop" 
    }
];

const container = document.getElementById('related-products');

for(let i = 0; i < relatedItems.length; i++) {
    let item = relatedItems[i];
    container.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹ ${item.price}</p>
            <button onclick="alert('Redirecting to ${item.name}...')">View Detail</button>
        </div>
    `;
}
