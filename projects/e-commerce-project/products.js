const PRODUCTS = [
  {
    name: "Jules",
    type: "Table",
    price: 970,
    colors: ["turquoise", "grey", "ivory", "violet"],
    materials: ["Rubber", "Cotton"],

    filling_materials: ["Concrete", "Rubber", "Cotton", "Fresh"],
    dimensions: { w: 18, h: 120, d: 247 },
    seat_dimensions: { w: 119, h: 23, d: 62 },
    description:
      "Handcrafted holistic visualize platforms integrated generate relationships",
    weight: 25,
    comfort_level: "Firm",
    // photo_url: { name: "./img/Image-1.png" },
  },
  {
    name: "Ebba",
    type: "Chair",
    price: 270,
    colors: ["yellow", "salmon", "green", "ivory", "grey"],
    materials: ["Metal", "Steel"],
    filling_materials: ["Concrete", "Frozen", "Fresh", "Steel"],
    dimensions: { w: 207, h: 221, d: 56 },
    seat_dimensions: { w: 184, h: 175, d: 134 },
    description: "Ergonomic back-end mesh channels world-class deploy content",
    weight: 5,
    comfort_level: "Medium",
  },
  {
    name: "Melyssa",
    type: "Bed",
    price: 350,
    colors: ["tan", "green", "grey", "sky blue", "orchid"],
    materials: ["Cotton", "Metal"],
    filling_materials: ["Steel", "Fresh", "Plastic"],
    dimensions: { w: 103, h: 168, d: 215 },
    seat_dimensions: { w: 206, h: 56, d: 18 },
    description:
      "Refined collaborative visualize e-business seamless iterate convergence",
    weight: 41,
    comfort_level: "Medium",
  },
  {
    name: "Lincoln",
    type: "Bed",
    price: 935,
    colors: ["salmon", "purple", "orchid"],
    materials: ["Concrete", "Frozen"],
    filling_materials: ["Steel", "Concrete", "Soft", "Plastic"],
    dimensions: { w: 93, h: 75, d: 88 },
    seat_dimensions: { w: 233, h: 36, d: 190 },
    description:
      "Gorgeous granular matrix action-items out-of-the-box deliver platforms",
    weight: 22,
    comfort_level: "Medium",
  },
  {
    name: "Merritt",
    type: "Bed",
    price: 850,
    colors: ["salmon", "black", "lime", "tan", "turquoise"],
    materials: ["Soft", "Metal"],
    filling_materials: ["Metal", "Fresh", "Wooden"],
    dimensions: { w: 79, h: 252, d: 194 },
    seat_dimensions: { w: 155, h: 23, d: 176 },
    description:
      "Small bleeding-edge matrix channels mission-critical transform eyeballs",
    weight: 43,
    comfort_level: "Firm",
  },
  {
    name: "Willard",
    type: "Sofa",
    price: 560,
    colors: ["magenta", "violet", "lime", "tan"],
    materials: ["Frozen", "Plastic"],
    filling_materials: ["Steel", "Rubber", "Concrete"],
    dimensions: { w: 113, h: 93, d: 121 },
    seat_dimensions: { w: 183, h: 200, d: 139 },
    description:
      "Sleek distributed brand relationships next-generation aggregate infrastructures",
    weight: 9,
    comfort_level: "Solid",
  },
  {
    name: "Luigi",
    type: "Table",
    price: 835,
    colors: ["violet", "ivory", "tan"],
    materials: ["Rubber", "Plastic"],
    filling_materials: ["Metal", "Concrete", "Granite"],
    dimensions: { w: 204, h: 247, d: 134 },
    seat_dimensions: { w: 220, h: 201, d: 218 },
    description:
      "Rustic bleeding-edge cultivate e-services mission-critical transition vortals",
    weight: 39,
    comfort_level: "Medium",
  },
  {
    name: "Mark",
    type: "Table",
    price: 890,
    colors: ["maroon", "ivory", "lime", "green", "yellow"],
    materials: ["Fresh", "Metal"],
    filling_materials: ["Cotton", "Frozen", "Plastic", "Fresh"],
    dimensions: { w: 56, h: 164, d: 182 },
    seat_dimensions: { w: 160, h: 193, d: 159 },
    description:
      "Rustic next-generation enable e-markets one-to-one extend vortals",
    weight: 20,
    comfort_level: "Soft",
  },
  {
    name: "Franz",
    type: "Sofa",
    price: 810,
    colors: ["lime", "green", "sky blue", "black", "orchid"],
    materials: ["Soft", "Frozen"],
    filling_materials: ["Granite", "Rubber", "Plastic", "Fresh"],
    dimensions: { w: 216, h: 26, d: 177 },
    seat_dimensions: { w: 16, h: 157, d: 62 },
    description:
      "Practical e-business reintermediate markets proactive incubate architectures",
    weight: 28,
    comfort_level: "Soft",
  },
  {
    name: "Dominic",
    type: "Chair",
    price: 305,
    colors: ["green", "azure", "black", "tan", "violet"],
    materials: ["Soft", "Wooden"],
    filling_materials: ["Granite", "Rubber", "Frozen"],
    dimensions: { w: 100, h: 72, d: 20 },
    seat_dimensions: { w: 154, h: 161, d: 114 },
    description:
      "Intelligent compelling benchmark relationships proactive streamline infrastructures",
    weight: 13,
    comfort_level: "Solid",
  },
  {
    name: "Chet",
    type: "Table",
    price: 370,
    colors: ["magenta", "salmon", "maroon", "yellow", "black"],
    materials: ["Frozen", "Soft"],
    filling_materials: ["Cotton", "Granite", "Metal"],
    dimensions: { w: 189, h: 53, d: 111 },
    seat_dimensions: { w: 16, h: 185, d: 215 },
    description: "Rustic visionary implement e-tailers rich utilize e-markets",
    weight: 35,
    comfort_level: "Firm",
  },
  {
    name: "Haleigh",
    type: "Chair",
    price: 580,
    colors: ["sky blue", "salmon", "black", "yellow"],
    materials: ["Rubber"],
    filling_materials: ["Cotton", "Rubber", "Concrete", "Granite"],
    dimensions: { w: 226, h: 91, d: 96 },
    seat_dimensions: { w: 174, h: 104, d: 116 },
    description:
      "Unbranded rich target interfaces enterprise evolve deliverables",
    weight: 30,
    comfort_level: "Soft",
  },
  {
    name: "Isobel",
    type: "Sofa",
    price: 340,
    colors: ["grey", "purple", "yellow"],
    materials: ["Steel", "Fresh"],
    filling_materials: ["Fresh", "Steel", "Metal"],
    dimensions: { w: 111, h: 127, d: 180 },
    seat_dimensions: { w: 30, h: 238, d: 148 },
    description:
      "Awesome turn-key expedite eyeballs bricks-and-clicks aggregate web services",
    weight: 38,
    comfort_level: "Solid",
  },
  {
    name: "Norwood",
    type: "Table",
    price: 315,
    colors: ["lime", "purple", "salmon", "violet", "grey"],
    materials: ["Metal", "Granite"],
    filling_materials: ["Granite", "Wooden", "Metal", "Cotton"],
    dimensions: { w: 108, h: 254, d: 46 },
    seat_dimensions: { w: 138, h: 17, d: 71 },
    description:
      "Rustic killer integrate solutions open-source brand mindshare",
    weight: 1,
    comfort_level: "Medium",
  },
  {
    name: "Melvina",
    type: "Sofa",
    price: 905,
    colors: ["purple", "ivory", "lime", "salmon"],
    materials: ["Plastic", "Cotton"],
    filling_materials: ["Fresh", "Wooden", "Soft", "Cotton"],
    dimensions: { w: 83, h: 182, d: 41 },
    seat_dimensions: { w: 18, h: 169, d: 21 },
    description:
      "Sleek value-added cultivate solutions interactive seize bandwidth",
    weight: 27,
    comfort_level: "Medium",
  },
  {
    name: "Lottie",
    type: "Sofa",
    price: 245,
    colors: ["violet", "magenta", "grey", "red"],
    materials: ["Steel", "Plastic"],
    filling_materials: ["Wooden", "Cotton", "Metal", "Concrete"],
    dimensions: { w: 163, h: 53, d: 130 },
    seat_dimensions: { w: 232, h: 113, d: 257 },
    description:
      "Awesome rich innovate paradigms bricks-and-clicks strategize e-commerce",
    weight: 42,
    comfort_level: "Firm",
  },
  {
    name: "Unique",
    type: "Bed",
    price: 120,
    colors: ["magenta", "orchid", "purple", "red", "yellow"],
    materials: ["Rubber", "Granite"],
    filling_materials: ["Plastic", "Rubber", "Granite"],
    dimensions: { w: 180, h: 228, d: 139 },
    seat_dimensions: { w: 75, h: 173, d: 232 },
    description:
      "Awesome sticky expedite architectures cross-media iterate portals",
    weight: 45,
    comfort_level: "Solid",
  },
  {
    name: "Arielle",
    type: "Chair",
    price: 445,
    colors: ["lime", "purple", "salmon", "maroon", "violet"],
    materials: ["Granite", "Concrete"],
    filling_materials: ["Wooden", "Metal", "Steel"],
    dimensions: { w: 141, h: 169, d: 101 },
    seat_dimensions: { w: 197, h: 188, d: 188 },
    description: "Tasty world-class morph vortals viral strategize markets",
    weight: 15,
    comfort_level: "Soft",
  },
  {
    name: "Marlin",
    type: "Sofa",
    price: 415,
    colors: ["lime", "violet", "tan", "azure"],
    materials: ["Granite"],
    filling_materials: ["Cotton", "Soft", "Concrete"],
    dimensions: { w: 145, h: 32, d: 142 },
    seat_dimensions: { w: 28, h: 146, d: 36 },
    description:
      "Intelligent integrated morph paradigms holistic redefine functionalities",
    weight: 20,
    comfort_level: "Medium",
  },
  {
    name: "Cleveland",
    type: "Sofa",
    price: 1460,
    colors: ["tan", "ivory", "azure", "yellow"],
    materials: ["Steel", "Concrete"],
    filling_materials: ["Rubber", "Soft", "Wooden"],
    dimensions: { w: 127, h: 35, d: 65 },
    seat_dimensions: { w: 51, h: 70, d: 222 },
    description: "Incredible interactive scale ROI dot-com brand markets",
    weight: 28,
    comfort_level: "Medium",
  },
];

