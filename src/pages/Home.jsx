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
            <h1>Free Games</h1>
            <p>find your favorite or new games</p>
            <div className="links">
              <Link className="search" to="/search">Search by Tiltle</Link>
              <Link className="filters" to='/games'>Search by Filters</Link>
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
