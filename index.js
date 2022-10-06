document.addEventListener('DOMContentLoaded', fetcher)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95f070c36cmsh0f4696c3c3adb22p1ac720jsn60ec90ae2c5f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

let globalArray = [];
function fetcher(){
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=release-date', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		globalArray = response
		renderGame(globalArray)
		let splitDates = [...new Set(firstFour)];
		splitDates.forEach(year =>{
		const dropDownOption = document.createElement('option')
		dropDownOption.textContent = year
		releaseYears.append(dropDownOption)
		
		// console.log(globalArray)
	})
		// .catch(err => console.error(err));

	})
}



let firstFour = [];


function renderGame(globalArray){
	const releaseYears = document.getElementById('releaseYears')
	
	
	console.log(firstFour)
	for(let i = 0; i < globalArray.length; i++){
		// console.log('game ' + i)
		// const dropDownOption = document.createElement('option')
		firstFour.push(globalArray[i].release_date.split('-')[0])
		// releaseYears.append(dropDownOption)
		const gameBar = document.getElementById('game-bar')
		const newImg = document.createElement('img')
		newImg.src = globalArray[i].thumbnail

		newImg.setAttribute('name', globalArray[i].title)
		newImg.setAttribute('genre', globalArray[i].genre)
		newImg.setAttribute('developer', globalArray[i].developer)
		newImg.setAttribute('releaseDate', globalArray[i].release_date)
		newImg.classList.add('gameIcon')
		
		gameBar.append(newImg)
		// const gameName = document.getElementById('name')
		const gameName = document.getElementById('name')
		newImg.addEventListener('click', showInfo)
	}
	// let splitDates = [...new Set(firstFour)];
	// splitDates.forEach(year =>{
	// 	const dropDownOption = document.createElement('option')
	// 	dropDownOption.textContent = year
	// 	releaseYears.append(dropDownOption)
	
	releaseYears.addEventListener('change', (e)=> {
		const selectedYear = releaseYears.options[releaseYears.selectedIndex].value
		const gameIcons = Array.from(document.getElementsByClassName('gameIcon'))
		const filteredGames = gameIcons.filter(game =>{
			console.log(game.getAttribute('releaseDate'))
			if(selectedYear === game.getAttribute('releaseDate').split('-')[0]){
				game.removeAttribute('hidden')
			} else {
				game.setAttribute('hidden', '')
			} 
		})
		document.querySelector('#game-bar')
		console.log(filteredGames)
		// console.log('releaseDate')
	
		// console.log(selectedYear)
		// console.log(splitDates)
	})
}




function showInfo(e){
	const gameName = document.getElementById('name')
	const displayImg = document.getElementById('displayImg')
	const genreTag = document.getElementById('genreTag')
	const gameDeveloper = document.getElementById('developer')
	const releaseDate = document.getElementById('releaseDate')


	// displayImg.src = e.target.thumbnail
	gameName.textContent = e.target.name
	displayImg.src = e.target.src
	// genreTag.textContent = e.target.genre
	genreTag.innerText = `Genre: ${e.target.getAttribute('genre')}`
	// console.log(genreTag)
	gameDeveloper.innerText = `Developer: ${e.target.getAttribute('developer')}`
	releaseDate.innerText = `Release Date: ${e.target.getAttribute('releaseDate')}`

	

}

	// gameData.forEach(game =>{
	// 	const gameBar = document.getElementById('game-bar')
	// 	const newImg = document.createElement('img')
	// 	newImg.src = game.thumbnail
	// 	gameBar.append(newImg)
		
	// })

// h4.textContent = `"Publisher:" ${e.target.genre}`


//to do for tomorrow 10/5
//1.get our drop down to actually filter
//2.finish off remaining listeners which is going to be hover and submit
//3.styling?
