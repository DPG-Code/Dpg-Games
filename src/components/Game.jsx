function Game(props) {
	return (
	    <div>
            <img src={props.src} alt={props.alt} />
            <p>{props.name}</p>
		</div>
	)
}

export default Game