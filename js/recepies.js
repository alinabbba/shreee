let searchButton = document.querySelector("#search");
let search = document.getElementById('searchTerm');

const valueFromIndex = localStorage.getItem("searchWord");
console.log(valueFromIndex);


async function sendApiRequest(){
  let APP_ID = "39db4fe5";
  let APP_KEY = "8382a89caa486fac7d7eb8adc7e3b947";
  const searchValue = search.value;
  let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${APP_ID}&app_key=${APP_KEY}`);

  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

searchButton.addEventListener("click", () => {
  console.log("Button pressed");
  sendApiRequest();
})



function useApiData(data){
  for(var i = 0; i < 6; i++){
document.querySelector('#content').innerHTML += `
<div class="card" style="width: 21.5rem; float:left; margin: 10px"> 
  <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[i].recipe.label}</h5>
    <p class="card-text">Cuisine Type: ${data.hits[i].recipe.cuisineType}</p><br>
    <a href="${data.hits[i].recipe.url}" class="btn btn-primary morem" target="_blank">Check whole recipe</a>
  </div>
</div>
`
  }
}


