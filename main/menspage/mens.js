var productData = [{
    image_url: "imgs/IMG_5773.PNG",
    brand: "3 pcs Sherwani Set",
    para: "Size - L",
    price: "Rs. 399",
    rs: 399,
    offer: "CHAT NOW",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Sherwani",

}, {
    image_url: "imgs/IMG_9006.PNG",
    brand: "Oversized Demin Jacket",
    para: "Size - M",
    price: "Rs. 174",
    rs: 174,
    offer: "CHAT NOW",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Jackets",
}, {
    image_url: "imgs/IMG_5770.PNG",
    brand: "Leather Jacket with Fur",
    para: "Size - L",
    price: "Rs. 259",
    rs: 259,
    offer: "CHAT NOW",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Jackets",
}, {
    image_url: "imgs/IMG_5831.PNG",
    brand: "Turtleneck with Cardigan",
    para: "Size - L",
    price: "Rs. 349",
    rs: 349,
    offer: "CHAT NOW",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Cardigans",
}, {
    image_url: "imgs/IMG_5824.PNG",
    brand: "Casual Printed Shirt",
    para: "Size - M",
    price: "Rs. 159 ",
    rs: 159,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Shirts",
}, {
    image_url: "imgs/IMG_5833.PNG",
    brand: "Denim Jacket with Hoodie",
    para: "Size - M",
    price: "Rs. 349 ",
    rs: 349,
    offer: "CHAT NOW",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Jackets",
}, {
    image_url: "imgs/IMG_9007.PNG",
    brand: "Oversized T-Shirt and Pants",
    para: "Size - M",
    price: "Rs. 399 ",
    rs: 399,
    offer: "CHAT NOW ",
    atc: "Add to Bag",
    atw: "Add to Wishlist",
    category: "T-Shirts",
}, {
    image_url: "imgs/IMG_5771.PNG",
    brand: "Men Solid Ethnic Coat",
    para: "Size - L",
    price: "Rs. 399 ",
    rs: 399,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Coats",
}, {
    image_url: "imgs/IMG_5825.PNG",
    brand: "Denim Jacket",
    para: "Size - L",
    price: "Rs. 199 ",
    rs: 199,
    offer: "CHAT NOW",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Jackets",
}, {
    image_url: "imgs/IMG_5767.PNG",
    brand: "Fur Jacket",
    para: "Size - L",
    price: "Rs. 199 ",
    rs: 199,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Jacket",
}, {
    image_url: "imgs/IMG_5768.PNG",
    brand: "Black Coat with Hoodie",
    para: "Size - L",
    price: "229",
    rs: 229,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Coat",
}, {
    image_url: "imgs/IMG_5769.PNG",
    brand: "Oversized Printed T-Shirt",
    para: "Size - M",
    price: "Rs. 159 ",
    rs: 159,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "T-Shirts",
}, {
    image_url: "imgs/IMG_5823.PNG",
    brand: "Denim Jacket",
    para: "Size - S",
    price: "Rs. 124 ",
    rs: 124,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Jackets",
}, {
    image_url: "imgs/IMG_5829.PNG",
    brand: "Sherwaani Set",
    para: "Size - L",
    price: "Rs. 399 ",
    rs: 399,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Sherwani",
}, {
    image_url: "imgs/IMG_5828.PNG",
    brand: "Denim Shirt",
    para: "Size - L",
    price: "Rs. 199 ",
    rs: 199,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Shirts",
}, {
    image_url: "imgs/IMG_5835.PNG",
    brand: "Turtleneck with Overcoat",
    para: "Size - L",
    price: "Rs. 299 ",
    rs: 299,
    offer: "CHAT NOW ",
    atc: "Add to Bag",
    atw: "Add to Wishlist",
    category: "Coat",
}, {
    image_url: "imgs/IMG_5837.PNG",
    brand: "Puffer Jacket",
    para: "Size - L",
    price: "Rs. 199 ",
    rs: 199,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Jackets",
}, {
    image_url: "imgs/IMG_5830.PNG",
    brand: "Sherwani Set",
    para: "Size - M",
    price: "Rs. 249 ",
    rs: 249,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Sherwani"
}, {
    image_url: "imgs/IMG_5836.PNG",
    brand: "Overcoat",
    para: "Size - M",
    price: "Rs. 199 ",
    rs: 199,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Coat",
}, {
    image_url: "imgs/IMG_5838.PNG",
    brand: "3 Piece Suit with Overcoat",
    para: "Size - L",
    price: "Rs. 449 ",
    rs: 449,
    offer: "CHAT NOW ",
    atc: "Chat Now",
    atw: "Add to Wishlist",
    category: "Formals",
}, ];


