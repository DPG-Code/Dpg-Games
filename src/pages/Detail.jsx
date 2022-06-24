import useGamesId from "../hooks/useGameId"
import GameDetail from "../components/GameDetail"

function Detail({params}) {
	const {loading, games} = useGamesId({params})

	const gameDetail = games.filter(game => game.title.toLowerCase() == params.id.toLowerCase().split("%20").join(" "))
	
	return (
		<>
		{ loading
			? <p>Cargando...</p>
			: gameDetail.map(singleGameDetail => 
				<GameDetail
					key={gameDetail[0].id}
					thumbnail={gameDetail[0].thumbnail}
					alt={gameDetail[0].title}
					developer={gameDetail[0].developer}
					game_url={gameDetail[0].game_url}
					genre={gameDetail[0].genre}
					platform={gameDetail[0].platform}
					publisher={gameDetail[0].publisher}
					release_date={gameDetail[0].release_date}
					short_description={gameDetail[0].short_description}
					title={gameDetail[0].title}
				/>)
		}
		</>
	)
}

export default Detail