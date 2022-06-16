import './styles/Game.css'

function Game(props) {
	return (
	    <div className="game">
			<img src={props.thumbnail} alt={props.title} />
			<h4>{props.title}</h4>
			<h5>{props.platform}</h5>
			<p>{props.developer}</p>
		</div>
	)
}

export default Game