const products = [
    { name: 'Nokia 7.1', price: '₹19,999', img: 'https://media.wired.com/photos/5c003b96ec17240d1c046ffa/4:3/w_2400,c_limit/Nokia-7.1-Gloss-Steel.jpg', link: 'https://www.amazon.in' },
    { name: 'Smartphone', price: '₹29,999', img: 'https://get.pxhere.com/photo/smartphone-mobile-screen-technology-telephone-communication-gadget-mobile-phone-brand-product-electronics-digital-iphone6-multimedia-electronic-device-portable-communications-device-communication-device-feature-phone-1061929.jpg', link: 'https://www.flipkart.com' },
    // Add more products as needed
];

function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));

    if (filteredProducts.length === 0) {
        resultsDiv.innerHTML = '<p>No products found.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <a href="${product.link}" target="_blank">
                    <img src="${product.img}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </a>
            `;
            resultsDiv.appendChild(productDiv);
        });
    }
}
