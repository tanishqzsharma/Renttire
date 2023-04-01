var womensData = [{
    image_url: "style&js/imgs/deeskhitadii.jpg",
    brand: "Blue Coord Set",
    para: "Size - L",
    rs:169,
    price: "Rs. 169",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag:"Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_5757.PNG",
    brand: "Floral Rutched Dress",
    para: "Size - S",
    rs: 129,
    price: "Rs. 129",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_5762.PNG",   
    brand: "Geometric Tube Top",
    para: "Size - M",
    rs: 109,
    price: "Rs. 109",
    // offer: "CHAT NOW",
    wishList: "WISHLIST  ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_8020.png",
    brand: "Maroon Flared Pants",
    para: "Size 26",
    rs: 99,
    price: "Rs. 99",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_2245.png",
    brand: "Kurti with Palazzos Set",
    para: "Size - S",
    rs: 159,
    price: "Rs. 159",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_5747.PNG",
    brand: "Women Solid Co-Ords",
    para: "Size - M",
    rs: 179,
    price: "Rs. 179",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_9009.PNG",
    brand: "Lehenga Choli Set with Dupatta",
    para: "Size - M",
    rs: 449,
    price: "Rs. 449",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_9005.PNG",
    brand: "Solid Longline Overcoat with Pants",
    para: "Size - L",
    rs: 379,
    price: "Rs. 379",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_8714.JPG",
    brand: "Striped Sweater",
    para: "Size - S",
    rs: 109,
    price: "Rs. 109",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_9004.PNG",
    brand: "Tie & dye Co-Ord",
    para: "Size - M",
    rs: 239,
    price: "Rs. 239",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_9010.PNG",
    brand: "Long Beach Dress",
    para: "Size - M",
    rs: 159,
    price: "Rs. 159",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_9011.PNG",
    brand: "Puffer Jacket with Cargos",
    para: "Size - M",
    rs: 483,
    price: "Rs. 483",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_5776.PNG",
    brand: "Lehenga Choli Set with Dupatta",
    para: "Size - M",
    rs: 594,
    price: "Rs. 594",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_2997.png",
    brand: "Long Floral Dress",
    para: "Size - XS",
    rs: 129,
    price: "Rs. 129",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/IMG_5775.PNG",
    brand: "Beige Overcoat",
    para: "Size - M",
    rs: 297,
    price: "Rs. 297",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
{
    image_url: "style&js/imgs/Screenshot 2023-03-29 011438.png",
    brand: "Puffed Sleeves Crop Top",
    para: "Size - S",
    rs: 154,
    price: "Rs. 154",
    // offer: "CHAT NOW",
    wishList: "WISHLIST ♡",
    addToBag: "Chat with Owner",
},
];

var wishList = JSON.parse(localStorage.getItem("wishListObj")) || [];

var bagList = JSON.parse(localStorage.getItem("BagListObj")) || [];


window.addEventListener('load', function(){
    displayPage(womensData)
  })

  document.getElementById('nameSort').addEventListener('change', sortNames);
    function sortNames(){
      var selected = document.getElementById('nameSort').value;
      if(selected == 'asc'){
        womensData.sort(function(a, b){
            if(a.brand > b.brand) return 1
            if(a.brand < b.brand) return -1
            return 0;
        })
        
        displayPage(womensData); 
      }
      else{
        womensData.sort(function(a, b){
          if(a.brand > b.brand) return -1
          if(a.brand < b.brand) return 1
          return 0
        })
    
        displayPage(womensData)
      }
    }

    document.getElementById('priceSort').addEventListener('change', sortPrice); 
    function sortPrice(){
      var selected = document.getElementById('priceSort').value;
      if(selected == 'lth'){
        womensData.sort(function(a, b){
          return a.rs-b.rs;
        })
        displayPage(womensData); 
      }
      else{
        womensData.sort(function(a, b){
          return b.rs - a.rs
        })
        displayPage(womensData)
      }
    }

    document.getElementById('brandFilter').addEventListener('change', filterBrand);
    function filterBrand(){
      var selected = document.getElementById('brandFilter').value
      var newArray = womensData.filter(function(element){
          if(element.brand == selected){
            return element;
          }
      })
      displayPage(newArray);
    }

    function displayPage(womensData) {

        document.getElementById("container").innerHTML = "";

        // Total

womensData.map(function(element) {
    var box = document.createElement("div");
    box.style.cursor = "pointer";
    
    var img = document.createElement("img");
    img.src = element.image_url;
    
    var contentBox = document.createElement("div");
    contentBox.setAttribute("class", "contentBox");
    
    var brand = document.createElement("h4");
    brand.textContent = element.brand;
    
    var para = document.createElement("p");
    para.textContent = element.para;
    
    var mix = document.createElement("div");
    mix.setAttribute("class", "mixbox");
    
    var price = document.createElement("p");
    price.textContent = element.price;
    
    var strikeprice = document.createElement("p");
    strikeprice.textContent = element.strikedoffprice;
    strikeprice.setAttribute("class", "strikep");
    
    var offer = document.createElement("p");
    offer.textContent = element.offer;
    offer.setAttribute("class", "offerp");
    
    mix.append(price, strikeprice, offer);
    
    var wishList = document.createElement("p");
    wishList.setAttribute("class", "wishListp");
    wishList.textContent = element.wishList;
    wishList.style.cursor = "pointer";
    
    wishList.addEventListener("click", function() {
        addToWishlist(element);
        wishList.style.color = "green";
        wishList.innerText = "ADDED TO WISHLIST";
    });
    
    var addToBag = document.createElement("p");
    addToBag.setAttribute("class", "addToBagp");
    addToBag.textContent = element.addToBag;
    addToBag.style.cursor = "pointer";
    
    addToBag.addEventListener("click", function() {
        addToBaglist(element);
        addToBag.innerText = "ADDED TO BAG";
    });
    
    contentBox.append(brand, para, mix, wishList, addToBag);
    box.append(img, contentBox);
    
    document.querySelector("#container").append(box);
    });
    
    
    // Total

}



function addToWishlist(element) {
wishList.push(element);
localStorage.setItem("wishListObj", JSON.stringify(wishList));
}

function addToBaglist(element) {
bagList.push(element);
localStorage.setItem("BagListObj", JSON.stringify(bagList));
}

document.getElementById("land").addEventListener("click", function() {
window.location.href = "/LandingPage/index.html";
});