import { Link, Route } from "wouter";
import SearchByTitle from "./SearchByTitle";
import ResultsSearch from "../components/ResultsSearch";
import SearchByFilters from "./SearchByFilters";
import GetDefault from "../services/GetDefault";
import './styles/Home.css'

function Home() {
  return (
    <main className="home-container">
        <Link className="home" to='/'>Home</Link>

        <h1>Find Games</h1>

        <section className="links">
          <Link className="search" to="/search">Search</Link>
          <Link className="filters" to='/games'>Filters</Link>
        </section>

        <section className="links-options">
          <Route path="/search" component={SearchByTitle} />
          <Route path="/games" component={SearchByFilters} />
        </section>

        <section className="games-home">
          <Route path="/" component={GetDefault} />
        </section>
        <section className="games-search">
          <Route path="/search/:keyword" component={ResultsSearch} />
        </section>
        <section className="games-filters">
          <Route path="/games/:platform/:category/:sort" component={SearchByFilters} />
        </section>
    </main>
  )
}

export default Home
