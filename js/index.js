
/*Headers to consume Open-Api */
var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "d3f9e1a21ebbd9e702b942c43244dd7d");

/** Object used to consume api-open */
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


/* We search the elements in the html document */
const boton = document.querySelector("#search");
const inputSearch = document.querySelector("#inputSearch");

/* We create element h2 to deploy the name of country*/
const titleDiv = document.createElement('h2');

//ArrayList empty to export the data from api soccer
let countriesList = [];

//* COnsuming api soccer to find the Countries*/
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
    })
  .catch(error => console.log('error', error));




//** Listing Soccer countries into imput element*/

//We created listener
inputSearch.addEventListener('mousedown' , () =>{

  const listCountry = document.querySelector("#lista-frameworks");

  // we loop the countries
  //console.log("lista " + countriesList);
  countriesList.forEach( country => {
    //console.log(`Paises ${country}`);
    const countryOption = document.createElement("option");
    countryOption.value = country;
    //we assigned to the list element into the input element
    listCountry.appendChild(countryOption);
  });
});


/*Searching leagues with the name */
boton.addEventListener("click", () => {
    //alert(inputSearch.value);
    fetch(`https://v3.football.api-sports.io/leagues?search=${inputSearch.value}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      //getting the results from the api
      //console.log(result);
      titleDiv.innerHTML = `<span>${inputSearch.value}</span>`;
      const data = JSON.parse(result);
      const leagues = data.response;
      console.log(leagues[0]);
      leagues[0].league.logo;
      const leagueDiv = document.querySelector('#principalDiv');
      leagueDiv.innerHTML = '';

      //We go through the list and find the names and logos.
      leagues.forEach(league => {
        
        const leagueSingleDiv = document.createElement('div');
        leagueSingleDiv.classList.add('item');
        const leagueLogo = document.createElement('a');
      
        leagueLogo.href = league.league.logo;
        leagueLogo.innerHTML = `<img src="${league.league.logo}" alt="${league.league.name} logo" width="100">`;
        leagueSingleDiv.appendChild(leagueLogo);
        leagueDiv.appendChild(leagueSingleDiv);  
      });
      
      //adding the elements to the body
      document.body.appendChild(titleDiv);
      document.body.appendChild(leagueDiv);
      inputSearch.value = '';

    })
    //we can handle any error launch for the api soccer
    .catch(error => console.log('error', error));
    
});


/** Element Footer */
const footerDiv = document.createElement("div");
footerDiv.id = "footer-bottom";
footerDiv.innerHTML = `<p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>`;
document.body.appendChild(footerDiv);


