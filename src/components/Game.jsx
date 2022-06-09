function Game(props) {
    const form = document.getElementById("form")
	let dataForm;

	async function getGames() {
		let platform = Object.values(dataForm)[0]
		let genre = Object.values(dataForm)[1]
		let sortBy = Object.values(dataForm)[2]
		let data;
		let optionsUser;

		if (platform === "games" && genre === "") optionsUser = `games?sort-by=${sortBy}`
		else if (genre === "") optionsUser = `games?platform=${platform}&sort-by=${sortBy}`
		else optionsUser = `games?platform=${platform}&category=${genre}&sort-by=${sortBy}`

		try{
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd54b3e58ccmshcd2ec81f7622fe2p1f703ajsncf7ee4951129',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
			const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/${optionsUser}`, options)
			data = await response.json()
			console.log(data)	
		}
		catch (error) { console.error(error) }
	}

    form.addEventListener("submit", (e) => {
		e.preventDefault()
		const newData = Object.fromEntries(
			new FormData(e.target)
		)
		dataForm = newData
		getGames()
	})

	return (
	    <div>
            <img src={props.src} alt={props.alt} />
            <p>{props.name}</p>
		</div>
	)
}

export default Game