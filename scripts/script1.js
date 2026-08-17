async function getProducts(){
    let productsPromise = await fetch("https://dummyjson.com/products");
    let jsonResponse = await productsPromise.json();
    displayProducts(jsonResponse.products);
}

function displayProducts(products){
    let htmlString = products
            .map(product => createProductCard1(product))
            .join("");
    
    document.getElementById("pdc").innerHTML=htmlString;       
}

function createProductCard(product){
    return `
                <div class="product-card">
                    <img src=${product.images[0]}>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                </div>
            `
}

function createProductCard1(product){
    return  `
            <div id="pc_container">
            <div id="timg">
                <img src=${product.images[0]}>
            </div>
            <div id="pdesc">
                <p>${product.title}</p>
                <p><strong>$ ${product.price}</strong></p>
                <a href="details.html" target="_blank" id="dtlsa">
                    <span id="dtls">Add to Cart</span>
                </a>
            </div>
        </div>
            `;
}            