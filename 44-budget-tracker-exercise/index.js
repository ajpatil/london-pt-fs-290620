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

const budget = document.querySelector("#remaining");
let currentBudget = parseFloat(budget.innerText.split("").slice(1).join(""));

products.forEach((item) => {
  let listDivElement = document.createElement("div");
  listDivElement.className = "product";
  listDivElement.innerHTML = `
    <div>
      <img src=${item.img} />
      <h3>${item.name}</h3>
    </div>
    <div>
      <p>${item.price}</p>
      <select class="option" name='${item.name}' onchange='changeHandler(event,${item.price})'>
        <option value='0'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
      </select>
    </div>
  `;
  document.querySelector("#products").appendChild(listDivElement);
});
let selectObj = {};

function changeHandler(e, price) {
  let { name, value } = e.target;
  selectObj[name] = value * price;

  let current = Object.values(selectObj).reduce(
    (sum, price) => (sum += price),
    0
  );
  let left = currentBudget - current;
  if (left < 0) {
    let error = document.querySelector(".error");
    error.style.display = "block";
    selectObj[name] = 0;
    setTimeout(() => {
      error.style.display = "none";
      e.target.value = 0;
    }, 3000);
  } else {
    budget.innerText = "£" + Math.round(left * 100) / 100;
  }
}
