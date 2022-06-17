import { Link, Route } from "wouter";
import SearchByTitle from "./SearchByTitle";
import ResultsSearch from "../components/ResultsSearch";
import SearchByFilters from "./SearchByFilters";
import GetDefault from "../services/GetDefault";
import './styles/Home.css'

function Home() {
  return (
    <main className="home-container">
        <header>
          <Link className="home" to='/'>DPG - Games</Link>
        </header>

        <section className="inicio">
          <aside>
            <h1>FREE GAMES</h1>
            <p>FIND NEW GAMES</p>
            <div className="links">
              <Link className="search" to="/search">SEARCH BY TITLE</Link>
              <Link className="filters" to='/games'>SEARCH BY FILTERS</Link>
            </div>
          </aside>
          <img src="" alt="" />
        </section>

        <section className="links-options">
          <Route path="/search" component={SearchByTitle} />
          <Route path="/games" component={SearchByFilters} />
        </section>

        <section className="games-search">
          <Route path="/search/:keyword" component={ResultsSearch} />
        </section>
        <section className="games-filters">
          <Route path="/games/:platform/:category/:sort" component={SearchByFilters} />
        </section>

        <section className="games-home">
          <Route path="/" component={GetDefault} />
        </section>
    </main>
  )
}

export default Home
