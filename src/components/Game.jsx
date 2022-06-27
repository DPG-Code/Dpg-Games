import { Link } from 'wouter'
import './styles/Game.css'

function Game(props) {
	return (
		<Link className='game' to={`/game/${props.title}`}>
				<img src={props.thumbnail} alt={props.title} />
				<h4>{props.title}</h4>
				<p>{props.developer}</p>
				<h5>{props.platform}</h5>
		</Link>
	)
}

export default Game