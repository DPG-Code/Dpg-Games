import { Link } from 'wouter'
import './styles/Game.css'

function Game(props) {
	return (
    <div className='game'>
      <h4>{props.title}</h4>
      <p>{props.developer}</p>
      <h5>{props.platform}</h5>
      <Link className='readmore' to={`/game/${props.title}`}>
        READ MORE
      </Link>
      <div className='shadow-game'></div>
      <img src={props.thumbnail} alt={props.title} />
    </div>
	)
}

export default Game