import { Link, useLocation } from "wouter"
import { useState } from "react"
import './styles/Search.css'

function SearchByTitle () {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <section className="search-container">
            <h3>Find Games</h3>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search game by title"/>
            </form>
        </section>
    )

}

export default SearchByTitle