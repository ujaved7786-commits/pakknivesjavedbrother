/* =========================================================
   PAK KNIVES JAVED BROTHER
   PRODUCTS SYSTEM
   EASY PRODUCT ADD / EDIT
========================================================= */

const products = [

    /* =====================================================
       FOLDING KNIVES
    ===================================================== */

    {
        id: 1,
        category: "Folding Knives",
        name: "Damascus Steel Folding Knife",
        image: "images/products/folding-01.jpg",

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
        image: "images/products/dagger-01.jpg",

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
        image: "images/products/hunting-01.jpg",

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
        image: "images/products/bowie-01.jpg",

        bladeMaterial: "Carbon Steel",
        handleMaterial: "Wood & Brass",
        size: 'Overall 13" | Blade 8"',
        price: "USD 65",

        description:
            "Handcrafted Bowie knife with a strong carbon steel blade and traditional custom handle."
    },


    /* =====================================================
       KITCHEN KNIFE SET
    ===================================================== */

    {
        id: 5,
        category: "Kitchen Knives",
        name: "Damascus Knife Set",
        image: "images/products/kitchen-01.jpeg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Colourful Pakka Wood",

        size:
            'Set of 9 knives | Sizes: 14", 9.5", 8.5", 9", 10", 10.5", 11.5", 12.5"',

        price: "USD 99",

        description:
            "Set of 9 Custom Made Damascus Steel Chef Knives with Colourful Pakka Wood Handle and Leather Roll Bag."
    },


    /* =====================================================
       SWORDS
    ===================================================== */

    {
        id: 6,
        category: "Swords",
        name: "Custom Damascus Sword",
        image: "images/products/sword-01.jpg",

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
        image: "images/products/axe-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Hard Wood",
        size: 'Overall 18" | Head 6"',
        price: "USD 75",

        description:
            "Handmade custom axe with Damascus steel head and strong wooden handle."
    },


    /* =====================================================
       KITCHEN KNIFE SET - ID 8
    ===================================================== */

    {
        id: 8,
        category: "Kitchen Knives",
        name: "Damascus Steel Kitchen Knife Set with Leather Roll Bag",
        image: "images/products/kitchen-01.jpeg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Colourful Blue Pakka Wood",

        size:
            'Set of 9 knives | 14" Overall / 9.5" Blade | 9.5" Overall / 5" Blade | 8.5" Overall / 4" Blade | 9" Overall / 4.5" Blade | 10" Overall / 5.5" Blade | 10.5" Overall / 6" Blade | 11.5" Overall / 7" Blade | 12.5" Overall / 7" Blade',

        price: "USD 99",

        description:
            "Set of 9 Custom Made Damascus Steel Chef Knives with Blue Pakka Wood Handle and Leather Roll Bag."
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
                onerror="this.style.display='none'"
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
