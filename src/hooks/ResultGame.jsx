import { useEffect, useState } from "react";
import getDataApi from "../services/getDataApi";

export function ResultGame ({params}) {
	const {platform, category, sort} = {params}

	const [games, setGame] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(function(){
		setLoading(true)
		getDataApi({platform, category, sort})
			.then(games => {
				setGame(games)
				setLoading(false)
			})
	}, [platform])

    return {games, loading}
}