const filters = {};

renderer(PRODUCTS);
generateColorFilter(PRODUCTS);
generateCategoryFilter(PRODUCTS);
generateRangeFilter(PRODUCTS);

function renderer(arr) {
  let item_container = document.querySelector("#item_container");
  item_container.innerHTML = "";
  arr.forEach((item) => {
    item_container.innerHTML += `
      <div 
        class='item'
        onclick='window.open("product_page.html?name=${item.name}")'
      >
        <div class='img'>image here</div>
        <div>${item.name}</div>
        <div class='price_line'>
          <div>${item.type.toUpperCase()}</div>
          <div>
            <div>$${item.price.toLocaleString("en-US")}</div>

            <svg 
              onclick='addChart(event, "${item.name}")'
              width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L3.72727 4.29032V14.1613L2.09091 18H25" stroke="#131313" stroke-width="2"/>
              <path d="M4 4H23L19.7429 14H4" stroke="#131313" stroke-width="2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4 25C5.10457 25 6 24.1046 6 23C6 21.8954 5.10457 21 4 21C2.89543 21 2 21.8954 2 23C2 24.1046 2.89543 25 4 25Z" stroke="#131313" stroke-width="2" stroke-linecap="square"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 25C23.1046 25 24 24.1046 24 23C24 21.8954 23.1046 21 22 21C20.8954 21 20 21.8954 20 23C20 24.1046 20.8954 25 22 25Z" stroke="#131313" stroke-width="2" stroke-linecap="square"/>
              <rect x="12" y="6" width="2" height="6" fill="#1B1B1B"/>
              <rect x="16" y="8" width="2" height="6" transform="rotate(90 16 8)" fill="#1B1B1B"/>
            </svg>

          </div>
        </div>
      </div>
    `;
  });
}
function addChart(e, item) {
  e.stopPropagation();
  alert(item + " was added to chart");
  let products = [];
  if (localStorage.getItem("chart")) {
    products = JSON.parse(localStorage.getItem("chart"));
  }
  products.push(item);
  localStorage.setItem("chart", JSON.stringify(products));
}
function generateColorFilter(arr) {
  let colors = Array.from(
    new Set(
      arr.reduce((arr, i) => {
        i.colors.forEach((i) => arr.push(i));
        return arr;
      }, [])
    )
  ).sort();
  let colorBlock = document.querySelector("#color");
  colorBlock.innerHTML = "<div>COLORS</div>";
  colors.forEach((color) => {
    colorBlock.innerHTML += `
      <div>
        <input 
          type = 'checkbox' 
          value = '${color}'
          name = 'color'
          onchange = 'setFilters(event)'
        />
        ${color}
      </div>
    `;
  });
}
function generateCategoryFilter(arr) {
  let types = Array.from(new Set(arr.map((i) => i.type))).sort();
  let categoryBlock = document.querySelector("#category");
  categoryBlock.innerHTML = "<div>CATEGORY</div>";
  types.forEach((category) => {
    categoryBlock.innerHTML += `
      <div>
        <input 
          type = 'checkbox' 
          value = '${category}'
          name = 'category'
          onchange = 'setFilters(event)'
        />
        ${category}
      </div>
    `;
  });
}
function generateRangeFilter(arr) {
  let prices = arr.map((i) => i.price);

  let priceBlock = document.querySelector("#price");
  priceBlock.innerHTML = "<div>PRICE</div>";
  priceBlock.innerHTML += `
    <input 
      type = 'range' 
      min = '${Math.min(...prices)}'
      max = '${Math.max(...prices)}'
      name = 'price'
      oninput = 'setFilters(event)'
    />
  `;
}
function setFilters(e) {
  const { name, value, checked } = e.target;

  if (name === "price") {
    if (!(name in filters)) {
      filters[name] = 0;
    }
    filters[name] = value;
  } else {
    if (!(name in filters)) {
      filters[name] = [];
    }
    if (checked) {
      filters[name].push(value);
    } else {
      let index = filters[name].findIndex((i) => i === value);
      filters[name].splice(index, 1);
    }
  }

  let copy = [...PRODUCTS];
  let filtered = copy;
  if (filters.color && filters.color.length) {
    filtered = filtered.filter((item) =>
      item.colors.some((i) => filters.color.includes(i))
    );
  }
  if (filters.category && filters.category.length) {
    filtered = filtered.filter((item) => filters.category.includes(item.type));
  }
  if (filters.price && filters.price > 0) {
    filtered = filtered.filter((item) => filters.price > item.price);
  }
  renderer(filtered);
}
