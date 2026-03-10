
/*Headers Open-Api */
var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "d3f9e1a21ebbd9e702b942c43244dd7d");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};





/*Found all leagues*/

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result);
    const data = JSON.parse(result);
    const leagues = data.response;
    console.log("leagues ; " + leagues[0]);
    leagues[0].league.logo;
    const leagueDiv = document.querySelector('#principalDiv');
    leagues.forEach(league => {
      
      const leagueSingleDiv = document.createElement('div');
      leagueSingleDiv.classList.add('item');
      const leagueLogo = document.createElement('a');
    
      leagueLogo.href = league.league.logo;
      leagueLogo.innerHTML = `<img src="${league.league.logo}" alt="${league.league.name} logo" width="100">`;
      leagueSingleDiv.appendChild(leagueLogo);
      leagueDiv.appendChild(leagueSingleDiv);  
    });
    
    //document.body.appendChild(leagueDiv);

  })
  .catch(error => console.log('error', error));