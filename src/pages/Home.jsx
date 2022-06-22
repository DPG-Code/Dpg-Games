import { Link, Route } from "wouter";
import SearchByTitle from "./SearchByTitle";
import ResultsSearch from "../components/ResultsSearch";
import SearchByFilters from "./SearchByFilters";
import GetDefault from "../services/GetDefault";
import Detail from "./Detail"
import './styles/Home.css'
import god from '../img/god-of-war.webp'
import back from '../img/back1.png'

function Home() {
  return (
    <main className="home-container">
        <header>
          <Link className="home" to='/'>FreeGames</Link>
          <Link className="all-games" to='/allgames'>All Games</Link>
          <SearchByTitle />
          <div className="avatar"></div>
        </header>

        <section className="inicio">
          <aside>
            <h1>FREE GAMES</h1>
            <p>Game list for browser and pc</p>
            <div className="links">
              <Link className="filters" to='/games'>SEARCH BY FILTERS</Link>
            </div>
          </aside>
          <img className="img-inicio" src={god} alt="god-of-war" />
          <img className="img-inicio-back" src={back} alt="god-of-war" />
        </section>

        <section className="links-options">
          <Route path="/games" component={SearchByFilters} />
        </section>

        <section className="games-search">
          <Route path="/search/:keyword" component={ResultsSearch} />
        </section>
        <section className="games-filters">
          <Route path="/games/:platform/:category/:sort" component={SearchByFilters} />
        </section>

        <section className="games-home">
          <Route path="/allgames" component={GetDefault} />
        </section>

        <Route path="/game/:id" component={Detail}/>
    </main>
  )
}

export default Home
