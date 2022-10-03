document.addEventListener('DOMContentLoaded', fetcher)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8423e676emsh3d25a3c5642015ep108633jsn03bcfb9d29a9',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};




function fetcher(){
fetch('https://opencritic-api.p.rapidapi.com/game/hall-of-fame/2020', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		renderGame(response)
	})
	.catch(err => console.error(err));

}

function renderGame(gameData){
	gameData.forEach(game =>{
		const gameBar = document.getElementById('game-bar')
		const newImg = document.createElement('img')
		newImg.src = game.images.banner.og
		gameBar.append(newImg)
		
	})
} 