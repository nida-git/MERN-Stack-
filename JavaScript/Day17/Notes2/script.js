// Carts website

let container = document.createElement("div");

async function fetchingCarts() {
  let response = await fetch("https://dummyjson.com/carts");
  let data = await response.json();

  data.carts.forEach((element) => {
    element.products.forEach((products) => {
      let imageElem = document.createElement("img");
      imageElem.setAttribute("src", products?.thumbnail);
      imageElem.classList.add("img");

      let titleElem = document.createElement("h3");
      titleElem.innerText = products?.title;
      titleElem.classList.add("title");

      let priceElem = document.createElement("span");
      priceElem.innerText = "$" + products.price;
      priceElem.classList.add("price");

      let quatityElem = document.createElement("span");
      quatityElem.innerText = products?.quantity + "items";
      quatityElem.classList.add("quantity");

      let totalElem = document.createElement("p");
      let roundedTotal = Math.round(products.total);
      totalElem.innerText = "Total price: $" + roundedTotal;
      totalElem.classList.add("quantity");

      let addBtn = document.createElement("button");
      addBtn.innerText = "Add to Cart";
      addBtn.classList.add("add-btn");

      let productContainer = document.createElement("div");
      productContainer.classList.add("product-container");

      productContainer.insertAdjacentElement("beforeend", imageElem);
      productContainer.insertAdjacentElement("beforeend", titleElem);
      productContainer.insertAdjacentElement("beforeend", priceElem);
      productContainer.insertAdjacentElement("beforeend", quatityElem);
      productContainer.insertAdjacentElement("beforeend", totalElem);
      productContainer.insertAdjacentElement("beforeend", addBtn);

      container.classList.add("container");

      container.insertAdjacentElement("beforeend", productContainer);

      document
        .querySelector("body")
        .insertAdjacentElement("beforeend", container);
    });
  });
}

fetchingCarts()

async function fetchingJokeApi() {
  let response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?amount=3",
  );
  let data = await response.json();

  data.jokes.forEach((element) => {
    const setUp = document.createElement("h1");
    let delivery = document.createElement("h3");
    const container = document.createElement("div");

    if (element.setup) {
      setUp.innerText = element.setup;

      container.insertAdjacentElement("beforeend", setUp);
      if (element.delivery) {
        delivery.innerText = element.delivery;
        container.insertAdjacentElement("beforeend", delivery);
      }
    } else {
      setUp.innerText = element.joke;
      container.insertAdjacentElement("beforeend", setUp);
    }

    document
      .querySelector("body")
      .insertAdjacentElement("beforeend", container);
  });
}

// fetchingJokeApi();
