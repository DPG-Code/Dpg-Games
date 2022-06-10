function getGames (platform = 'pc', category = 'mmo', sort = 'popularity') {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd54b3e58ccmshcd2ec81f7622fe2p1f703ajsncf7ee4951129',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${category}&sort-by=${sort}`, options)
        .then(res => res.json())
        .then(response => {
            const data = response
            console.log(data)
            const games = data.map(game => game)
            return games
        })
}

export default getGames