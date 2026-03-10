
/*Headers to consume Open-Api */
var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "d3f9e1a21ebbd9e702b942c43244dd7d");

/** Object used to consume api-open */
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};




//* Consuming api soccer to find the leagues*/

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => {
    //console.log(result);
    const data = JSON.parse(result);
    const leagues = data.response;
    console.log("leagues ; " + leagues[0].league.logo);
    leagues[0].league.logo;
    const leagueDiv = document.querySelector('#principalDiv');
    leagues.forEach(league => {
      
      const leagueSingleDiv = document.createElement('div');
      leagueSingleDiv.classList.add('item');
      const leagueLogo = document.createElement('a');
    
      leagueLogo.href = teamsLeague(league.league.id);
      leagueLogo.innerHTML = `<img src="${league.league.logo}" alt="${league.league.name} logo" width="100">`;
      leagueSingleDiv.appendChild(leagueLogo);
      leagueDiv.appendChild(leagueSingleDiv);  
    });

  })
  .catch(error => console.log('error', error));


  //Consuming api soccer to find the team
  function teamsLeague(idLeague){
    console.log(idLeague);

    return "javascript:alert('Teams's league');";
    
  }

/** Element Footer */
const footerDiv = document.createElement("div");
footerDiv.id = "footer-bottom";
footerDiv.innerHTML = `<p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>`;
document.body.appendChild(footerDiv);