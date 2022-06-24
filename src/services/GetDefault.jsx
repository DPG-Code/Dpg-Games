import Game from "../components/Game";
import {useState, useEffect} from 'react'

function GetDefault () {
    const [games, setGame] = useState([])
	const [loading, setLoading] = useState(false)
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd54b3e58ccmshcd2ec81f7622fe2p1f703ajsncf7ee4951129',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(function(){
        setLoading(true)
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?`, options)
        .then(res => res.json())
        .then(response => {
            const data = response
            const games = data.map(game => game)
            setGame (games)
            setLoading(false)
        })
    }, [])

	return ( loading
		? <p>cargando...</p>
		: <>
            <h2>All Games</h2>
            <div className='all-games_content'>
                {
                    games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
                }
            </div>
            <div className='bottom'></div>
      	</>
	)
}

export default GetDefault