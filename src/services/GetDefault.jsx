import {useState, useEffect} from 'react'
import Game from "../components/Game";
import Spinner from "../components/Spinner"

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
		? <Spinner />
		: <>
            <div className='all-games_title'>
              <div className='shadow-title_allgames'></div>
              <h2>ALL GAMES</h2>
            </div>
            <div className='all-games_content'>
                {
                  games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
                }
            </div>
      </>
	)
}

export default GetDefault