import {useState, useEffect} from 'react'
import GetDataApiById from "../services/GetDataApiById";

export default function useGamesId ({keyword}) {
    const [loading, setLoading] = useState(false)
    const [games, setGames] = useState([])

    useEffect(function(){
    setLoading(true)
    GetDataApiById({keyword})
        .then(game => {
        setGames(game)
        setLoading(false)
    })
    }, [keyword])

    return {loading, games}
}