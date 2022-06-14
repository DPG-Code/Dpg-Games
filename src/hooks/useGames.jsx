import {useState, useEffect} from 'react'
import GetDataApi from "../services/GetDataApi";

export default function useGames ({params}) {
    const [games, setGame] = useState([])
    const [loading, setLoading] = useState(false)

	const {platform, category, sort} = params

    useEffect(function(){
        setLoading(true)
        GetDataApi({platform, category, sort})
            .then(games => {
                setGame(games)
                setLoading(false)
            })
    }, [params])

    return {loading, games}
}