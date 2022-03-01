// search system
const searchPhone = () => {
  const searchfield = document.getElementById("search-area");
  const searchtext = searchfield.value;
  // console.log(searchtext);

  searchfield.value = "";

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchtext}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((status) => displaySearchResult(status.data));
};

const displaySearchResult = (data) => {
  // console.log(data);
  const searchResult = document.getElementById("search-result");
  data.forEach((data) => {
    console.log(data);

    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
          <div onclick="loadPhoneDetail(${data.iddata})" class="card h-100">
              <img src="${data.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${data.phone_name}</h5>
                  <p class="card-text">${data.brand}</p>
                  <p class="card-slug">${data.slug}</p>
                </div>
          </div> 
      `;

    searchResult.appendChild(div);
  });
};

const loadPhoneDetail = (dataSlug) => {
  console.log(dataSlug);
}