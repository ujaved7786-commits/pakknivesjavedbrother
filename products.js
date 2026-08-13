/* =========================================================
   PAK KNIVES JAVED BROTHER
   PRODUCTS SYSTEM
   EASY PRODUCT ADD / EDIT
========================================================= */

const products = [

    /* =====================================================
       FOLDING KNIVES
       نیا Folding Knife یہاں copy کرکے add کریں
    ===================================================== */

    {
        id: 1,
        category: "Folding Knives",
        name: "Damascus Steel Folding Knife",
        image: "folding-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Black Horn & Brass",
        size: 'Overall 8.5" | Blade 3.5"',
        price: "USD 45",

        description:
            "Handmade folding knife with Damascus steel blade, premium handle and custom finishing."
    },


    /* =====================================================
       DAGGERS
    ===================================================== */

    {
        id: 2,
        category: "Daggers",
        name: "Damascus Steel Custom Dagger",
        image: "dagger-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Black Horn with Brass Spacer",
        size: 'Overall 14.5" | Blade 9.5" | Handle 5"',
        price: "USD 85",

        description:
            "Handmade custom dagger with Damascus steel blade, premium horn handle and genuine leather sheath."
    },


    /* =====================================================
       HUNTING KNIVES
    ===================================================== */

    {
        id: 3,
        category: "Hunting Knives",
        name: "Custom Hunting Knife",
        image: "hunting-01.jpg",

        bladeMaterial: "Stainless Steel",
        handleMaterial: "Pakistani Wood",
        size: 'Overall 9" | Blade 4.5"',
        price: "USD 40",

        description:
            "Handmade hunting knife designed for outdoor use with a strong blade and comfortable handle."
    },


    /* =====================================================
       BOWIE KNIVES
    ===================================================== */

    {
        id: 4,
        category: "Bowie Knives",
        name: "Custom Bowie Knife",
        image: "bowie-01.jpg",

        bladeMaterial: "Carbon Steel",
        handleMaterial: "Wood & Brass",
        size: 'Overall 13" | Blade 8"',
        price: "USD 65",

        description:
            "Handcrafted Bowie knife with a strong carbon steel blade and traditional custom handle."
    },


    /* =====================================================
       KITCHEN KNIVES
    ===================================================== */

    {
        id: 5,
        category: "Kitchen Knives",
        name: "Professional Kitchen Knife",
        image: "kitchen-01.jpg",

        bladeMaterial: "Stainless Steel",
        handleMaterial: "Wood",
        size: 'Overall 13" | Blade 8"',
        price: "USD 30",

        description:
            "Handmade kitchen knife suitable for professional and home kitchen use."
    },


    /* =====================================================
       SWORDS
    ===================================================== */

    {
        id: 6,
        category: "Swords",
        name: "Custom Damascus Sword",
        image: "sword-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Wood, Brass & Leather",
        size: 'Overall 30" | Blade 24"',
        price: "USD 150",

        description:
            "Handcrafted custom sword with Damascus steel blade and premium traditional finishing."
    },


    /* =====================================================
       AXES
    ===================================================== */

    {
        id: 7,
        category: "Axes",
        name: "Custom Damascus Axe",
        image: "axe-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Hard Wood",
        size: 'Overall 18" | Head 6"',
        price: "USD 75",

        description:
            "Handmade custom axe with Damascus steel head and strong wooden handle."
    }

];


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(productList = products) {

    const container = document.getElementById("product-container");

    if (!container) {
        console.log("Product container not found.");
        return;
    }

    container.innerHTML = "";

    if (productList.length === 0) {

        container.innerHTML = `
            <div class="no-products">
                <h3>No Products Found</h3>
                <p>Please select another category.</p>
            </div>
        `;

        return;
    }


    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "card product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="card-image"
                loading="lazy"
                onerror="this.src='placeholder.jpg'"
            >

            <h3>${product.name}</h3>

            <p>
                <strong>Category:</strong>
                ${product.category}
            </p>

            <p>
                <strong>Blade Material:</strong>
                ${product.bladeMaterial}
            </p>

            <p>
                <strong>Handle:</strong>
                ${product.handleMaterial}
            </p>

            <p>
                <strong>Size:</strong>
                ${product.size}
            </p>

            <p>
                <strong>Price:</strong>
                <span class="product-price">
                    ${product.price}
                </span>
            </p>

            <p class="product-description">
                ${product.description}
            </p>

            <a
                href="#contact"
                class="button"
                onclick="requestProduct('${product.name}')"
            >
                Request Quote
            </a>

        `;

        container.appendChild(card);

    });
}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function filterProducts(category) {

    if (category === "All" || category === "") {

        displayProducts(products);

        return;
    }

    const filteredProducts = products.filter(
        product =>
            product.category.toLowerCase() ===
            category.toLowerCase()
    );

    displayProducts(filteredProducts);
}


/* =========================================================
   SEARCH
========================================================= */

function searchProducts(searchText) {

    const text = searchText.toLowerCase().trim();

    if (!text) {

        displayProducts(products);

        return;
    }

    const results = products.filter(product =>

        product.name.toLowerCase().includes(text) ||

        product.category.toLowerCase().includes(text) ||

        product.bladeMaterial.toLowerCase().includes(text) ||

        product.handleMaterial.toLowerCase().includes(text)

    );

    displayProducts(results);
}


/* =========================================================
   REQUEST PRODUCT
========================================================= */

function requestProduct(productName) {

    const message =
        `Hello Pak Knives Javed Brother,%0A%0A` +
        `I am interested in:%0A` +
        `${productName}%0A%0A` +
        `Please send me details and quotation.`;

    const whatsappNumber = "923XXXXXXXXX";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );
}


/* =========================================================
   LOAD PRODUCTS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProducts(products);

    }
);
