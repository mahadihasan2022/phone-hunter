const searchPhone = () => {
  const searchField = document.getElementById("search-area");
  const searchText = searchField.value;
//   console.log(searchText);
  searchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySearchResult(data.meals));
}

const displaySearchResult = meals =>{
// console.log(meals);
const searchResult = document.getElementById('search-result');
meals.forEach(meal => {
    // console.log(meal);
});
    
}