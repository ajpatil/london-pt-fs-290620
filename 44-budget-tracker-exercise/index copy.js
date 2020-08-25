const products = [
  {
    id: 1,
    name: "Hand sanitiser",
    img:
      "https://i5.walmartimages.com/asr/f1728857-3120-4a4e-b474-d66f8ad1bc77_1.7e41f79bcada186bbbc136d1094be906.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff",
    price: 12.99,
    max_quantity: 3,
  },
  {
    id: 2,
    name: "Toilet roll",
    img: "https://images.allianceonline.co.uk/Products/HBTR0010.jpg",
    price: 7.99,
    max_quantity: 4,
  },
  {
    id: 3,
    name: "Pasta",
    img:
      "https://www.italianfoodexperts.com/wp-content/uploads/2017/11/Vera-pasta-italiana.jpg",
    price: 4.99,
    max_quantity: 5,
  },
  {
    id: 4,
    name: "Eggs",
    img:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/why-are-eggs-good-for-you-1296x728-feature.jpg?w=1155&h=1528",
    price: 5.99,
    max_quantity: 2,
  },
];

const totalBudget = document.querySelector("#remaining").querySelector("span");
let budget = totalBudget.getAttribute("data-value");

const chooseProductEl = document
  .querySelector("#cart")
  .querySelector("#products");

products.forEach((item,num) => {
  let listDivElement = document.createElement("div");
  listDivElement.className = `product_${num}`;
  listDivElement.innerHTML = `
    <div>
      <img src=${item.img} />
      <h3>${item.name}</h3>
    </div>
    <div>
      <p>${item.price}</p>
      <select class="option">
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
  `;
  chooseProductEl.appendChild(listDivElement);
})

const allProductQuantities = document.querySelectorAll("select");

const multiplyQuantityWithPrice = (num) => {
  let productQuantity = allProductQuantities[num];
  let productPrice = document
    .querySelector(`.product_${num}`)
    .querySelector("p").innerText;

  if (parseInt(productQuantity.selectedIndex) > 0) {
    let finalAmount =
      parseInt(productQuantity.selectedIndex) * parseFloat(productPrice);
    return finalAmount;
  }
};
multiplyQuantityWithPrice(0);
multiplyQuantityWithPrice(1);
multiplyQuantityWithPrice(2);
multiplyQuantityWithPrice(3);

const remainingBudget = (num) => {
  let mQ = multiplyQuantityWithPrice(num);
  let remainder = parseFloat(budget) - mQ;
  budget = remainder;
  // console.log(typeof budget);
  console.log(remainder);
  if (budget < 0) {
    window.alert("Out of money");
  } else if (budget > 0) {
    totalBudget.innerText = budget.toFixed(2);
  }
};

const optionsClass = document.querySelectorAll(".option");
//How can this be turned into a single function?
optionsClass[0].addEventListener("change", function () {
  remainingBudget(0);
});

optionsClass[1].addEventListener("change", function () {
  console.log("BUY");
  remainingBudget(1);
});

optionsClass[2].addEventListener("change", function () {
  console.log("BUY");
  remainingBudget(2);
});

optionsClass[3].addEventListener("change", function () {
  console.log("BUY");
  remainingBudget(3);
});
