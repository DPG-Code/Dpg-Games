function Game(props) {
	return (
	    <div>
			<img src={props.thumbnail} alt={props.title} />
			<h4>{props.title}</h4>
			<p>{props.platform}</p>
			<p>{props.developer}</p>
		</div>
	)
}

export default Game