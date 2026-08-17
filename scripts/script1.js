async function getProducts(){
    let productsPromise = await fetch("https://dummyjson.com/products");
    let jsonResponse = await productsPromise.json();
    displayProducts(jsonResponse.products);
}

function displayProducts(products){
    let htmlString = products
            .map(product => createProductCard(product))
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

getProducts();