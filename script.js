let all_posts = document.querySelector(".posts");
let all_products = document.querySelector(".allProducts");
let all_to_dos = document.querySelector(".todos");

// console.log(all_products);

const url1 = "https://dummyjson.com/posts";
const url2 = "https://dummyjson.com/products";
const url3 = "https://dummyjson.com/todos";
let data1;
let data2;
let data3;

async function promise1Api(time) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        let response = await fetch(url1);

        data1 = await response.json();
        console.log(data1);
        return resolve(true);
      } catch (error) {
        return reject(error);
      }
    }, time);
  });
}

async function promise2Api(time) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        let response = await fetch(url2);
        data2 = await response.json();
        // console.log(data2);
        return resolve(true);
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    }, time);
  });
}

async function promise3Api(time) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        let response = await fetch(url3);
        data3 = await response.json();
        // console.log(data3);
        return resolve(true);
      } catch (error) {
        return reject(error);
      }
    }, time);
  });
}

async function handlePromises() {
  try {
    let promise1Res = await promise1Api(1000);
    if (promise1Res == true) {
      show_all_posts();
      let promise2Res = await promise2Api(2000);
      if (promise2Res == true) {
        show_all_products();
        let promise3Res = await promise3Api(3000);
        if (promise3Res == true) {
          show_to_doLists();
        }
        console.log(data3);
      }
    }
  } catch (error) {
    console.log(error);
    return;
  }
}
function show_all_posts() {
  all_posts.innerHTML = ``;
  let data = data1.posts;
  document.getElementById(
    "allpost"
  ).innerText = `All Posts:Promise resolved at:${new Date().toLocaleTimeString()}`;
  data.forEach((eachpost) => {
    all_posts.innerHTML += `
    <div class="post">
    <div class="userIdInfo">
      <div id="postno">Post.No : ${eachpost.id}</div>
      <div id="userId">UserId : ${eachpost.userId}</div>
      <div id="reactions">Reactions : ${eachpost.reactions}</div>
    </div>
    <div class="tagList">Taglists : ${eachpost.tags}</div>
    <div class="title">Title : ${eachpost.title}</div>
    <div class="postBody">
      Body: ${eachpost.body}
    </div>
  </div>
    `;
  });
}
function show_all_products() {
  let data = data2.products;
  all_products.innerHTML = ``;
  document.getElementById(
    "allproducts"
  ).innerText = `All Products:Promise resolved at:${new Date().toLocaleTimeString()}`;

  data.forEach((eachProduct) => {
    all_products.innerHTML += `
<div class="item">
          <div class="img">
            <img
              src=${eachProduct.thumbnail}
              alt=""
            />
          </div>

          <div class="Product">
            <div class="brandInfo">
              <div id="itembrand">Brand :${eachProduct.brand.slice(0, 9)}.</div>
              <div id="category">Category :${eachProduct.category.slice(
                0,
                10
              )}</div>
            </div>
            <div class="otherInfo">
              <div class="priceRating">
                <p>Price :${eachProduct.price}$</p>
                <p>Rating :${eachProduct.rating}
                <span
                class="material-icons"
                style="color: white; font-size: small;"
              >
                star
              </span>
                </p>
              </div>
            </div>

            <div class="title">Title :${eachProduct.title}</div>
            <div class="discount-percentage">Discount Percentage :${
              eachProduct.discountPercentage
            }%</div>
            <div class="description">Description :${
              eachProduct.description
            }</div>
          </div>
        </div>
`;
  });
}

function show_to_doLists() {
  all_to_dos.innerHTML = ``;
  document.getElementById(
    "alltodo's"
  ).innerText = `All todo's:Promise resolved at:${new Date().toLocaleTimeString()}`;

  let data = data3.todos;
  // console.log(data)
  data.forEach((eachlist) => {
    all_to_dos.innerHTML += `
<div class="infobox">
<div class="ids">
  <span>Id :${eachlist.id}</span>
  <span>UserId :${eachlist.userId}</span>
</div>
<div class="status">Completed :${eachlist.completed}</div>
<div class="todo">TO do's :${eachlist.todo}</div>
</div>
`;
  });
}
