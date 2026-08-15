/* =========================================================
   PAK KNIVES JAVED BROTHER
   PRODUCTS + CATEGORY FILTER + SEARCH + SHIPPING
========================================================= */


/* =========================================================
   PRODUCTS DATABASE
========================================================= */

const products = [

    {
        id: 1,
        category: "Folding Knives",
        slug: "folding",
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


    {
        id: 2,
        category: "Daggers",
        slug: "dagger",
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


    {
        id: 3,
        category: "Hunting Knives",
        slug: "hunting",
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


    {
        id: 4,
        category: "Bowie Knives",
        slug: "bowie",
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


    {
        id: 5,
        category: "Kitchen Knives",
        slug: "kitchen",
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


    {
        id: 6,
        category: "Swords",
        slug: "sword",
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


    {
        id: 7,
        category: "Axes",
        slug: "axe",
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


    {
        id: 8,
        category: "Kitchen Knives",
        slug: "kitchen",

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

    const noProducts =
        document.getElementById("noProducts");


    if (!container) {

        console.error(
            "ERROR: productGrid not found."
        );

        return;
    }


    container.innerHTML = "";


    if (productList.length === 0) {

        if (noProducts) {

            noProducts.style.display = "block";

        }

        return;

    }


    if (noProducts) {

        noProducts.style.display = "none";

    }


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
                    Product Price:
                </strong>

                <span class="product-price">
                    USD ${product.price}
                </span>
            </p>


            <p>
                <strong>
                    Description:
                </strong>

                ${product.description}
            </p>


            <!-- SHIPPING BUTTON -->

            <button
                type="button"
                class="button shipping-button"
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
                    background:#111;
                "
            >

                <h4>
                    Shipping Cost
                </h4>


                <p style="
                    color:#aaa;
                    font-size:14px;
                ">
                    Select your country to see
                    shipping cost and total price.
                </p>


                <label>
                    <strong>
                        Select Your Country:
                    </strong>
                </label>


                <select
                    id="country-${product.id}"
                    onchange="calculateShipping(${product.id})"
                    style="
                        width:100%;
                        padding:10px;
                        margin:10px 0;
                        background:#222;
                        color:#fff;
                        border:1px solid #555;
                        border-radius:5px;
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
                    style="
                        margin-top:12px;
                    "
                >
                </div>

            </div>


            <br>


            <!-- WHATSAPP REQUEST -->

            <a
                class="button"
                href="#contact"

                onclick="
                    requestProduct(
                        '${product.name.replace(/'/g, "\\'")}'
                    )
                "
            >
                REQUEST QUOTE
            </a>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   SHOW / HIDE SHIPPING
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
   CALCULATE SHIPPING + TOTAL
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


    if (!countryBox || !result) return;


    const country =
        countryBox.value;


    if (!country) {

        result.innerHTML = "";

        return;

    }


    const shippingCost =
        product.shipping[country];


    /* OTHER COUNTRIES */

    if (country === "Other") {

        result.innerHTML = `

            <p>
                <strong>
                    Product Price:
                </strong>

                USD ${product.price}
            </p>


            <p style="
                color:#d4af37;
            ">
                <strong>
                    Shipping:
                </strong>

                Contact Us
            </p>


            <p>
                Please contact us for the
                shipping cost to your country.
            </p>

        `;

        return;

    }


    /* SHIPPING NOT ADDED YET */

    if (
        shippingCost === "" ||
        shippingCost === undefined ||
        shippingCost === null
    ) {

        result.innerHTML = `

            <p>
                <strong>
                    Product Price:
                </strong>

                USD ${product.price}
            </p>


            <p style="
                color:#d4af37;
            ">
                <strong>
                    Shipping to
                    ${shippingCountryNames[country]}:
                </strong>

                Contact Us
            </p>


            <p style="
                color:#aaa;
                font-size:13px;
            ">
                Shipping cost will be confirmed
                according to destination.
            </p>

        `;

        return;

    }


    /* TOTAL */

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
                Shipping to
                ${shippingCountryNames[country]}:
            </strong>

            USD ${shippingCost}
        </p>


        <hr>


        <p style="
            font-size:20px;
            color:#d4af37;
            margin-top:10px;
        ">

            <strong>
                TOTAL:
            </strong>

            USD ${total}

        </p>

    `;

}


/* =========================================================
   FILTER + SEARCH
========================================================= */

function filterAndSearchProducts() {

    const searchBox =
        document.getElementById(
            "productSearch"
        );


    const categoryBox =
        document.getElementById(
            "productCategory"
        );


    const search =
        searchBox
            ? searchBox.value.toLowerCase().trim()
            : "";


    const category =
        categoryBox
            ? categoryBox.value
            : "all";


    const filtered =
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


            const matchesSearch =
                !search ||
                productText.includes(search);


            const matchesCategory =
                category === "all" ||
                product.slug === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayProducts(filtered);

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
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* DISPLAY ALL PRODUCTS */

        displayProducts(products);


        /* SEARCH */

        const searchBox =
            document.getElementById(
                "productSearch"
            );


        if (searchBox) {

            searchBox.addEventListener(
                "input",
                filterAndSearchProducts
            );

        }


        /* CATEGORY */

        const categoryBox =
            document.getElementById(
                "productCategory"
            );


        if (categoryBox) {

            categoryBox.addEventListener(
                "change",
                filterAndSearchProducts
            );

        }

    }
);
