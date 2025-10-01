document.addEventListener("DOMContentLoaded", () => {
  const productlist = document.getElementById("product-list");
  const cartitems = document.getElementById("cart-items");
  const carttotal = document.getElementById("cart-total");
  const empty = document.getElementById("empty-cart");
  const totalpricedisplay = document.getElementById("total-price");
  const checkout = document.getElementById("checkout-btn");
  const removeitem = document.getElementById("remove-item-btn");
  const products = [
    { id: 1, name: "Product 1", price: 5.56 },
    { id: 2, name: "Product 2", price: 15.88 },
    { id: 3, name: "Product 3", price: 51.03 },
    { id: 4, name: "Product 4", price: 42.33 },
  ];
  let cart = JSON.parse(localStorage.getItem("products")) || [];
  rendercart();
  //we have to display the products we can do that by running the loop over the products
  //and containing them in a display div and then showing that div
  products.forEach((product) => {
    const productdiv = document.createElement("div");
    //each project has its div which is product and we'll add class to it

    //adding class
    productdiv.classList.add("product");
    productdiv.innerHTML = `
    <span>${product.name}-$${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>`;
    productlist.appendChild(productdiv);
  });
  //to prevent proccess bubbling up and to not make the whole div clickable
  productlist.addEventListener("click", (e) => {
    //console.log("clicked");//this will get activated even when you just click the div and not the button
    if (e.target.tagName === "BUTTON") {
      console.log(typeof e.target.getAttribute("data-id")); //data id is string but id number so we cannot use it directly
      const productid = parseInt(e.target.getAttribute("data-id")); //we have to convert it to number
      const product = products.find((p) => p.id === productid); //this will return the first product id in products which matches productid
      // console.log(product);
      addtocart(product);
    }
  });
  function addtocart(product) {
    cart.push(product);
    //console.log(cart);
    savecart();
    rendercart();
  }
  function rendercart() {
    cartitems.innerText = "";
    let totalprice = 0;
    if (cart.length > 0) {
      empty.classList.add("hidden");
      carttotal.classList.remove("hidden");
      cart.forEach((item) => {
        totalprice += item.price;
        const cartitem = document.createElement("div");
        cartitem.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}</span>`;
        //this html will not have any effect it will just be flaoting around
        //so we have to attach it
        cartitems.appendChild(cartitem);
      });
      totalpricedisplay.textContent = `${totalprice.toFixed(2)}`;
    } else {
      empty.classList.remove("hidden");
      carttotal.classList.add("hidden");
    }
  }

  checkout.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successful");
    rendercart();
  });
  
  function savecart() {
    localStorage.setItem("products", JSON.stringify(cart));
  }
});
