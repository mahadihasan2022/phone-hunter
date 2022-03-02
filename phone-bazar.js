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

const displaySearchResult = (phones) => {
  // console.log(phone);
  if(phones.length == 0){
    alert("No Data Found");
}
  const searchResult = document.getElementById("search-result");
  const slice = phones.slice(0,20);
  for(const phone of slice){
    // console.log(phone);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="cols-lg-3 cols-sm-1 w-50 mx-auto">
        <div class="card h-50">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
            </div>
            <button onclick="loadPhoneDetail('${phone.slug}')">
                Details
            </button>
        </div>
        </div>

    `;

    searchResult.appendChild(div);
}
}
const loadPhoneDetail = phoneId => {
  // console.log(phoneId);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(url)
  .then(res => res.json())
  .then(status => displayPhoneDetails(status.data));
  
}

const displayPhoneDetails = phone => {
  let field = document.getElementById('detailPhone');
  field.innerText = '';
  const div = document.createElement('div');

  div. classList.add('card');

  div.innerHTML = `
  <div class="cols-lg-6 cols-sm-6 mx-auto">
  <img src="${phone.image}" class="card-img-top w-25" >
      <div class="card-body">
          <h5 class="card-title">Id: ${phone.slug} </h5>
          <h5 class="card-title">Name: ${phone.name} </h5>
          <h5 class="card-title">Memory: ${phone.mainFeatures.memory} </h5>
          <h5 class="card-title">Sensors: ${phone.mainFeatures.sensors} </h5>
          <h5 class="card-title">Chipset: ${phone.mainFeatures.chipSet} </h5>
          <h5 class="card-title">Storage: ${phone.mainFeatures.storage} </h5>
          <h5 class="card-title">Others: ${phone?.others?.WLAN ? phone.others.WLAN : 'Not Found'} </h5>
          <h5 class="card-title">Bluetooth: ${phone?.others?.Bluetooth ? phone.others.Bluetooth : 'Not Found'} </h5>
          <h5 class="card-title">Release Date: ${phone?.releaseDate ? phone.releaseDate : 'Not Found'} </h5>
          
      </div>
  </div>
  `;
  field.appendChild(div);
}