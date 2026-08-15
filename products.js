/* =========================================================
   PAK KNIVES JAVED BROTHER
   PRODUCTS + SHIPPING SYSTEM
========================================================= */

const products = [

    /* =====================================================
       ID 1 - FOLDING KNIFE
    ===================================================== */

    {
        id: 1,
        category: "Folding Knives",
        name: "Damascus Steel Folding Knife",
        image: "images/products/folding-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Black Horn & Brass",
        size: 'Overall 8.5" | Blade 3.5"',
        price: 45,

        description:
            "Handmade folding knife with Damascus steel blade, premium handle and custom finishing.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    },


    /* =====================================================
       ID 2 - DAGGER
    ===================================================== */

    {
        id: 2,
        category: "Daggers",
        name: "Damascus Steel Custom Dagger",
        image: "images/products/dagger-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Black Horn with Brass Spacer",
        size: 'Overall 14.5" | Blade 9.5" | Handle 5"',
        price: 85,

        description:
            "Handmade custom dagger with Damascus steel blade, premium horn handle and genuine leather sheath.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    },


    /* =====================================================
       ID 3 - HUNTING KNIFE
    ===================================================== */

    {
        id: 3,
        category: "Hunting Knives",
        name: "Custom Hunting Knife",
        image: "images/products/hunting-01.jpg",

        bladeMaterial: "Stainless Steel",
        handleMaterial: "Pakistani Wood",
        size: 'Overall 9" | Blade 4.5"',
        price: 40,

        description:
            "Handmade hunting knife designed for outdoor use with a strong blade and comfortable handle.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    },


    /* =====================================================
       ID 4 - BOWIE KNIFE
    ===================================================== */

    {
        id: 4,
        category: "Bowie Knives",
        name: "Custom Bowie Knife",
        image: "images/products/bowie-01.jpg",

        bladeMaterial: "Carbon Steel",
        handleMaterial: "Wood & Brass",
        size: 'Overall 13" | Blade 8"',
        price: 65,

        description:
            "Handcrafted Bowie knife with a strong carbon steel blade and traditional custom handle.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    },


    /* =====================================================
       ID 5 - KITCHEN KNIFE SET
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

        price: 99,

        description:
            "Set of 9 Custom Made Damascus Steel Chef Knives with Colourful Pakka Wood Handle and Leather Roll Bag.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    },


    /* =====================================================
       ID 6 - SWORD
    ===================================================== */

    {
        id: 6,
        category: "Swords",
        name: "Custom Damascus Sword",
        image: "images/products/sword-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Wood, Brass & Leather",
        size: 'Overall 30" | Blade 24"',
        price: 150,

        description:
            "Handcrafted custom sword with Damascus steel blade and premium traditional finishing.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    },


    /* =====================================================
       ID 7 - AXE
    ===================================================== */

    {
        id: 7,
        category: "Axes",
        name: "Custom Damascus Axe",
        image: "images/products/axe-01.jpg",

        bladeMaterial: "Damascus Steel",
        handleMaterial: "Hard Wood",
        size: 'Overall 18" | Head 6"',
        price: 75,

        description:
            "Handmade custom axe with Damascus steel head and strong wooden handle.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    },


    /* =====================================================
       ID 8 - KITCHEN KNIFE SET
       SHIPPING RATES WILL BE ADDED LATER
    ===================================================== */

    {
        id: 8,
        category: "Kitchen Knives",

        name:
            "Damascus Steel Kitchen Knife Set with Leather Roll Bag",

        image:
            "images/products/kitchen-01.jpeg",

        bladeMaterial:
            "Damascus Steel",

        handleMaterial:
            "Colourful Blue Pakka Wood",

        size:
            'Set of 9 knives | 14" Overall / 9.5" Blade | 9.5" Overall / 5" Blade | 8.5" Overall / 4" Blade | 9" Overall / 4.5" Blade | 10" Overall / 5.5" Blade | 10.5" Overall / 6" Blade | 11.5" Overall / 7" Blade | 12.5" Overall / 7" Blade',

        price: 99,

        description:
            "Set of 9 Custom Made Damascus Steel Chef Knives with Blue Pakka Wood Handle and Leather Roll Bag.",

        shipping: {
            USA: "",
            Europe: "",
            UAE: "",
            Australia: "",
            Other: "Contact Us"
        }
    }

];


/* =========================================================
   COUNTRY NAMES
========================================================= */

const shippingCountryNames = {
    USA: "USA",
    Europe: "Europe",
    UAE: "UAE",
    Australia: "Australia",
    Other: "Other Countries"
};


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(productList = products) {

    const container =
        document.getElementById("productGrid");

    if (!container) {
        console.error("productGrid not found.");
        return;
    }

    container.innerHTML = "";


    productList.forEach(function(product) {

        const card =
            document.createElement("article");

        card.className =
            "card product-card";


        card.innerHTML = `

            <div class="gallery-placeholder">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.innerHTML='<span>Product Image</span>';
                    "
                >

            </div>


            <p style="
                color:#d4af37;
                font-size:13px;
                text-transform:uppercase;
                letter-spacing:1px;
            ">
                ${product.category}
            </p>


            <h3>
                ${product.name}
            </h3>


            <p>
                <strong>Blade / Material:</strong>
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
                <strong>Product Price:</strong>
                <span class="product-price">
                    USD ${product.price}
                </span>
            </p>


            <p>
                <strong>Description:</strong>
                ${product.description}
            </p>


            <!-- SHIPPING BUTTON -->

            <button
                type="button"
                class="button"
                onclick="showShipping(${product.id})"
            >
                VIEW SHIPPING COST
            </button>


            <!-- SHIPPING BOX -->

            <div
                id="shipping-${product.id}"
                class="shipping-box"
                style="
                    display:none;
                    margin-top:15px;
                    padding:15px;
                    border:1px solid #d4af37;
                    border-radius:8px;
                "
            >

                <h4>
                    Shipping Cost
                </h4>


                <label>
                    Select Your Country:
                </label>


                <select
                    id="country-${product.id}"
                    onchange="calculateShipping(${product.id})"
                    style="
                        width:100%;
                        padding:10px;
                        margin:10px 0;
                    "
                >

                    <option value="">
                        Select Country
                    </option>

                    <option value="USA">
                        USA
                    </option>

                    <option value="Europe">
                        Europe
                    </option>

                    <option value="UAE">
                        UAE
                    </option>

                    <option value="Australia">
                        Australia
                    </option>

                    <option value="Other">
                        Other Countries
                    </option>

                </select>


                <div
                    id="shipping-result-${product.id}"
                    style="margin-top:10px;"
                >
                </div>

            </div>


            <br>


            <a
                class="button"
                href="#contact"
                onclick="
                    requestProduct('${product.name.replace(/'/g, "\\'")}')
                "
            >
                REQUEST QUOTE
            </a>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   SHOW SHIPPING BOX
========================================================= */

function showShipping(productId) {

    const box =
        document.getElementById(
            "shipping-" + productId
        );

    if (!box) return;


    if (box.style.display === "none") {

        box.style.display = "block";

    } else {

        box.style.display = "none";

    }

}


/* =========================================================
   CALCULATE SHIPPING
========================================================= */

function calculateShipping(productId) {

    const product =
        products.find(function(item) {

            return item.id === productId;

        });


    if (!product) return;


    const countryBox =
        document.getElementById(
            "country-" + productId
        );


    const result =
        document.getElementById(
            "shipping-result-" + productId
        );


    const country =
        countryBox.value;


    if (!country) {

        result.innerHTML = "";

        return;

    }


    const shippingCost =
        product.shipping[country];


    if (
        shippingCost === "" ||
        shippingCost === undefined
    ) {

        result.innerHTML = `

            <p>
                <strong>Shipping:</strong>
                Please contact us for shipping cost.
            </p>

        `;

        return;

    }


    if (country === "Other") {

        result.innerHTML = `

            <p>
                <strong>
                    Shipping:
                </strong>
                Contact Us
            </p>

        `;

        return;

    }


    const total =
        Number(product.price) +
        Number(shippingCost);


    result.innerHTML = `

        <p>
            <strong>
                Product Price:
            </strong>
            USD ${product.price}
        </p>

        <p>
            <strong>
                Shipping to ${shippingCountryNames[country]}:
            </strong>
            USD ${shippingCost}
        </p>

        <hr>

        <p style="
            font-size:18px;
            color:#d4af37;
        ">
            <strong>
                Total:
            </strong>
            USD ${total}
        </p>

    `;

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


    const filtered =
        products.filter(function(product) {

            return (
                product.category.toLowerCase() ===
                category.toLowerCase()
            );

        });


    displayProducts(filtered);

}


/* =========================================================
   SEARCH
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

            ].join(" ").toLowerCase();


            return productText.includes(text);

        });


    displayProducts(results);

}


/* =========================================================
   REQUEST QUOTE / WHATSAPP
========================================================= */

function requestProduct(productName) {

    const message =
        encodeURIComponent(

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
