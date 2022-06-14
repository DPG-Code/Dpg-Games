export default function GetDataApiById ({keyword} = {}) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd54b3e58ccmshcd2ec81f7622fe2p1f703ajsncf7ee4951129',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

	return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${keyword}`, options)
	.then(res => res.json())
	.then(response => {
		const data = response
		const games = data
	    return games
	})
}