/* =========================================================
   PAK KNIVES JAVED BROTHER
   PRODUCTS SYSTEM
   EASY PRODUCT ADD / EDIT
========================================================= */

const products = [

    /* =====================================================
       FOLDING KNIVES - ID 1
    ===================================================== */

    {
        id: 1,
        category: "folding",
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
       DAGGERS - ID 2
    ===================================================== */

    {
        id: 2,
        category: "dagger",
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
       HUNTING KNIVES - ID 3
    ===================================================== */

    {
        id: 3,
        category: "hunting",
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
       BOWIE KNIVES - ID 4
    ===================================================== */

    {
        id: 4,
        category: "bowie",
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
       KITCHEN KNIVES - ID 5
    ===================================================== */

    {
        id: 5,
        category: "kitchen",
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
       SWORDS - ID 6
    ===================================================== */

    {
        id: 6,
        category: "sword",
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
       AXES - ID 7
    ===================================================== */

    {
        id: 7,
        category: "axe",
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
       KITCHEN KNIVES - ID 8
    ===================================================== */

    {
        id: 8,
        category: "kitchen",
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
   CATEGORY NAMES
========================================================= */

const categoryNames = {

    folding: "Folding Knives",
    dagger: "Daggers",
    hunting: "Hunting Knives",
    bowie: "Bowie Knives",
    skinner: "Skinner Knives",
    kitchen: "Kitchen Knives",
    sword: "Swords",
    axe: "Axes",
    cutlery: "Cutlery"

};


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(productList = products) {

    const container = document.getElementById("productGrid");

    if (!container) {

        console.error(
            "ERROR: productGrid not found in index.html"
        );

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


    productList.forEach(function(product) {

        const card = document.createElement("article");

        card.className = "card product-card";


        const categoryLabel =
            categoryNames[product.category] ||
            product.category;


        const safeName =
            product.name.replace(/'/g, "\\'");


        card.innerHTML = `

            <div class="gallery-placeholder">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<span>Product Image</span>';"
                >

            </div>


            <p style="
                color:#d4af37;
                font-size:13px;
                text-transform:uppercase;
                letter-spacing:1px;
            ">

                ${categoryLabel}

            </p>


            <h3>
                ${product.name}
            </h3>


            <p>

                <strong>
                    Blade / Material:
                </strong>

                ${product.bladeMaterial}

            </p>


            <p>

                <strong>
                    Handle:
                </strong>

                ${product.handleMaterial}

            </p>


            <p>

                <strong>
                    Size:
                </strong>

                ${product.size}

            </p>


            <p>

                <strong>
                    Price:
                </strong>

                <span class="product-price">
                    ${product.price}
                </span>

            </p>


            <p>

                <strong>
                    Description:
                </strong>

                ${product.description}

            </p>


            <a
                class="button"
                href="#contact"
                onclick="requestProduct('${safeName}')"
            >

                REQUEST QUOTE

            </a>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function filterProducts(category) {

    if (
        category === "All" ||
        category === "all" ||
        category === ""
    ) {

        displayProducts(products);

        return;

    }


    const filteredProducts =
        products.filter(function(product) {

            return (
                product.category.toLowerCase() ===
                category.toLowerCase()
            );

        });


    displayProducts(filteredProducts);

}


/* =========================================================
   SEARCH PRODUCTS
========================================================= */

function searchProducts(searchText) {

    const text =
        searchText.toLowerCase().trim();


    if (!text) {

        displayProducts(products);

        return;

    }


    const results =
        products.filter(function(product) {

            const productText = [

                product.name,
                product.category,
                product.bladeMaterial,
                product.handleMaterial,
                product.size,
                product.price,
                product.description

            ]
            .join(" ")
            .toLowerCase();


            return productText.includes(text);

        });


    displayProducts(results);

}


/* =========================================================
   REQUEST PRODUCT / WHATSAPP
========================================================= */

function requestProduct(productName) {

    const message = encodeURIComponent(

        "Hello Pak Knives Javed Brother,\n\n" +

        "I am interested in:\n" +

        productName +

        "\n\nPlease send me details and quotation."

    );


    const whatsappNumber =
        "923217136284";


    window.open(

        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message,

        "_blank"

    );

}


/* =========================================================
   LOAD PRODUCTS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts(products);

    }
);