var wishListData = JSON.parse(localStorage.getItem("wishListObj")) || []

var bagData = JSON.parse(localStorage.getItem("BagListObj")) || []

window.addEventListener('load', function() {
    displayPage(productData)
})

document.getElementById('nameSort').addEventListener('change', sortNames);

function sortNames() {
    var selected = document.getElementById('nameSort').value;
    if (selected == 'asc') {
        productData.sort(function(a, b) {
            if (a.brand > b.brand) return 1
            if (a.brand < b.brand) return -1
            return 0;
        })

        displayPage(productData);
    } else {
        productData.sort(function(a, b) {
            if (a.brand > b.brand) return -1
            if (a.brand < b.brand) return 1
            return 0
        })

        displayPage(productData)
    }
}

document.getElementById('priceSort').addEventListener('change', sortPrice);

function sortPrice() {
    var selected = document.getElementById('priceSort').value;
    if (selected == 'lth') {
        productData.sort(function(a, b) {
            return a.rs - b.rs;
        })
        displayPage(productData);
    } else {
        productData.sort(function(a, b) {
            return b.rs - a.rs;
        })
        displayPage(productData)
    }
}

document.getElementById('brandFilter').addEventListener('change', filterBrand);

function filterBrand() {
    var selected = document.getElementById('brandFilter').value
    var newArray = productData.filter(function(element) {
        if (element.brand == selected) {
            return element;
        }
    })
    displayPage(newArray);
}


function displayPage(productData) {

    document.getElementById("container").innerHTML = "";

    productData.map(function(elem) {
        var box = document.createElement("div")
        box.style.cursor = "pointer"

        var img = document.createElement("img")
        img.src = elem.image_url

        var contentBox = document.createElement('div');
        contentBox.setAttribute('class', 'contentBox')

        var brand = document.createElement("h4")
        brand.textContent = elem.brand

        var productname = document.createElement("p")
        productname.textContent = elem.para


        var mix = document.createElement("div")
        mix.setAttribute("class", "mixbox")


        var price = document.createElement("p")
        price.textContent = elem.price

        var strprice = document.createElement("p")
        strprice.textContent = elem.strikedoffprice
        strprice.setAttribute("class", "strikep")


        var offer = document.createElement("p")
        offer.textContent = elem.offer
        offer.setAttribute("class", "offerp")

        mix.append(price, strprice, offer)

        

        var atw = document.createElement("p")
        atw.setAttribute("class", "wishListp")
        atw.textContent = elem.atw;
        atw.style.cursor = "pointer"

        atw.addEventListener("click", function() {
            addToWishlist(elem)
            atw.style.color = "green"
            atw.innerText = "ADDED TO WISHLIST"
        })


      
        var atc = document.createElement("p")
        atc.setAttribute("class", "addToBagp")
        atc.textContent = elem.atc;
        atc.style.cursor = "pointer"


        atc.addEventListener("click", function() {
            addToBag(elem)
            // atc.innerText = "ADDED TO BAG"
        })

        contentBox.append(brand, productname, mix, atw, atc)

        box.append(img, contentBox)

        document.querySelector("#container").append(box);



    });

}



function addToWishlist(element) {
    // console.log(element)
    wishListData.push(element)
    localStorage.setItem("wishListObj", JSON.stringify(wishListData))
}

function addToBag(element) {
    // console.log(element)
    bagData.push(element)
    localStorage.setItem("BagListObj", JSON.stringify(bagData))
}

document.getElementById('landingPage').addEventListener('click', function() {
window.location.href = "../Landingpage/index.html"
}) 