import Game from "./Game"

function Results() {
	let dataForm;
	let listGames;
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
			listGames = data[0]["title"]
			console.log(listGames)

			// title -> nombre
			// thumbnail -> img
			// short_description -> descripcion
			// release_date -> año de lanzamiento
			// publisher -> publisher
			// platform -> platforma
			// genre -> genero
			// game_url -> url del juego
			// developer -> developer	
		}
		catch (error) { console.error(error) }
	}

    const getFilters = (e) => {
		e.preventDefault()
		const newData = Object.fromEntries(
			new FormData(e.target)
		)
		dataForm = newData
		getGames()
	}

	return (
        <>
            <form id="form-filter" action="" onSubmit={getFilters}>
				<select className="platform" name="platform">
					<option value="games" select>All Platform</option>
					<option value="pc">Windows (PC)</option>
					<option value="browser">Browser (WEB)</option>
				</select>

				<select className="genres" name="genres">
					<option value="" select>All Genres</option>
					<option value="mmo">MMO</option>
					<option value="mmorpg">MMORPG</option>
					<option value="shooter">Shooter</option>
					<option value="strategy">Strategy</option>
					<option value="moba">Moba</option>
					<option value="card">Card Games</option>
					<option value="racing">Racing</option>
					<option value="sports">Sports</option>
					<option value="social">Social</option>
					<option value="fighting">Fighting</option>
					<option value="mmofps">MMOFPS</option>
					<option value="action-rpg">Action RPG</option>
					<option value="sandbox">Sandbox</option>
					<option value="open-world">Open World</option>
					<option value="survival">Survival</option>
					<option value="battle-royale">Battle Royale</option>
					<option value="mmotps">MMOTPS</option>
					<option value="anime">Anime</option>
					<option value="pvp">PvP</option>
					<option value="pve">PvE</option>
					<option value="pixel">Pixel</option>
					<option value="mmorts">MMORTS</option>
					<option value="fantasy">Fantasy</option>
					<option value="sci-fi">Sci-Fi</option>
					<option value="action">Action</option>
					<option value="voxel">Voxel</option>
					<option value="zombie">Zombie</option>
					<option value="turn-based">Turn-Based</option>
					<option value="first-person">First Person View</option>
					<option value="third-Person">Third Person View</option>
					<option value="top-down">Top-Down View</option>
					<option value="3d">3D Graphics</option>
					<option value="2d">2D Graphics</option>
					<option value="tank">Tank</option>
					<option value="space">Space</option>
					<option value="sailing">Sailing</option>
					<option value="side-scroller">Side Scroller</option>
					<option value="superhero">Superhero</option>
					<option value="permadeath">Permadeath</option>
				</select>

				<select className="sort" name="sort">
					<option value="relevance" select>Relevance</option>
					<option value="popularity">Popularity</option>
					<option value="release-date">Release Date</option>
					<option value="alphabetical">Alphabetical</option>
				</select>

				<input type="submit" name="submit" id="submit" value="Filter" />
			</form>

            <section>
                <Game  />
            </section>
        </>
	)
}

export default Results