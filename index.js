document.addEventListener('DOMContentLoaded', fetcher)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95f070c36cmsh0f4696c3c3adb22p1ac720jsn60ec90ae2c5f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};




function fetcher(){
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		renderGame(response)
	})
	.catch(err => console.error(err));

}

function renderGame(gameData){
	for(let i = 0; i < 13; i++){
		console.log('game ' + i)
		const gameBar = document.getElementById('game-bar')
		const newImg = document.createElement('img')
		newImg.src = gameData[i].thumbnail
		gameBar.append(newImg)
	}
	// gameData.forEach(game =>{
	// 	const gameBar = document.getElementById('game-bar')
	// 	const newImg = document.createElement('img')
	// 	newImg.src = game.thumbnail
	// 	gameBar.append(newImg)
		
	// })
} 