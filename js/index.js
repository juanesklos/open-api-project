
/*Headers Open-Api */
var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "d3f9e1a21ebbd9e702b942c43244dd7d");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


const boton = document.querySelector("#search");
const inputSearch = document.querySelector("#inputSearch");
const titleDiv = document.createElement('h2');

let countriesList = [];

//* Searching soccer Countries*/
fetch(`https://v3.football.api-sports.io/countries`, requestOptions)
  .then(response => response.text())
  .then(result => {
      //console.log(result);
      const data = JSON.parse(result);
      countries = data.response;
      countries.map(country => {
        let countruItem = country.name;
        countriesList.push(countruItem);
      });

      //console.log("Lista 1 ;" + countriesList);
    })
  .catch(error => console.log('error', error));




//** Listing Soccer countries */
inputSearch.addEventListener('mousedown' , () =>{

  const listCountry = document.querySelector("#lista-frameworks");

  //console.log("lista " + countriesList);
  countriesList.forEach( country => {
    //console.log(`Paises ${country}`);
    const countryOption = document.createElement("option");
    countryOption.value = country;
    listCountry.appendChild(countryOption);
  });
});


/*Searching leagues with name */
boton.addEventListener("click", () => {
    //alert(inputSearch.value);
    fetch(`https://v3.football.api-sports.io/leagues?search=${inputSearch.value}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      titleDiv.innerHTML = `<span>${inputSearch.value}</span>`;
      const data = JSON.parse(result);
      const leagues = data.response;
      console.log(leagues[0]);
      leagues[0].league.logo;
      const leagueDiv = document.querySelector('#principalDiv');
      leagueDiv.innerHTML = '';
      leagues.forEach(league => {
        
        const leagueSingleDiv = document.createElement('div');
        //leagueSingleDiv.innerHTML = '';
        leagueSingleDiv.classList.add('item');
        const leagueLogo = document.createElement('a');
      
        leagueLogo.href = league.league.logo;
        leagueLogo.innerHTML = `<img src="${league.league.logo}" alt="${league.league.name} logo" width="100">`;
        leagueSingleDiv.appendChild(leagueLogo);
        leagueDiv.appendChild(leagueSingleDiv);  
      });
      
      document.body.appendChild(titleDiv);
      document.body.appendChild(leagueDiv);
      inputSearch.value = '';

    })
    .catch(error => console.log('error', error));
    
});




